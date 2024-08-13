import React from "react";
import { getImageUrl } from "../../utils";
import styles from "./About.module.css";
const About = () => {
  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}> About</h2>
      <div className={styles.content}>
        <img
          src={getImageUrl("about/todoworkgirl.png")}
          alt="Me sitting with a laptop"
          className={styles.aboutImage}
        />
        <ul className={styles.aboutItems}>
          <li className={styles.aboutItem}>
            <img
              src={getImageUrl("about/cursorIcon.png")}
              alt="Cursor Image"
            
            />
            <div className={styles.aboutItemText}>
              <h3>Frontend Developer</h3>
              <p>
                I'm a frontend developer with experience in building responsive
                and optimized sites
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/cursorIcon.png")} alt="UI Icon" />
            <div className={styles.aboutItemText}>
              <h3>UI designer</h3>
              <p>
              I have designed clean, intuitive, and visually appealing user interfaces, focusing on usability and consistency.
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/serverIcon.png")} alt="Cursor Image" />
            <div className={styles.aboutItemText}>
              <h3>Backend Developer</h3>
              <p>
              I develop and test APIs, focusing on high performance backend systems.
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};
export default About;
