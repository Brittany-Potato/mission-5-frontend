import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ComparisonPanel from '../components/ComparisonPanel';

const ComparisonPage = () => {
  const navigate = useNavigate();

  const [itemsToCompare, setItemsToCompare] = useState([
    {
      id: 1,
      image: '/dummyListingImages/dummyListing01.png',
      title: 'Product One',
      location: 'Auckland',
      closing: 'Closes in 2 days',
      price: '$99',
      condition: 'New',
      dimension: '20x10x5 cm',
      weight: '500g',
      color: 'Red',
      shipping: 'Free Shipping'
    },
    {
      id: 2,
      image: '/dummyListingImages/dummyListing02.png',
      title: 'Product Two',
      location: 'Wellington',
      closing: 'Closes in 5 days',
      price: '$89',
      condition: 'Used - Good',
      dimension: '25x12x6 cm',
      weight: '600g',
      color: 'Blue',
      shipping: 'Standard Shipping'
    },
    {
      id: 3,
      image: '/dummyListingImages/dummyListing03.png',
      title: 'Product Three',
      location: 'Christchurch',
      closing: 'Closes in 1 day',
      price: '$120',
      condition: 'New',
      dimension: '22x11x5 cm',
      weight: '550g',
      color: 'Green',
      shipping: 'Express Shipping'
    }
  ]);

  const handleRemoveItem = (id) => {
    const updatedItems = itemsToCompare.filter(item => item.id !== id);
    setItemsToCompare(updatedItems);
  };

  return (
    <div style={{ marginTop: '30px' }}>
      {itemsToCompare.length > 0 && (
        <ComparisonPanel items={itemsToCompare} onRemove={handleRemoveItem} />
      )}

      <button
        onClick={() => navigate('/comparison-table')}
        style={{
          position: 'fixed',
          bottom: '15px',
          right: '15px',
          padding: '12px 20px',
          color: '#2D6EC2',
          border: 'none',
          fontSize: '20px',
          fontWeight: '6 00',
          borderRadius: '4px',
          display: 'flex',
          alignItems: 'center',
          gap: '8px',
          cursor: 'pointer',
          zIndex: 1000
        }}
      >
        Comparison Table <span style={{ fontSize: '20px' }}>➔</span>
      </button>
    </div>
  );
};

export default ComparisonPage;
