import React from 'react';
import styles from './nav-search-bar.module.css';
import trademelogo from '../../pages/main-search-page/search-page-components/images/trademelogo.png';

export default function NavSearchBar() {
  return (
    <div className={styles.mainNavContainer}>
    <div className={styles.topSectionContainer}>
        <div className={styles.logoDiv}>
            <img src={trademelogo} alt="" className={styles.logo}/>
        </div>
        <div>
            <input type="text" name="" id="" className={styles.searchBar} placeholder='Search all of Trade me'/>
        </div>
    </div>
    </div>
  )
}
