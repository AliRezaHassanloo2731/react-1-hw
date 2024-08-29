import ourPartnerImage from "@/data/inspiration_about_us/our_partners.png";
import Image from "next/image";
import styles from "./our-partner.module.css";

export default function OurPartners() {
  // TASK - React 1 week 1
  // Create the "Our Crew section"
  // Use the descriptions provided in /app/about_us/README.md
  // Use the pictures from /public/crew
  // Some inspiration ideas found in /data/inspiration_about_us
  return (
    <>
      <p className={styles.text}>
        We collaborate with some of the most respected names in the space and
        technology industries to make every journey extraordinary.{" "}
      </p>
      <div className={styles.grid}>
        <img src="business_partners/alphabet-logo.png" alt="alphabet-logo" />
        <img src="business_partners/amazon_logo.png" alt="amazon_logo" />
        <img src="business_partners/CBC_Logo_White.png" alt="CBC_Logo_White" />
        <img
          src="business_partners/Microsoft-Logo-white.png"
          alt="Microsoft-Logo-white"
        />
        <img
          src="business_partners/Microsoft-Logo-white.png"
          alt="Microsoft-Logo-white"
        />
        <img
          src="business_partners/QueensLogo_white.png"
          alt="QueensLogo_white"
        />
        <img src="business_partners/samsung-logo.png" alt="samsung-logo" />
        <img src="business_partners/sodexo-logo.png" alt="sodexo-logo" />
      </div>
    </>
  );
}
