import { useNavigate, useLocation } from "react-router-dom";
import styles from "./Bar.module.css";

function Bar() {
  const navigate = useNavigate();
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  return (
    <div className={styles.container}>
      <div 
        className={`${styles.title} ${isActive("/") ? styles.active : ""}`}
        onClick={() => navigate("/")}
      >
        HOME
      </div>
      <div
        className={`${styles.title} ${isActive("/letter") ? styles.active : ""}`}
        onClick={() => navigate("/letter")}
      >
        LETTER
      </div>
      <div
        className={`${styles.title} ${isActive("/photo") ? styles.active : ""}`}
        onClick={() => navigate("/photo")}
      >
        PHOTO
      </div>
      <div
        className={`${styles.title} ${isActive("/song") ? styles.active : ""}`}
        onClick={() => navigate("/song")}
      >
        SONG
      </div>
    </div>
  );
}

export default Bar;