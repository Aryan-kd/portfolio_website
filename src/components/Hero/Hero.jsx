import React from "react";

import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";

const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm Aryan Kodinya</h1>
        <p className={styles.description}>
          I am a Full-Stack Developer with experience in working with
          technologies like MERN Stack, MySQL and PHP.
        </p>
        <a
          href="mailto:aryan.kodinya07@gmail.com"
          className={styles.contactBtn}
        >
          Mail Me
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

export default Hero;
