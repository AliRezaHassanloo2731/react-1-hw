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
      <Image className={styles.image} src={ourPartnerImage} alt="our-value" />
    </>
  );
}
