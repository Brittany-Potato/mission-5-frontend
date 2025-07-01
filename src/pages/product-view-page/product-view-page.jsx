import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import styles from "./product-view-page.module.css"; 
import NavSearchBar from '../../shared-components/nav-search-bar/nav-search-bar.jsx';
import SimilarItems from "../../components/SimilarItems.jsx";
import ProductDetailsTabs from "./components/product-details.jsx";
import Footer from "../../shared-components/footer/footer.jsx";
import TempPhoto from "../../images/chair.jpg"; // Placeholder image
import TempPhoto2 from "../../images/download.jpg"; // Placeholder image
import TempPhoto3 from "../../images/rustic_medieval_web.jpg"; // Placeholder image
import TempPhoto4 from "../../images/download (1).jpg"; // Placeholder image
import TempPhoto5 from "../../images/download (2).jpg"; // Placeholder image

const tempImages = [
  TempPhoto,
  TempPhoto2,
  TempPhoto3,
  TempPhoto4,
  TempPhoto5
]; 

const watchIcon = <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
<g clip-path="url(#clip0_54_3147)">
<path d="M24 9V10.5H13.7109C13.4297 9.57812 13.1484 8.66797 12.8672 7.76953C12.5859 6.87109 12.2969 5.95703 12 5.02734C11.7109 5.94922 11.4258 6.85938 11.1445 7.75781C10.8633 8.65625 10.5781 9.57031 10.2891 10.5H4.40625C5.20312 11.1094 5.99219 11.7188 6.77344 12.3281C7.55469 12.9375 8.34766 13.543 9.15234 14.1445C8.83984 15.1133 8.53516 16.0742 8.23828 17.0273C7.94141 17.9805 7.64453 18.9453 7.34766 19.9219L12 16.3359V18.2344L4.5 24L7.40625 14.6953L0 9H9.1875L12 0L14.8125 9H24ZM13.5 13.5H24V15H13.5V13.5ZM13.5 18H24V19.5H13.5V18Z" fill="#2F2C28"/>
</g>
<defs>
<clipPath id="clip0_54_3147">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>
</svg>

const compareIcon = <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
  <path d="M11 20H5.616C5.15533 20 4.771 19.846 4.463 19.538C4.155 19.23 4.00067 18.8453 4 18.384V5.616C4 5.15534 4.15433 4.771 4.463 4.463C4.77167 4.155 5.156 4.00067 5.616 4H11V2.27C11 2.12734 11.0477 2.008 11.143 1.912C11.2383 1.816 11.3573 1.76834 11.5 1.769C11.6427 1.76967 11.7617 1.81767 11.857 1.913C11.9523 2.00834 12 2.127 12 2.269V21.731C12 21.873 11.9523 21.9917 11.857 22.087C11.7617 22.1823 11.6427 22.2303 11.5 22.231C11.3573 22.2317 11.2383 22.1837 11.143 22.087C11.0477 21.9903 11 21.8717 11 21.731V20ZM5 18H11V10.808L5 18ZM14 20V12L19 18V5.616C19 5.462 18.936 5.32067 18.808 5.192C18.68 5.06334 18.5387 4.99934 18.384 5H14V4H18.385C18.845 4 19.229 4.15434 19.537 4.463C19.845 4.77167 19.9993 5.156 20 5.616V18.385C20 18.845 19.8457 19.2293 19.537 19.538C19.2283 19.8467 18.8443 20.0007 18.385 20H14Z" fill="#2F2C28"/>
</svg>

