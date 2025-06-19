import React from 'react';
import SearchPannel from './search-page-components/search-pannel.jsx';
import styles from './main-search-page.module.css';

export default function MainSearchPage() {
  return (
    <div className={styles.mainSearchContainer}>
      <SearchPannel/>
    </div>
  )
}
