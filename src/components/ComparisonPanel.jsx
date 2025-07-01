import React from 'react';
import './ComparisonPanel.css';

const ComparisonPanel = ({ items, onRemove }) => {
  const attributes = ['Price', 'Condition', 'Dimension', 'Weight', 'Color', 'Shipping'];

  return (
    <div className="comparison-container">
      <div
        className="comparison-grid"
        style={{ gridTemplateColumns: `120px 2rem repeat(${items.length}, 300px)` }}
      >
        <div></div>
        <div></div>
        {items.map((item, idx) => (
        <div key={idx} className="grid-product-card">
        <img src={item.image} alt={item.title} />
        <div className="location-date">
        <span>{item.location}</span>
        <span>{item.closing}</span>
        </div>
        <h4>{item.title}</h4>
        <div className="buy-now">Buy Now</div>
        <div className="price">{item.price}</div>
        </div>
        ))}

        {attributes.map((attr, rowIndex) => {
          const isEvenRow = rowIndex % 2 === 0;
          const attrBg = isEvenRow ? 'attr-light' : 'attr-white';
          const valBg = isEvenRow ? 'val-light' : 'val-white';

          return (
            <React.Fragment key={`row-${rowIndex}`}>
              <div className={`attribute-cell ${attrBg}`}>{attr}</div>
              <div></div>
              {items.map((item, colIndex) => (
                <div key={`val-${rowIndex}-${colIndex}`} className={`value-cell ${valBg}`}>
                  {item[attr.toLowerCase()]}
                </div>
              ))}
            </React.Fragment>
          );
        })}

        <div></div>
        <div></div>
        {items.map((item) => (
          <div key={item.id} className="remove-btn-wrapper">
            <button className="remove-btn" onClick={() => onRemove(item.id)}>
              Remove
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ComparisonPanel;