import React from 'react'
import styles from './search-pannel.module.css'

export default function SearchPannel() {
    return (
        <div className={styles.mainSearchContainer}>
            {/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ */}
            <div className={styles.topSearchBoxes}>
                <input type="select" />
                <input type="select" />
                <input type="select" />
            </div>
            {/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ */}
            <div className={styles.middleSearchContainers}>
                <input type="select" />
                <input type="select" />
                <input type="select" />
                <input type="select" />
            </div>
            <div className={styles.searchKeywordsDiv}>
            <input type="search" />
            </div>
        </div>
    )
}
