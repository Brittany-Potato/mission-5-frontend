import React, { useState, useEffect } from 'react'
import SearchPannel from './search-page-components/search-pannel.jsx';
import styles from './main-search-page.module.css';
import SearchDirectory from './search-page-components/search-directory.jsx';
import SearchBar from './search-page-components/search-bar.jsx';
import ProductGridDisplay from './search-page-components/product-grid-display.jsx';
import NavSearchBar from '../../shared-components/nav-search-bar/nav-search-bar.jsx';
import Footer from '../../shared-components/footer/footer.jsx';

export default function MainSearchPage() {

    // Shared state for search results
    const [searchResults, setSearchResults] = useState([]);

    // Passing into search panel as a prop
    const handleSearchResults = (results) => {
        setSearchResults(results);
    };

    return (
        <div className={styles.mainSearchContainer}>
            <NavSearchBar onSearchResults={setSearchResults}/>
            <SearchBar onSearchResults={setSearchResults}/>
            <SearchPannel onSearchResults={setSearchResults}/>
            <SearchDirectory />
            <a href="" className={styles.moreLink}>More....</a>
            <p className={styles.resultsTitle}>Results</p>
            <ProductGridDisplay searchResults={searchResults} />
            <Footer/>
        </div>
    )
}
