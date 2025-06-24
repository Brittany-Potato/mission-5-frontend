import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.topLinks}>
        <div className={styles.section}>
          <h4>Marketplace</h4>
          <ul>
            <li>Latest deals</li>
            <li>Stores</li>
            <li>Closing soon</li>
            <li>$1 Reserve</li>
            <li>Home & Living</li>
          </ul>
        </div>

        <div className={styles.section}>
          <h4>Property</h4>
          <ul>
            <li>International property</li>
            <li>News & guide</li>
            <li>Sold Properties</li>
            <li>OneHub for agents</li>
            <li>Find a Real Estate Agent</li>
          </ul>
        </div>

        <div className={styles.section}>
          <h4>Motors</h4>
          <ul>
            <li>Browse all cars</li>
            <li>Buying & Selling</li>
            <li>Dealer news & info</li>
            <li>Sell my car</li>
          </ul>
        </div>

        <div className={styles.section}>
          <h4>Jobs</h4>
          <ul>
            <li>Browse categories</li>
            <li>Careers advice</li>
            <li>JobSmart</li>
            <li>Advertisers advice</li>
            <li>Salary guide</li>
          </ul>
        </div>

        <div className={styles.section}>
          <h4>Services</h4>
          <ul>
            <li>Trades</li>
            <li>Domestic service</li>
            <li>Events & entertainment</li>
            <li>Health & wellbeing</li>
            <li>List my services</li>
          </ul>
        </div>

        <div className={styles.section}>
          <h4>Community</h4>
          <ul>
            <li>Help</li>
            <li>Announcements</li>
            <li>Trust & Safety</li>
            <li>Seller information</li>
            <li>Help center community</li>
          </ul>
        </div>
      </div>

      <div className={styles.bottomRow}>
        <div className={styles.links}>
          <span>Desktop Site</span>
          <span>about Us</span>
          <span>Careers</span>
          <span>Advertise</span>
          <span>Privacy policy</span>
          <span>Terms & conditions</span>
          <span>Contact Us</span>
        </div>
        <div className={styles.socialIcons}>
          {/* need to change icons*/}
          <span>🌐</span>
          <span>📱</span>
          <span>📷</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
