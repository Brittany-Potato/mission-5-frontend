import React from 'react';
import SearchPannel from './search-page-components/search-pannel.jsx';
import styles from './main-search-page.module.css';
import SearchDirectory from './search-page-components/search-directory.jsx';

export default function MainSearchPage() {
  return (
    <div className={styles.mainSearchContainer}>
      <SearchPannel/>
      <SearchDirectory/>
    </div>
  )
}
