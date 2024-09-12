"use client";

import React, { useState, useEffect } from "react";
import styles from "./page.module.css";

const API_KEY = "BWwu25J88FDuPyMWRheREe70MKHObzBYb2N0Sgfu";
const NASA_URLs = {
  astronomyPicOfTheDay: `https://api.nasa.gov/planetary/apod?api_key=${API_KEY}`,
  marsRoverPhoto: `https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?earth_date=2015-6-3&api_key=${API_KEY}`,
};

export const NasaCollaboration = () => {
  const [dailyImg, setDailyImg] = useState({});
  const [roverPhoto, setRoverPhoto] = useState({});

  useEffect(() => {
    const fetchRoverPhotos = async () => {
      try {
        const roverPhotoResponse = await fetch(
          NASA_URLs.marsRoverPhoto
        ).then((response) => response.json());
        console.log(roverPhotoResponse);
        setRoverPhoto(roverPhotoResponse);

        const dailyImgRes = await fetch(
          NASA_URLs.astronomyPicOfTheDay
        );
        const dailyImgData = await dailyImgRes.json();
        setDailyImg(dailyImgData);
        console.log(dailyImgData);
      } catch (console) {
        console.error("Error fetching data from NASA API");
      }
    };

    fetchRoverPhotos();

    // TASK - React 1 week 3
    // fetch the extra data for NASA_URLs.astronomyPicOfTheDay and save it to the dailyImg state variable
  }, []);

  return (
    <div className="fullBGpicture">
      <main className="mainContent">
        <h1>Collaboration with NASA</h1>

        <section className="card">
          <h2>Astronomy Picture of the day</h2>
          {dailyImg && (
            <>
              <h3>{dailyImg.title}</h3>
              <p>{dailyImg.explanation}</p>
              <img
                className={styles.nasaPicOfTheDayImg}
                src={dailyImg.url}
                alt={dailyImg.title}
              />
            </>
          )}
        </section>
        <section className="card">
          <h2>Rover Photos</h2>

          {roverPhoto?.photos?.map((photo) => (
            <RoverPhoto
              key={photo.id}
              src={photo.img_src}
              date={photo.earth_date}
              roverName={photo.rover.name}
            />
          ))}
          {/* {roverPhoto?.photos?.length ? (
            <>
              <p>Date {roverPhoto.photos[0]?.earth_date}</p>
              <img
                className={styles.nasaPicOfTheDayImg}
                src={roverPhoto.photos[0]?.img_src}
                alt={dailyImg.title}
              />
            </>
          ) : (
            <p>Loading rover photos...</p>
          )} */}
        </section>
      </main>
    </div>
  );
};

export default NasaCollaboration;

function RoverPhoto({ src, date, roverName }) {
  return (
    <div className={styles.roverPhotoCard}>
      <img
        className={styles.nasaPicOfTheDayImg}
        src={src}
        alt={roverName}
      />
      <p>Date: {date}</p>
      <p>Rover Name: {roverName}</p>
    </div>
  );
}
