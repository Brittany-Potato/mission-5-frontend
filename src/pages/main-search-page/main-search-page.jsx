import React from 'react';
import SearchPannel from './search-page-components/search-pannel.jsx';
import styles from './main-search-page.module.css';
import SearchDirectory from './search-page-components/search-directory.jsx';
import SearchBar from './search-page-components/search-bar.jsx';
import ProductGridDisplay from './search-page-components/product-grid-display.jsx';
import NavSearchBar from '../../shared-components/nav-search-bar/nav-search-bar.jsx';

export default function MainSearchPage() {
    return (
        <div className={styles.mainSearchContainer}>
            <NavSearchBar/>
            <SearchBar />
            <SearchPannel />
            <SearchDirectory />
            <a href="" className={styles.moreLink}>More....</a>
            <p className={styles.resultsTitle}>Results</p>
            <ProductGridDisplay />
        </div>
    )
}
