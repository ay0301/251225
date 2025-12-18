import styles from "./Pages.module.css";
import Bar from "../components/Bar";
import image1 from "../assets/image1.jpg";

function Home() {    
  return (
    <div className={styles.wrapper}>
      <div className={styles.mainText}>
        🎂 Happy 2nd Anniversary 🎉
      </div>
      <Bar/>
      <div className={styles.homeImage}>
        <img src={image1} alt="main-image" />
      </div>
    </div>
  );
}

export default Home;