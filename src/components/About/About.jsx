import React from "react";

import styles from "./About.module.css";
import { getImageUrl } from "../../utils";

const About = () => {
  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>About</h2>
      <div className={styles.content}>
        <img
          src={getImageUrl("about/aboutImage.png")}
          alt="Me sitting with a laptop"
          className={styles.aboutImage}
        />
        <ul className={styles.aboutItems}>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/cursorIcon.png")} alt="Cursor icon" />
            <div className={styles.aboutItemText}>
              <h3>Full-Stack Developer</h3>
              <p>
                I'm a Full-Stack Developer with experience in working with
                technologies like MERN Stack, MySQL and PHP
              </p>
            </div>
          </li>

          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/uiIcon.png")} alt="UI icon" />
            <div className={styles.aboutItemText}>
              <h3>Backend Devloper</h3>
              <p>
                I have designed multiple api, Database and microservices app
                using Nodejs, MongoDB and MySQL
              </p>
            </div>
          </li>

          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/serverIcon.png")} alt="Server icon" />
            <div className={styles.aboutItemText}>
              <h3>Data Scientist</h3>
              <p>
                I'm aspirant to become a Data Scientist and learning
                technologies like Python, Advance MySQL and Power BI
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default About;
