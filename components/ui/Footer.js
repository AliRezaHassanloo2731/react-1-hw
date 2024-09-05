"use client";

import { usePathname } from "next/navigation";
import styles from "./Footer.module.css";
import { Children } from "react";

const SocialMediaList = [
  {
    title: "Linkedin",
    url: "https://www.linkedin.com/in/alireza-hassanloo-415356239/",
    icon: "/socialmedia/linkedin.png",
  },
  {
    title: "Facebook",
    url: "https://facebook.com",
    icon: "/socialmedia/facebook.png",
  },
  {
    title: "Instagram",
    url: "https://instagram.com",
    icon: "/socialmedia/instagram.png",
  },
  {
    title: "Tiktok",
    url: "https://google.com",
    icon: "/socialmedia/tiktok.png",
  },
  {
    title: "On the streets at night",
    url: "https://tiktok.com",
    icon: "/socialmedia/google.png",
  },
];

export const Footer = () => {
  const path = usePathname().split("?")[0];
  return (
    <footer
      className={
        path !== "/" ? styles.footer : styles.hidden
      }
    >
      <div className={styles.footerDescription}>
        <h3>Galactica</h3>
        <p>
          Explore the universe and beyond. Your journey to
          the stars starts here.
        </p>
        <p>&copy; 2024 Galactica. All rights reserved.</p>
      </div>
      {/* TASK - React 1 week 2 */}
      {/* Create a new List for the Pages */}
      {/* We need to use the <Link /> component here */}
      {/* <div className={styles.pages}>
        <h3>Pages</h3>
        <ul>
          <li> <Link/> </li>
          ...
        </ul>
      </div> */}
      {/* Docs for the Link: https://nextjs.org/docs/pages/api-reference/components/link */}

      {/* TASK - React 1 week 1 */}
      {/* Add a new list item for LINKEDIN */}
      <div className={styles.footerLinks}>
        <h3>Follow us</h3>
        <ul className={styles.footerList}>
          {SocialMediaList.map((item, index) => (
            <SocialMediaItem
              title={item.title}
              url={item.url}
              icon={item.icon}
            ></SocialMediaItem>
          ))}
          {/* <li>
            

          <li>
          
            <Link url={"https://google.com"}>
              On the streets at night
            </Link>
          </li>
          <li>
            <Link
              url={
                "https://www.linkedin.com/in/alireza-hassanloo-415356239/"
              }
            >
              Linkdin
            </Link>
          </li> */}
          {/* TASK - React 1 week 2 */}
          {/* Create a <SocialMediaItem /> component and replace all of the list items! */}
          {/* it should accept the following props */}
          {/* url, title, icon */}
          {/* For the icons, you can download 1-2 social media icons for testing and put it in the /public/socialmedia/ folder */}
        </ul>
      </div>
    </footer>
  );
};
function Link({ url, children }) {
  {
    /* <div className={styles.pages}>
        <h3>Pages</h3>
        <ul>
          <li> <Link/> </li>
          ...
        </ul>
      </div> */
  }
  {
    /* Docs for the Link:  https://nextjs.org/docs/pages
        /api-reference/components/link */
  }

  return <a href={url}>{children}</a>;
}

function SocialMediaItem({ url, title, icon }) {
  return (
    <li>
      <a href={url} target="_blank" rel="noreferrer">
        <img src={icon} alt={title} />
        {title}
      </a>
    </li>
  );
}
