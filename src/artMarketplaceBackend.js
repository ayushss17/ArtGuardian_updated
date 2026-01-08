const express = require('express');
const bodyParser = require('body-parser');
const mockDatabase=require('./mockdatabase');
const axios = require('axios');

const app = express();
const port = 3001;

app.use(bodyParser.json());

// Replace this with the actual contract address after deployment
const contractAddress = '0xD2b532aE85940a989D7c7545b742aeC31be29da8';

// Connect Wallet Functionality
app.post('/connectWallet', async (req, res) => {
    const { publicAddress } = req.body;

    try {
        // Check if the wallets array is defined in the mock database
        if (mockDatabase.wallets && mockDatabase.wallets.some(wallet => wallet.publicAddress === publicAddress)) {
            res.json({ success: true, message: 'Wallet connected successfully' });
        } else {
            // User doesn't exist in the mock database or wallets array is undefined
            // Simulate creating a new user record in the mock database
            if (!mockDatabase.wallets) {
                mockDatabase.wallets = [];
            }
            mockDatabase.wallets.push({ publicAddress });
            res.json({ success: true, message: 'Wallet connected successfully' });
        }

        console.log(mockDatabase); // Display mock database for verification

        // Call contract function to update wallet address (replace this with your actual contract function)
        await axios.post(`http://localhost:7545`, {
            jsonrpc: '2.0',
            method: 'eth_sendTransaction',
            params: [
                {
                    from: publicAddress,
                    to: contractAddress,
                    data: '0xD2b532aE85940a989D7c7545b742aeC31be29da8', // Replace with the actual data for your contract function
                },
            ],
            id: 1,
        });

    } catch (error) {
        console.error(error);
        res.status(500).json({ success: false, message: 'Error connecting wallet' });
    }
    console.log(mockDatabase); // Display mock database for verification
});

// List Art Function
app.post('/listArt', (req, res) => {
    const { title, description, price, paintAddress } = req.body;

    // Simulate creating a new art listing in the mock database
    const newArt = {
        id: mockDatabase.arts.length + 1,
        title,
        description,
        price,
        paintAddress,
    };
    mockDatabase.arts.push(newArt);

    res.json({ success: true, message: 'Art listed successfully' });
    console.log(mockDatabase); // Display mock database for verification
});

// Buy Art Function
app.post('/buyArt', (req, res) => {
    const { buyerAddress, artId, price } = req.body;

    // Ensure mockDatabase.arts is defined
    if (!mockDatabase.arts) {
        res.status(500).json({ success: false, message: 'Database error' });
        return;
    }

    // Simulate updating the art record in the mock database
    const art = mockDatabase.arts.find(a => a.id === artId);
    if (art) {
        art.artistAddress = buyerAddress;
        res.json({ success: true, message: 'Art purchased successfully' });
        console.log(mockDatabase); // Display mock database for verification
        console.log("Art Purchased Successfully");
        console.log("Amount Deducted:",price);
    } else {
        res.status(500).json({ success: false, message: 'Error buying art' });
    }
});

// Resell Art Function
app.post('/resellArt', (req, res) => {
    const { originalOwner, artId, newPrice } = req.body;

    // Simulate updating the art record in the mock database with the new price
    const art = mockDatabase.arts.find(a => a.id === artId && a.artistAddress === originalOwner);
    if (art) {
        art.price = newPrice;
        res.json({ success: true, message: 'Art resold successfully' });
        console.log(mockDatabase); // Display mock database for verification
    } else {
        res.status(403).json({ success: false, message: 'Not the original owner of the art' });
    }
});

// Server Listening
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
