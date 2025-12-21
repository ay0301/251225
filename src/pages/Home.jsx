import { useState } from "react";
import styles from "./Pages.module.css";
import Header from "../components/Header";
import Confetti from "../components/Confetti";
import image0 from "../assets/image0.jpg";
import image1 from "../assets/image1.jpg";
import image2 from "../assets/image2.jpg";
import image3 from "../assets/image1.jpg";
import image4 from "../assets/image1.jpg";
import image5 from "../assets/image1.jpg";

function Home() {    
  const [confettiOn, setConfettiOn] = useState(true);

  return (
    <div className={styles.wrapper}>
      <Header />
      <Confetti isActive={confettiOn} />

      <div style={{ paddingTop: '30px', fontSize: '30px', fontWeight: "bold" }}>🎉 의성아영 2주년 기념!</div>
      <div style={{ paddingTop: '10px', fontSize: '20px', fontWeight: "500" }}>열심히 만들었으니까 코드는 뜯어보지 않기❤️</div>
      <div style={{ padding: '30px 0' }}>
        <img style={{ height: '500px' }} src={image0} alt="main-image" />
      </div>
      <div style={{ fontSize: '25px', fontWeight: "bold" }}>💚 2023.12.25. ~ ing 🩵</div>

      <div style={{ paddingTop: '130px', fontSize: '30px', fontWeight: "bold" }}>추억 요약 . . .</div>

      <div className={styles.rowContainer} style={{ marginTop: 20 }}>
        <img className={styles.homeImage} src={image1} alt="main-image" />
        <div className={styles.text}>2023.12.20. 첫 데이트?</div>
      </div>
      <div className={styles.rowContainer}>
        <img className={styles.homeImage} src={image2} alt="main-image" />
        <div className={styles.text}>2023.12.25. 사귄 날~</div>
      </div>
      <div className={styles.rowContainer}>
        <img className={styles.homeImage} src={image3} alt="main-image" />
        <div className={styles.text}>2023.12.20. 첫 해외여행!</div>
      </div>
      <div className={styles.rowContainer}>
        <img className={styles.homeImage} src={image4} alt="main-image" />
        <div className={styles.text}>2023.12.20. 첫 1주년!!</div>
      </div>
      <div className={styles.rowContainer}>
        <img className={styles.homeImage} src={image5} alt="main-image" />
        <div className={styles.text}>2025.12.25. 그리고 오늘</div>
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