export default function StartScreen({ changeScreen }) {
  return (
    // Start Screen Modal
    <div className="start-screen-modal">
      {/* Select difficulty */}
      <h2 className="start-screen-text">Select difficulty level:</h2>

      {/* Start Screen Buttons */}
      <button onClick={changeScreen}>Easy</button>
      <button onClick={changeScreen}>Medium</button>
      <button onClick={changeScreen}>Hard</button>
    </div>
  );
}
