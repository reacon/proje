import Navbar from "../components/Navbar/Navbar";
import Hero from "../components/Hero";
import Cool from "../components/Cool";
import styles from "../styles/Layout.module.css";
import Last from "../components/Last";
import Footer from "../components/Footer";
import Card from "../components/Card";

const Layout = ({children}) => {
  return (
    <div className={styles.layout}>
      <div></div>
      <Navbar />
      <div></div>
      <div></div>
      <div>
        {children}
        <Footer />
      </div>
    </div>
  );
};
export default Layout;
