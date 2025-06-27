import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import styles from "./product-view-page.module.css"; 
import NavSearchBar from '../../shared-components/nav-search-bar/nav-search-bar.jsx';
import SimilarItems from "../../components/SimilarItems.jsx";
import Footer from "../../shared-components/footer/footer.jsx";
import TempPhoto from "../../images/chair.jpg"; // Placeholder image

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
    <>
      <NavSearchBar />
      <div className={styles.container}>
        <div className={styles.main}>
          {/* Left - Image Gallery */}
          <div className={styles.gallery}>
            <img
              src={product.Images?.[0] || TempPhoto}
              alt={product.Title}
              className={styles.mainImage}
            />
            <div className={styles.thumbnails}>
              {product.Images?.map((img, i) => ( //CHANGE THIS 
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
          <h4>Seller: {product.Seller?.name}</h4>
          <p>Location: {product.Seller?.Location}</p>
          <p>Member Since: {new Date(product.Seller?.memberSince).toLocaleDateString()}</p>
          <p>Rating: {product.Seller?.rating}</p>
        </div>
      </div>
      {/* Q&A Section */}
      <div className={styles.qaSection}>
        <h2>Questions & Answers</h2>

        <div className={styles.qaItem}>
          <label>Is the mattress soft or firm?</label>
          <div className={styles.qaResponse}>Hi there, It’s very soft</div>
        </div>

        <div className={styles.qaItem}>
          <label>Where is the location?</label>
          <div className={styles.qaResponse}>Auckland City</div>
        </div>

        <input
          type="text"
          placeholder="Type your question here"
          className={styles.qaInput}
        />
        <button className={styles.askButton}>Ask Question</button>
      </div>

      {/* Similar Items Section */}
      <SimilarItems productId={id} />
      {/* Footer */}
      <Footer />    
    </>
  );
};
 