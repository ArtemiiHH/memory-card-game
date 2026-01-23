export default function StartScreen({ changeScreen }) {
  return (
    // Start Screen Modal
    <div className="start-screen-modal">
      {/* Select difficulty */}
      <h2 className="start-screen-text">Select difficulty level:</h2>

      {/* Start Screen Buttons */}
      <button className="easy game-btn" onClick={() => changeScreen("easy")}>
        Easy
      </button>
      <button
        className="medium game-btn"
        onClick={() => changeScreen("medium")}
      >
        Medium
      </button>
      <button className="hard game-btn" onClick={() => changeScreen("hard")}>
        Hard
      </button>
    </div>
  );
}
