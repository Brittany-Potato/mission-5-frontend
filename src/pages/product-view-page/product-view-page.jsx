import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import styles from "./product-view-page.module.css"; 

export const ProductViewPage = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null); 

  console.log("ProductViewPage component rendered");
  console.log("Product ID from URL:", id);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await fetch(`http://localhost:3000/product/${id}`);
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        setProduct(data);
      } catch (error) {
        console.error("Error fetching product:", error);
      }
    };

    fetchProduct();
  }, [id]); 
  

  if (!product) return <div>Loading...</div>;

  return (
    <div className={styles.container}>
      <div className={styles.main}>
        {/* Left - Image Gallery */}
        <div className={styles.gallery}>
          <img
            src={product.Images?.[0] || "/placeholder.jpg"}
            alt={product.Title}
            className={styles.mainImage}
          />
          <div className={styles.thumbnails}>
            {product.Images?.map((img, i) => (
              <img key={i} src={img} alt={`thumb-${i}`} className={styles.thumb} />
            ))}
          </div>
        </div>

        {/* Right - Info Box */}
        <div className={styles.info}>
          <h1>{product.Title}</h1>
          <p className={styles.price}>Buy Now: {product.Price}</p>
          <p className={styles.bid}>Starting Bid: {product.BidStartPrice}</p>
          <button className={styles.buyBtn}>Buy Now</button>
          <button className={styles.bidBtn}>Place Bid</button>
        </div>
      </div>

      {/* Tabs */}
      <div className={styles.tabs}>
        <h3>Product Description</h3>
        <p>{product.Description}</p>
        <h3>Product Details</h3>
        <p>{product.Details}</p>
      </div>

      {/* Seller */}
      <div className={styles.seller}>
        <h4>Seller: {product.Seller?.Name}</h4>
        <p>Location: {product.Location}</p>
        <p>Member Since: {new Date(product.Seller?.MemberSince).toLocaleDateString()}</p>
      </div>
    </div>
  );
};
