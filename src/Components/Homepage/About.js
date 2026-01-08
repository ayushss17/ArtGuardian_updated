import React from 'react';
import getto from '../Images/gettoknow.png';

const About = () => {
  return (
    <div className="about-section">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@600;700&family=Inter:wght@400;500;600&display=swap');

        @keyframes fadeInLeft {
          from {
            opacity: 0;
            transform: translateX(-50px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes fadeInRight {
          from {
            opacity: 0;
            transform: translateX(50px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes floatImage {
          0%, 100% {
            transform: translateY(0) rotate(0deg);
          }
          50% {
            transform: translateY(-15px) rotate(1deg);
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

        .about-section {
          padding: 6rem 1.5rem;
          background: linear-gradient(180deg, #78350f 0%, #422006 50%, #1e293b 100%);
          position: relative;
          overflow: hidden;
        }

        .about-section::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: 
            radial-gradient(circle at 20% 50%, rgba(251, 191, 36, 0.1), transparent 50%),
            radial-gradient(circle at 80% 50%, rgba(217, 119, 6, 0.08), transparent 50%);
          pointer-events: none;
        }

        .about-grid {
          max-width: 1400px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: minmax(0, 1.1fr) minmax(0, 1fr);
          gap: 5rem;
          align-items: center;
          position: relative;
          z-index: 1;
        }

        .about-copy {
          animation: fadeInLeft 1s ease-out;
        }

        .about-kicker {
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

        .about-title {
          font-family: 'Playfair Display', serif;
          font-size: 3rem;
          font-weight: 700;
          line-height: 1.2;
          margin: 0 0 2rem;
          background: linear-gradient(135deg, #fef3c7, #fbbf24);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .about-para {
          font-family: 'Inter', sans-serif;
          font-size: 1.0625rem;
          line-height: 1.8;
          color: #fde68a;
          margin-bottom: 1.5rem;
          opacity: 0;
          animation: fadeInLeft 1s ease-out forwards;
        }

        .about-para:nth-child(3) {
          animation-delay: 0.2s;
        }

        .about-para:nth-child(4) {
          animation-delay: 0.4s;
        }

        .about-para:nth-child(5) {
          animation-delay: 0.6s;
        }

        .about-highlight-box {
          margin-top: 2rem;
          padding: 1.5rem;
          border-radius: 1rem;
          background: rgba(217, 119, 6, 0.15);
          border: 1px solid rgba(251, 191, 36, 0.3);
          backdrop-filter: blur(10px);
          animation: fadeInLeft 1s ease-out 0.8s both;
        }

        .about-highlight-title {
          font-family: 'Inter', sans-serif;
          font-size: 0.875rem;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 0.05em;
          color: #fbbf24;
          margin-bottom: 0.75rem;
        }

        .about-highlight-text {
          font-family: 'Inter', sans-serif;
          font-size: 0.9375rem;
          line-height: 1.6;
          color: #fde68a;
        }

        .about-visual {
          position: relative;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 2rem;
          animation: fadeInRight 1s ease-out 0.4s both;
        }

        .about-image-wrapper {
          position: relative;
          width: 100%;
          max-width: 500px;
        }

        .about-image-wrapper::before {
          content: '';
          position: absolute;
          top: -10px;
          left: -10px;
          right: -10px;
          bottom: -10px;
          border-radius: 2rem;
          background: linear-gradient(135deg, #fbbf24, #f59e0b, #d97706);
          opacity: 0.3;
          filter: blur(20px);
          animation: shimmerGold 3s ease-in-out infinite;
        }

        .about-image {
          position: relative;
          width: 100%;
          height: auto;
          border-radius: 1.5rem;
          box-shadow: 0 30px 80px rgba(0, 0, 0, 0.5);
          border: 2px solid rgba(251, 191, 36, 0.3);
          animation: floatImage 6s ease-in-out infinite;
          transition: transform 0.3s ease;
        }

        .about-image:hover {
          transform: scale(1.05);
        }

        .about-badge {
          max-width: 420px;
          padding: 1.5rem 2rem;
          border-radius: 1.25rem;
          background: rgba(217, 119, 6, 0.15);
          border: 1px solid rgba(251, 191, 36, 0.4);
          backdrop-filter: blur(20px);
          position: relative;
          overflow: hidden;
        }

        .about-badge::before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(251, 191, 36, 0.1), transparent);
          animation: shimmerGold 3s ease-in-out infinite;
        }

        .about-badge-label {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          font-size: 0.8125rem;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 0.05em;
          color: #fbbf24;
          margin-bottom: 0.75rem;
        }

        .about-badge-icon {
          width: 20px;
          height: 20px;
          background: linear-gradient(135deg, #fbbf24, #f59e0b);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 12px;
        }

        .about-badge-text {
          font-family: 'Inter', sans-serif;
          font-size: 0.9375rem;
          line-height: 1.6;
          color: #fde68a;
        }

        @media screen and (max-width: 1024px) {
          .about-grid {
            grid-template-columns: 1fr;
            gap: 3rem;
          }

          .about-title {
            font-size: 2.5rem;
          }
        }

        @media screen and (max-width: 768px) {
          .about-section {
            padding: 4rem 1rem;
          }

          .about-title {
            font-size: 2rem;
          }

          .about-para {
            font-size: 1rem;
          }
        }
      `}</style>

      <div className="about-grid">
        <div className="about-copy">
          <span className="about-kicker">The Future of Art Collection</span>
          <h2 className="about-title">What is ArtGuardian?</h2>
          
          <p className="about-para">
            ArtGuardian is a revolutionary blockchain-powered marketplace designed to protect 
            the integrity and value of fine art in the digital age. Every artwork listed on our 
            platform is linked to a unique, immutable token that records its origin, complete 
            ownership history, and all transaction events—forever.
          </p>
          
          <p className="about-para">
            We're solving one of the art world's most persistent challenges: fraud and forgery. 
            By combining rigorous seller verification with transparent blockchain records, we create 
            a single, tamper-proof source of truth that collectors, galleries, and artists can trust 
            without hesitation.
          </p>
          

          <div className="about-highlight-box">
            <div className="about-highlight-title">🔐 Built on Trust</div>
            <p className="about-highlight-text">
              Every transaction is secured by smart contracts. Every artwork carries an 
              unbreakable digital certificate. Every creator is verified and protected.
            </p>
          </div>
        </div>

        <div className="about-visual">
          <div className="about-image-wrapper">
            <img
              src={getto}
              alt="ArtGuardian platform showcase"
              className="about-image"
            />
          </div>
          
          <div className="about-badge">
            <div className="about-badge-label">
              <span className="about-badge-icon">✓</span>
              On-Chain Guarantee
            </div>
            <p className="about-badge-text">
              Each artwork is paired with a verifiable blockchain record, preserving its complete 
              story from studio to collector—immutable, transparent, and permanent.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;