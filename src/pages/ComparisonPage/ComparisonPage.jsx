import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import ComparisonPanel from '../../components/ComparisonPanel';
import './ComparisonPage.css';

const ComparisonPage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const productId = location.state?.productId;

  const [itemsToCompare, setItemsToCompare] = useState([]);

  useEffect(() => {
    if (productId) {
      fetch(`http://localhost:3000/product/${productId}`)
        .then(res => res.json())
        .then(data => {
          const newItem = {
            id: data._id,
            image: `/images/item1.jpg`, 
            title: data.title || 'Untitled',
            location: data.location || 'Auckland',
            closing: 'Closes in 3 days', 
            price: `$${data.price || 0}`,
            condition: data.condition || 'Unknown',
            dimension: data.dimension || '-',
            weight: data.weight || '-',
            color: data.color || 'N/A',
            shipping: data.shipping || 'N/A'
          };

          setItemsToCompare(prev => {
            const alreadyAdded = prev.some(item => item.id === newItem.id);
            return alreadyAdded ? prev : [...prev, newItem];
          });
        })
        .catch(err => console.error('❌ Failed to fetch product:', err));
    }
  }, [productId]);

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

      {itemsToCompare.length > 0 ? (
        <ComparisonPanel items={itemsToCompare} onRemove={handleRemoveItem} />
      ) : (
        <div className="empty-message">No item added to compare.</div>
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