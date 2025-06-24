import React from 'react';
import './ComparisonTablePage.css';

const ComparisonTablePage = () => {
  const items = [
    {
      title: 'Antique AND Comfortable double bed',
      price: '$800.00',
      condition: 'Used',
      feature: (
        <ul>
          <li>100% Brand New Ohio Double Wooden Bed Base - Natural</li>
          <li>Basic contemporary design</li>
          <li>Made with quality natural pine wood</li>
          <li>Strong & sturdy solid fixed slats</li>
          <li>No storage space</li>
          <li>Low maintenance required with matte finish</li>
          <li>Environmentally friendly material</li>
          <li>Best for kids rooms & spare rooms</li>
          <li>Fits a standard Double mattress</li>
        </ul>
      ),
      description:
        'This bed base exudes elegance through its clean lines and minimalist style. It uses natural wood finish with a touch of timeless charm. It is crafted with solid pine wood and comes with solid slats, providing a comfortable and supportive sleep. Designed for durability and style.',
      dimension: '188L X 140W X 61H',
      weight: '100KG',
      color: 'White',
      review: '(3★)',
      shipping: '$80.00',
      payment: 'Cash Only',
      brand: '———',
    },
    {
      title: 'Double Mattress and Base',
      price: '$1,200',
      condition: 'New',
      feature: (
        <ul>
          <li>** Simple yet elegant design</li>
          <li>** Upholstered in fabric</li>
          <li>** Comfort level: Medium</li>
          <li>** Bear weight 103 KG</li>
          <li>** With two rolling drawers</li>
        </ul>
      ),
      description:
        'This listing is for a Double Size 1390mm x 1910mm Mattress and NZ Made Base. Headboard not included. You get to choose the firmness of the mattress, and the base is upholstered in New Zealand Pine wood. Best for those who want medium to soft feel and extra storage.',
      dimension: '203L X 167W X 61H',
      weight: '103KG',
      color: 'Black',
      review: '(4★)',
      shipping: 'Free Shipping',
      payment: 'Afterpay, NZ Bank Deposit, Zip',
      brand: 'Dreamland lincoln',
    },
  ];

  const attributes = [
    'Listing Price',
    'Condition',
    'Feature',
    'Description',
    'Dimension',
    'Weight',
    'Color',
    'Seller Review',
    'Shipping',
    'Payment',
    'Brand',
  ];

  return (
    <div className="comparison-flex-container">
      {attributes.map((attribute, i) => (
        <div key={i} className={`comparison-row ${i % 2 === 0 ? 'row-light' : 'row-white'}`}>
          <div className="attribute-cell">
            <div className="attribute-box">{attribute}</div>
          </div>
          {items.map((item, j) => {
            const value =
              item[attribute.toLowerCase().replace(/\s/g, '')] ||
              item[attribute.toLowerCase()] ||
              '—';
            return (
              <div key={j} className="detail-cell">
                {value}
              </div>
            );
          })}
        </div>
      ))}
    </div>
  );
};

export default ComparisonTablePage;