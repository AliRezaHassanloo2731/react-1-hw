"use client";

import { useState } from "react";

import styles from "@/components/destination/destination.module.css";
import { AddWishlistItem } from "@/components/destination/AddWishlistItem";
import { PlanetWishlistItem } from "@/components/destination/PlanetWishlistItem";
import { planetsArray } from "./planetsArray";

export const Destinations = () => {
  const [selectedPlanets, setSelectedPlanets] = useState(
    []
  );
  const [numberOfPlanets, setNumberOfPlanets] = useState(0);

  function removeFromWishlist(name) {
    setSelectedPlanets((selectedPlanets) =>
      selectedPlanets.filter(
        (planet) => planet.name !== name
      )
    );
  }
  function addToWishList(name) {
    setSelectedPlanets((selectedPlanets) => {
      const updatedPlanets = [...selectedPlanets, name];
      setNumberOfPlanets(updatedPlanets.length);

      return updatedPlanets;
    });
  }

  const onAddOrRemovePlanet = (name, index) => {
    setSelectedPlanets((selectedPlanets) => {
      if (selectedPlanets.includes(name)) {
        const updatedPlanets = selectedPlanets.filter(
          (planet) => planet !== name
        );
        setNumberOfPlanets(updatedPlanets.length);

        return updatedPlanets;
      } else {
        const updatedPlanets = [...selectedPlanets, name];
        setNumberOfPlanets(updatedPlanets.length);
        return updatedPlanets;
      }
    });
    console.log(
      `You seleceted the following planet: ${name}, with the index of ${index}`
    );
  };

  return (
    <div className="fullBGpicture">
      <main className="mainContent">
        <h1>Travel destinations</h1>
        <section className="card">
          <h2>Wishlist</h2>
          <p>
            {numberOfPlanets > 0
              ? `You have ${numberOfPlanets} in your wishlist`
              : "No planets in wishlist :"}
          </p>

          <b>List coming soon after lesson 3!</b>

          {/* TASK - React 1 week 3 */}
          {/* Import the AddWishlistItem react component */}

          <AddWishlistItem
            onAddWishlistItem={addToWishList}
          />

          {/* TASK - React 1 week 3 */}
          {/* Convert the list, so it is using selectedPlanets.map() to display the items  */}
          {selectedPlanets.map((selectedPlanet, idx) => {
            <div className={styles.wishlistList}>
              <PlanetWishlistItem
                name={selectedPlanet.name}
                onRemove={() =>
                  removeFromWishlist(selectedPlanet.name)
                }
                thumbnail={`/destination/image-${selectedPlanet.name}.png`}
                key={`${idx}`}
              />
            </div>;
          })}
          {/* Implement the "REMOVE" function */}
          {/* uncomment the following code snippet: */}

          <h3>Your current wishlist</h3>
          <div className={styles.wishlistList}>
            <PlanetWishlistItem
              name="europa"
              onRemove={() => removeFromWishlist("europa")}
              thumbnail="/destination/image-europa.png"
            />
            <PlanetWishlistItem
              name="europa"
              onRemove={() => removeFromWishlist("europa")}
              thumbnail="/destination/image-europa.png"
            />
          </div>
        </section>
        <section className="card">
          <h2>Possible destinations</h2>

          {planetsArray.map((planet, index) => (
            <PlanetCard
              key={planet.id}
              name={planet.name}
              description={planet.description}
              thumbnail={planet.thumbnail}
              isSelected={selectedPlanets.includes(
                planet.name
              )}
              onAddOrRemovePlanet={onAddOrRemovePlanet}
            />
          ))}
        </section>
      </main>
    </div>
  );
};

function PlanetCard({
  name,
  index,
  description,
  thumbnail,
  isSelected,
  onAddOrRemovePlanet,
}) {
  return (
    <div className={styles.planetCard}>
      <img
        className={styles.planetThumbnail}
        src={thumbnail}
        alt={name}
      />
      <div className={styles.planetDescription}>
        <h2>
          {name} {isSelected ? "- SELECTED" : ""}
        </h2>
        <p>{description}</p>
      </div>
      <button
        className="roundButton"
        onClick={() => onAddOrRemovePlanet(name, index)}
      >
        {isSelected ? "REMOVE" : "ADD PLANET"}
      </button>
    </div>
  );
}

export default Destinations;
