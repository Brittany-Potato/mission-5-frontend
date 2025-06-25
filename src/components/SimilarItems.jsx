import { useState, useEffect } from 'react';
import styles from './SimilarItems.module.css';
import TempPhoto from "../images/chair.jpg"; // Placeholder image

export default function SimiliarItems({ productId }) {
    // State to hold similar items
    // This component fetches similar items based on the productId passed as a prop
    const [items, setItems] = useState([]);

    useEffect(() => {
        const fetchSimiliarItems = async () => {
            try {
                const response = await fetch(`http://localhost:3000/product/${productId}/similar`);
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const data = await response.json();
                setItems(data);
            } catch (error) {
                console.error('Error fetching similar items:', error);
            }
        };

        if (productId) fetchSimiliarItems();
    }, [productId]);


    return (
    <div className={styles.similarSection}>
            <h2>Similar Items</h2>
        <div className={styles.carousel}>
            {items.map((item) => (
                <div key={item._id} className={styles.card}>
                    <img src={item.Images?.[0] || TempPhoto} alt={item.Title} />
                    <p>{item.Title}</p>
                    <p><strong>{item.Price}</strong></p>
                    <a href={`/product/${item._id}`} className={styles.link}>View</a>
                </div>
            ))}
      </div>
    </div>
  );
}