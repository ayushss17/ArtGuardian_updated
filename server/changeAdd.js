import addItem from "./model/addschema.js";
import mongoose from "mongoose";

const changeAdd = async (req, res) => {
    try {
        const data = req.body;
        
        // Validate required fields
        if (!data._id || !data.metamaskAccount) {
            return res.status(400).json({
                success: false,
                message: 'Missing required fields: _id and metamaskAccount'
            });
        }
        
        // Validate wallet address format
        if (!/^0x[a-fA-F0-9]{40}$/.test(data.metamaskAccount)) {
            return res.status(400).json({
                success: false,
                message: 'Invalid Ethereum address format'
            });
        }
        
        // Validate MongoDB ObjectId format
        if (!mongoose.Types.ObjectId.isValid(data._id)) {
            return res.status(400).json({
                success: false,
                message: 'Invalid artwork ID format'
            });
        }
        
        const response = await addItem.findOne({ _id: data._id });
        
        if (!response) {
            return res.status(404).json({
                success: false,
                message: 'Artwork not found'
            });
        }
        
        // Update artwork ownership
        response.artistaddress = data.metamaskAccount;
        await response.save();
        
        if (process.env.NODE_ENV !== 'production') {
            console.log(`Artwork ${data._id} purchased by ${data.metamaskAccount.slice(0, 10)}...`);
        }
        
        res.json({
            success: true,
            message: 'Art purchased successfully',
            data: {
                id: response._id,
                title: response.title,
                newOwner: data.metamaskAccount
            }
        });
    } catch (error) {
        console.error('Error purchasing art:', error.message);
        res.status(500).json({
            success: false,
            message: process.env.NODE_ENV === 'production' 
                ? 'Failed to purchase artwork. Please try again.' 
                : error.message
        });
    }
};

export default changeAdd;