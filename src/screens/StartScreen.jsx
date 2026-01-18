import Main from "./Main";

export default function StartScreen({ loadLoadingScreen, startGame }) {
  // Difficulty levels
  const level = [
    {
      easy: "easy",
      medium: "medium",
      hard: "hard",
    },
  ];

  return (
    <div className="start-screen-modal">
      <h2 className="start-screen-text">Select difficulty level:</h2>

      <button onClick={startGame}>Easy</button>
      <button onClick={level.medium}>Medium</button>
      <button onClick={level.hard}>Hard</button>
    </div>
  );
}
