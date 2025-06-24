import React from 'react';
import './ComparisonPanel.css';

const ComparisonPanel = ({ items, onRemove }) => {
  const attributes = ['Price', 'Condition', 'Dimension', 'Weight', 'Color', 'Shipping'];

  return (
    <div className="comparison-container">
      <div
        className="comparison-grid"
        style={{ gridTemplateColumns: `120px repeat(${items.length}, 268px)` }}
      >
        <div></div>
        {items.map((item, idx) => (
          <div key={idx} className="grid-product-card">
            <img src={item.image} alt={item.title} />
            <p>{item.location}</p>
            <p>{item.closing}</p>
            <h4>{item.title}</h4>
            <p>Buy Now</p>
            <strong>{item.price}</strong>
          </div>
        ))}

        {attributes.map((attr, rowIndex) => {
          const isEvenRow = rowIndex % 2 === 0;
          const attrBg = isEvenRow ? 'attr-light' : 'attr-white';
          const valBg = isEvenRow ? 'val-light' : 'val-white';

          return (
            <React.Fragment key={`row-${rowIndex}`}>
              <div className={`attribute-cell ${attrBg}`}>{attr}</div>
              {items.map((item, colIndex) => (
                <div key={`val-${rowIndex}-${colIndex}`} className={`value-cell ${valBg}`}>
                  {item[attr.toLowerCase()]}
                </div>
              ))}
            </React.Fragment>
          );
        })}

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
