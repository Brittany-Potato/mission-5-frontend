import React from 'react'
import styles from './search-bar.module.css';

export default function SearchBar() {
  return (
    <div className={styles.searchBarContainer}>
        <input type="search" placeholder='Search all...' className={styles.searchBar}/>
    </div>
  )
}
