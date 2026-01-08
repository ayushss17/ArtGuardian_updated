import express, { Router } from "express";
import connection from "./Database/DB.js";
import dotenv from 'dotenv';
import cors from 'cors';
import helmet from 'helmet';
import rateLimit from 'express-rate-limit';
import router from "./router/router.js";
import bodyParser from "body-parser";
import morgan from 'morgan';
import mongoose from 'mongoose';

dotenv.config();

const app = express();
const NODE_ENV = process.env.NODE_ENV || 'development';
const PORT = process.env.PORT || 6969;

// Security: Helmet helps secure Express apps by setting various HTTP headers
app.use(helmet({
    contentSecurityPolicy: NODE_ENV === 'production' ? undefined : false, // Disable in dev for easier debugging
    crossOriginEmbedderPolicy: false,
}));

// CORS Configuration - Restrict to specific origins in production
const corsOptions = {
    origin: function (origin, callback) {
        const allowedOrigins = process.env.ALLOWED_ORIGINS 
            ? process.env.ALLOWED_ORIGINS.split(',') 
            : ['http://localhost:3000', 'http://localhost:3001'];
        
        // Allow requests with no origin (like mobile apps or curl requests)
        if (!origin || allowedOrigins.indexOf(origin) !== -1) {
            callback(null, true);
        } else {
            callback(new Error('Not allowed by CORS'));
        }
    },
    credentials: true,
    optionsSuccessStatus: 200
};

app.use(cors(corsOptions));

// Body parser with size limits to prevent DoS attacks
app.use(bodyParser.json({ 
    extended: true,
    limit: '10mb', // Limit payload size
    strict: true
}));
app.use(bodyParser.urlencoded({ 
    extended: true,
    limit: '10mb',
    parameterLimit: 100 // Limit number of parameters
}));

// Rate limiting to prevent brute force and DDoS attacks
const limiter = rateLimit({
    windowMs: 15 * 60 * 1000, // 15 minutes
    max: 100, // Limit each IP to 100 requests per windowMs
    message: 'Too many requests from this IP, please try again later.',
    standardHeaders: true,
    legacyHeaders: false,
});

// Apply rate limiting to all routes
app.use('/api/', limiter);

// More strict rate limiting for sensitive endpoints
const strictLimiter = rateLimit({
    windowMs: 15 * 60 * 1000, // 15 minutes
    max: 20, // Limit each IP to 20 requests per windowMs
    message: 'Too many requests from this IP, please try again later.',
});

// Request logging (only in development)
if (NODE_ENV === 'development') {
    app.use(morgan('dev'));
} else {
    app.use(morgan('combined'));
}

// Health check endpoint
app.get('/health', (req, res) => {
    res.status(200).json({ status: 'ok', timestamp: new Date().toISOString() });
});

// Routes
app.use('/', router);

// Global error handler
app.use((err, req, res, next) => {
    console.error('Error:', err.message);
    
    // Don't leak error details in production
    if (NODE_ENV === 'production') {
        res.status(err.status || 500).json({
            success: false,
            message: err.message || 'Internal server error'
        });
    } else {
        res.status(err.status || 500).json({
            success: false,
            message: err.message,
            stack: err.stack
        });
    }
});

// 404 handler
app.use((req, res) => {
    res.status(404).json({
        success: false,
        message: 'Route not found'
    });
});

// Connect to database
connection().catch(err => {
    console.error('Failed to connect to database:', err);
    process.exit(1);
});

// Graceful shutdown
process.on('SIGTERM', () => {
    console.log('SIGTERM signal received: closing HTTP server');
    server.close(() => {
        console.log('HTTP server closed');
        mongoose.connection.close(false, () => {
            console.log('MongoDB connection closed');
            process.exit(0);
        });
    });
});

process.on('SIGINT', () => {
    console.log('SIGINT signal received: closing HTTP server');
    server.close(() => {
        console.log('HTTP server closed');
        mongoose.connection.close(false, () => {
            console.log('MongoDB connection closed');
            process.exit(0);
        });
    });
});

const server = app.listen(PORT, () => {
    console.log(`Server running on port ${PORT} in ${NODE_ENV} mode`);
});
