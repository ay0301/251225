import { useState } from "react";
import styles from "./Pages.module.css";
import Header from "../components/Header";
import Confetti from "../components/Confetti";
import image1 from "../assets/image1.jpg";

function Home() {    
  const [confettiOn, setConfettiOn] = useState(true);

  return (
    <div className={styles.wrapper}>
      <Header />
      <Confetti isActive={confettiOn} />
      
      <div className={styles.homeImage}>
        <img src={image1} alt="main-image" />
      </div>

      {/* 플로팅 버튼 */}
      <button
        className={styles.floatingBtn}
        onClick={() => setConfettiOn((prev) => !prev)}
      >
        {confettiOn ? "🎉 OFF" : "🎉 ON"}
      </button>
    </div>
  );
}

export default Home;