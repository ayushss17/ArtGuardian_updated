import React from 'react';
import secure from '../Images/secure.png';
import userf from '../Images/userF.png';
import multi from '../Images/multi.png';

const Why = () => {
  return (
    <div className="why-section">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700&family=Inter:wght@400;500;600&display=swap');

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

        @keyframes shimmerGold {
          0% {
            background-position: -1000px 0;
          }
          100% {
            background-position: 1000px 0;
          }
        }

        @keyframes iconFloat {
          0%, 100% {
            transform: translateY(0) rotate(0deg);
          }
          50% {
            transform: translateY(-10px) rotate(5deg);
          }
        }

        .why-section {
          padding: 6rem 1.5rem;
          background: linear-gradient(180deg, #1e293b 0%, #422006 50%, #78350f 100%);
          position: relative;
          overflow: hidden;
        }

        .why-section::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: 
            radial-gradient(circle at 50% 50%, rgba(251, 191, 36, 0.12), transparent 60%);
          pointer-events: none;
        }

        .why-inner {
          max-width: 1400px;
          margin: 0 auto;
          position: relative;
          z-index: 1;
        }

        .why-header {
          text-align: center;
          margin-bottom: 4rem;
          animation: fadeInUp 0.8s ease-out;
        }

        .why-kicker {
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

        .why-title {
          font-family: 'Playfair Display', serif;
          font-size: 3.5rem;
          font-weight: 700;
          line-height: 1.2;
          margin: 0 0 1.5rem;
          background: linear-gradient(135deg, #fef3c7 0%, #fbbf24 50%, #f59e0b 100%);
          background-size: 200% 200%;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          animation: shimmerGold 5s ease infinite;
        }

        .why-intro {
          max-width: 720px;
          margin: 0 auto;
          font-family: 'Inter', sans-serif;
          font-size: 1.125rem;
          line-height: 1.8;
          color: #fde68a;
        }

        .why-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 2rem;
        }

        .why-card {
          background: rgba(217, 119, 6, 0.15);
          border-radius: 1.75rem;
          padding: 2.5rem 2rem;
          backdrop-filter: blur(20px);
          border: 1px solid rgba(251, 191, 36, 0.2);
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
          position: relative;
          overflow: hidden;
          animation: fadeInUp 1s ease-out both;
        }

        .why-card:nth-child(1) {
          animation-delay: 0.2s;
        }

        .why-card:nth-child(2) {
          animation-delay: 0.4s;
        }

        .why-card:nth-child(3) {
          animation-delay: 0.6s;
        }

        .why-card::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 4px;
          background: linear-gradient(90deg, #fbbf24, #f59e0b, #d97706);
          transform: scaleX(0);
          transform-origin: left;
          transition: transform 0.4s ease;
        }

        .why-card:hover::before {
          transform: scaleX(1);
        }

        .why-card::after {
          content: '';
          position: absolute;
          top: -50%;
          left: -50%;
          width: 200%;
          height: 200%;
          background: radial-gradient(circle, rgba(251, 191, 36, 0.15), transparent 70%);
          opacity: 0;
          transition: opacity 0.4s ease;
          pointer-events: none;
        }

        .why-card:hover::after {
          opacity: 1;
        }

        .why-card:hover {
          transform: translateY(-15px);
          border-color: rgba(251, 191, 36, 0.5);
          box-shadow: 0 25px 70px rgba(251, 191, 36, 0.3), 0 10px 30px rgba(0, 0, 0, 0.3);
        }

        .why-icon-wrapper {
          position: relative;
          width: 100px;
          height: 100px;
          margin-bottom: 1.5rem;
        }

        .why-icon-bg {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          width: 90px;
          height: 90px;
          background: linear-gradient(135deg, #fbbf24, #f59e0b);
          border-radius: 50%;
          opacity: 0.2;
          filter: blur(15px);
        }

        .why-card:hover .why-icon-bg {
          animation: iconFloat 2s ease-in-out infinite;
        }

        .why-icon {
          position: relative;
          width: 100px;
          height: 100px;
          border-radius: 1.5rem;
          object-fit: cover;
          border: 2px solid rgba(251, 191, 36, 0.4);
          box-shadow: 0 10px 40px rgba(0, 0, 0, 0.3);
          transition: transform 0.4s ease, border-color 0.4s ease;
        }

        .why-card:hover .why-icon {
          transform: scale(1.1) rotate(5deg);
          border-color: rgba(251, 191, 36, 0.8);
        }

        .why-card-title {
          font-family: 'Playfair Display', serif;
          font-size: 1.5rem;
          font-weight: 700;
          color: #fef3c7;
          margin: 0 0 1rem;
          letter-spacing: 0.02em;
        }

        .why-card-desc {
          font-family: 'Inter', sans-serif;
          font-size: 1rem;
          line-height: 1.7;
          color: #fde68a;
          margin: 0;
        }

        .why-feature-badge {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          padding: 0.25rem 0.75rem;
          border-radius: 999px;
          background: rgba(251, 191, 36, 0.1);
          border: 1px solid rgba(251, 191, 36, 0.3);
          font-size: 0.75rem;
          font-weight: 600;
          color: #fbbf24;
          margin-bottom: 1rem;
        }

        .why-feature-icon {
          width: 16px;
          height: 16px;
        }

        @media screen and (max-width: 1024px) {
          .why-grid {
            grid-template-columns: 1fr;
            gap: 1.5rem;
          }

          .why-title {
            font-size: 2.75rem;
          }
        }

        @media screen and (max-width: 768px) {
          .why-section {
            padding: 4rem 1rem;
          }

          .why-title {
            font-size: 2.25rem;
          }

          .why-intro {
            font-size: 1rem;
          }

          .why-card {
            padding: 2rem 1.5rem;
          }
        }
      `}</style>

      <div className="why-inner">
        <div className="why-header">
          <span className="why-kicker">Your Advantages</span>
          <h2 className="why-title">Why Choose ArtGuardian?</h2>
          <p className="why-intro">
            We blend the timeless world of fine art with cutting-edge blockchain technology, 
            creating a secure, transparent ecosystem where artists thrive and collectors invest 
            with confidence.
          </p>
        </div>

        <div className="why-grid">
          <div className="why-card">
            <div className="why-feature-badge">
              <svg className="why-feature-icon" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
              </svg>
              Security First
            </div>
            <div className="why-icon-wrapper">
              <div className="why-icon-bg"></div>
              <img src={secure} className="why-icon" alt="Blockchain Security" />
            </div>
            <h3 className="why-card-title">Immutable On-Chain Security</h3>
            <p className="why-card-desc">
              Every artwork is tokenized as a unique digital asset, giving you cryptographically 
              verifiable proof of ownership, authentic origin, and complete transaction history—all 
              permanently recorded on the blockchain and impossible to forge.
            </p>
          </div>

          <div className="why-card">
            <div className="why-feature-badge">
              <svg className="why-feature-icon" fill="currentColor" viewBox="0 0 20 20">
                <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z" />
              </svg>
              User Experience
            </div>
            <div className="why-icon-wrapper">
              <div className="why-icon-bg"></div>
              <img src={userf} className="why-icon" alt="User-Friendly Interface" />
            </div>
            <h3 className="why-card-title">Intuitive Web3 Experience</h3>
            <p className="why-card-desc">
              We've designed a clean, familiar interface that removes Web3 complexity. Connect your 
              wallet, browse curated collections, and complete secure purchases in just a few 
              clicks—no blockchain expertise required.
            </p>
          </div>

          <div className="why-card">
            <div className="why-feature-badge">
              <svg className="why-feature-icon" fill="currentColor" viewBox="0 0 20 20">
                <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z" />
              </svg>
              Community
            </div>
            <div className="why-icon-wrapper">
              <div className="why-icon-bg"></div>
              <img src={multi} className="why-icon" alt="Artists and Collectors" />
            </div>
            <h3 className="why-card-title">Built for Artists & Collectors</h3>
            <p className="why-card-desc">
              Artists can mint and sell original works with built-in perpetual royalties, earning on 
              every future resale. Collectors access exclusive drops and secondary markets in one 
              trusted platform—a true win-win ecosystem.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Why;