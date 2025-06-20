import React from 'react'
import styles from './search-pannel.module.css'

export default function SearchPannel() {
    return (
        <div className={styles.mainSearchContainer}>
            <div className={styles.searchButtonTopDiv}>
                <button className={styles.searchTopButtons}>Home and Living</button>
                <button className={styles.searchTopButtons}>Office</button>
                <button className={styles.searchTopButtons}>Kitchen</button>
                <button className={styles.searchTopButtons}>Outdoor/Garden</button>
                <button className={styles.searchTopButtons}>All Catagories</button>
            </div>
            {/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ */}
            <div className={styles.topSearchBoxes}>
                <input type="select" placeholder='Search by'/>
                <input type="select" placeholder='Location'/>
                <input type="select" placeholder='Condition'/>
            </div>
            {/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ */}
            <div className={styles.middleSearchContainers}>
                <input type="select" placeholder='Payment'/>
                <input type="select" placeholder='Shipping'/>
                <input type="select" placeholder='Price'/>
                <input type="select" placeholder='Clearance'/>
            </div>
            <div className={styles.searchKeywordsDiv}>
            <input type="search" placeholder='Search Keywords....'/>
            </div>
            <div className={styles.searchButtonDiv}>
                <button className={styles.searchButton}>Search</button>
            </div>
        </div>
    )
}
