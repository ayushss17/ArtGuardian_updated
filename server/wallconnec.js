import mockDatabase from './Database/mockdatabase.js';

const wallconnec = async (req, res) => {
    try {
        const { metamaskAccount } = req.body;
        
        // Validate wallet address
        if (!metamaskAccount || !/^0x[a-fA-F0-9]{40}$/.test(metamaskAccount)) {
            return res.status(400).json({
                success: false,
                message: 'Valid Ethereum address is required'
            });
        }

        // Check if the wallets array is defined in the mock database
        if (mockDatabase.wallets && mockDatabase.wallets.some(wallet => wallet.publicAddress === metamaskAccount)) {
            if (process.env.NODE_ENV !== 'production') {
                console.log('Wallet already exists in mock database');
            }
            res.json({ success: true, message: 'Wallet connected successfully' });
        } else {
            // User doesn't exist in the mock database or wallets array is undefined
            // Simulate creating a new user record in the mock database
            if (!mockDatabase.wallets) {
                mockDatabase.wallets = [];
            }
            mockDatabase.wallets.push({ publicAddress: metamaskAccount });
            
            if (process.env.NODE_ENV !== 'production') {
                console.log('New wallet added to mock database');
            }
            
            res.json({ success: true, message: 'Wallet connected successfully' });
        }

        // Note: Blockchain contract interaction should be handled on the frontend
        // This endpoint is for backend wallet tracking only
        
    } catch (error) {
        console.error('Error connecting wallet:', error.message);
        res.status(500).json({
            success: false,
            message: process.env.NODE_ENV === 'production' 
                ? 'Failed to connect wallet. Please try again.' 
                : error.message
        });
    }
};

export default wallconnec;