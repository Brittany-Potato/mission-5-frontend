import React, { useState, useEffect } from 'react';
import './ComparisonTablePage.css';
import NavSearchBar from '../../shared-components/nav-search-bar/nav-search-bar';

const ComparisonTablePage = () => {
  const [search, setSearch] = useState('');
  const [selectedItems, setSelectedItems] = useState([]);
  const [suggestions, setSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);

  useEffect(() => {
    fetch("http://localhost:3000/hello")
      .then((res) => res.json())
      .then((data) => console.log("✅ Backend response:", data))
      .catch((err) => console.error("❌ Failed to reach backend:", err));
  }, []);

  const handleAdd = async () => {
    const cleanedSearch = typeof search === 'string' ? search.trim() : '';
    if (!cleanedSearch || selectedItems.length >= 2) return;

    try {
      const response = await fetch('http://localhost:3000/homepageSearch', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ search: cleanedSearch }),
      });

      const data = await response.json();
      const match = data.results?.[0];

      if (match) {
        setSelectedItems([...selectedItems, match]);
        setSearch('');
        setSuggestions([]);
      } else {
        alert("No matching product found.");
      }
    } catch (err) {
      console.error('❌ Error fetching product:', err.message);
      alert("Failed to fetch product.");
    }
  };

  const handleRemove = (index) => {
    const updatedItems = [...selectedItems];
    updatedItems.splice(index, 1);
    setSelectedItems(updatedItems);
  };

  const handleSuggestionClick = (title) => {
    setSearch(title);
    setSuggestions([]);
    setShowSuggestions(false);
  };

  const handleSearchChange = async (e) => {
    const input = e.target.value;
    setSearch(input);
    setShowSuggestions(true);

    if (input.trim() === '') {
      setSuggestions([]);
      return;
    }

    try {
      const res = await fetch('http://localhost:3000/homepageSearch', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ search: input }),
      });

      const data = await res.json();
      const results = Array.isArray(data) ? data : data.results || [];
      setSuggestions(results.slice(0, 5));
    } catch (err) {
      console.error('Failed to fetch suggestions:', err);
      setSuggestions([]);
    }
  };

  const attributes = [
    { label: 'Listing Price', key: 'price' },
    { label: 'Condition', key: 'condition' },
    { label: 'Features', key: 'features' },
    { label: 'Description', key: 'description' },
    { label: 'Dimension', key: 'dimension' },
    { label: 'Weight', key: 'weight' },
    { label: 'Colour', key: 'colour' },
    { label: 'Seller Review', key: 'seller.review' },
    { label: 'Shipping', key: 'shipping' },
    { label: 'Payment', key: 'payment' },
    { label: 'Brand', key: 'brand' }
  ];

  return (
    <div>
      <NavSearchBar />
      <div className="comparison-header-section">
        <h2 className="comparison-heading">Comparison Table</h2>
        <div className="comparison-search-row">
          <div className="comparison-search-wrapper">
            <input
              type="text"
              placeholder="Search product by name, brand, categories"
              className="comparison-input"
              value={search}
              onChange={handleSearchChange}
              onFocus={() => setShowSuggestions(true)}
              onBlur={() => setTimeout(() => setShowSuggestions(false), 150)}
            />
            <button className="comparison-add-text" onClick={handleAdd}>Add</button>

            {showSuggestions && suggestions.length > 0 && (
              <ul className="suggestions-list">
                {suggestions.map((item, index) => (
                  <li key={index} onClick={() => handleSuggestionClick(item.title)}>
                    <div className="suggestion-item">
                      <img src={`/images/item${(index % 5) + 1}.jpg`} alt="thumb" className="suggestion-thumb" />
                      <div className="suggestion-text">
                        <div className="suggestion-title">{item.title}</div>
                        <div className="suggestion-date">Closes Fri, 9th July</div>
                      </div>
                      <div className="suggestion-price">
                        {item.price?.toString().includes('$') ? item.price : `$${item.price}`}
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            )}
          </div>

          <div className="selected-items-bar">
            {selectedItems.map((item, index) => (
              <React.Fragment key={index}>
                <div className="selected-item-box">
                  {item.title}
                  <button className="remove-button" onClick={() => handleRemove(index)}>×</button>
                </div>
                {index === 0 && selectedItems.length > 1 && (
                  <span className="vs-label">VS</span>
                )}
              </React.Fragment>
            ))}
          </div>
        </div>
      </div>

      <div className="comparison-image-row">
        <div className="attribute-spacer" />
        {selectedItems.map((item, index) => (
          <div key={index} className="card-wrapper">
            <div className="comparison-image-card">
              <img
                src={`/images/item${(index % 5) + 1}.jpg`}
                alt={item.title}
                className="comparison-card-image"
              />
              <div className="comparison-card-content">
                <div className="comparison-card-meta">
                  <span>{item.location || 'Auckland'}</span>
                  <span>Closes Fri, 9th July</span>
                </div>
                <div className="comparison-card-title">{item.title}</div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {selectedItems.length >= 1 ? (
        <div className="comparison-flex-container">
          {attributes.map((attr, i) => (
            <div key={i} className="comparison-row">
              <div className="attribute-cell">
                <div className="attribute-box">{attr.label}</div>
              </div>
              {selectedItems.map((item, j) => {
                const value = attr.key.includes('.')
                  ? attr.key.split('.').reduce((o, k) => (o ? o[k] : '—'), item)
                  : item[attr.key] || '—';
                return (
                  <div key={j} className="detail-cell">
                    {Array.isArray(value) ? (
                      <ul>{value.map((f, k) => <li key={k}>{f}</li>)}</ul>
                    ) : (
                      value
                    )}
                  </div>
                );
              })}
            </div>
          ))}
        </div>
      ) : (
        <div className="comparison-placeholder-message">
          Nothing to compare yet. Please add a product to get started.
        </div>
      )}

      <div className="back-button" onClick={() => window.history.back()}>
        <span className="back-arrow">←</span>
        <span className="back-text">Back</span>
      </div>
    </div>
  );
};

export default ComparisonTablePage;