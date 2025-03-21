import React, { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';

// Navbar Component
const Navbar = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <nav style={{
      backgroundColor: 'rgba(92, 92, 153, 0.85)',
      padding: windowWidth <= 768 ? '10px 2%' : '15px 5%',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      position: 'sticky',
      top: 0,
      zIndex: 1000,
      boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
      backdropFilter: 'blur(5px)',
    }}>
      <h1 style={{
        color: '#FFFFFF',
        fontSize: windowWidth <= 768 ? '22px' : '28px',
        margin: 0,
        cursor: 'pointer',
        fontWeight: 'bold',
        letterSpacing: '1px',
        transition: 'font-size 0.3s ease',
      }}>
        CompanyName
      </h1>
      <div style={{
        display: 'flex',
        gap: windowWidth <= 768 ? '20px' : '30px',
        alignItems: 'center',
      }}>
        <span 
          style={{ 
            color: '#E6F0FF', 
            cursor: 'pointer',
            fontSize: windowWidth <= 768 ? '20px' : '24px',
            transition: 'transform 0.3s ease',
          }}
          onMouseEnter={(e) => e.target.style.transform = 'scale(1.2)'}
          onMouseLeave={(e) => e.target.style.transform = 'scale(1)'}
          role="button"
          tabIndex={0}
          aria-label="Home"
          onKeyDown={(e) => e.key === 'Enter' && navigate('/')}
        >🏠</span>
        <span 
          style={{ 
            color: '#E6F0FF', 
            cursor: 'pointer',
            fontSize: windowWidth <= 768 ? '20px' : '24px',
            transition: 'transform 0.3s ease',
          }}
          onMouseEnter={(e) => e.target.style.transform = 'scale(1.2)'}
          onMouseLeave={(e) => e.target.style.transform = 'scale(1)'}
          role="button"
          tabIndex={0}
          aria-label="Contact"
          onKeyDown={(e) => e.key === 'Enter' && navigate('/contact')}
        >📞</span>
        <span 
          style={{ 
            color: '#E6F0FF', 
            cursor: 'pointer',
            fontSize: windowWidth <= 768 ? '20px' : '24px',
            transition: 'transform 0.3s ease',
          }}
          onMouseEnter={(e) => e.target.style.transform = 'scale(1.2)'}
          onMouseLeave={(e) => e.target.style.transform = 'scale(1)'}
          role="button"
          tabIndex={0}
          aria-label="Gallery"
          onKeyDown={(e) => e.key === 'Enter' && navigate('/gallery')}
        >📷</span>
      </div>
    </nav>
  );
};

// Hero Section Component
const HeroSection = ({ currentSlide, slides }) => {
  const navigate = useNavigate();

  const handleCompareClick = () => {
    document.getElementById('categories')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div style={{
      height: '70vh',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      padding: '20px',
      textAlign: 'center',
      position: 'relative',
      overflow: 'hidden',
      zIndex: 1,
    }}>
      <h1 style={{
        color: '#FFFFFF',
        fontSize: window.innerWidth <= 768 ? '32px' : '56px',
        margin: '0 0 30px',
        fontWeight: 'bold',
        textShadow: '0 2px 8px rgba(0,0,0,0.3)',
        animation: 'fadeInScale 1.5s ease-in-out',
      }}>
        {slides[currentSlide].tagline}
      </h1>
      <button
        onClick={handleCompareClick}
        style={{
          backgroundColor: slides[currentSlide].buttonColor,
          color: '#FFFFFF',
          border: 'none',
          padding: window.innerWidth <= 768 ? '12px 25px' : '18px 40px',
          borderRadius: '30px',
          fontSize: window.innerWidth <= 768 ? '18px' : '20px',
          fontWeight: 'bold',
          cursor: 'pointer',
          transition: 'all 0.4s ease',
          boxShadow: '0 6px 15px rgba(0,0,0,0.25)',
        }}
        onMouseEnter={(e) => {
          e.target.style.transform = 'scale(1.1)';
          e.target.style.boxShadow = '0 8px 20px rgba(0,0,0,0.3)';
          e.target.style.backgroundColor = '#5C5C99';
        }}
        onMouseLeave={(e) => {
          e.target.style.transform = 'scale(1)';
          e.target.style.boxShadow = '0 6px 15px rgba(0,0,0,0.25)';
          e.target.style.backgroundColor = slides[currentSlide].buttonColor;
        }}
        aria-label="Compare Products Now"
      >
        Compare Now
      </button>
      <div style={{
        marginTop: '20px',
        color: '#E6F0FF',
        fontSize: window.innerWidth <= 768 ? '14px' : '16px',
        animation: 'bounce 2s infinite',
      }}>
        Scroll to Explore Categories ↓
      </div>
      <style jsx>{`
        @keyframes fadeInScale {
          from { opacity: 0; transform: scale(0.9); }
          to { opacity: 1; transform: scale(1); }
        }
        @keyframes bounce {
          0%, 20%, 50%, 80%, 100% { transform: translateY(0); }
          40% { transform: translateY(-10px); }
          60% { transform: translateY(-5px); }
        }
      `}</style>
    </div>
  );
};

