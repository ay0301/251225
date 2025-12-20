import { useState } from "react";
import styles from "./Pages.module.css";
import Header from "../components/Header";
import letterClose from "../assets/letterClose.png";
import letterOpen from "../assets/letterOpen.png";

function Letter() {   
  const [isOpen, setIsOpen] = useState(false);
  const [isHidden, setIsHidden] = useState(false);

  const handleClick = () => {
    if (isOpen) return;

    setIsHidden(true);

    requestAnimationFrame(() => {
      setTimeout(() => {
        setIsOpen(true);
        setIsHidden(false);
      }, 300);
    });
  };
  
  return (
    <div className={styles.wrapper}>
      <Header />
      <div className={styles.letterContainer}>
        <img
          src={isOpen ? letterOpen : letterClose}
          alt="letter"
          onClick={handleClick}
          className={`${styles.letterImage}
            ${!isOpen ? styles.shake : ""}
            ${isHidden ? styles.hidden : ""}
          `}
        />
      </div>
    </div>
  );
}

export default Letter;