export default function GameOverModal({ currentScreen }) {
  return (
    <div className="game-over-modal">
      <div className="modal-box">
        <h2 className="win-lose-text">{currentScreen === "gameOver" ? "You lose!" : "You win!"}</h2>
        <div className="scores">
          <h2>Score:</h2>
          <h2>Highscore:</h2>
        </div>
        <button className="restart game-btn">Try again</button>
        <button className="quit game-btn">Quit</button>
      </div>
    </div>
  );
}
