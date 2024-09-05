"use client";

const planetsArray = [
  {
    id: 1,
    name: "Europa",
    description:
      "Europa, one of Jupiter’s moons, is an icy world with a hidden ocean beneath its surface. This mysterious moon is a prime candidate for the search for extraterrestrial life, making it a thrilling destination for space explorers.",
    thumbnail: "/destination/image-europa.png",
  },
  {
    id: 2,
    name: "Moon",
    description:
      "Our closest celestial neighbor, the Moon, is a silent witness to Earth's history. With its stunning craters and desolate landscapes, the Moon offers a unique glimpse into space exploration's past and future, making it a perfect destination for lunar adventurers.",
    thumbnail: "/destination/image-moon.png",
  },
  {
    id: 3,
    name: "Mars",
    description:
      "Mars, the Red Planet, is a barren yet fascinating world with vast deserts, towering volcanoes, and the deepest canyon in the solar system. As humanity’s next frontier, Mars invites us to dream of colonization and the possibilities of life beyond Earth.",
    thumbnail: "/destination/image-mars.png",
  },
  {
    id: 4,
    name: "Titan",
    description:
      "Titan, Saturn's largest moon, is a world of dense atmosphere and liquid methane lakes. This enigmatic moon is shrouded in a thick orange haze, concealing a landscape that is both alien and strangely familiar, beckoning explorers to uncover its secrets.",
    thumbnail: "/destination/image-titan.png",
  },
];

import { useState } from "react";

import styles from "@/components/destination/destination.module.css";
import { AddWishlistItem } from "@/components/destination/AddWishlistItem";
import { PlanetWishlistItem } from "@/components/destination/PlanetWishlistItem";

export const Destinations = () => {
  const [selectedPlanets, setSelectedPlanet] = useState([]);
  // const [isPlanetSelected, setIsPlanetSelected] =
  //   useState(false);
  const [numberOfPlanets, setNumberOfPlanets] = useState(0);

  // let isPlanetSelected = false;
  // let numberOfPlanets = 0;

  const onAddOrRemovePlanet = (name, index) => {
    setSelectedPlanet((selectedPlanets) => {
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

          {/* STOP! - this is for week 3!*/}
          {/* TASK - React 1 week 3 */}
          {/* Import the AddWishlistItem react component */}
          {/* <AddWishlistItem /> */}
          {/* TASK - React 1 week 3 */}
          {/* Convert the list, so it is using selectedPlanets.map() to display the items  */}
          {/* Implement the "REMOVE" function */}
          {/* uncomment the following code snippet: */}
          {/*           
          <h3>Your current wishlist</h3>
          <div className={styles.wishlistList}>
            <PlanetWishlistItem 
              name="europa"
              onRemove={() => removeFromWishlist('europa')}
              thumbnail="/destination/image-europa.png"
            />
            <PlanetWishlistItem 
              name="europa"
              onRemove={() => removeFromWishlist('europa')}
              thumbnail="/destination/image-europa.png"
            />
          </div> */}
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
    <>
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
    </>
  );
}

export default Destinations;
