import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import mainSearchPage from './pages/main-search-page';
import productViewPage from './pages/product-view-page';
import './App.css'

function App() {


  return (
    <>
    <Router>
    <Routes>
      <Route path="/" element={<mainSearchPage />} />
      <Route path="/" element={<productViewPage />} /> 
    </Routes>
    </Router>
    </>
  )
}

export default App
