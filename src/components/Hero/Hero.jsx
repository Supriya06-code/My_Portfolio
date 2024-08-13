import React from "react";
import { getImageUrl } from "../../utils";
import styles from "./Hero.module.css";
const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hii, I'm Supriya</h1>
      
      <p className={styles.description}>
        I'm a passionate and eager software engineer with hands-on experience in
        Web-Dev. Excited to bring my fresh perspectives and technical skills to
        the industry. Let's connect to discuss opportunities!
      </p>
      <a
        href="mailto:supriyanjadhav2000@gmail.com"
        className={styles.contactBtn}
      >
        Contact Me
      </a>
      </div>
      <img
        src={getImageUrl("hero/Girlboss.png")}
        alt="Hero image of me"
        className={styles.heroImg}
      />
      <div className={styles.topBlur}></div>
      <div className={styles.bottomBlur}></div>
    </section>
  );
};

export default Hero;
