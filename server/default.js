import addItem from './model/addschema.js';
import mockDatabase from './Database/mockdatabase.js';

const defaultData = async (request, response) => {
    try {
        const items = request.body;
        
        // Validate required fields
        if (!items.artistaddress || !items.title || !items.bigtitle || !items.price || !items.type || !items.Link1) {
            return response.status(400).json({
                success: false,
                message: 'Missing required fields: artistaddress, title, bigtitle, price, type, Link1'
            });
        }
        
        // Validate Ethereum address format
        if (!/^0x[a-fA-F0-9]{40}$/.test(items.artistaddress)) {
            return response.status(400).json({
                success: false,
                message: 'Invalid Ethereum address format'
            });
        }
        
        // Create and save artwork
        const newData = new addItem(items);
        await newData.save();
        
        const title = items.title;
        const bigtitle = items.bigtitle;
        const price = items.price;
        const newArt = {
            id: mockDatabase.arts.length + 1,
            title,
            bigtitle,
            price,
            artistAddress: items.artistaddress, // Use actual address instead of hardcoded value
        };
        
        mockDatabase.arts.push(newArt);
        
        // Don't log full database in production
        if (process.env.NODE_ENV !== 'production') {
            console.log('New artwork added:', title);
        }
        
        response.status(200).json({
            success: true,
            message: 'Artwork listed successfully',
            data: {
                id: newData._id,
                title: newData.title,
                artist: newData.artist,
                artistaddress: newData.artistaddress
            }
        });

    } catch (error) {
        console.error('Error creating artwork:', error.message);
        
        // Handle duplicate key errors
        if (error.code === 11000) {
            return response.status(409).json({
                success: false,
                message: 'Artwork with this information already exists'
            });
        }
        
        // Handle validation errors
        if (error.name === 'ValidationError') {
            return response.status(400).json({
                success: false,
                message: 'Validation failed',
                errors: Object.values(error.errors).map(e => e.message)
            });
        }
        
        // Generic error response (don't leak details in production)
        response.status(500).json({
            success: false,
            message: process.env.NODE_ENV === 'production' 
                ? 'Failed to list artwork. Please try again.' 
                : error.message
        });
    }
};

export default defaultData;