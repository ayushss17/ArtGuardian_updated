import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@600;700&family=Inter:wght@400;500;600&display=swap');

        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes pulse {
          0%, 100% {
            opacity: 1;
          }
          50% {
            opacity: 0.5;
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

        .footer {
          background: linear-gradient(180deg, #78350f 0%, #422006 50%, #0f172a 100%);
          padding: 4rem 1.5rem 2rem;
          color: #fde68a;
          position: relative;
          overflow: hidden;
          border-top: 1px solid rgba(251, 191, 36, 0.2);
        }

        .footer::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 2px;
          background: linear-gradient(90deg, transparent, #fbbf24, #f59e0b, transparent);
          animation: shimmerGold 3s ease-in-out infinite;
        }

        .footer::after {
          content: '';
          position: absolute;
          top: -50%;
          left: 50%;
          transform: translateX(-50%);
          width: 100%;
          height: 100%;
          background: radial-gradient(circle, rgba(251, 191, 36, 0.1), transparent 70%);
          pointer-events: none;
        }

        .footer-inner {
          max-width: 1400px;
          margin: 0 auto;
          position: relative;
          z-index: 1;
        }

        .footer-top {
          display: grid;
          grid-template-columns: 1.5fr 1fr 1fr 1fr;
          gap: 3rem;
          padding-bottom: 3rem;
          border-bottom: 1px solid rgba(251, 191, 36, 0.2);
          animation: fadeInUp 0.8s ease-out;
        }

        .footer-brand {
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }

        .footer-logo-section {
          display: flex;
          align-items: center;
          gap: 1rem;
          margin-bottom: 0.5rem;
        }

        .footer-logo {
          width: 48px;
          height: 48px;
          border-radius: 12px;
          background: linear-gradient(135deg, #fbbf24, #f59e0b);
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 1.5rem;
          filter: drop-shadow(0 0 20px rgba(251, 191, 36, 0.5));
        }

        .footer-brand-name {
          font-family: 'Playfair Display', serif;
          font-size: 1.5rem;
          font-weight: 700;
          letter-spacing: 0.02em;
          background: linear-gradient(135deg, #fef3c7, #fbbf24);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .footer-description {
          font-family: 'Inter', sans-serif;
          font-size: 0.9375rem;
          line-height: 1.7;
          color: #fde68a;
          max-width: 360px;
        }

        .footer-social {
          display: flex;
          gap: 1rem;
          margin-top: 1rem;
        }

        .social-link {
          width: 40px;
          height: 40px;
          border-radius: 50%;
          background: rgba(251, 191, 36, 0.1);
          border: 1px solid rgba(251, 191, 36, 0.3);
          display: flex;
          align-items: center;
          justify-content: center;
          color: #fbbf24;
          text-decoration: none;
          transition: all 0.3s ease;
        }

        .social-link:hover {
          background: rgba(251, 191, 36, 0.2);
          border-color: rgba(251, 191, 36, 0.6);
          transform: translateY(-3px);
          color: #fef3c7;
        }

        .footer-column {
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
        }

        .footer-column-title {
          font-family: 'Inter', sans-serif;
          font-size: 1rem;
          font-weight: 600;
          color: #fef3c7;
          margin-bottom: 0.5rem;
          letter-spacing: 0.02em;
        }

        .footer-link {
          font-family: 'Inter', sans-serif;
          font-size: 0.9375rem;
          color: #fde68a;
          text-decoration: none;
          transition: all 0.3s ease;
          display: flex;
          align-items: center;
          gap: 0.5rem;
          width: fit-content;
        }

        .footer-link::before {
          content: '';
          width: 0;
          height: 2px;
          background: linear-gradient(90deg, #fbbf24, #f59e0b);
          transition: width 0.3s ease;
        }

        .footer-link:hover::before {
          width: 20px;
        }

        .footer-link:hover {
          color: #fef3c7;
          transform: translateX(5px);
        }

        .footer-bottom {
          padding-top: 2rem;
          display: flex;
          justify-content: space-between;
          align-items: center;
          flex-wrap: wrap;
          gap: 1rem;
          animation: fadeInUp 1s ease-out 0.3s both;
        }

        .footer-copyright {
          font-family: 'Inter', sans-serif;
          font-size: 0.875rem;
          color: #d97706;
        }

        .footer-badge {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          padding: 0.5rem 1rem;
          border-radius: 999px;
          background: rgba(251, 191, 36, 0.1);
          border: 1px solid rgba(251, 191, 36, 0.3);
          font-size: 0.8125rem;
          color: #fbbf24;
        }

        .badge-dot {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background: #fbbf24;
          animation: pulse 2s ease-in-out infinite;
        }

        .footer-legal {
          display: flex;
          gap: 1.5rem;
          flex-wrap: wrap;
        }

        .legal-link {
          font-family: 'Inter', sans-serif;
          font-size: 0.875rem;
          color: #d97706;
          text-decoration: none;
          transition: color 0.3s ease;
        }

        .legal-link:hover {
          color: #fbbf24;
        }

        @media screen and (max-width: 1024px) {
          .footer-top {
            grid-template-columns: 1fr 1fr;
            gap: 2rem;
          }

          .footer-brand {
            grid-column: 1 / -1;
          }
        }

        @media screen and (max-width: 640px) {
          .footer {
            padding: 3rem 1rem 1.5rem;
          }

          .footer-top {
            grid-template-columns: 1fr;
            gap: 2rem;
          }

          .footer-bottom {
            flex-direction: column;
            text-align: center;
          }

          .footer-legal {
            justify-content: center;
          }
        }
      `}</style>

      <div className="footer-inner">
        <div className="footer-top">
          <div className="footer-brand">
            <div className="footer-logo-section">   
              <h3 className="footer-brand-name">ArtGuardian</h3>
            </div>
            <p className="footer-description">
              A Web3 marketplace for original, non-replicable artworks—secured and verified on 
              the blockchain. Empowering artists and protecting collectors through transparent 
              ownership and immutable provenance.
            </p>

          </div>

          <div className="footer-column">
            <h4 className="footer-column-title">Explore</h4>
            <a href="#Home" className="footer-link">Home</a>
            <a href="#About" className="footer-link">About</a>
            <a href="#Why" className="footer-link">Why ArtGuardian</a>
            <a href="/products" className="footer-link">Browse Artworks</a>
          </div>
          
        </div>

        <div className="footer-bottom">
          <div className="footer-copyright">
            © {2024} ArtGuardian. All rights reserved.
          </div>

          <div className="footer-badge">
            <span className="badge-dot"></span>
            <span>Secured by Blockchain</span>
          </div>

          
        </div>
      </div>
    </footer>
  );
};

export default Footer;