import React, { useState } from 'react'
import styles from './search-pannel.module.css'

export default function SearchPannel() {

    const [selectButton, setSelectButton] = useState(false);

    const buttons = [
        { id: 'home', label: "Home and Living" },
        { id: 'office', label: "Office" },
        { id: 'kitchen', label: "Kitchen" },
        { id: 'outdoor', label: "Outdoor/Garden" },
        { id: 'all', label: "All Category" }
    ]

function handleClick() {
    console.log("Search button clicked");
}




    return (
        <div className={styles.mainSearchContainer}>
            <div className={styles.searchButtonTopDiv}>
                {buttons.map(({ id, label }) => {
                    return (
                        <button
                            key={id}
                            className={`${styles.searchTopButtons} ${selectButton === id ? styles.clicked : ''}`} onClick={() => setSelectButton(id)}>{label}</button>
                    )
                })}
            </div>
            {/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ */}
            <div className={styles.topSearchBoxes}>
                <input type="select" placeholder='Search by' />
                <input type="select" placeholder='Location' />
                <input type="select" placeholder='Condition' />
            </div>
            {/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ */}
            <div className={styles.middleSearchContainers}>
                <input type="select" placeholder='Payment' />
                <input type="select" placeholder='Shipping' />
                <input type="select" placeholder='Price' />
                <input type="select" placeholder='Clearance' />
            </div>
            <div className={styles.searchKeywordsDiv}>
                <input type="search" placeholder='Search Keywords....' className={styles.searchKeywords}/>
            </div>
            <div className={styles.searchButtonDiv}>
                <button className={styles.searchButton} onClick={handleClick}>Search</button>
            </div>
        </div>
    )
}
