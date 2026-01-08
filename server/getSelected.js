import addItem from "./model/addschema.js";

export const getSelected = async (req, res) => {
    try {
        const response = req.body;
        const acc = response.metamaskAccount;
        
        // Validate wallet address format
        if (!acc || !/^0x[a-fA-F0-9]{40}$/.test(acc)) {
            return res.status(400).json({
                success: false,
                message: 'Invalid Ethereum address format'
            });
        }
        
        // Add pagination
        const page = parseInt(req.query.page) || 1;
        const limit = parseInt(req.query.limit) || 20;
        const skip = (page - 1) * limit;
        
        const data = await addItem.find({ artistaddress: acc })
            .limit(limit)
            .skip(skip)
            .sort({ _id: -1 }); // Sort by newest first
        
        const total = await addItem.countDocuments({ artistaddress: acc });
        
        if (process.env.NODE_ENV !== 'production') {
            console.log(`Fetched ${data.length} products for address: ${acc.slice(0, 10)}...`);
        }
        
        res.json({
            success: true,
            data: data,
            pagination: {
                page,
                limit,
                total,
                pages: Math.ceil(total / limit)
            }
        });
    } catch (error) {
        console.error('Error fetching user products:', error.message);
        res.status(500).json({
            success: false,
            message: process.env.NODE_ENV === 'production' 
                ? 'Failed to fetch user products. Please try again.' 
                : error.message
        });
    }
};