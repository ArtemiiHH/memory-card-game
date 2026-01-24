export default function GameOverModal({ currentScreen, score, highScore, restartGame }) {
  return (
    // Modal Container
    <div className="game-over-modal">
      {/* Modal Box */}
      <div className="modal-box">
        {/* Win/lose Text */}
        <h2 className="win-lose-text">
          {currentScreen === "gameOver" ? "You lose!" : "You win!"}
        </h2>
        {/* Scores */}
        <div className="scores">
          <h2 className="score">Score: {score}</h2>
          <h2 className="high-score">High score: {highScore}</h2>
        </div>
        {/* Buttons */}
        <button className="restart game-btn" onClick={restartGame}>Try again</button>
        <button className="quit game-btn">Quit</button>
      </div>
    </div>
  );
}
