export default function StartScreen({ changeScreen, playSoundEffect }) {
  return (
    // Start Screen Modal
    <div className="start-screen-modal">
      {/* Select difficulty */}
      <h2 className="start-screen-text">Select difficulty level:</h2>

      {/* Start Screen Buttons */}
      <button
        className="easy game-btn"
        onClick={() => {
          playSoundEffect("click");
          changeScreen("easy");
        }}
      >
        Easy
      </button>
      <button
        className="medium game-btn"
        onClick={() => {
          playSoundEffect("click");
          changeScreen("medium");
        }}
      >
        Medium
      </button>
      <button
        className="hard game-btn"
        onClick={() => {
          playSoundEffect("click");
          changeScreen("hard");
        }}
      >
        Hard
      </button>
    </div>
  );
}
