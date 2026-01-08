import React, { useEffect } from 'react';
import 'aos/dist/aos.css';
import AOS from 'aos';

const HomeInfo = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <div className="home-container">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;600;700;900&family=Inter:wght@300;400;500;600&display=swap');

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

        @keyframes fadeInDown {
          from {
            opacity: 0;
            transform: translateY(-30px);
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
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-20px);
          }
        }

        @keyframes rotateGradient {
          0% {
            transform: rotate(0deg);
          }
          100% {
            transform: rotate(360deg);
          }
        }

        @keyframes pulseGlow {
          0%, 100% {
            box-shadow: 0 0 20px rgba(251, 191, 36, 0.3), 0 0 40px rgba(245, 158, 11, 0.2);
          }
          50% {
            box-shadow: 0 0 30px rgba(251, 191, 36, 0.5), 0 0 60px rgba(245, 158, 11, 0.3);
          }
        }

        .home-container {
          min-height: 100vh;
          padding: 6rem 1.5rem 4rem;
          background: linear-gradient(135deg, #0f172a 0%, #1e293b 30%, #422006 70%, #78350f 100%);
          position: relative;
          overflow: hidden;
          display: flex;
          align-items: center;
        }

        .home-container::before {
          content: '';
          position: absolute;
          top: -50%;
          left: -50%;
          width: 200%;
          height: 200%;
          background: 
            radial-gradient(circle at 20% 30%, rgba(251, 191, 36, 0.15), transparent 40%),
            radial-gradient(circle at 80% 70%, rgba(245, 158, 11, 0.12), transparent 40%),
            radial-gradient(circle at 50% 50%, rgba(217, 119, 6, 0.08), transparent 50%);
          animation: rotateGradient 30s linear infinite;
          pointer-events: none;
        }

        .home-container::after {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: 
            repeating-linear-gradient(
              90deg,
              transparent,
              transparent 2px,
              rgba(251, 191, 36, 0.03) 2px,
              rgba(251, 191, 36, 0.03) 4px
            ),
            repeating-linear-gradient(
              0deg,
              transparent,
              transparent 2px,
              rgba(251, 191, 36, 0.03) 2px,
              rgba(251, 191, 36, 0.03) 4px
            );
          pointer-events: none;
        }

        .hero-content {
          max-width: 1400px;
          width: 100%;
          margin: 0 auto;
          display: grid;
          grid-template-columns: 1.2fr 1fr;
          gap: 4rem;
          align-items: center;
          position: relative;
          z-index: 1;
        }

        .hero-text {
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
        }

        .hero-badge {
          display: inline-flex;
          align-items: center;
          gap: 0.75rem;
          padding: 0.75rem 1.5rem;
          border-radius: 999px;
          background: rgba(251, 191, 36, 0.1);
          border: 2px solid rgba(251, 191, 36, 0.3);
          width: fit-content;
          animation: fadeInDown 0.8s ease-out, pulseGlow 3s ease-in-out infinite;
        }

        .badge-icon {
          font-size: 1.5rem;
          animation: float 3s ease-in-out infinite;
        }

        .badge-text {
          font-family: 'Inter', sans-serif;
          font-size: 0.875rem;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 0.1em;
          background: linear-gradient(135deg, #fbbf24, #f59e0b, #d97706);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .hero-title {
          font-family: 'Playfair Display', serif;
          font-size: 4rem;
          font-weight: 900;
          line-height: 1.15;
          margin: 0;
          animation: fadeInUp 1s ease-out 0.2s both;
        }

        .title-line-1 {
          display: block;
          color: #fef3c7;
          text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
        }

        .title-line-2 {
          display: block;
          background: linear-gradient(135deg, #fbbf24 0%, #f59e0b 50%, #d97706 100%);
          background-size: 200% 200%;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          animation: shimmerGold 3s ease-in-out infinite;
        }

        .title-line-3 {
          display: block;
          color: #fef3c7;
          text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
        }

        .hero-description {
          font-family: 'Inter', sans-serif;
          font-size: 1.125rem;
          line-height: 1.8;
          color: #fde68a;
          max-width: 580px;
          animation: fadeInUp 1.2s ease-out 0.4s both;
        }

        .hero-tagline {
          font-family: 'Playfair Display', serif;
          font-size: 1.375rem;
          font-style: italic;
          color: #fbbf24;
          margin-top: 0.5rem;
          animation: fadeInUp 1.4s ease-out 0.6s both;
        }

        .hero-features {
          display: flex;
          flex-wrap: wrap;
          gap: 1rem;
          animation: fadeInUp 1.6s ease-out 0.8s both;
        }

        .feature-pill {
          padding: 0.75rem 1.5rem;
          border-radius: 999px;
          font-family: 'Inter', sans-serif;
          font-size: 0.9375rem;
          font-weight: 500;
          background: rgba(217, 119, 6, 0.15);
          border: 1px solid rgba(251, 191, 36, 0.3);
          color: #fde68a;
          transition: all 0.3s ease;
        }

        .feature-pill:hover {
          background: rgba(251, 191, 36, 0.25);
          border-color: rgba(251, 191, 36, 0.6);
          transform: translateY(-2px);
        }

        .hero-cta {
          display: flex;
          flex-wrap: wrap;
          gap: 1rem;
          margin-top: 1rem;
          animation: fadeInUp 1.8s ease-out 1s both;
        }

        .cta-button {
          padding: 1rem 2.5rem;
          border-radius: 999px;
          font-family: 'Inter', sans-serif;
          font-size: 1rem;
          font-weight: 600;
          letter-spacing: 0.025em;
          border: none;
          cursor: pointer;
          transition: all 0.3s ease;
          text-decoration: none;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          position: relative;
          overflow: hidden;
        }

        .cta-button::before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.3), transparent);
          transition: left 0.5s ease;
        }

        .cta-button:hover::before {
          left: 100%;
        }

        .cta-primary {
          background: linear-gradient(135deg, #fbbf24, #f59e0b, #d97706);
          color: #1f2937;
          box-shadow: 0 10px 40px rgba(251, 191, 36, 0.4);
        }

        .cta-primary:hover {
          transform: translateY(-3px);
          box-shadow: 0 15px 50px rgba(251, 191, 36, 0.6);
        }

        .cta-secondary {
          background: rgba(30, 41, 59, 0.8);
          border: 2px solid rgba(251, 191, 36, 0.5);
          color: #fde68a;
          backdrop-filter: blur(10px);
        }

        .cta-secondary:hover {
          transform: translateY(-3px);
          background: rgba(217, 119, 6, 0.2);
          border-color: rgba(251, 191, 36, 0.8);
          box-shadow: 0 10px 30px rgba(251, 191, 36, 0.3);
        }

        .hero-visual {
          position: relative;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .blockchain-grid {
          width: 100%;
          max-width: 500px;
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 1.25rem;
        }

        .grid-block {
          background: rgba(217, 119, 6, 0.15);
          backdrop-filter: blur(10px);
          border: 2px solid rgba(251, 191, 36, 0.3);
          border-radius: 1.5rem;
          padding: 2rem 1.5rem;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: 0.75rem;
          transition: all 0.3s ease;
          animation: fadeInUp 1s ease-out both;
        }

        .grid-block:nth-child(1) { animation-delay: 0.2s; }
        .grid-block:nth-child(2) { animation-delay: 0.4s; }
        .grid-block:nth-child(3) { animation-delay: 0.6s; }
        .grid-block:nth-child(4) { animation-delay: 0.8s; }

        .grid-block:hover {
          background: rgba(251, 191, 36, 0.25);
          border-color: rgba(251, 191, 36, 0.6);
          transform: translateY(-10px);
          box-shadow: 0 20px 40px rgba(251, 191, 36, 0.3);
        }

        .block-icon {
          font-size: 3rem;
          filter: drop-shadow(0 0 10px rgba(251, 191, 36, 0.5));
        }

        .block-label {
          font-family: 'Inter', sans-serif;
          font-size: 1rem;
          font-weight: 600;
          color: #fbbf24;
          text-align: center;
        }

        .block-value {
          font-family: 'Inter', sans-serif;
          font-size: 0.875rem;
          color: #fde68a;
          text-align: center;
        }

        @media screen and (max-width: 1024px) {
          .hero-content {
            grid-template-columns: 1fr;
            gap: 3rem;
          }

          .hero-title {
            font-size: 3.5rem;
          }

          .hero-visual {
            order: -1;
          }
        }

        @media screen and (max-width: 768px) {
          .home-container {
            padding: 5rem 1rem 3rem;
          }

          .hero-title {
            font-size: 2.5rem;
          }

          .hero-description {
            font-size: 1rem;
          }

          .hero-tagline {
            font-size: 1.125rem;
          }

          .blockchain-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 1rem;
          }

          .grid-block {
            padding: 1.5rem 1rem;
          }

          .block-icon {
            font-size: 2.5rem;
          }

          .cta-button {
            width: 100%;
          }
        }
      `}</style>

      <div className="hero-content">
        <div className="hero-text" data-aos="fade-right">
          <div className="hero-badge">
            <span className="badge-icon">🎨</span>
            <span className="badge-text">Blockchain-Secured Art</span>
          </div>

          <h1 className="hero-title">
            <span className="title-line-1">Preserve the Legacy</span>
            <span className="title-line-2">of Authentic Art</span>
            <span className="title-line-3">with Blockchain</span>
          </h1>

          <p className="hero-description">
            Where every brushstroke is immortalized on-chain. ArtGuardian combines 
            the timeless beauty of fine art with the unbreakable security of blockchain 
            technology, creating an immutable record of authenticity for collectors worldwide.
          </p>

          <p className="hero-tagline">
            "True art deserves eternal protection."
          </p>

          <div className="hero-features">
            <span className="feature-pill">🔐 Cryptographic Authenticity</span>
            <span className="feature-pill">♾️ Permanent Provenance</span>
            <span className="feature-pill">💎 Artist Royalties Forever</span>
          </div>

          <div className="hero-cta">
            <a href="#About" className="cta-button cta-primary">
              Discover the Platform
            </a>
            <a href="/products" className="cta-button cta-secondary">
              Explore Gallery
            </a>
          </div>
        </div>

        <div className="hero-visual" data-aos="fade-left" data-aos-delay="200">
          <div className="blockchain-grid">
            <div className="grid-block">
              <span className="block-icon">🎨</span>
              <span className="block-label">Original Art</span>
              <span className="block-value">100% Verified</span>
            </div>
            <div className="grid-block">
              <span className="block-icon">🔗</span>
              <span className="block-label">Blockchain</span>
              <span className="block-value">Immutable</span>
            </div>
            <div className="grid-block">
              <span className="block-icon">👨‍🎨</span>
              <span className="block-label">Artists</span>
              <span className="block-value">500+ Creators</span>
            </div>
            <div className="grid-block">
              <span className="block-icon">🌍</span>
              <span className="block-label">Global</span>
              <span className="block-value">50+ Countries</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeInfo;