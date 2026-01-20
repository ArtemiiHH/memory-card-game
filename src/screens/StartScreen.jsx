export default function StartScreen({ changeScreen }) {
  return (
    // Start Screen Modal
    <div className="start-screen-modal">
      {/* Select difficulty */}
      <h2 className="start-screen-text">Select difficulty level:</h2>

      {/* Start Screen Buttons */}
      <button onClick={() => changeScreen("easy")}>Easy</button>
      <button onClick={() => changeScreen("medium")}>Medium</button>
      <button onClick={() => changeScreen("hard")}>Hard</button>
    </div>
  );
}
