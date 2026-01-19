import { useState } from "react";
import Main from "./Main";

export default function StartScreen({ changeScreen }) {
  // Difficulty Level
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
    // Start Screen Modal
    <div className="start-screen-modal">
      {/* Select difficulty */}
      <h2 className="start-screen-text">Select difficulty level:</h2>

      {/* Start Screen Buttons */}
      <button onClick={changeScreen}>Easy</button>
      <button>Medium</button>
      <button>Hard</button>
    </div>
  );
}
