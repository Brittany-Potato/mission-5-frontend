import React, { useState, useEffect } from 'react'
import styles from './search-directory.module.css'

export default function SearchDirectory() {

  const categories = [
    "Bathroom", "Cleaning Bins", "Curtains", "Bedframe", "lamp", "laundry", "storage", "travel", "table",
    "kitchen", "Heating and cooling", "Home decor", "art posters", "cleaning", "Mat and Rug", "outdoor", "clock",
    "utensils", "office", "blanket"
  ];

  const [counts, setCounts] = useState({});

  useEffect(() => {
    const fetchCounts = async () => {
      const newCounts = {};

      await Promise.all(
        categories.map(async (title) => {
          try {
            const res = await fetch("http://localhost:3000/countItems", {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify({ title })
            });
            const data = await res.json();
            newCounts[title] = data.count || 0;
          } catch (err) {
            console.error("Error fetching count for:", err.message.title);
            newCounts[title] = 0;
          }
        })
      );

      setCounts(newCounts);
    };

    fetchCounts();
  }, []);

  return (
    <div className={StyleSheet.mainSearchContainer}>
      <ul className={styles.unorderedList}>
        {categories.map((title) => (
          <li key={title}>
            <p key={title} className={styles.list}>
              {title} ({counts[title] ?? "..."})
            </p>
          </li>
        ))}
      </ul>
    </div>
  )

}


