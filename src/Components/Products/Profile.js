import React, { useContext, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getUserProducts } from '../redux/actions/getUserProducts.js';
import { MetamaskContext } from '../NavigationBar/MetaMaskContext';
import Add from './Add';
import Footer from '../Homepage/footer';

const Profile = () => {
  const dispatch = useDispatch();
  const [addOpen, setAddOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('collected');

  const { isMetamaskConnected, metamaskAccount } = useContext(MetamaskContext);

  useEffect(() => {
    if (metamaskAccount) {
      dispatch(getUserProducts(metamaskAccount));
    }
  }, [dispatch, metamaskAccount]);

  const { products } = useSelector((state) => state.getProducts);

  const openAddDialog = () => {
    setAddOpen(true);
  };

  return (
    <>
      <div className="profile-container">
        <style>{`
          @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@600;700&family=Inter:wght@400;500;600&display=swap');

          @keyframes fadeIn {
            from {
              opacity: 0;
              transform: translateY(20px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
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

          @keyframes float {
            0%, 100% {
              transform: translateY(0);
            }
            50% {
              transform: translateY(-10px);
            }
          }

          .profile-container {
            min-height: 100vh;
            padding: 6rem 1.5rem 4rem;
            background: linear-gradient(135deg, #0f172a 0%, #422006 50%, #78350f 100%);
            position: relative;
            overflow: hidden;
          }

          .profile-container::before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background: 
              radial-gradient(circle at 30% 20%, rgba(251, 191, 36, 0.15), transparent 50%),
              radial-gradient(circle at 70% 80%, rgba(217, 119, 6, 0.12), transparent 50%);
            pointer-events: none;
          }

          .profile-inner {
            max-width: 1400px;
            margin: 0 auto;
            position: relative;
            z-index: 1;
          }

          .profile-header {
            background: rgba(217, 119, 6, 0.15);
            backdrop-filter: blur(20px);
            border-radius: 2rem;
            padding: 3rem;
            border: 1px solid rgba(251, 191, 36, 0.2);
            box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
            margin-bottom: 3rem;
            animation: fadeIn 0.8s ease-out;
          }

          .profile-header-top {
            display: flex;
            justify-content: space-between;
            align-items: center;
            gap: 2rem;
            margin-bottom: 2rem;
          }

          .profile-greeting-section {
            flex: 1;
          }

          .profile-kicker {
            font-size: 0.75rem;
            font-weight: 600;
            text-transform: uppercase;
            letter-spacing: 0.1em;
            color: #fbbf24;
            margin-bottom: 0.75rem;
          }

          .profile-greeting {
            font-family: 'Playfair Display', serif;
            font-size: 2.5rem;
            font-weight: 700;
            margin: 0 0 1rem;
            background: linear-gradient(135deg, #fef3c7, #fbbf24);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
          }

          .profile-wallet-badge {
            display: inline-flex;
            align-items: center;
            gap: 0.75rem;
            padding: 0.75rem 1.25rem;
            border-radius: 999px;
            background: rgba(66, 32, 6, 0.6);
            border: 1px solid rgba(251, 191, 36, 0.3);
            font-family: 'Inter', monospace;
            font-size: 0.875rem;
            color: #fde68a;
            box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
          }

          .wallet-icon {
            width: 20px;
            height: 20px;
            color: #fbbf24;
          }

          .wallet-address {
            color: #fbbf24;
            font-weight: 600;
          }

          .connect-message {
            font-family: 'Inter', sans-serif;
            font-size: 1rem;
            color: #fde68a;
            margin-top: 0.5rem;
          }

          .profile-actions {
            display: flex;
            gap: 1rem;
            flex-wrap: wrap;
          }

          .action-button {
            padding: 0.875rem 1.75rem;
            border-radius: 999px;
            font-family: 'Inter', sans-serif;
            font-size: 0.9375rem;
            font-weight: 600;
            border: none;
            cursor: pointer;
            transition: all 0.3s ease;
            display: flex;
            align-items: center;
            gap: 0.5rem;
          }

          .action-button-primary {
            background: linear-gradient(135deg, #fbbf24, #f59e0b);
            color: #1f2937;
            box-shadow: 0 8px 25px rgba(251, 191, 36, 0.4);
          }

          .action-button-primary:hover {
            transform: translateY(-2px);
            box-shadow: 0 12px 35px rgba(251, 191, 36, 0.6);
          }

          .action-button-primary:disabled {
            opacity: 0.5;
            cursor: not-allowed;
            transform: none;
          }

          .profile-stats {
            display: grid;
            grid-template-columns: repeat(4, 1fr);
            gap: 1.5rem;
          }

          .stat-card {
            padding: 1.5rem;
            border-radius: 1rem;
            background: rgba(66, 32, 6, 0.4);
            border: 1px solid rgba(251, 191, 36, 0.2);
            text-align: center;
            transition: all 0.3s ease;
          }

          .stat-card:hover {
            transform: translateY(-5px);
            border-color: rgba(251, 191, 36, 0.4);
            box-shadow: 0 10px 30px rgba(251, 191, 36, 0.2);
          }

          .stat-value {
            font-family: 'Playfair Display', serif;
            font-size: 2rem;
            font-weight: 700;
            color: #fef3c7;
            margin-bottom: 0.25rem;
          }

          .stat-label {
            font-size: 0.875rem;
            color: #fde68a;
            text-transform: uppercase;
            letter-spacing: 0.05em;
          }

          .profile-tabs {
            display: flex;
            gap: 0.5rem;
            margin-bottom: 2rem;
            animation: fadeIn 1s ease-out 0.2s both;
          }

          .tab-button {
            padding: 0.875rem 2rem;
            border-radius: 999px;
            font-family: 'Inter', sans-serif;
            font-size: 0.9375rem;
            font-weight: 600;
            border: 1px solid rgba(251, 191, 36, 0.2);
            background: rgba(217, 119, 6, 0.15);
            color: #fde68a;
            cursor: pointer;
            transition: all 0.3s ease;
          }

          .tab-button.active {
            background: linear-gradient(135deg, #fbbf24, #f59e0b);
            border-color: transparent;
            color: #1f2937;
            box-shadow: 0 8px 25px rgba(251, 191, 36, 0.4);
          }

          .tab-button:hover:not(.active) {
            background: rgba(251, 191, 36, 0.2);
            border-color: rgba(251, 191, 36, 0.4);
            color: #fef3c7;
          }

          .profile-content {
            animation: fadeIn 1s ease-out 0.4s both;
          }

          .section-card {
            background: rgba(217, 119, 6, 0.15);
            backdrop-filter: blur(20px);
            border-radius: 1.75rem;
            padding: 2.5rem;
            border: 1px solid rgba(251, 191, 36, 0.2);
            box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
            margin-bottom: 2rem;
          }

          .section-title {
            font-family: 'Playfair Display', serif;
            font-size: 1.75rem;
            font-weight: 700;
            color: #fef3c7;
            margin: 0 0 2rem;
          }

          .art-grid {
            display: grid;
            grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
            gap: 1.5rem;
          }

          .art-item {
            position: relative;
            border-radius: 1rem;
            overflow: hidden;
            cursor: pointer;
            transition: all 0.3s ease;
            border: 2px solid rgba(251, 191, 36, 0.2);
            background: rgba(66, 32, 6, 0.4);
          }

          .art-item:hover {
            transform: translateY(-8px);
            border-color: rgba(251, 191, 36, 0.5);
            box-shadow: 0 15px 40px rgba(251, 191, 36, 0.3);
          }

          .art-item img {
            width: 100%;
            height: 220px;
            object-fit: cover;
            display: block;
            transition: transform 0.3s ease;
          }

          .art-item:hover img {
            transform: scale(1.1);
          }

          .art-overlay {
            position: absolute;
            bottom: 0;
            left: 0;
            right: 0;
            background: linear-gradient(to top, rgba(0, 0, 0, 0.9), transparent);
            padding: 1rem;
            transform: translateY(100%);
            transition: transform 0.3s ease;
          }

          .art-item:hover .art-overlay {
            transform: translateY(0);
          }

          .art-title {
            font-family: 'Inter', sans-serif;
            font-size: 0.9375rem;
            font-weight: 600;
            color: #fef3c7;
          }

          .empty-state {
            text-align: center;
            padding: 4rem 2rem;
          }

          .empty-icon {
            font-size: 4rem;
            margin-bottom: 1rem;
            opacity: 0.5;
          }

          .empty-title {
            font-family: 'Playfair Display', serif;
            font-size: 1.5rem;
            color: #fef3c7;
            margin-bottom: 0.75rem;
          }

          .empty-text {
            font-size: 1rem;
            line-height: 1.6;
            color: #fde68a;
            max-width: 400px;
            margin: 0 auto;
          }

          @media screen and (max-width: 1024px) {
            .profile-stats {
              grid-template-columns: repeat(2, 1fr);
            }

            .profile-header-top {
              flex-direction: column;
              align-items: flex-start;
            }

            .profile-actions {
              width: 100%;
            }

            .action-button {
              flex: 1;
            }
          }

          @media screen and (max-width: 768px) {
            .profile-container {
              padding: 5rem 1rem 3rem;
            }

            .profile-header {
              padding: 2rem;
            }

            .profile-greeting {
              font-size: 2rem;
            }

            .profile-stats {
              grid-template-columns: 1fr;
            }

            .profile-tabs {
              flex-direction: column;
            }

            .art-grid {
              grid-template-columns: 1fr;
            }
          }
        `}</style>

        <div className="profile-inner">
          <div className="profile-header">
            <div className="profile-header-top">
              <div className="profile-greeting-section">
                <p className="profile-kicker"> Creator & Collector Space</p>
                {isMetamaskConnected && metamaskAccount ? (
                  <>
                    <h1 className="profile-greeting">
                      Hello, {metamaskAccount.slice(0, 6)}...{metamaskAccount.slice(-4)}
                    </h1>
                    <div className="profile-wallet-badge">
                      <svg className="wallet-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                      </svg>
                      <span className="wallet-address">{metamaskAccount}</span>
                    </div>
                  </>
                ) : (
                  <>
                    <h1 className="profile-greeting">Welcome to Your Profile</h1>
                    <p className="connect-message">
                      Connect your wallet to manage listings and view your collection.
                    </p>
                  </>
                )}
              </div>

              <div className="profile-actions">
                {isMetamaskConnected ? (
                  <button className="action-button action-button-primary" onClick={openAddDialog}>
                     List New Artwork
                  </button>
                ) : (
                  <button className="action-button action-button-primary" disabled>
                     Connect Wallet to List
                  </button>
                )}
              </div>
            </div>

            <div className="profile-stats">
              <div className="stat-card">
                <div className="stat-value">{products ? products.length : 0}</div>
                <div className="stat-label">Collected</div>
              </div>
              <div className="stat-card">
                <div className="stat-value">0</div>
                <div className="stat-label">Listed</div>
              </div>
              <div className="stat-card">
                <div className="stat-value">0</div>
                <div className="stat-label">Sold</div>
              </div>
              <div className="stat-card">
                <div className="stat-value">
                  {products && products.length > 0 
                    ? products.reduce((sum, p) => sum + parseFloat(p.price || 0), 0).toFixed(2)
                    : '0.00'
                  } ETH
                </div>
                <div className="stat-label">Total Value</div>
              </div>
            </div>
          </div>

          <div className="profile-tabs">
            <button
              className={`tab-button ${activeTab === 'collected' ? 'active' : ''}`}
              onClick={() => setActiveTab('collected')}
            >
               Collected Pieces
            </button>
            <button
              className={`tab-button ${activeTab === 'listed' ? 'active' : ''}`}
              onClick={() => setActiveTab('listed')}
            >
               Your Listings
            </button>
            <button
              className={`tab-button ${activeTab === 'activity' ? 'active' : ''}`}
              onClick={() => setActiveTab('activity')}
            >
               Activity
            </button>
          </div>

          <div className="profile-content">
            {activeTab === 'collected' && (
              <div className="section-card">
                <h2 className="section-title">Your Collected Artworks</h2>
                {products && products.length > 0 ? (
                  <div className="art-grid">
                    {products.map((product) => (
                      <div key={product._id || product.id} className="art-item">
                        <img src={product.Link1} alt={product.title} />
                        <div className="art-overlay">
                          <div className="art-title">{product.title}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="empty-state">
                    <h3 className="empty-title">No artworks yet</h3>
                    <p className="empty-text">
                      {isMetamaskConnected 
                        ? "You haven't collected any artworks yet. Explore the marketplace and start your on-chain collection."
                        : "Connect your wallet to view your collected artworks."
                      }
                    </p>
                  </div>
                )}
              </div>
            )}

            {activeTab === 'listed' && (
              <div className="section-card">
                <h2 className="section-title">Your Listed Artworks</h2>
                <div className="empty-state">
                  <h3 className="empty-title">No listings yet</h3>
                  <p className="empty-text">
                    {isMetamaskConnected
                      ? "Listed artworks from this wallet will appear here. Click 'List New Artwork' to mint and sell your original pieces."
                      : "Connect your wallet to view and manage your listings."
                    }
                  </p>
                </div>
              </div>
            )}

            {activeTab === 'activity' && (
              <div className="section-card">
                <h2 className="section-title">Recent Activity</h2>
                <div className="empty-state">
                  <h3 className="empty-title">No activity yet</h3>
                  <p className="empty-text">
                    Your transaction history and blockchain activity will appear here once you start collecting or selling artworks.
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      <Add open={addOpen} setOpen={setAddOpen} />
      <Footer />
    </>
  );
};

export default Profile;