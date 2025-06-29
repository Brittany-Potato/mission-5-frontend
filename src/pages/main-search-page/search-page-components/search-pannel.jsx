import React, { useState } from 'react'
import styles from './search-pannel.module.css'
import axios from 'axios'

export default function SearchPannel({ onSearchResults }) {

    const [selectButton, setSelectButton] = useState(false);

    const buttons = [
        { id: 'home', label: "Home and Living" },
        { id: 'office', label: "Office" },
        { id: 'kitchen', label: "Kitchen" },
        { id: 'outdoor', label: "Outdoor/Garden" },
        { id: 'all', label: "All Category" }
    ]

    async function handleClick() {
        console.log("Search button clicked");
        const searchPrompt = buildSearchPrompt(inputValue);
        console.log("Sending search prompt:", searchPrompt);

        const response = await axios.post('http://localhost:3000/homepageSearch', {
            search: searchPrompt
        }).then((response) => {
            const data = response.data;
            Object.entries(data).forEach(([key, value]) => {
                if (typeof value === 'object' && value !== null) {
                    console.log(`${key}: ${JSON.stringify(value, null, 2)}`);
                } else {
                    console.log(`${key}: ${value}`);
                }
            });
            onSearchResults(data);
        })
    }

    const [value, setValue] = useState('');
    const [inputValue, setInputValue] = useState({
        searchBy: '',
        title: '',
        location: '',
        condition: '',
        payment: '',
        shipping: '',
        price: '',
        clearance: '',

    });

    const handleKeyDown = async (event) => {
        if (event.key === 'Enter') {
            event.preventDefault();
            try {
                const response = await axios.post('http://localhost:3000/homepageSearch', {
                    search: buildSearchPrompt(inputValue)
                });
                const data = response.data;

                Object.entries(data).forEach(([key, value]) => {
                    if (typeof value === 'object' && value !== null) {
                        console.log(`${key}: ${JSON.stringify(value, null, 2)}`);
                    } else {
                        console.log(`${key}: ${value}`);
                    }
                });
                // console.log(response.data);
            } catch (err) {
                console.error("Failed to search:", err.message);
            }
        };
        onSearchResults(data);
    }

    const handleChange = (field, event) => {
        setInputValue(prev => ({
            ...prev,
            [field]: event.target.value,


        }));
    }

    function buildSearchPrompt(input) {
        let parts = [];

        if (input.searchBy) parts.push(`with these keywords: ${searchBy}`);
        if (input.title) parts.push(input.title);
        if (input.location) parts.push(`location is ${input.location}`);
        if (input.condition) parts.push(`that are ${input.condition}`);
        if (input.payment) parts.push(`paid by ${input.payment}`);
        if (input.shipping) parts.push(`with ${input.shipping}`);
        if (input.price) parts.push(`priced at between ${input.price}`);
        if (input.clearance) parts.push(`and if it is on ${input.clearance}`);

        return parts.join(`, `);
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
                <select className={styles.dropDownsearchBy} value={inputValue.searchBy} onChange={(e) => handleChange('searchBy', e)}>
                    <option value="">Search By</option>
                    <option value="location">Location</option>
                    <option value="Condition">Condition</option>
                    <option value="Payment">Payment</option>
                    <option value="Shipping">Shipping</option>
                    <option value="Price">Price</option>
                    <option value="Clearance">Clearance</option>
                </select>

                <select className={styles.dropDownLocation} value={inputValue.location} onChange={(e) => handleChange('location', e)}>
                    <option value="">Location</option>
                    <option value="Auckland">Auckland</option>
                    <option value="Hawkes Bay">Hawkes Bay</option>
                    <option value="Wellington">Wellington</option>
                    <option value="Tauranga">Tauranga</option>
                    <option value="Hamilton">Hamilton</option>
                    <option value="Christchurch">Christchurch</option>
                    <option value="Queenstown">Queenstown</option>
                    <option value="Taupo">Taupo</option>
                    <option value="Palmeston North">Palmeston North</option>
                </select>

                <select className={styles.dropDownCondition} value={inputValue.condition} onChange={(e) => handleChange('condition', e)}>
                    <option value="">Condition</option>
                    <option value="New">New</option>
                    <option value="Used">Used</option>
                </select>
            </div>
            {/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ */}
            <div className={styles.middleSearchContainers}>

                <select className={styles.dropDownPayment} value={inputValue.payment} onChange={(e) => handleChange('payment', e)}>
                    <option value="">Payment </option>
                    <option value="Eftpos">Eftpos</option>
                    <option value="Credit Card">Credit Card</option>
                    <option value="Paypal">Paypal</option>
                    <option value="Cash">Cash</option>
                    <option value="Check">Check</option>
                </select>

                <select className={styles.dropDownShipping} value={inputValue.shipping} onChange={(e) => handleChange('shipping', e)}>
                    <option value="">Shipping</option>
                    <option value="Courier">Courier</option>
                    <option value="Pick up">Pick up</option>
                    <option value="Free Shipping">Free Shipping</option>
                    <option value="Drop off">Drop off</option>
                </select>

                <select className={styles.dropDownPrice} value={inputValue.price} onChange={(e) => handleChange('price', e)}>
                    <option value="">Price</option>
                    <option value="$0 - $50">$0 - $50</option>
                    <option value="$50 - $100">$50 - $100</option>
                    <option value="$100 - $200">$100 - $200</option>
                    <option value="$200 +">$200 +</option>
                </select>

                <select className={styles.dropDownClearance} value={inputValue.clearance} onChange={(e) => handleChange('clearance', e)}>
                    <option value="">Clearance</option>
                    <option value="true">true</option>
                    <option value="false">false</option>
                </select>


            </div>
            <div className={styles.searchKeywordsDiv}>
                <input type="text" placeholder='Search Keywords....' className={styles.searchKeywords} onChange={(e) => handleChange('searchBy', e)}
                    value={inputValue.searchBy} />
            </div>
            <div className={styles.searchButtonDiv}>
                <button className={styles.searchButton} onClick={handleClick}>Search</button>
            </div>
        </div>
    )
}
