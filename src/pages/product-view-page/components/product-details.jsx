import { useState } from "react";
import styles from "../product-view-page.module.css"; // Assuming your CSS module path

export default function ProductDetailsTabs({ product }) {
  const [activeTab, setActiveTab] = useState("description");

  return (
    <div className={styles.productDetails}>
      {/* Tabs */}
      <div className={styles.tabHeaders}>
        <button
          className={activeTab === "description" ? styles.activeTab : styles.tab}
          onClick={() => setActiveTab("description")}
        >
          Product Description
        </button>
        <button
          className={activeTab === "details" ? styles.activeTab : styles.tab}
          onClick={() => setActiveTab("details")}
        >
          Product Details
        </button>
      </div>

      {/* Tab Content */}
      <div className={styles.tabContent}>
        {activeTab === "description" && (
          <>
            <h3>Product Description</h3>
            <p>{product.Description}</p>
          </>
        )}

        {activeTab === "details" && (
        <>
            <h3>Product Details</h3>
            <div className={styles.detailsGrid}>
                {product.Details && product.Details.split(",").map((item, index) => {
                    const [key, value] = item.split(":").map(str => str.trim());
                    return (
                        <div key={index} className={styles.detailRow}>
                        <span className={styles.detailKey}>{key || "•"}</span>
                        <span className={styles.detailValue}>{value || ""}</span>
                        </div>
                    );
                    })}
            </div>
        </>
        )}
      </div>
    </div>
  );
}