export const ProductViewPage = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  // imagesToShow prefers product.Images, falls back to tempImages
  const imagesToShow = (product?.Images && product.Images.length > 0) 
    ? product.Images 
    : tempImages;

  const [mainImage, setMainImage] = useState(imagesToShow[0] || TempPhoto);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);

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

  // Update imagesToShow and mainImage when product changes
  useEffect(() => {
    if (product) {
      const imgs = (product.Images && product.Images.length > 0) 
        ? product.Images 
        : tempImages;
      setMainImage(imgs[0] || TempPhoto);
    }
  }, [product]);

  if (!product) return <div>Loading...</div>;

  return (
    <>
      <NavSearchBar />
      <div className={styles.container}>
          <div className={styles.main}>
            {/* Left - Image Gallery */}
            <div className={styles.galleryContainer}>
              <div className={styles.gallery}>
                <img
                  src={mainImage}
                  alt={product.Title}
                  className={styles.mainImage}
                />
                <div className={styles.thumbnails}>
                  {imagesToShow.map((img, i) => (
                    <img
                      key={i}
                      src={img}
                      alt={`thumb-${i}`}
                      className={`${styles.thumb} ${i === selectedImageIndex ? styles.selected : ''}`}
                      onClick={() => {setMainImage(img); setSelectedImageIndex(i)}}
                    />
                  ))}
                </div>
              </div>
            </div>

            {/* Right - Info Box */}
            <div className={styles.info}>
              <h1>{product.Title}</h1>
              <div className={styles.closingTime}>
                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30" fill="none">
                  <path d="M14.375 3.75C17.5244 3.75 20.5449 5.00111 22.7719 7.22811C24.9989 9.4551 26.25 12.4756 26.25 15.625C26.25 18.7744 24.9989 21.7949 22.7719 24.0219C20.5449 26.2489 17.5244 27.5 14.375 27.5C11.2256 27.5 8.2051 26.2489 5.97811 24.0219C3.75111 21.7949 2.5 18.7744 2.5 15.625C2.5 12.4756 3.75111 9.4551 5.97811 7.22811C8.2051 5.00111 11.2256 3.75 14.375 3.75ZM14.375 5C11.5571 5 8.85456 6.11942 6.86199 8.11199C4.86942 10.1046 3.75 12.8071 3.75 15.625C3.75 18.4429 4.86942 21.1454 6.86199 23.138C8.85456 25.1306 11.5571 26.25 14.375 26.25C15.7703 26.25 17.1519 25.9752 18.441 25.4412C19.7301 24.9073 20.9014 24.1246 21.888 23.138C22.8746 22.1514 23.6573 20.9801 24.1912 19.691C24.7252 18.4019 25 17.0203 25 15.625C25 12.8071 23.8806 10.1046 21.888 8.11199C19.8954 6.11942 17.1929 5 14.375 5ZM13.75 8.75H15V15.525L20.875 18.9125L20.25 20L13.75 16.25V8.75Z" fill="#2F2C28"/>
                </svg>
                <p>Closing {new Date(product.ClosingTime).toLocaleString()}</p>
                </div>
                <div className={styles.buttons}>
                  <button className={styles.watchBtn}>{watchIcon} Add to Watchlist</button>
                  <button className={styles.compareBtn}> {compareIcon} Compare</button>
                </div>
              <div className={styles.buyBox}> 
                <p className={styles.label}>Buy Now</p>
                <p className={styles.price}>{product.Price}</p>
                <button className={styles.buyBtn}>Buy Now</button>
              </div>

              <div className={styles.bidBox}>
                <p className={styles.label}>Starting Bid</p>
                <p className={styles.bid}>{product.BidStartPrice}</p>
                <button className={styles.bidBtn}>Place Bid</button>
              </div>
              <div className={styles.bidHistory}>
                <h3>No current bids</h3>
              </div>
            </div>
          </div>
        </div>

        {/* Product Details */}
        <div classname={styles.productDetails}>
          <ProductDetailsTabs product={product} />
        </div>

          {/* Seller */}
          <div className={styles.seller}>
            <h4>Seller: {product.Seller?.name}</h4>
            <p>Location: {product.Seller?.Location}</p>
            <p>Member Since: {new Date(product.Seller?.memberSince).toLocaleDateString()}</p>
            <p>Rating: {product.Seller?.rating}</p>
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