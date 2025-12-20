import { useCallback, useRef, useState } from "react";
import Header from "../components/Header";
import Webcam from "react-webcam";
import styles from "./Pages.module.css";
import cameraIcon from "../assets/camera.png";

function Photo() {  
  const webcamRef = useRef(null);
  const [imgSrc, setImgSrc] = useState(null);
  const [flash, setFlash] = useState(false);

  const capture = useCallback(() => {
    if (webcamRef) {
      setFlash(true);

      setTimeout(() => {
        const imageSrc = webcamRef.current.getScreenshot();
        setImgSrc(imageSrc);
        setFlash(false);
      }, 100);
    }
  }, [webcamRef, setImgSrc]);

  return (
    <div className={styles.wrapper}>
      <Header />
      <div className={styles.photoContainer}>
        <Webcam audio={false} ref={webcamRef} screenshotFormat="image/jpeg" mirrored={true} />
        <button
          className={styles.webcamButton}
          onClick={capture}
        >
          <img src={cameraIcon} alt="camera-icon" />
        </button>
      </div>

      {imgSrc && (
        <div className={styles.capturedContainer}>
          <img src={imgSrc} />
          <span className={styles.capturedText}>
            2025. 12. 25. 2주년 기념 🥰
          </span>
        </div>
      )}
      {flash && <div className={styles.flash} />}
    </div>
  );
}

export default Photo;