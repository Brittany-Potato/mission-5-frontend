import React, { useState } from 'react'
import styles from './search-bar.module.css';
import axios from 'axios';

export default function SearchBar({ onSearchResults }) {

  const [value, setValue] = useState('');
  const [inputValue, setInputValue] = useState('');

  const handleKeyDown = async (event) => {
    if (event.key === 'Enter') {
      event.preventDefault(); // Prevent default behaviour for the form submission
      try {
        const response = await axios.post('http://localhost:3000/homepageSearch', {
          search: inputValue // Send the current input to the search query
        });
        const data = response.data;

        // Log each key/value from the response
        Object.entries(data).forEach(([key, value]) => {
          if (typeof value === 'object' && value !== null) {
            console.log(`${key}: ${JSON.stringify(value, null, 2)}`);
          } else {
            console.log(`${key}: ${value}`);
          }
        });
        onSearchResults(data); // Passing results of the search
        // alert(response.data); 
      } catch (err) {
        console.error("Failed to search:", err.message);
      }
    };
  }
  //   const handleKey = () => {
  //   console.log("You entered:", value);
  // }




  return (
    <div className={styles.searchBarContainer}>
      <input type="text" placeholder='Search all...' className={styles.searchBar}
        onChange={(e) => setInputValue(e.target.value)} onKeyDown={handleKeyDown}
        value={inputValue} />
    </div>
  )
}