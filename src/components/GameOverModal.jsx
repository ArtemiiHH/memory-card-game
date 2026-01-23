export default function GameOverModal({ currentScreen, counter }) {
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
          <h2 className="score">Score: {counter}</h2>
          <h2 className="score">Highscore:</h2>
        </div>
        {/* Buttons */}
        <button className="restart game-btn">Try again</button>
        <button className="quit game-btn">Quit</button>
      </div>
    </div>
  );
}
