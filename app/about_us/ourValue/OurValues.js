import ourValueImage from "@/data/inspiration_about_us/our_values.png";
import Image from "next/image";
import styles from "./ourValue.module.css";

// TASK - React 1 week 1
// After you are finished with creating the page, move the OurValues, OurCrew, OurPartners components into their own files
// OurValues.js, OurCrew.js, OurPartners.js should live in this folder
// import and use the components from the newly created files
export default function OurValues() {
  // TASK - React 1 week 1
  // Create the "Our Values" section
  // Use the descriptions provided in /app/about_us/README.md
  // Some inspiration ideas found in /data/inspiration_about_us
  return (
    <>
      <p className={styles.text}>
        Exploration: We are driven by a deep-seated desire to explore the
        unknown. We believe that the pursuit of discovery is at the heart of
        human nature, and we are committed to pushing the boundaries of what is
        possible. Innovation: At Galactica, we prioritize cutting-edge
        technology and innovation. We are constantly evolving our spacecraft,
        safety protocols, and services to ensure that our travelers experience
        the most advanced and secure space journeys available. Sustainability:
        We are committed to making space exploration sustainable for future
        generations. Our space missions are designed to minimize environmental
        impact, both on Earth and in space, and to foster a spirit of
        responsibility towards our universe. Community: We believe in the power
        of collective exploration. Our journeys are not just about reaching new
        destinations; they are about building a community of space enthusiasts
        who share a passion for the stars.
      </p>

      <Image className={styles.image} src={ourValueImage} alt="Our-Value" />
    </>
  );
}
