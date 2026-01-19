import { useState } from "react";
import Main from "./Main";

export default function StartScreen({ changeScreen }) {
  const [difficulty, setDifficulty] = useState("");

  function changeDifficulty() {
    if (difficulty === "easy") {
      setDifficulty("easy");
    } else if (difficulty === "medium") {
      setDifficulty("medium");
    } else {
      setDifficulty("hard");
    }
  }

  return (
    <div className="start-screen-modal">
      <h2 className="start-screen-text">Select difficulty level:</h2>

      <button>Easy</button>
      <button>Medium</button>
      <button>Hard</button>
    </div>
  );
}
