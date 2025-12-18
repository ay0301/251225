import { useEffect, useState } from "react";
import styles from "./Confetti.module.css";

const NUM_CONFETTI = 30;
const SYMBOLS = ["❄️", "✨", "🎂", "💌"];

export default function Confetti({ isActive }) {
  const [confetti, setConfetti] = useState([]);

  useEffect(() => {
    const items = Array.from({ length: NUM_CONFETTI }).map((_, i) => ({
      id: i,
      left: Math.random() * 100, // % 단위
      delay: Math.random() * 2, // 초 단위
      duration: 3 + Math.random() * 2, // 3~5초
      symbol: SYMBOLS[Math.floor(Math.random() * SYMBOLS.length)],
      size: 16 + Math.random() * 16, // 16~32px
    }));
    setConfetti(items);
  }, []);

  if (!isActive) return null;

  return (
    <div className={styles.container}>
      {confetti.map((c) => (
        <span
          key={c.id}
          className={styles.confetti}
          style={{
            left: `${c.left}%`,
            animationDelay: `${c.delay}s`,
            animationDuration: `${c.duration}s`,
            fontSize: `${c.size}px`,
          }}
        >
          {c.symbol}
        </span>
      ))}
    </div>
  );
}