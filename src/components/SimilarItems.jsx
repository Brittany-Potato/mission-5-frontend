import { useState, useEffect } from 'react';
import styles from './SimilarItems.module.css';
import TempPhoto from "../images/chair.jpg"; // Placeholder image

export default function SimiliarItems({ productId }) {
    // State to hold similar items
    // This component fetches similar items based on the productId passed as a prop
    const [items, setItems] = useState([]);

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
                    <div className={styles.info}>
                        <p>{item.Location}</p>
                        <p>{item.Condition}</p>
                    </div>
                    <h2 className={styles.title}>{item.Title}</h2>
                    <div className={styles.buy}>
                    <label>Buy Now</label>
                        <p><strong>{item.Price}</strong></p>
                        <a href={`/product/${item._id}`} className={styles.link}>View</a>
                    </div>
                    {watchlistButton}
                </div>
            ))}
      </div>
    </div>
  );
}