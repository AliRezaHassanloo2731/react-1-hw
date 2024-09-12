import styles from "./OueCrew.module.css";

export default function OurCrew() {
  return (
    <div className={styles.grid}>
      <div className={styles.content}>
        <img
          className={styles.image}
          src="./crew/image-anousheh-ansari.png"
          alt="anushe"
        />
        <p>
          Anousheh Ansari (Persian: انوشه انصاری; née
          Raissyan;[2] born September 12, 1966) is an
          Iranian American engineer and co-founder and
          chairwoman of Prodea Systems
        </p>
      </div>
      <div>
        <img
          className={styles.image}
          src="./crew/image-douglas-hurley.png"
          alt="anushe"
        />
        <p>
          Douglas Gerald Hurley (born October 21, 1966) is
          an American engineer, former Marine Corps pilot
          and former NASA astronaut. He piloted Space
          Shuttle missions STS-127 (July 2009)[3] and
          STS-135 (July 2011), the final flight of the Space
          Shuttle program.
        </p>
      </div>
      <div>
        <img
          className={styles.image}
          src="./crew/image-mark-shuttleworth.png"
          alt="anushe"
        />
        <p>
          Mark Richard Shuttleworth (born 18 September 1973)
          is a South African and British entrepreneur who is
          the founder and CEO of Canonical, the company
          behind the development of the Linux-based Ubuntu
          operating system
        </p>
      </div>

      <div>
        <img
          className={styles.image}
          src="./crew/image-victor-glover.png"
          alt="anushe"
        />
        <p>
          Victor Jerome Glover (born April 30, 1976) is a
          NASA astronaut of the class of 2013[1][2] and
          pilot on the first operational flight of the
          SpaceX Crew Dragon to the International Space
          Station.
        </p>
      </div>
    </div>
  );
}
