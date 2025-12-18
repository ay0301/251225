import styles from "./Pages.module.css";
import Header from "../components/Header";
import image1 from "../assets/image1.jpg";

function Home() {    
  return (
    <div className={styles.wrapper}>
      <Header/>
      <div className={styles.homeImage}>
        <img src={image1} alt="main-image" />
      </div>
    </div>
  );
}

export default Home;