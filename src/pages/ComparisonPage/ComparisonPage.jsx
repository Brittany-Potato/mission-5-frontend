import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ComparisonPanel from '../../components/ComparisonPanel';
import './ComparisonPage.css';

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
    <div className="comparison-page">
      <div className="comparison-header">
        <span className="compare-title">Compare with similar Items</span>
        <div className="close-button" onClick={() => navigate('/')}> 
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none">
            <path d="M6 6L18 18M6 18L18 6" stroke="#2F2C28" strokeWidth="1.5" strokeLinecap="round" />
          </svg>
        </div>
      </div>

      {itemsToCompare.length > 0 && (
        <ComparisonPanel items={itemsToCompare} onRemove={handleRemoveItem} />
      )}

      <button className="comparison-table-button" onClick={() => navigate('/comparison-table')}>
        Comparison Table
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none">
          <path d="M12 13L4 13L4 11L12 11L12 4L20 12L12 20L12 13Z" fill="#2D6EC2" />
        </svg>
      </button>

    </div>
  );
};

export default ComparisonPage;