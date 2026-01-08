const connectw = async (request,response) => {
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
  }

export default connectw;