import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainSearchPage from './pages/main-search-page/main-search-page';
import ComparisonPage from './pages/ComparisonPage';
import ComparisonTablePage from './pages/ComparisonTablePage';
// import productViewPage from './pages/product-view-page/product-view-page';
import './App.module.css';


function App() {


  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<MainSearchPage />} />
          <Route path="/compare" element={<ComparisonPage />} />
          <Route path="/comparison-table" element={<ComparisonTablePage />} />
          <Route path="/" element={<productViewPage />} />
        </Routes>
      </Router>
    </>
  )
}

export default App