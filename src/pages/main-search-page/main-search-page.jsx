import React from 'react';
import SearchPannel from './search-page-components/search-pannel.jsx';
import styles from './main-search-page.module.css';
import SearchDirectory from './search-page-components/search-directory.jsx';
import SearchBar from './search-page-components/search-bar.jsx';
import ProductGridDisplay from './search-page-components/product-grid-display.jsx';

export default function MainSearchPage() {
  return (
    <div className={styles.mainSearchContainer}>
        <SearchBar/>
      <SearchPannel/>
      <SearchDirectory/>
      <ProductGridDisplay/>
    </div>
  )
}
