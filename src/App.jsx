import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainSearchPage from './pages/main-search-page/main-search-page';
import { ProductViewPage } from './pages/product-view-page/product-view-page';
import './App.module.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainSearchPage />} />
        <Route path="/product/:id" element={<ProductViewPage />} />
      </Routes>
    </Router>
  );
}

export default App;