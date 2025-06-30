import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainSearchPage from './pages/main-search-page/main-search-page';
import { ProductViewPage } from './pages/product-view-page/product-view-page';
import ComparisonPage from './pages/ComparisonPage/ComparisonPage';
import ComparisonTablePage from './pages/ComparisonTablePage/ComparisonTablePage';
import './App.module.css';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainSearchPage />} />
        <Route path="/product/:id" element={<ProductViewPage />} />
        <Route path="/compare" element={<ComparisonPage />} />
        <Route path="/comparison-table" element={<ComparisonTablePage />} />
      </Routes>
    </Router>
  );
}

export default App;