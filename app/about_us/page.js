import styles from "./page.module.css";

import OurValues from "./ourValue/OurValues";

import ourTeamImage from "@/data/inspiration_about_us/our_team.png";
import OurCrew from "./OurCrew/OurCrew";
import OurPartners from "./OurPrtner/OurPartners";

export const Crew = () => {
  return (
    <div className="fullBGpicture">
      <main className="mainContent">
        <h1>About us</h1>
        <section className="card">
          <h2>Our Values</h2>
          <OurValues />
        </section>
        <section className="card">
          <h2>The crew</h2>
          <OurCrew />
        </section>
        <h2>Our Partners</h2>
        <OurPartners />
      </main>
    </div>
  );
};

export default Crew;
