import styles from "./Pages.module.css";
import Bar from "../components/Bar";

function Photo() {    
  return (
    <div>
      <div className={styles.mainText}>
        🎂 Happy 2nd Anniversary 🎉
      </div>
      <Bar/>
    </div>
  );
}

export default Photo;