// Category Card Component
const CategoryCard = ({ title, imageUrl }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const cardRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
      { threshold: 0.2 }
    );
    if (cardRef.current) observer.observe(cardRef.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleClick = () => {
    navigate(`/category/${title.toLowerCase()}`);
  };

  return (
    <div 
      ref={cardRef}
      style={{
        backgroundColor: 'rgba(255, 255, 255, 0.95)',
        borderRadius: '12px',
        padding: '20px',
        margin: windowWidth <= 768 ? '0 10px' : '0 15px',
        width: windowWidth <= 768 ? '200px' : '250px',
        textAlign: 'center',
        boxShadow: isHovered 
          ? '0 10px 25px rgba(92, 92, 153, 0.3)' 
          : '0 4px 10px rgba(0,0,0,0.15)',
        transition: 'all 0.4s ease',
        opacity: isVisible ? 1 : 0,
        transform: isVisible 
          ? 'translateY(0) scale(1)' 
          : 'translateY(60px) scale(0.95)',
        cursor: 'pointer',
        border: '1px solid rgba(230, 240, 255, 0.5)',
        position: 'relative',
        overflow: 'hidden',
        backdropFilter: 'blur(3px)',
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={handleClick}
      role="button"
      tabIndex={0}
      aria-label={`View ${title} category`}
      onKeyDown={(e) => e.key === 'Enter' && handleClick()}
    >
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        background: isHovered ? 'rgba(92, 92, 153, 0.15)' : 'transparent',
        transition: 'background 0.4s ease',
        zIndex: 0,
      }}></div>
      <img 
        src={imageUrl} 
        alt={title}
        loading="lazy"
        style={{
          width: '100%',
          height: 'auto',
          maxHeight: windowWidth <= 768 ? '120px' : '160px',
          objectFit: 'cover',
          borderRadius: '10px',
          marginBottom: '15px',
          transform: isHovered ? 'scale(1.1)' : 'scale(1)',
          transition: 'transform 0.4s ease',
          boxShadow: isHovered ? '0 6px 12px rgba(0,0,0,0.15)' : 'none',
          zIndex: 1,
        }}
      />
      <h3 style={{
        color: isHovered ? '#292966' : '#5C5C99',
        fontSize: windowWidth <= 768 ? '18px' : '20px',
        margin: 0,
        fontWeight: '600',
        transition: 'color 0.3s ease',
        zIndex: 1,
        position: 'relative',
      }}>{title}</h3>
    </div>
  );
};

