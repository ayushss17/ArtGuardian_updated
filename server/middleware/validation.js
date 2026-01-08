// Input validation and sanitization middleware

// Sanitize string inputs to prevent XSS
export const sanitizeString = (str) => {
    if (typeof str !== 'string') return str;
    return str
        .replace(/[<>]/g, '') // Remove < and > to prevent script tags
        .trim()
        .substring(0, 1000); // Limit length
};

// Sanitize object recursively
export const sanitizeObject = (obj) => {
    if (obj === null || obj === undefined) return obj;
    if (typeof obj !== 'object') return sanitizeString(obj);
    if (Array.isArray(obj)) {
        return obj.map(item => sanitizeObject(item));
    }
    const sanitized = {};
    for (const key in obj) {
        if (obj.hasOwnProperty(key)) {
            sanitized[key] = sanitizeObject(obj[key]);
        }
    }
    return sanitized;
};

// Validation middleware for artwork submission
export const validateArtwork = (req, res, next) => {
    const errors = [];
    const { artist, artistaddress, title, bigtitle, price, type, Link1, Link2 } = req.body;

    if (artist && (artist.length < 1 || artist.length > 100)) {
        errors.push('Artist name must be between 1 and 100 characters');
    }

    if (!artistaddress || !/^0x[a-fA-F0-9]{40}$/.test(artistaddress)) {
        errors.push('Valid Ethereum address is required');
    }

    if (!title || title.trim().length < 1 || title.length > 200) {
        errors.push('Title is required and must be between 1 and 200 characters');
    }

    if (!bigtitle || bigtitle.trim().length < 10 || bigtitle.length > 2000) {
        errors.push('Description is required and must be between 10 and 2000 characters');
    }

    if (!price || !/^[0-9]+\.?[0-9]*$/.test(price)) {
        errors.push('Valid price is required');
    }

    if (!type || !['History Painting', 'Portrait', 'Landscape', 'StillLifePainting'].includes(type)) {
        errors.push('Valid artwork type is required');
    }

    if (!Link1) {
        errors.push('Primary image URL is required');
    } else {
        try {
            new URL(Link1);
        } catch (e) {
            errors.push('Primary image must be a valid URL');
        }
    }

    if (Link2) {
        try {
            new URL(Link2);
        } catch (e) {
            errors.push('Secondary image must be a valid URL');
        }
    }

    if (errors.length > 0) {
        return res.status(400).json({
            success: false,
            message: 'Validation failed',
            errors: errors
        });
    }

    next();
};

// Validation middleware for wallet address
export const validateWallet = (req, res, next) => {
    const { metamaskAccount } = req.body;

    if (!metamaskAccount || !/^0x[a-fA-F0-9]{40}$/.test(metamaskAccount)) {
        return res.status(400).json({
            success: false,
            message: 'Valid Ethereum address is required'
        });
    }

    next();
};

// Validation middleware for product query
export const validateProductQuery = (req, res, next) => {
    const { type } = req.body;

    if (type && !['History Painting', 'Portrait', 'Landscape', 'StillLifePainting', ''].includes(type)) {
        return res.status(400).json({
            success: false,
            message: 'Invalid artwork type'
        });
    }

    next();
};

// Sanitization middleware
export const sanitizeRequest = (req, res, next) => {
    if (req.body) {
        req.body = sanitizeObject(req.body);
    }
    if (req.query) {
        req.query = sanitizeObject(req.query);
    }
    if (req.params) {
        req.params = sanitizeObject(req.params);
    }
    next();
};

