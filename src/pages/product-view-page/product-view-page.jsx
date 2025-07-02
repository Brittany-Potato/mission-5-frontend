import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import styles from "./product-view-page.module.css"; 
import NavSearchBar from '../../shared-components/nav-search-bar/nav-search-bar.jsx';
import SimilarItems from "../../components/SimilarItems.jsx";
import Footer from "../../shared-components/footer/footer.jsx";
import TempPhoto from "../../images/chair.jpg"; // Placeholder image

export const ProductViewPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
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

    const handleCompare = () => {
      if (product && product._id) {
      navigate("/compare", { state: { productId: product._id } });
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
            <button className={styles.compareBtn} onClick={() => navigate("/comparison", { state: { productId: id } })}>
              <svg xmlns="http://www.w3.org/2000/svg" width="90" height="91" viewBox="0 0 90 91" fill="none">
              <rect y="0.5" width="90" height="90" rx="45" fill="white"/>
              <path d="M41.75 70.9129H24.252C22.7548 70.9129 21.5057 70.4237 20.5047 69.4453C19.5037 68.4669 19.0022 67.245 19 65.7795V25.2205C19 23.7571 19.5016 22.5362 20.5047 21.5578C21.5079 20.5794 22.757 20.0892 24.252 20.0871H41.75V14.5915C41.75 14.1383 41.9049 13.7592 42.2148 13.4543C42.5246 13.1493 42.9113 12.9979 43.375 13C43.8387 13.0021 44.2254 13.1546 44.5353 13.4575C44.8451 13.7603 45 14.1373 45 14.5883V76.4117C45 76.8628 44.8451 77.2397 44.5353 77.5425C44.2254 77.8454 43.8387 77.9979 43.375 78C42.9113 78.0021 42.5246 77.8496 42.2148 77.5425C41.9049 77.2355 41.75 76.8585 41.75 76.4117V70.9129ZM22.25 64.5597H41.75V41.7135L22.25 64.5597ZM51.5 70.9129V45.5L67.75 64.5597V25.2205C67.75 24.7313 67.542 24.2823 67.126 23.8736C66.71 23.4649 66.2507 23.2616 65.748 23.2637H51.5V20.0871H65.7513C67.2463 20.0871 68.4943 20.5773 69.4953 21.5578C70.4963 22.5383 70.9978 23.7592 71 25.2205V65.7827C71 67.2439 70.4984 68.4648 69.4953 69.4453C68.4921 70.4259 67.2441 70.9151 65.7513 70.9129H51.5Z" fill="#2F2C28"/>
              </svg>
            </button>
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
 