
import { useNavigate } from 'react-router-dom'; // ✅ added
import React, { useState, useEffect } from 'react';
import styles from './nav-search-bar.module.css';
import trademelogo from '../../pages/main-search-page/search-page-components/images/trademelogo.png';
import axios from 'axios';


export default function NavSearchBar({onSearchResults}) {

    const navigate = useNavigate(); // ✅ added
    const [value, setValue] = useState('');
    const [inputValue, setInputValue] = useState('');


    const handleKeyDown = async (event) => {
        if (event.key === 'Enter') {
            event.preventDefault(); // Preventing default form submission on Enter key
            try {
                const response = await axios.post('http://localhost:3000/homepageSearch', {
                    search: inputValue
                }); // Send POST request to the backend with the search input
                const data = response.data;

                Object.entries(data).forEach(([key, value]) => {
                    if (typeof value === 'object' && value !== null) {
                        console.log(`${key}: ${JSON.stringify(value, null, 2)}`);
                    } else {
                        console.log(`${key}: ${value}`);
                    }
                });
                // Log all key-value pairs of the response data
                onSearchResults(data); // Pass search results back to the parent component or handler
                // alert(response.data);
            } catch (err) {
                console.error("Failed to search:", err.message);
            }
        };
    }


    return (
        <div className={styles.mainNavContainer}>
            <div className={styles.topSectionContainer}>
                <div className={styles.logoDiv}>
                    <img src={trademelogo} alt="" className={styles.logo} />
                </div>
                <div>
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" className={styles.searchIcon}>
                        <path d="M19 19L14.65 14.65M17 9C17 13.4183 13.4183 17 9 17C4.58172 17 1 13.4183 1 9C1 4.58172 4.58172 1 9 1C13.4183 1 17 4.58172 17 9Z" stroke="#2F2C28" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    <input type="text" name="" id="" className={styles.searchBar} placeholder='Search all of Trade' onChange={(e) => setInputValue(e.target.value)} onKeyDown={handleKeyDown}
        value={inputValue}/>
                </div>
                <div className={styles.navLinks}>
                    <a href="" className={styles.singleNav}>Categories</a>
                    <a href="" className={styles.singleNav}>Watchlist</a>
                    <a href="" className={styles.singleNav}>Favourites</a>
                    <a onClick={() => navigate('/compare')} className={styles.singleNav} style={{ cursor: 'pointer' }}>Compare</a>
                    <a href="" className={styles.singleNav}>My Trade me</a>
                </div>
                <div className={styles.categoryIconDiv}>
                    <svg className={styles.categoryIcon} width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M20 22.5H4C3.73478 22.5 3.48043 22.3946 3.29289 22.2071C3.10536 22.0196 3 21.7652 3 21.5V3.5C3 3.23478 3.10536 2.98043 3.29289 2.79289C3.48043 2.60536 3.73478 2.5 4 2.5H20C20.2652 2.5 20.5196 2.60536 20.7071 2.79289C20.8946 2.98043 21 3.23478 21 3.5V21.5C21 21.7652 20.8946 22.0196 20.7071 22.2071C20.5196 22.3946 20.2652 22.5 20 22.5ZM19 20.5V4.5H5V20.5H19ZM8 7.5H16V9.5H8V7.5ZM8 11.5H16V13.5H8V11.5ZM8 15.5H16V17.5H8V15.5Z" fill="#2F2C28" />
                    </svg>
                </div>
                <div className={styles.watchlistIconDiv}>
                    <svg className={styles.watchlistIcon} width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g clipPath="url(#clip0_99_3696)">
                            <path d="M24.5 9V10.5H14.2109C13.9297 9.57812 13.6484 8.66797 13.3672 7.76953C13.0859 6.87109 12.7969 5.95703 12.5 5.02734C12.2109 5.94922 11.9258 6.85938 11.6445 7.75781C11.3633 8.65625 11.0781 9.57031 10.7891 10.5H4.90625C5.70312 11.1094 6.49219 11.7188 7.27344 12.3281C8.05469 12.9375 8.84766 13.543 9.65234 14.1445C9.33984 15.1133 9.03516 16.0742 8.73828 17.0273C8.44141 17.9805 8.14453 18.9453 7.84766 19.9219L12.5 16.3359V18.2344L5 24L7.90625 14.6953L0.5 9H9.6875L12.5 0L15.3125 9H24.5ZM14 13.5H24.5V15H14V13.5ZM14 18H24.5V19.5H14V18Z" fill="#2F2C28" />
                        </g>
                        <defs>
                            <clipPath id="clip0_99_3696">
                                <rect width="24" height="24" fill="white" transform="translate(0.5)" />
                            </clipPath>
                        </defs>
                    </svg>
                </div>
                <div className={styles.favouritesIconDiv}>
                    <svg width="20" height="19" viewBox="0 0 20 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M10.1 16.05L10 16.15L9.89 16.05C5.14 11.74 2 8.89 2 6C2 4 3.5 2.5 5.5 2.5C7.04 2.5 8.54 3.5 9.07 4.86H10.93C11.46 3.5 12.96 2.5 14.5 2.5C16.5 2.5 18 4 18 6C18 8.89 14.86 11.74 10.1 16.05ZM14.5 0.5C12.76 0.5 11.09 1.31 10 2.58C8.91 1.31 7.24 0.5 5.5 0.5C2.42 0.5 0 2.91 0 6C0 9.77 3.4 12.86 8.55 17.53L10 18.85L11.45 17.53C16.6 12.86 20 9.77 20 6C20 2.91 17.58 0.5 14.5 0.5Z" fill="#2F2C28" />
                    </svg>
                </div>
                <div className={styles.compareIconDiv}>
                    <svg width="16" height="21" viewBox="0 0 16 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M7 18.5H1.616C1.15533 18.5 0.771 18.3461 0.463 18.038C0.155 17.73 0.000666667 17.3454 0 16.8841V4.11605C0 3.65538 0.154333 3.27105 0.463 2.96305C0.771667 2.65505 1.156 2.50072 1.616 2.50005H7V0.77005C7 0.627383 7.04767 0.50805 7.143 0.41205C7.23833 0.31605 7.35733 0.268383 7.5 0.26905C7.64267 0.269717 7.76167 0.317716 7.857 0.41305C7.95233 0.508383 8 0.62705 8 0.76905V20.2311C8 20.3731 7.95233 20.4917 7.857 20.587C7.76167 20.6824 7.64267 20.7304 7.5 20.7311C7.35733 20.7317 7.23833 20.6837 7.143 20.587C7.04767 20.4904 7 20.3717 7 20.2311V18.5ZM1 16.5H7V9.30805L1 16.5ZM10 18.5V10.5L15 16.5V4.11605C15 3.96205 14.936 3.82072 14.808 3.69205C14.68 3.56338 14.5387 3.49938 14.384 3.50005H10V2.50005H14.385C14.845 2.50005 15.229 2.65438 15.537 2.96305C15.845 3.27172 15.9993 3.65605 16 4.11605V16.885C16 17.345 15.8457 17.7294 15.537 18.038C15.2283 18.3467 14.8443 18.5007 14.385 18.5H10Z" fill="#2F2C28" />
                    </svg>
                </div>
                <div className={styles.myTradeMeIconDiv}>
                    <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect x="0.5" y="0.5" width="24" height="24" rx="12" fill="#DDF6C9" />
                        <path d="M7.73438 18.5V7.04688H11.6797C12.5703 7.04688 13.25 7.10156 13.7188 7.21094C14.375 7.36198 14.9349 7.63542 15.3984 8.03125C16.0026 8.54167 16.4531 9.19531 16.75 9.99219C17.0521 10.7839 17.2031 11.6901 17.2031 12.7109C17.2031 13.5807 17.1016 14.3516 16.8984 15.0234C16.6953 15.6953 16.4349 16.2526 16.1172 16.6953C15.7995 17.1328 15.4505 17.4792 15.0703 17.7344C14.6953 17.9844 14.2396 18.1745 13.7031 18.3047C13.1719 18.4349 12.5599 18.5 11.8672 18.5H7.73438ZM9.25 17.1484H11.6953C12.4505 17.1484 13.0417 17.0781 13.4688 16.9375C13.901 16.7969 14.2448 16.599 14.5 16.3438C14.8594 15.9844 15.138 15.5026 15.3359 14.8984C15.5391 14.2891 15.6406 13.5521 15.6406 12.6875C15.6406 11.4896 15.4427 10.5703 15.0469 9.92969C14.6562 9.28385 14.1797 8.85156 13.6172 8.63281C13.2109 8.47656 12.5573 8.39844 11.6562 8.39844H9.25V17.1484Z" fill="#A0D875" />
                    </svg>
                </div>
            </div>
            <div className={styles.secondNavBarDiv}>
                <a href="" className={styles.linkList}>Browse Marketplace</a>
                <a href="" className={styles.linkList}>Stores</a>
                <a href="" className={styles.linkList}>Deals</a>
                <a href="" className={styles.linkList}>Book a courier</a>

                <a href="" className={styles.linkListItem}>List an Item</a>
            </div>
        </div>
    );
}