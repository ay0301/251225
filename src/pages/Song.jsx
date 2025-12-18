import styles from "./Pages.module.css";
import Bar from "../components/Bar";

function Song() {    
  return (
    <div>
      <div className={styles.mainText}>
        🎂 Happy 2nd Anniversary 🎉
      </div>
      <Bar/>
    </div>
  );
}

export default Song;