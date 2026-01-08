# ArtGuardian - Deployment Guide

## Production Readiness Checklist

### ✅ Security Fixes Applied

1. **MongoDB Credentials**: Removed hardcoded credentials, now using environment variables
2. **API URLs**: All frontend API calls now use environment variables
3. **Input Validation**: Added comprehensive validation middleware
4. **CORS**: Configured to restrict origins (not open to all)
5. **Security Headers**: Added Helmet.js for HTTP security headers
6. **Rate Limiting**: Implemented to prevent brute force and DDoS attacks
7. **Error Handling**: Fixed to not leak sensitive information
8. **Input Sanitization**: Added XSS prevention through input sanitization
9. **Body Size Limits**: Added to prevent DoS attacks

## Environment Variables Setup

### Backend (server/.env)

Create a `.env` file in the `server` directory:

```env
# Database Configuration
DB_USERNAME=your_mongodb_username
DB_PASSWORD=your_mongodb_password
DB_CLUSTER=your_mongodb_cluster.mongodb.net
DB_NAME=ArtGuardian

# Server Configuration
NODE_ENV=production
PORT=6969

# CORS Configuration (comma-separated list of allowed origins)
ALLOWED_ORIGINS=https://yourdomain.com,https://www.yourdomain.com
```

### Frontend (.env)

Create a `.env` file in the root directory:

```env
# React App API URL
REACT_APP_API_URL=https://api.yourdomain.com
```

For development:
```env
REACT_APP_API_URL=http://localhost:6969
```

## Installation

### Backend Setup

```bash
cd server
npm install
```

### Frontend Setup

```bash
npm install
```

## Running in Development

### Backend
```bash
cd server
npm run dev
```

### Frontend
```bash
npm start
```

## Building for Production

### Frontend Build
```bash
npm run build
```

This creates an optimized production build in the `build` directory.

### Backend Production
```bash
cd server
NODE_ENV=production npm start
```

## Deployment Steps

### 1. Backend Deployment

1. Set environment variables on your hosting platform
2. Ensure MongoDB is accessible from your server
3. Update CORS allowed origins to match your frontend domain
4. Deploy server code
5. Start server with production environment

**Example for Heroku/Railway/Render:**
- Set environment variables in platform dashboard
- Platform will automatically start server on deployment

### 2. Frontend Deployment

1. Set `REACT_APP_API_URL` environment variable to your backend URL
2. Build the production bundle: `npm run build`
3. Deploy the `build` folder to your hosting platform (Vercel, Netlify, AWS S3, etc.)

**Example for Vercel/Netlify:**
- Set `REACT_APP_API_URL` in environment variables
- Deploy repository (platform will auto-build)

### 3. Database Security

1. **Change MongoDB Password**: Use a strong, unique password
2. **IP Whitelist**: Configure MongoDB Atlas to only allow connections from your server IP
3. **Network Security**: Use MongoDB Atlas VPC or private networking if available

### 4. Security Checklist

- ✅ All sensitive data in environment variables
- ✅ CORS configured for specific origins only
- ✅ Rate limiting enabled
- ✅ Input validation on all endpoints
- ✅ Error messages don't leak sensitive info
- ✅ HTTPS enabled (use Let's Encrypt or similar)
- ✅ MongoDB credentials not in code
- ✅ .env files in .gitignore

## Additional Security Recommendations

1. **Use HTTPS**: Always use SSL/TLS certificates in production
2. **Firewall**: Configure firewall rules to only allow necessary ports
3. **Monitoring**: Set up error logging and monitoring (e.g., Sentry, LogRocket)
4. **Backup**: Regular database backups
5. **Updates**: Keep all dependencies up to date
6. **Authentication**: Consider adding JWT authentication for future features
7. **Database Indexing**: Ensure MongoDB indexes are optimized for queries

## Troubleshooting

### Common Issues

1. **CORS Errors**: Check `ALLOWED_ORIGINS` includes your frontend URL
2. **Database Connection**: Verify MongoDB credentials and network access
3. **API Not Found**: Ensure `REACT_APP_API_URL` is set correctly
4. **Rate Limiting**: Adjust rate limits in `server/index.js` if needed

## Performance Optimization

1. **Caching**: Consider adding Redis for caching frequently accessed data
2. **CDN**: Use CDN for static assets
3. **Database Indexes**: Add indexes for frequently queried fields
4. **Pagination**: Already implemented for product listings
5. **Compression**: Enable gzip compression on server

## Monitoring

Set up monitoring for:
- Server uptime
- Error rates
- Response times
- Database performance
- API usage patterns