// Footer Component
const Footer = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <footer style={{
      backgroundColor: 'rgba(92, 92, 153, 0.85)',
      padding: windowWidth <= 768 ? '20px 2%' : '30px 5%',
      textAlign: 'center',
      color: '#E6F0FF',
      fontSize: windowWidth <= 768 ? '14px' : '16px',
      position: 'relative',
      zIndex: 1,
      backdropFilter: 'blur(5px)',
      marginTop: '40px',
    }}>
      <div style={{ marginBottom: '10px' }}>
        <a href="/about" style={{ color: '#E6F0FF', textDecoration: 'none', margin: '0 10px' }}>About Us</a>
        <a href="/contact" style={{ color: '#E6F0FF', textDecoration: 'none', margin: '0 10px' }}>Contact</a>
        <a href="/privacy" style={{ color: '#E6F0FF', textDecoration: 'none', margin: '0 10px' }}>Privacy Policy</a>
      </div>
      <p style={{ margin: 0 }}>
        © {new Date().getFullYear()} CompanyName. All rights reserved.
      </p>
    </footer>
  );
};

// Homepage Component
const HomePage = () => {
  const categories = [
    { title: 'Jeans', imageUrl: 'https://via.placeholder.com/150?text=Jeans' },
  ];

  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      tagline: 'Discover Amazing Deals Today!',
      background: 'linear-gradient(135deg, #5C5C99, #A3A3CC, #E6F0FF)',
      buttonColor: '#292966',
    },
    {
      tagline: 'Instant Price Comparisons!',
      background: 'linear-gradient(135deg, #A3A3CC, #CCCCFF, #5C5C99)',
      buttonColor: '#5C5C99',
    },
    {
      tagline: 'Shop Smarter, Save More!',
      background: 'linear-gradient(135deg, #E6F0FF, #9999CC, #292966)',
      buttonColor: '#A3A3CC',
    },
  ];

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div style={{
      minHeight: '100vh',
      background: slides[currentSlide].background,
      transition: 'background 1.5s ease-in-out',
      fontFamily: "'Poppins', Arial, sans-serif",
      width: '100vw',
      margin: 0,
      padding: 0,
      boxSizing: 'border-box',
      overflowX: 'hidden',
      position: 'relative',
    }}>
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        background: 'radial-gradient(circle, rgba(255,255,255,0.1), transparent)',
        animation: 'pulse 6s infinite',
        zIndex: 0,
      }}></div>
      <Navbar />
      <HeroSection currentSlide={currentSlide} slides={slides} />
      <div id="categories" style={{
        padding: windowWidth <= 768 ? '30px 2%' : '50px 5%',
        textAlign: 'center',
        width: '100%',
        boxSizing: 'border-box',
        position: 'relative',
        zIndex: 1,
        background: 'linear-gradient(to bottom, rgba(0,0,0,0.2), rgba(0,0,0,0.4))',
      }}>
        <h2 style={{
          color: '#FFFFFF',
          fontSize: windowWidth <= 768 ? '28px' : '36px',
          marginBottom: windowWidth <= 768 ? '25px' : '40px',
          fontWeight: '700',
          letterSpacing: '0.5px',
          textShadow: '0 2px 4px rgba(0,0,0,0.3)',
          transition: 'font-size 0.3s ease',
        }}>
          Explore Our Categories
        </h2>
        <div style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: windowWidth <= 768 ? 'flex-start' : 'center',
          gap: windowWidth <= 768 ? '15px' : '30px',
          width: '100%',
          overflowX: windowWidth <= 768 ? 'auto' : 'hidden',
          padding: windowWidth <= 768 ? '0 10px' : '0',
          whiteSpace: 'nowrap',
        }}>
          {categories?.map((category, index) => (
            <CategoryCard
              key={index}
              title={category.title}
              imageUrl={category.imageUrl}
            />
          ))}
        </div>
      </div>
      <Footer />
      <style jsx>{`
        @keyframes pulse {
          0% { transform: scale(1); opacity: 0.5; }
          50% { transform: scale(1.2); opacity: 0.2; }
          100% { transform: scale(1); opacity: 0.5; }
        }
      `}</style>
    </div>
  );
};

export default HomePage;