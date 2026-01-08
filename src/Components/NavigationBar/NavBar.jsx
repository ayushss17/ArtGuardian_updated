import React, { useContext, useState, useEffect } from 'react';
import { MetamaskContext } from './MetaMaskContext';
import HomeInfo from '../Homepage/HomeInfo';
import About from '../Homepage/About';
import Why from '../Homepage/why';
import Footer from '../Homepage/footer';

const NavBar = () => {
  const { isMetamaskConnected, connectToMetamask, metamaskAccount, disconnectFromMetamask } = useContext(MetamaskContext);
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navigateToProducts = () => {
    window.location.href = '/products';
  };

  const navigateToProfile = () => {
    window.open('/profile', '_blank');
  };

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@500;600;700&family=Playfair+Display:wght@700&display=swap');

        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

        @keyframes slideDown {
          from {
            transform: translateY(-100%);
            opacity: 0;
          }
          to {
            transform: translateY(0);
            opacity: 1;
          }
        }

        .navbar-wrapper {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          z-index: 1000;
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          animation: slideDown 0.6s ease-out;
        }

        .navbar-bg {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: linear-gradient(135deg, rgba(15, 23, 42, 0.9), rgba(66, 32, 6, 0.95), rgba(120, 53, 15, 0.9));
          backdrop-filter: blur(20px);
          border-bottom: 1px solid rgba(251, 191, 36, 0.2);
          transition: all 0.3s ease;
        }

        .navbar-wrapper.scrolled .navbar-bg {
          background: linear-gradient(135deg, rgba(15, 23, 42, 0.98), rgba(66, 32, 6, 0.98), rgba(120, 53, 15, 0.98));
          box-shadow: 0 10px 40px rgba(0, 0, 0, 0.5);
          border-bottom-color: rgba(251, 191, 36, 0.3);
        }

        .navbar-container {
          max-width: 1400px;
          margin: 0 auto;
          padding: 1rem 1.5rem;
          display: flex;
          align-items: center;
          justify-content: space-between;
          position: relative;
          z-index: 1;
        }

        .navbar-wrapper.scrolled .navbar-container {
          padding: 0.75rem 1.5rem;
        }

        .nav-brand {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          text-decoration: none;
          transition: transform 0.3s ease;
          cursor: pointer;
        }

        .nav-brand:hover {
          transform: translateY(-2px);
        }

        .brand-icon {
          width: 48px;
          height: 48px;
          border-radius: 12px;
          background: linear-gradient(135deg, #fbbf24, #f59e0b, #d97706);
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 1.5rem;
          box-shadow: 0 0 20px rgba(251, 191, 36, 0.4);
          transition: all 0.3s ease;
        }

        .navbar-wrapper.scrolled .brand-icon {
          width: 42px;
          height: 42px;
        }

        .nav-brand:hover .brand-icon {
          box-shadow: 0 0 30px rgba(251, 191, 36, 0.6);
          transform: rotate(5deg);
        }

        .brand-content {
          display: flex;
          flex-direction: column;
        }

        .brand-name {
          font-family: 'Playfair Display', serif;
          font-size: 1.25rem;
          font-weight: 700;
          letter-spacing: 0.02em;
          color: #fef3c7;
          line-height: 1.2;
        }

        .brand-tagline {
          font-family: 'Inter', sans-serif;
          font-size: 0.6875rem;
          color: #fbbf24;
          letter-spacing: 0.02em;
        }

        .nav-links {
          display: flex;
          align-items: center;
          gap: 2.5rem;
        }

        .nav-link {
          font-family: 'Inter', sans-serif;
          font-size: 0.9375rem;
          font-weight: 500;
          letter-spacing: 0.02em;
          color: #fde68a;
          text-decoration: none;
          position: relative;
          padding: 0.5rem 0;
          transition: color 0.3s ease;
          cursor: pointer;
        }

        .nav-link::after {
          content: '';
          position: absolute;
          bottom: 0;
          left: 0;
          width: 0;
          height: 2px;
          background: linear-gradient(90deg, #fbbf24, #f59e0b);
          border-radius: 999px;
          transition: width 0.3s ease;
        }

        .nav-link:hover {
          color: #fef3c7;
        }

        .nav-link:hover::after {
          width: 100%;
        }

        .nav-actions {
          display: flex;
          align-items: center;
          gap: 1rem;
        }

        .nav-button {
          padding: 0.625rem 1.5rem;
          border-radius: 999px;
          font-family: 'Inter', sans-serif;
          font-size: 0.875rem;
          font-weight: 600;
          letter-spacing: 0.02em;
          border: none;
          cursor: pointer;
          transition: all 0.3s ease;
          position: relative;
          overflow: hidden;
        }

        .nav-button::before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);
          transition: left 0.5s ease;
        }

        .nav-button:hover::before {
          left: 100%;
        }

        .nav-button-profile {
          background: rgba(251, 191, 36, 0.1);
          border: 1px solid rgba(251, 191, 36, 0.3);
          color: #fbbf24;
        }

        .nav-button-profile:hover {
          background: rgba(251, 191, 36, 0.2);
          border-color: rgba(251, 191, 36, 0.5);
          transform: translateY(-2px);
          color: #fef3c7;
        }

        .nav-button-primary {
          background: linear-gradient(135deg, #fbbf24, #f59e0b, #d97706);
          color: #1f2937;
          box-shadow: 0 4px 20px rgba(251, 191, 36, 0.4);
        }

        .nav-button-primary:hover {
          transform: translateY(-2px);
          box-shadow: 0 6px 30px rgba(251, 191, 36, 0.6);
        }

        .nav-button-secondary {
          background: rgba(217, 119, 6, 0.3);
          border: 1px solid rgba(251, 191, 36, 0.5);
          color: #fde68a;
        }

        .nav-button-secondary:hover {
          background: rgba(217, 119, 6, 0.5);
          border-color: rgba(251, 191, 36, 0.7);
          transform: translateY(-2px);
        }

        .wallet-info {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          padding: 0.5rem 1rem;
          border-radius: 999px;
          background: rgba(217, 119, 6, 0.2);
          border: 1px solid rgba(251, 191, 36, 0.3);
          font-family: 'Inter', monospace;
          font-size: 0.75rem;
          color: #fbbf24;
        }

        .mobile-menu-button {
          display: none;
          background: none;
          border: none;
          cursor: pointer;
          padding: 0.5rem;
          color: #fde68a;
        }

        .mobile-menu-icon {
          width: 24px;
          height: 24px;
        }

        .page-content {
          padding-top: 80px;
        }

        @media screen and (max-width: 1024px) {
          .nav-links {
            gap: 1.5rem;
          }

          .brand-tagline {
            display: none;
          }

          .wallet-info {
            display: none;
          }
        }

        @media screen and (max-width: 768px) {
          .mobile-menu-button {
            display: block;
          }

          .nav-links {
            position: fixed;
            top: 72px;
            left: 0;
            right: 0;
            background: linear-gradient(135deg, rgba(15, 23, 42, 0.98), rgba(66, 32, 6, 0.98));
            backdrop-filter: blur(20px);
            flex-direction: column;
            gap: 0;
            padding: 1rem 0;
            border-bottom: 1px solid rgba(251, 191, 36, 0.2);
            box-shadow: 0 10px 40px rgba(0, 0, 0, 0.5);
            transform: translateY(-100%);
            opacity: 0;
            transition: all 0.3s ease;
            pointer-events: none;
          }

          .nav-links.mobile-open {
            transform: translateY(0);
            opacity: 1;
            pointer-events: all;
          }

          .nav-link {
            width: 100%;
            padding: 1rem 1.5rem;
            text-align: left;
            border-bottom: 1px solid rgba(251, 191, 36, 0.1);
          }

          .nav-link::after {
            display: none;
          }

          .nav-actions {
            flex-wrap: wrap;
            gap: 0.5rem;
          }

          .nav-button {
            padding: 0.5rem 1rem;
            font-size: 0.8125rem;
          }

          .brand-name {
            font-size: 1rem;
          }
        }
      `}</style>

      <nav className={`navbar-wrapper ${scrolled ? 'scrolled' : ''}`}>
        <div className="navbar-bg"></div>
        <div className="navbar-container">
          <a href="#Home" className="nav-brand">
            <div className="brand-icon">🎨</div>
            <div className="brand-content">
              <span className="brand-name">ArtGuardian</span>
              <span className="brand-tagline">Blockchain Art Marketplace</span>
            </div>
          </a>

          <button
            className="mobile-menu-button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            <svg className="mobile-menu-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {mobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>

          <div className={`nav-links ${mobileMenuOpen ? 'mobile-open' : ''}`}>
            <a 
              href="#Home" 
              className="nav-link"
              onClick={() => setMobileMenuOpen(false)}
            >
              Home
            </a>
            <a 
              href="#About" 
              className="nav-link"
              onClick={() => setMobileMenuOpen(false)}
            >
              About
            </a>
            <a 
              href="#Why" 
              className="nav-link"
              onClick={() => setMobileMenuOpen(false)}
            >
              Why ArtGuardian
            </a>
            <span 
              className="nav-link"
              onClick={() => {
                navigateToProducts();
                setMobileMenuOpen(false);
              }}
            >
              Browse Art
            </span>
            <a 
              href="#Footer" 
              className="nav-link"
              onClick={() => setMobileMenuOpen(false)}
            >
              Contact
            </a>
          </div>

          <div className="nav-actions">
            <button
              className="nav-button nav-button-profile"
              onClick={navigateToProfile}
            >
              👤 My Profile
            </button>

            {isMetamaskConnected ? (
              <>
                <button
                  className="nav-button nav-button-secondary"
                  onClick={disconnectFromMetamask}
                >
                  🔓 Disconnect
                </button>
                {metamaskAccount && (
                  <div className="wallet-info">
                    {metamaskAccount.slice(0, 6)}...{metamaskAccount.slice(-4)}
                  </div>
                )}
              </>
            ) : (
              <button
                className="nav-button nav-button-primary"
                onClick={connectToMetamask}
              >
                🔒 Connect Wallet
              </button>
            )}
          </div>
        </div>
      </nav>

      <div className="page-content">
        <main>
          <section id="Home">
            <HomeInfo />
          </section>
          <section id="About">
            <About />
          </section>
          <section id="Why">
            <Why />
          </section>
          <section id="Footer">
            <Footer />
          </section>
        </main>
      </div>
    </>
  );
};

export default NavBar;