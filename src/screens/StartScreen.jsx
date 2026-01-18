import Main from "./Main";

export default function StartScreen({ startGame }) {
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

      <button type={level.easy}>
        Easy
      </button>
      <button type={level.medium}>Medium</button>
      <button type={level.hard}>Hard</button>
    </div>
  );
}
