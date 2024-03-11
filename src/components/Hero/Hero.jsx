import React from "react";

import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";

const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm Harsh</h1>
        <p className={styles.description}>
        As a recent graduate specializing in front-end development with proficiency in React, I'm excited to apply my skills to create engaging and dynamic user experiences. Let's connect and discuss how I can contribute to your front-end projects!
        </p>
        <a href="mailto:harshsharmahs888888@gmail.com" className={styles.contactBtn}>
          Contact Me
        </a>
      </div>
      <img 
        src={getImageUrl("hero/heroImage.png")}
        alt="Hero image of me"
        className={styles.heroImg}
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};


export default Hero

