import React from 'react';
import SearchPannel from './search-page-components/search-pannel.jsx';
import styles from './main-search-page.module.css';
import SearchDirectory from './search-page-components/search-directory.jsx';
import SearchBar from './search-page-components/search-bar.jsx';

export default function MainSearchPage() {
  return (
    <div className={styles.mainSearchContainer}>
        <SearchBar/>
      <SearchPannel/>
      <SearchDirectory/>
    </div>
  )
}
