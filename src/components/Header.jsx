import { useNavigate, useLocation } from "react-router-dom";
import styles from "./Header.module.css";

function Header() {
  const navigate = useNavigate();
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  return (
    <div className={styles.header}>
      <div className={styles.mainText}>🎂 Happy 2nd Anniversary 🎂</div>
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
          className={`${styles.title} ${isActive("/tree") ? styles.active : ""}`}
          onClick={() => navigate("/tree")}
        >
          TREE
        </div>
      </div>
    </div>
  );
}

export default Header;