import React, { useState, useEffect } from 'react'
import styles from './product-grid-display.module.css';
import placeholder from './images/placeholder.png';

export default function ProductGridDisplay() {

    const [products, setProducts] = useState([]);

    useEffect(() => {
        const fetchRandomProducts = async () => {
            try {
                const res = await fetch("http://localhost:3000/randomProducts");
                const data = await res.json();
                console.log("First product in response:", data[0]);
                setProducts(data);
            } catch (err) {
                console.error("Failed to fetch information:", err.message);
            }
        };

        fetchRandomProducts();
    }, []);

  return (
    <div className={styles.gridDiv}>    
    {products.length === 0 && <p>No products to show.</p>}

    {products.map((product, index) => (
        <button key={index} className={styles.cardDiv}>
            <img 
            src={placeholder}
            alt={product.title || "item"}
            className={styles.cardImage}
            />
            <p className={styles.productLocation}>{product.Location || "unknown"}</p>
            <p className={styles.auctionClosingDate}>"Closes soon"</p>
            <p className={styles.productTitle}>{product.Title}</p>
            <p className={styles.buyNow}>Buy Now</p>
            <p className={styles.productPrice}>{product.Price || "$--"}</p>
        </button>
    ))}
    </div>
  );
}
