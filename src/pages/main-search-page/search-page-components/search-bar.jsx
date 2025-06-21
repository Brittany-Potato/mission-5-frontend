import React, { useState } from 'react'
import styles from './search-bar.module.css';
import axios from 'axios';

export default function SearchBar() {

  const [value, setValue] = useState('');
  const [inputValue, setInputValue] = useState('');

  const handleKeyDown = async (event) => {
    if (event.key === 'Enter') {
      event.preventDefault();
      try {
        const response = await axios.post('http://localhost:3000/homepageSearch', {
          search: inputValue
        });
        const innerData = response.data;

        Object.entries(innerData).forEach(([key, value]) => {
          if (typeof value === 'object' && value !== null) {
            alert(`${key}: ${JSON.stringify(value, null, 2)}`);
          } else {
            alert(`${key}: ${value}`);
          }
        });
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
