const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const app = express();
const port = 3001;

app.use(bodyParser.json());

// Connect to MongoDB (replace with your MongoDB connection string)
mongoose.connect('mongodb://localhost:27017/artMarketplace', { useNewUrlParser: true, useUnifiedTopology: true });

// Define MongoDB schema and model
const artSchema = new mongoose.Schema({
  title: String,
  description: String,
  price: Number,
  artistAddress: String,
});

const Art = mongoose.model('Art', artSchema);

// Connect Wallet Functionality
app.post('/connectWallet', (req, res) => {
  const { publicAddress } = req.body;

  // Check if the user with the provided public address already exists in the database
  Art.findOne({ artistAddress: publicAddress }, (err, user) => {
    if (err) {
      res.status(500).json({ success: false, message: 'Error connecting wallet' });
    } else if (user) {
      // User exists, no need for additional registration
      res.json({ success: true, message: 'Wallet connected successfully' });
    } else {
      // User doesn't exist, create a new user record
      const newArt = new Art({ artistAddress: publicAddress });
      newArt.save((err) => {
        if (err) {
          res.status(500).json({ success: false, message: 'Error connecting wallet' });
        } else {
          res.json({ success: true, message: 'Wallet connected successfully' });
        }
      });
    }
  });
});

// List Art Function
app.post('/listArt', (req, res) => {
  const { title, description, price, publicAddress } = req.body;

  // Create a new art listing in the database
  const newArt = new Art({
    title,
    description,
    price,
    artistAddress: publicAddress,
  });

  newArt.save((err) => {
    if (err) {
      res.status(500).json({ success: false, message: 'Error listing art' });
    } else {
      res.json({ success: true, message: 'Art listed successfully' });
    }
  });
});

// Buy Art Function
app.post('/buyArt', (req, res) => {
  const { buyerAddress, artId, price } = req.body;

  // Simulate buying art by updating the art record in the database
  Art.findByIdAndUpdate(artId, { artistAddress: buyerAddress }, (err, result) => {
    if (err) {
      res.status(500).json({ success: false, message: 'Error buying art' });
    } else {
      res.json({ success: true, message: 'Art purchased successfully' });
    }
  });
});

// Resell Art Function
app.post('/resellArt', (req, res) => {
  const { originalOwner, artId, newPrice } = req.body;

  // Check if the requester is the original owner
  Art.findOne({ _id: artId, artistAddress: originalOwner }, (err, art) => {
    if (err || !art) {
      res.status(403).json({ success: false, message: 'Not the original owner of the art' });
    } else {
      // Update the art record in the database with the new price
      Art.findByIdAndUpdate(artId, { price: newPrice }, (err) => {
        if (err) {
          res.status(500).json({ success: false, message: 'Error reselling art' });
        } else {
          res.json({ success: true, message: 'Art resold successfully' });
        }
      });
    }
  });
});

// Server Listening
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
