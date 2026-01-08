import React, { useContext } from 'react';
import { Dialog } from '@mui/material';
import './Buy.css';
import { buyprocess } from '../Services/buyapi';
import { MetamaskContext } from '../NavigationBar/MetaMaskContext.js';

const Buy = ({ open, setOpen, product }) => {
  const { metamaskAccount } = useContext(MetamaskContext);

  const handleClose = () => {
    setOpen(false);
  };

  const sendData = async () => {
    if (!product) return;

    if (product.artistaddress === metamaskAccount) {
      alert('Artist has not listed this painting for buying.');
    } else {
      const paintData = await buyprocess(product, metamaskAccount);
      if (paintData != null) {
        alert('Transaction successful');
        handleClose();
      }
    }
  };

  if (!product) return null;

  return (
    <Dialog
      open={open}
      onClose={handleClose}
      PaperProps={{
        style: {
          maxWidth: '720px',
          width: '100%',
          background: 'transparent',
          boxShadow: 'none',
        },
      }}
    >
      <div className="buy-shell">
        <h3>Confirm purchase</h3>
        <p className="buy-meta">
          You are about to acquire a unique, blockchain‑secured artwork on
          ArtGuardian.
        </p>
        <div className="buy-layout">
          <div className="buy-art">
            <img src={product.Link1} alt={product.title} />
          </div>
          <div className="buy-info">
            <h3>{product.title}</h3>
            <p className="buy-meta">By {product.artist}</p>
            <p className="buy-meta">
              Current selling price: <strong>{product.price}</strong>
            </p>
            <p className="buy-owner">
              Current owner address: <br />
              {product.artistaddress}
            </p>
          </div>
        </div>
        <div className="buy-actions">
          <button type="button" className="buy-secondary" onClick={handleClose}>
            Cancel
          </button>
          <button type="button" className="buy-primary" onClick={sendData}>
            Confirm purchase
          </button>
        </div>
      </div>
    </Dialog>
  );
};

export default Buy;
