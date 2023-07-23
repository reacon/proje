import Navbar from "./Navbar";
import Hero from "./Hero";
import Cool from "./Cool";
import styles from "../styles/Layout.module.css";
import Last from "./last";

const Main = () => {
  return (
    <div className={styles.layout}>
      <div></div>
      <Navbar />
      <div></div>
      <div></div>
      <div>
        <Hero />
        <Cool />
        <Last />
      </div>
    </div>
  );
};
export default Main;
