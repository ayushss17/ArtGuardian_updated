import React, { useContext, useState } from 'react';
import { autheticate } from '../Services/api';
import { MetamaskContext } from '../NavigationBar/MetaMaskContext';

const Add = ({ open, setOpen }) => {
  const { metamaskAccount } = useContext(MetamaskContext);

  const signupInitialValues = {
    artist: '',
    artistaddress: metamaskAccount,
    title: '',
    bigtitle: '',
    price: '',
    type: '',
    Link1: '',
    Link2: ''
  };

  const [signUp, setSignup] = useState(signupInitialValues);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleClose = () => {
    if (!isSubmitting) {
      setOpen(false);
      // Reset form when closing
      setSignup({
        ...signupInitialValues,
        artistaddress: metamaskAccount
      });
    }
  };

  const inputChng = (e) => {
    setSignup(prevState => ({
      ...prevState,
      [e.target.name]: e.target.value,
      artistaddress: prevState.artistaddress || metamaskAccount
    }));
  };

  const submit = async () => {
    if (isSubmitting) return; // Prevent double submission
    
    try {
      setIsSubmitting(true);

      // Validate required fields
      if (!signUp.title || !signUp.bigtitle || !signUp.price || !signUp.type || !signUp.Link1) {
        alert("Please fill in all required fields.");
        setIsSubmitting(false);
        return;
      }

      // Validate wallet address
      if (!metamaskAccount || !/^0x[a-fA-F0-9]{40}$/.test(metamaskAccount)) {
        alert("Please connect a valid wallet address.");
        setIsSubmitting(false);
        return;
      }

      // Validate price format
      if (!/^[0-9]+\.?[0-9]*$/.test(signUp.price)) {
        alert("Please enter a valid price.");
        setIsSubmitting(false);
        return;
      }

      // Validate URL format for images
      try {
        new URL(signUp.Link1);
      } catch (e) {
        alert("Please enter a valid primary image URL.");
        setIsSubmitting(false);
        return;
      }

      if (signUp.Link2) {
        try {
          new URL(signUp.Link2);
        } catch (e) {
          alert("Please enter a valid secondary image URL.");
          setIsSubmitting(false);
          return;
        }
      }

      // Ensure artistaddress is set
      const artworkData = {
        ...signUp,
        artistaddress: metamaskAccount
      };

      const response = await autheticate(artworkData);
      
      if (response && response.success) {
        alert("Artwork listed successfully by artist: " + metamaskAccount.slice(0, 6) + "..." + metamaskAccount.slice(-4));
        // Reset form
        setSignup({
          ...signupInitialValues,
          artistaddress: metamaskAccount
        });
        handleClose();
      } else {
        alert(response?.message || "Failed to list artwork. Please try again.");
      }
    } catch (error) {
      console.error('Error submitting artwork:', error);
      alert(error.message || "An error occurred while listing your artwork. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  if (!open) return null;

  return (
    <div className="dialog-overlay" onClick={handleClose}>
      <div className="add-dialog-container" onClick={(e) => e.stopPropagation()}>
        <style>{`
          @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@600;700&family=Inter:wght@400;500;600&display=swap');

          .dialog-overlay {
            position: fixed;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background: rgba(0, 0, 0, 0.8);
            backdrop-filter: blur(8px);
            display: flex;
            align-items: center;
            justify-content: center;
            z-index: 9999;
            padding: 1rem;
            animation: fadeIn 0.3s ease-out;
          }

          @keyframes fadeIn {
            from { opacity: 0; }
            to { opacity: 1; }
          }

          @keyframes slideIn {
            from {
              opacity: 0;
              transform: scale(0.95) translateY(20px);
            }
            to {
              opacity: 1;
              transform: scale(1) translateY(0);
            }
          }

          @keyframes shimmerGold {
            0% {
              background-position: -1000px 0;
            }
            100% {
              background-position: 1000px 0;
            }
          }

          .add-dialog-container {
            background: linear-gradient(135deg, rgba(66, 32, 6, 0.98), rgba(120, 53, 15, 0.95));
            backdrop-filter: blur(20px);
            border-radius: 1.5rem;
            padding: 2.5rem;
            border: 1px solid rgba(251, 191, 36, 0.3);
            box-shadow: 0 25px 70px rgba(0, 0, 0, 0.5);
            animation: slideIn 0.3s ease-out;
            max-width: 600px;
            width: 100%;
            max-height: 90vh;
            overflow-y: auto;
          }

          .add-dialog-header {
            margin-bottom: 2rem;
          }

          .add-dialog-kicker {
            font-size: 0.75rem;
            font-weight: 600;
            text-transform: uppercase;
            letter-spacing: 0.1em;
            color: #fbbf24;
            margin-bottom: 0.5rem;
          }

          .add-dialog-title {
            font-family: 'Playfair Display', serif;
            font-size: 2rem;
            font-weight: 700;
            color: #fef3c7;
            margin: 0 0 0.75rem;
            background: linear-gradient(135deg, #fef3c7, #fbbf24);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
          }

          .add-dialog-description {
            font-family: 'Inter', sans-serif;
            font-size: 0.9375rem;
            line-height: 1.6;
            color: #fde68a;
          }

          .add-dialog-form {
            display: flex;
            flex-direction: column;
            gap: 1.25rem;
          }

          .form-group {
            display: flex;
            flex-direction: column;
            gap: 0.5rem;
          }

          .form-label {
            font-family: 'Inter', sans-serif;
            font-size: 0.875rem;
            font-weight: 600;
            color: #fde68a;
            letter-spacing: 0.02em;
          }

          .form-label-required::after {
            content: ' *';
            color: #f87171;
          }

          .form-input,
          .form-textarea,
          .form-select {
            padding: 0.875rem 1rem;
            border-radius: 0.75rem;
            border: 1px solid rgba(251, 191, 36, 0.3);
            background: rgba(66, 32, 6, 0.6);
            color: #fde68a;
            font-family: 'Inter', sans-serif;
            font-size: 0.9375rem;
            transition: all 0.3s ease;
          }

          .form-input:focus,
          .form-textarea:focus,
          .form-select:focus {
            outline: none;
            border-color: rgba(251, 191, 36, 0.6);
            background: rgba(66, 32, 6, 0.8);
            box-shadow: 0 0 0 3px rgba(251, 191, 36, 0.1);
          }

          .form-input:disabled {
            opacity: 0.6;
            cursor: not-allowed;
          }

          .form-textarea {
            min-height: 80px;
            resize: vertical;
          }

          .form-select {
            cursor: pointer;
          }

          .form-hint {
            font-size: 0.8125rem;
            color: #d97706;
            line-height: 1.5;
          }

          .form-hint-highlight {
            color: #fbbf24;
            font-weight: 500;
          }

          .form-section-title {
            font-family: 'Inter', sans-serif;
            font-size: 1rem;
            font-weight: 600;
            color: #fef3c7;
            margin: 1.5rem 0 0.75rem;
            padding-top: 1.5rem;
            border-top: 1px solid rgba(251, 191, 36, 0.2);
          }

          .form-actions {
            display: flex;
            justify-content: flex-end;
            gap: 1rem;
            margin-top: 2rem;
            padding-top: 1.5rem;
            border-top: 1px solid rgba(251, 191, 36, 0.2);
          }

          .form-button {
            padding: 0.875rem 1.75rem;
            border-radius: 999px;
            font-family: 'Inter', sans-serif;
            font-size: 0.9375rem;
            font-weight: 600;
            border: none;
            cursor: pointer;
            transition: all 0.3s ease;
            position: relative;
            overflow: hidden;
          }

          .form-button::before {
            content: '';
            position: absolute;
            top: 0;
            left: -100%;
            width: 100%;
            height: 100%;
            background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);
            transition: left 0.5s ease;
          }

          .form-button:hover::before {
            left: 100%;
          }

          .form-button-cancel {
            background: rgba(217, 119, 6, 0.3);
            border: 1px solid rgba(251, 191, 36, 0.5);
            color: #fde68a;
          }

          .form-button-cancel:hover {
            background: rgba(217, 119, 6, 0.5);
            border-color: rgba(251, 191, 36, 0.7);
            transform: translateY(-2px);
          }

          .form-button-submit {
            background: linear-gradient(135deg, #fbbf24, #f59e0b, #d97706);
            color: #1f2937;
            box-shadow: 0 8px 25px rgba(251, 191, 36, 0.4);
          }

          .form-button-submit:hover {
            transform: translateY(-2px);
            box-shadow: 0 12px 35px rgba(251, 191, 36, 0.6);
          }

          .wallet-display {
            display: flex;
            align-items: center;
            gap: 0.75rem;
            padding: 0.875rem 1rem;
            border-radius: 0.75rem;
            background: rgba(251, 191, 36, 0.1);
            border: 1px solid rgba(251, 191, 36, 0.3);
            font-family: 'Inter', monospace;
            font-size: 0.875rem;
            color: #fbbf24;
          }

          @media screen and (max-width: 768px) {
            .add-dialog-container {
              padding: 1.5rem;
              max-height: 95vh;
            }

            .add-dialog-title {
              font-size: 1.5rem;
            }

            .form-actions {
              flex-direction: column-reverse;
            }

            .form-button {
              width: 100%;
            }
          }
        `}</style>

        <div className="add-dialog-header">
          <div className="add-dialog-kicker">🎨 Mint New Artwork</div>
          <h2 className="add-dialog-title">List Your Original Piece</h2>
          <p className="add-dialog-description">
            Mint and publish your original artwork on the blockchain. Your piece will be tokenized 
            as a unique NFT and made available to collectors on ArtGuardian.
          </p>
        </div>

        <div className="add-dialog-form">
          <div className="form-group">
            <label className="form-label">Connected Wallet</label>
            <div className="wallet-display">
              {metamaskAccount || 'Not connected'}
            </div>
          </div>

          <div className="form-group">
            <label className="form-label form-label-required">Artist Name</label>
            <input
              type="text"
              name="artist"
              className="form-input"
              placeholder="Enter your artist name"
              value={signUp.artist}
              onChange={inputChng}
            />
          </div>

          <div className="form-group">
            <label className="form-label form-label-required">Artwork Title</label>
            <input
              type="text"
              name="title"
              className="form-input"
              placeholder="Give your artwork a compelling title"
              value={signUp.title}
              onChange={inputChng}
            />
          </div>

          <div className="form-group">
            <label className="form-label form-label-required">Description</label>
            <textarea
              name="bigtitle"
              className="form-textarea"
              placeholder="Describe your artwork, its inspiration, and story..."
              value={signUp.bigtitle}
              onChange={inputChng}
            />
          </div>

          <div className="form-group">
            <label className="form-label form-label-required">Price</label>
            <input
              type="text"
              name="price"
              className="form-input"
              placeholder="e.g., 2.5 ETH"
              value={signUp.price}
              onChange={inputChng}
            />
            <span className="form-hint">Enter the price in ETH or your preferred token</span>
          </div>

          <div className="form-group">
            <label className="form-label form-label-required">Artwork Category</label>
            <select
              name="type"
              className="form-select"
              value={signUp.type}
              onChange={inputChng}
            >
              <option value="">Select a category</option>
              <option value="History Painting">History Painting</option>
              <option value="Portrait">Portrait</option>
              <option value="Landscape">Landscape</option>
              <option value="StillLifePainting">Still Life Painting</option>
            </select>
          </div>

          <div className="form-section-title">Artwork Images</div>

          <div className="form-group">
            <label className="form-label form-label-required">Primary Image URL</label>
            <input
              type="text"
              name="Link1"
              className="form-input"
              placeholder="https://example.com/image1.jpg"
              value={signUp.Link1}
              onChange={inputChng}
            />
            <span className="form-hint">
              <span className="form-hint-highlight">Tip:</span> Use publicly accessible URLs from IPFS, Google Drive, 
              or cloud storage. This will be the main display image.
            </span>
          </div>

          <div className="form-group">
            <label className="form-label">Secondary Image URL (Optional)</label>
            <input
              type="text"
              name="Link2"
              className="form-input"
              placeholder="https://example.com/image2.jpg"
              value={signUp.Link2}
              onChange={inputChng}
            />
            <span className="form-hint">
              Additional angle or detail shot of your artwork
            </span>
          </div>

          <div className="form-actions">
            <button
              className="form-button form-button-cancel"
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                handleClose();
              }}
              type="button"
            >
              Cancel
            </button>
            <button
              className="form-button form-button-submit"
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                submit();
              }}
              type="button"
              disabled={isSubmitting || !metamaskAccount}
            >
              {isSubmitting ? 'Submitting...' : 'Submit'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Add;