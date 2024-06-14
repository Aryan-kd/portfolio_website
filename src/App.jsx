import React from "react";
import styles from "./App.module.css";
import {
  Navbar,
  Hero,
  Experience,
  About,
  Projects,
  Contact,
} from "./components";

const App = () => {
  return (
    <div className={styles.App}>
      <Navbar />
      <Hero />
      <About />
      <Experience />
      <Projects />
      <Contact />
    </div>
  );
};

export default App;
