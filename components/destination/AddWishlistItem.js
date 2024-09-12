"use client";

import { useState } from "react";
import styles from "./destination.module.css";
import { planetsArray } from "@/app/destination/planetsArray";

export const AddWishlistItem = ({ onAddWishlistItem }) => {
  const [thumbnail, onThumbnailChange] = useState(
    "/destination/image-europa.png"
  );

  // TASK - React 1 week 3
  // 1. Add a useState for the handling the <input id="customWishlist" type="text" />
  const [customWishList, setCustomWishList] = useState("");
  // 2. Connect the onThumbnailChange to the <select>
  const [imageURL, setImageURL] = useState("Europ");

  const onAddItemPressed = () => {
    // TASK - React 1 week 3
    // implement this function
    // Clear the <input/> field on button press
    // pass the thumbnail and the name from the input to the onAddWishlistItem function
    // call the onAddWishlistItem here
    if (!customWishList) return;

    const newItem = {
      name: customWishList,
      thumbnail: imageURL,
    };
    onAddWishlistItem(newItem);
    setCustomWishList("");
    setImageURL("Europ");
  };

  return (
    <div className={styles.addWishlistItem}>
      <p>Add custom planet to wishlist</p>
      <label htmlFor="customWishlist">
        Wishlist item name
      </label>
      <input
        id="customWishlist"
        type="text"
        value={customWishList}
        onChange={(e) => setCustomWishList(e.target.value)}
      />

      <label htmlFor="customWishlistThumbnail">
        Wishlist item thumbnail
      </label>
      <select
        id="customWishlistThumbnail"
        value={imageURL}
        onChange={(e) => setImageURL(e.target.value)}
      >
        {planetsArray.map((planet, idx) => (
          <option key={idx} value={planet.thumbnail}>
            {planet.name}
          </option>
        ))}
      </select>
      <button onClick={onAddItemPressed}>ADD CUSTOM</button>
    </div>
  );
};
