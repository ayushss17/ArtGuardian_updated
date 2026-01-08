import React, { useState, useEffect, useContext } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getProducts } from '../redux/actions/getProducts.js';
import { MetamaskContext } from '../NavigationBar/MetaMaskContext.js';
import Add from './Add.js';
import Buy from './Buy.js';

const Products = () => {
  const { isMetamaskConnected, metamaskAccount } = useContext(MetamaskContext);
  const dispatch = useDispatch();

  const [selectedCategory, setSelectedCategory] = useState('');
  const [addOpen, setAddOpen] = useState(false);
  const [buyOpen, setBuyOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);

  const { products } = useSelector((state) => state.getProducts);

  useEffect(() => {
    dispatch(getProducts(selectedCategory));
  }, [dispatch, selectedCategory]);

  const categories = [
    { key: '', label: 'All Artworks' },
    { key: 'Landscape', label: 'Landscapes' },
    { key: 'Portrait', label: 'Portraits'},
    { key: 'History Painting', label: 'History' },
    { key: 'StillLifePainting', label: 'Still Life' }
  ];

  const handleCategoryChange = (categoryKey) => {
    setSelectedCategory(categoryKey);
  };

  const openAddDialog = () => {
    setAddOpen(true);
  };

  const openBuyDialog = (product) => {
    setSelectedProduct(product);
    setBuyOpen(true);
  };

  const filteredProducts = products || [];

  return (
    <div className="products-container">
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

        .products-container {
          min-height: 100vh;
          padding: 6rem 1.5rem 4rem;
          background: linear-gradient(135deg, #0f172a 0%, #422006 50%, #78350f 100%);
          position: relative;
          overflow: hidden;
        }

        .products-container::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: 
            radial-gradient(circle at 20% 30%, rgba(251, 191, 36, 0.1), transparent 50%),
            radial-gradient(circle at 80% 70%, rgba(217, 119, 6, 0.08), transparent 50%);
          pointer-events: none;
        }

        .products-header {
          max-width: 1400px;
          margin: 0 auto 3rem;
          text-align: center;
          position: relative;
          z-index: 1;
          animation: fadeIn 0.8s ease-out;
        }

        .products-kicker {
          display: inline-block;
          padding: 0.5rem 1rem;
          border-radius: 999px;
          font-size: 0.75rem;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 0.1em;
          background: rgba(251, 191, 36, 0.1);
          border: 1px solid rgba(251, 191, 36, 0.3);
          color: #fbbf24;
          margin-bottom: 1.5rem;
        }

        .products-title {
          font-family: 'Playfair Display', serif;
          font-size: 3.5rem;
          font-weight: 700;
          margin: 0 0 1rem;
          background: linear-gradient(135deg, #fef3c7, #fbbf24);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .products-subtitle {
          font-family: 'Inter', sans-serif;
          font-size: 1.125rem;
          line-height: 1.6;
          color: #fde68a;
          max-width: 720px;
          margin: 0 auto;
        }

        .products-layout {
          max-width: 1400px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: 320px 1fr;
          gap: 3rem;
          position: relative;
          z-index: 1;
        }

        .products-sidebar {
          position: sticky;
          top: 120px;
          height: fit-content;
        }

        .filters-card {
          background: rgba(217, 119, 6, 0.15);
          backdrop-filter: blur(20px);
          border-radius: 1.75rem;
          padding: 2rem;
          border: 1px solid rgba(251, 191, 36, 0.2);
          box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
        }

        .filters-title {
          font-family: 'Inter', sans-serif;
          font-size: 1.25rem;
          font-weight: 600;
          color: #fef3c7;
          margin: 0 0 1.5rem;
          letter-spacing: 0.02em;
        }

        .filter-buttons {
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
        }

        .filter-button {
          padding: 0.875rem 1.25rem;
          border-radius: 1rem;
          border: 1px solid rgba(251, 191, 36, 0.2);
          background: rgba(66, 32, 6, 0.4);
          color: #fde68a;
          font-family: 'Inter', sans-serif;
          font-size: 0.9375rem;
          font-weight: 500;
          cursor: pointer;
          transition: all 0.3s ease;
          text-align: left;
          display: flex;
          align-items: center;
          gap: 0.75rem;
        }

        .filter-button:hover {
          background: rgba(251, 191, 36, 0.15);
          border-color: rgba(251, 191, 36, 0.4);
          transform: translateX(5px);
        }

        .filter-button.active {
          background: linear-gradient(135deg, #fbbf24, #f59e0b);
          border-color: transparent;
          color: #1f2937;
          box-shadow: 0 8px 25px rgba(251, 191, 36, 0.4);
          transform: translateX(5px);
        }

        .filter-icon {
          font-size: 1.25rem;
        }

        .cta-section {
          margin-top: 2rem;
          padding: 1.5rem;
          border-radius: 1rem;
          background: rgba(251, 191, 36, 0.1);
          border: 1px solid rgba(251, 191, 36, 0.3);
        }

        .cta-button {
          width: 100%;
          padding: 0.875rem 1.5rem;
          border-radius: 999px;
          border: none;
          background: linear-gradient(135deg, #fbbf24, #f59e0b);
          color: #1f2937;
          font-family: 'Inter', sans-serif;
          font-size: 0.9375rem;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s ease;
          margin-bottom: 1rem;
        }

        .cta-button:hover {
          transform: translateY(-2px);
          box-shadow: 0 10px 30px rgba(251, 191, 36, 0.5);
        }

        .cta-button:disabled {
          opacity: 0.5;
          cursor: not-allowed;
        }

        .cta-text {
          font-size: 0.875rem;
          line-height: 1.6;
          color: #fde68a;
        }

        .wallet-address {
          font-family: 'Inter', monospace;
          font-size: 0.8125rem;
          color: #fbbf24;
          word-break: break-all;
        }

        .products-main {
          animation: fadeIn 0.8s ease-out 0.2s both;
        }

        .category-header {
          margin-bottom: 2rem;
        }

        .category-title {
          font-family: 'Playfair Display', serif;
          font-size: 2rem;
          font-weight: 600;
          color: #fef3c7;
          margin: 0;
        }

        .products-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
          gap: 2rem;
        }

        .product-card {
          background: rgba(217, 119, 6, 0.15);
          backdrop-filter: blur(20px);
          border-radius: 1.5rem;
          padding: 1.25rem;
          border: 1px solid rgba(251, 191, 36, 0.2);
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
          cursor: pointer;
          position: relative;
          overflow: hidden;
        }

        .product-card::before {
          content: '';
          position: absolute;
          top: -50%;
          left: -50%;
          width: 200%;
          height: 200%;
          background: radial-gradient(circle, rgba(251, 191, 36, 0.15), transparent 70%);
          opacity: 0;
          transition: opacity 0.4s ease;
        }

        .product-card:hover::before {
          opacity: 1;
        }

        .product-card:hover {
          transform: translateY(-10px);
          border-color: rgba(251, 191, 36, 0.5);
          box-shadow: 0 20px 60px rgba(251, 191, 36, 0.3);
        }

        .product-image {
          width: 100%;
          height: 280px;
          border-radius: 1rem;
          object-fit: cover;
          margin-bottom: 1rem;
          transition: transform 0.4s ease;
          position: relative;
          z-index: 1;
        }

        .product-card:hover .product-image {
          transform: scale(1.05);
        }

        .product-meta {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 0.75rem;
          position: relative;
          z-index: 1;
        }

        .product-artist {
          font-size: 0.875rem;
          color: #fde68a;
          font-weight: 500;
        }

        .product-price {
          font-size: 1rem;
          font-weight: 600;
          color: #fbbf24;
          padding: 0.25rem 0.75rem;
          border-radius: 999px;
          background: rgba(251, 191, 36, 0.1);
          border: 1px solid rgba(251, 191, 36, 0.3);
        }

        .product-title {
          font-family: 'Playfair Display', serif;
          font-size: 1.25rem;
          font-weight: 600;
          color: #fef3c7;
          margin: 0 0 0.5rem;
          position: relative;
          z-index: 1;
        }

        .product-description {
          font-size: 0.9375rem;
          line-height: 1.6;
          color: #fde68a;
          margin-bottom: 1rem;
          position: relative;
          z-index: 1;
        }

        .product-actions {
          display: flex;
          gap: 0.75rem;
          position: relative;
          z-index: 1;
        }

        .buy-button {
          flex: 1;
          padding: 0.75rem 1.5rem;
          border-radius: 999px;
          border: none;
          background: linear-gradient(135deg, #fbbf24, #f59e0b, #d97706);
          color: #1f2937;
          font-family: 'Inter', sans-serif;
          font-size: 0.9375rem;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s ease;
          position: relative;
          overflow: hidden;
        }

        .buy-button::before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.3), transparent);
          transition: left 0.5s ease;
        }

        .buy-button:hover::before {
          left: 100%;
        }

        .buy-button:hover {
          transform: translateY(-2px);
          box-shadow: 0 10px 30px rgba(251, 191, 36, 0.6);
        }

        .empty-state {
          text-align: center;
          padding: 4rem 2rem;
          color: #fde68a;
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
          margin-bottom: 0.5rem;
        }

        .empty-text {
          font-size: 1rem;
          line-height: 1.6;
          max-width: 400px;
          margin: 0 auto;
        }

        @media screen and (max-width: 1200px) {
          .products-layout {
            grid-template-columns: 1fr;
          }

          .products-sidebar {
            position: relative;
            top: 0;
          }

          .filter-buttons {
            flex-direction: row;
            flex-wrap: wrap;
          }

          .filter-button {
            flex: 1;
            min-width: 140px;
          }
        }

        @media screen and (max-width: 768px) {
          .products-container {
            padding: 5rem 1rem 3rem;
          }

          .products-title {
            font-size: 2.5rem;
          }

          .products-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>

      <div className="products-header">
        <span className="products-kicker"> Blockchain Marketplace</span>
        <h1 className="products-title">Discover Authenticated Artworks</h1>
        <p className="products-subtitle">
          Browse original pieces directly from verified artists. Each work is tokenized on the blockchain, 
          preserving its uniqueness and ownership history forever.
        </p>
      </div>

      <div className="products-layout">
        <aside className="products-sidebar">
          <div className="filters-card">
            <h3 className="filters-title">Filter by Style</h3>
            <div className="filter-buttons">
              {categories.map(cat => (
                <button
                  key={cat.key}
                  className={`filter-button ${selectedCategory === cat.key ? 'active' : ''}`}
                  onClick={() => handleCategoryChange(cat.key)}
                >
                  <span className="filter-icon">{cat.icon}</span>
                  {cat.label}
                </button>
              ))}
            </div>

            <div className="cta-section">
              {isMetamaskConnected ? (
                <>
                  <button className="cta-button" onClick={openAddDialog}>
                     List Your Artwork
                  </button>
                  <p className="cta-text">
                    Connected as <span className="wallet-address">{metamaskAccount}</span>. 
                    You can mint and list your original pieces directly from this wallet.
                  </p>
                </>
              ) : (
                <>
                  <button className="cta-button" disabled>
                     Connect Wallet First
                  </button>
                  <p className="cta-text">
                    Connect your wallet from the top navigation to start listing and collecting artworks.
                  </p>
                </>
              )}
            </div>
          </div>
        </aside>

        <main className="products-main">
          <div className="category-header">
            <h2 className="category-title">
              {selectedCategory
                ? categories.find(c => c.key === selectedCategory)?.label
                : 'All Artworks'}
            </h2>
          </div>

          {filteredProducts.length > 0 ? (
            <div className="products-grid">
              {filteredProducts.map((product) => (
                <article
                  key={product._id || product.id}
                  className="product-card"
                >
                  <img
                    src={product.Link1}
                    alt={product.title}
                    className="product-image"
                  />
                  <div className="product-meta">
                    <span className="product-artist">By {product.artist}</span>
                    <span className="product-price">{product.price}</span>
                  </div>
                  <h3 className="product-title">{product.title}</h3>
                  <p className="product-description">{product.bigtitle}</p>
                  <div className="product-actions">
                    <button 
                      className="buy-button"
                      onClick={() => openBuyDialog(product)}
                    >
                      Buy Now
                    </button>
                  </div>
                </article>
              ))}
            </div>
          ) : (
            <div className="empty-state">
              <h3 className="empty-title">No artworks found</h3>
              <p className="empty-text">
                No pieces match this category yet. Try a different filter or be the first to list an artwork here.
              </p>
            </div>
          )}
        </main>
      </div>

      <Add open={addOpen} setOpen={setAddOpen} />
      <Buy open={buyOpen} setOpen={setBuyOpen} product={selectedProduct || {}} />
    </div>
  );
};

export default Products;