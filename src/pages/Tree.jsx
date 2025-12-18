import { useState } from "react";
import styles from "./Pages.module.css";
import Header from "../components/Header";
import treeImg from "../assets/tree.png";

const DECORATIONS = ["🎄", "💻", "🪩", "⭐", "✨", "🔔", "🎁"];

const TREE = {
  id: "root",
  x: 270,
  y: 20,
  left: {
    id: "left",
    x: 170,
    y: 180,
    left: { id: "left.left", x: 70, y: 340 },
    right: { id: "left.right", x: 200, y: 340 },
  },
  right: {
    id: "right",
    x: 370,
    y: 180,
    left: { id: "right.left", x: 340, y: 340 },
    right: { id: "right.right", x: 470, y: 340 },
  },
};

function Tree() {    
  const [selected, setSelected] = useState(null);
  const [placed, setPlaced] = useState({});

  const handlePlace = (nodeId) => {
    if (!selected) return;

    setPlaced((prev) => ({
      ...prev,
      [nodeId]: selected,
    }));
    setSelected(null);
  };

  return (
    <div className={styles.wrapper}>
      <Header/>
      <div className={styles.treeContainer}>
        <div style={{ fontSize: '40px', fontWeight: '700' }}>Developer's Christmas Tree</div>
        <div style={{ fontSize: '20px', fontWeight: '400' }}>원하는 장식을 선택하고 트리의 빈 칸을 클릭해 장식을 배치해보세요!</div>
      
        {/* 트리 이미지 */}
        <div className={styles.treeWrapper}>
          <div className={styles.treeStage}>
            <img src={treeImg} className={styles.treeImage} alt="tree" />

            <svg className={styles.lines}
              viewBox="0 0 600 500"
              width="100%"
              height="100%"
            >
              <Lines node={TREE} />
            </svg>

            <Nodes node={TREE} placed={placed} onPlace={handlePlace} />
          </div>
        </div>

        {/* 장식 선택 */}
        <div className={styles.toolbar}>
          {DECORATIONS.map((d) => (
            <button
              key={d}
              className={`${styles.decoration} ${
                selected === d ? styles.selected : ""
              }`}
              onClick={() => setSelected(d)}
            >
              {d}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

function Nodes({ node, placed, onPlace }) {
  if (!node) return null;

  return (
    <>
      <div
        className={styles.node}
        style={{ left: node.x, top: node.y }}
        onClick={() => onPlace(node.id)}
      >
        {placed[node.id] ?? "➕"}
      </div>

      <Nodes node={node.left} placed={placed} onPlace={onPlace} />
      <Nodes node={node.right} placed={placed} onPlace={onPlace} />
    </>
  );
}

function Lines({ node }) {
  if (!node) return null;

  return (
    <>
      {node.left && (
        <line
          x1={node.x + 30}
          y1={node.y + 30}
          x2={node.left.x + 30}
          y2={node.left.y + 30}
        />
      )}
      {node.right && (
        <line
          x1={node.x + 30}
          y1={node.y + 30}
          x2={node.right.x + 30}
          y2={node.right.y + 30}
        />
      )}

      <Lines node={node.left} />
      <Lines node={node.right} />
    </>
  );
}

export default Tree;