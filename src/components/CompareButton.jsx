import React from 'react';
import './CompareButton.css';

const CompareButton = ({ onClick }) => (
  <button className="compare-btn" onClick={onClick}>
    <img
      src="/compare-icon.svg"
      alt="Compare"
      className="icon"
    />
    <span>Comparison List</span>
  </button>
);

export default CompareButton;