import mockDatabase from './Database/mockdatabase.js';

const wallconnec = async (req,res) => {
    try{
            const { publicAddress } = req.body;
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
                await axios.post(`http://localhost:6969`, {
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
                console.log(mockDatabase); // Display mock database for verification

        
            } 
        
          catch(error){
        console.log(error)
    }

}
export default wallconnec;