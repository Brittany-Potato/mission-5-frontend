import React, { useState, useEffect } from 'react'
import styles from './product-grid-display.module.css';
import placeholder from './images/placeholder.png';
import { Link } from "react-router-dom";
import SearchPannel from './search-pannel';
import { Link } from "react-router-dom";
import SearchPannel from './search-pannel';

export default function ProductGridDisplay({ searchResults }) {

    const watchlistButton = <svg className={styles.watchlistButton} width="132" height="139" viewBox="0 0 132 139" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M83.5307 44.4929C87.3967 44.4929 90.5307 47.6269 90.5307 51.4929L90.5307 112.708C90.5307 118.824 83.237 121.999 78.7604 117.831L13.0193 56.6158C8.36668 52.2835 11.4322 44.4929 17.7896 44.4929L83.5307 44.4929Z" fill="#F9AF2C" />
        <g clip-path="url(#clip0_1_2894)">
            <path d="M75 65V66.5H64.7109C64.4297 65.5781 64.1484 64.668 63.8672 63.7695C63.5859 62.8711 63.2969 61.957 63 61.0273C62.7109 61.9492 62.4258 62.8594 62.1445 63.7578C61.8633 64.6562 61.5781 65.5703 61.2891 66.5H55.4062C56.2031 67.1094 56.9922 67.7188 57.7734 68.3281C58.5547 68.9375 59.3477 69.543 60.1523 70.1445C59.8398 71.1133 59.5352 72.0742 59.2383 73.0273C58.9414 73.9805 58.6445 74.9453 58.3477 75.9219L63 72.3359V74.2344L55.5 80L58.4062 70.6953L51 65H60.1875L63 56L65.8125 65H75ZM64.5 69.5H75V71H64.5V69.5ZM64.5 74H75V75.5H64.5V74Z" fill="#943900" />
        </g>
        <defs>
            <clipPath id="clip0_1_2894">
                <rect width="24" height="24" fill="white" transform="translate(51 56)" />
            </clipPath>
        </defs>
    </svg>;
export default function ProductGridDisplay({ searchResults }) {

    const watchlistButton = <svg className={styles.watchlistButton} width="132" height="139" viewBox="0 0 132 139" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M83.5307 44.4929C87.3967 44.4929 90.5307 47.6269 90.5307 51.4929L90.5307 112.708C90.5307 118.824 83.237 121.999 78.7604 117.831L13.0193 56.6158C8.36668 52.2835 11.4322 44.4929 17.7896 44.4929L83.5307 44.4929Z" fill="#F9AF2C" />
        <g clip-path="url(#clip0_1_2894)">
            <path d="M75 65V66.5H64.7109C64.4297 65.5781 64.1484 64.668 63.8672 63.7695C63.5859 62.8711 63.2969 61.957 63 61.0273C62.7109 61.9492 62.4258 62.8594 62.1445 63.7578C61.8633 64.6562 61.5781 65.5703 61.2891 66.5H55.4062C56.2031 67.1094 56.9922 67.7188 57.7734 68.3281C58.5547 68.9375 59.3477 69.543 60.1523 70.1445C59.8398 71.1133 59.5352 72.0742 59.2383 73.0273C58.9414 73.9805 58.6445 74.9453 58.3477 75.9219L63 72.3359V74.2344L55.5 80L58.4062 70.6953L51 65H60.1875L63 56L65.8125 65H75ZM64.5 69.5H75V71H64.5V69.5ZM64.5 74H75V75.5H64.5V74Z" fill="#943900" />
        </g>
        <defs>
            <clipPath id="clip0_1_2894">
                <rect width="24" height="24" fill="white" transform="translate(51 56)" />
            </clipPath>
        </defs>
    </svg>;

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

    // Decide which products to display
    const productsToDisplay = Array.isArray(searchResults) && searchResults.length > 0
        ? searchResults
        : products; // If the product grid displays searchResults or Random products

    return (
        <div className={styles.gridDiv}>
    // Decide which products to display
    const productsToDisplay = Array.isArray(searchResults) && searchResults.length > 0
        ? searchResults
        : products; // If the product grid displays searchResults or Random products

    return (
        <div className={styles.gridDiv}>

            {Array.isArray(productsToDisplay) && productsToDisplay.length === 0 && <p>No products to show.</p>}
            {Array.isArray(productsToDisplay) && productsToDisplay.map((product, index) => (
                <Link key={index} className={styles.cardDiv} to={`/product/${product._id}`}>
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
                    {watchlistButton}
                </Link>
            ))}
        </div>
    );
            {Array.isArray(productsToDisplay) && productsToDisplay.length === 0 && <p>No products to show.</p>}
            {Array.isArray(productsToDisplay) && productsToDisplay.map((product, index) => (
                <Link key={index} className={styles.cardDiv} to={`/product/${product._id}`}>
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
                    {watchlistButton}
                </Link>
            ))}
        </div>
    );
}