import React, { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';

// Product Card Component (unchanged, omitted for brevity)
const ProductCard = ({name, imageUrl, price }) => {
  // ... (previous ProductCard code remains the same)
};

const Jeans = () => {
  const navigate = useNavigate();
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [sortOrder, setSortOrder] = useState('default');
  const [searchQuery, setSearchQuery] = useState('');

  const productsData = [
    { name: 'Slim Fit Jeans', imageUrl: 'https://via.placeholder.com/150?text=Slim+Fit+Jeans', price: 39.99 },
    { name: 'Rugged Jeans', imageUrl: 'https://via.placeholder.com/150?text=Rugged+Jeans', price: 45.00 },
    { name: 'Denim Classic', imageUrl: 'https://via.placeholder.com/150?text=Denim+Classic', price: 49.99 },
  ];

  const filteredAndSortedProducts = [...productsData]
    .filter(product => product.name.toLowerCase().includes(searchQuery.toLowerCase()))
    .sort((a, b) => {
      if (sortOrder === 'price-asc') return a.price - b.price;
      if (sortOrder === 'price-desc') return b.price - a.price;
      return 0;
    })
    .map(product => ({
      ...product,
      price: `$${product.price.toFixed(2)}`,
    }));

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleSearch = (e) => setSearchQuery(e.target.value);

  return (
    <div style={{
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #4A4A8A, #7A7AB8, #98A8D0)',
      fontFamily: "'Poppins', Arial, sans-serif",
      width: '100vw',
      margin: 0,
      padding: 0,
      boxSizing: 'border-box',
      overflowX: 'hidden',
      position: 'relative',
    }}>
      {/* Enhanced Background Effects */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        background: 'radial-gradient(circle at center, rgba(255,255,255,0.15), transparent 70%)',
        animation: 'pulse 8s infinite ease-in-out',
        zIndex: 0,
      }}></div>

      <div style={{
        padding: windowWidth <= 768 ? '20px 4%' : '40px 6%',
        position: 'relative',
        zIndex: 1,
      }}>
        {/* Header Section */}
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginBottom: '30px',
          flexWrap: 'wrap',
          gap: '15px',
        }}>
          <button
            onClick={() => navigate('/')}
            style={{
              backgroundColor: 'rgba(41, 41, 102, 0.9)',
              color: '#FFFFFF',
              border: 'none',
              padding: windowWidth <= 768 ? '8px 16px' : '10px 25px',
              borderRadius: '20px',
              fontSize: windowWidth <= 768 ? '14px' : '16px',
              cursor: 'pointer',
              transition: 'all 0.3s ease',
              boxShadow: '0 4px 15px rgba(0,0,0,0.2)',
              backdropFilter: 'blur(5px)',
            }}
            onMouseEnter={(e) => {
              e.target.style.transform = 'scale(1.05)';
              e.target.style.backgroundColor = '#5C5C99';
            }}
            onMouseLeave={(e) => {
              e.target.style.transform = 'scale(1)';
              e.target.style.backgroundColor = 'rgba(41, 41, 102, 0.9)';
            }}
            aria-label="Back to Home"
          >
            Home
          </button>
          <h1 style={{
            color: '#FFFFFF',
            fontSize: windowWidth <= 768 ? '28px' : '42px',
            margin: 0,
            fontWeight: '700',
            textShadow: '0 3px 12px rgba(0,0,0,0.3)',
            animation: 'fadeInSlide 1s ease-in-out',
            flex: '1',
            textAlign: 'center',
          }}>
            Jeans Collection
          </h1>
          <select
            value={sortOrder}
            onChange={(e) => setSortOrder(e.target.value)}
            style={{
              padding: windowWidth <= 768 ? '8px 12px' : '10px 15px',
              borderRadius: '20px',
              border: 'none',
              backgroundColor: 'rgba(255, 255, 255, 0.9)',
              color: '#4A4A8A',
              fontSize: windowWidth <= 768 ? '14px' : '16px',
              cursor: 'pointer',
              outline: 'none',
              boxShadow: '0 4px 15px rgba(0,0,0,0.2)',
              width: windowWidth <= 768 ? '120px' : '150px',
            }}
            aria-label="Sort products by price"
          >
            <option value="default">Sort By</option>
            <option value="price-asc">Price: Low</option>
            <option value="price-desc">Price: High</option>
          </select>
        </div>

        {/* Prominent Search Bar */}
        <div style={{
          maxWidth: '800px',
          margin: '0 auto 40px',
          position: 'relative',
          animation: 'fadeInSlide 1s ease-in-out 0.2s',
          animationFillMode: 'both',
        }}>
          <input
            type="text"
            value={searchQuery}
            onChange={handleSearch}
            placeholder="Search our jeans collection..."
            style={{
              width: '100%',
              padding: windowWidth <= 768 ? '12px 40px 12px 20px' : '16px 50px 16px 25px',
              borderRadius: '30px',
              border: 'none',
              backgroundColor: 'rgba(255, 255, 255, 0.95)',
              color: '#4A4A8A',
              fontSize: windowWidth <= 768 ? '16px' : '18px',
              boxShadow: '0 6px 20px rgba(0,0,0,0.15)',
              outline: 'none',
              transition: 'all 0.3s ease',
              fontWeight: '500',
            }}
            onFocus={(e) => {
              e.target.style.boxShadow = '0 8px 25px rgba(92,92,153,0.3)';
              e.target.style.transform = 'scale(1.02)';
            }}
            onBlur={(e) => {
              e.target.style.boxShadow = '0 6px 20px rgba(0,0,0,0.15)';
              e.target.style.transform = 'scale(1)';
            }}
            aria-label="Search jeans collection"
          />
          <span style={{
            position: 'absolute',
            right: windowWidth <= 768 ? '15px' : '20px',
            top: '50%',
            transform: 'translateY(-50%)',
            color: '#5C5C99',
            fontSize: windowWidth <= 768 ? '18px' : '22px',
            transition: 'color 0.3s ease',
          }}>
            🔍
          </span>
        </div>

        {/* Products Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: windowWidth <= 768 
            ? '1fr' 
            : windowWidth <= 1024 
              ? 'repeat(2, 1fr)' 
              : 'repeat(3, 1fr)',
          gap: windowWidth <= 768 ? '15px' : '25px',
          padding: '0 2%',
        }}>
          {filteredAndSortedProducts.map((product, index) => (
            <ProductCard
              key={index}
              name={product.name}
              imageUrl={product.imageUrl}
              price={product.price}
            />
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes pulse {
          0% { transform: scale(1); opacity: 0.4; }
          50% { transform: scale(1.1); opacity: 0.2; }
          100% { transform: scale(1); opacity: 0.4; }
        }
        @keyframes fadeInSlide {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </div>
  );
};

export default Jeans;