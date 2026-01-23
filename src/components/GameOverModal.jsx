export default function GameOverModal({ currentScreen }) {
  return (
    <div className="game-over-modal">
      <div className="modal-box">
        <h2>{currentScreen === "gameOver" ? "You lose!" : "You win!"}</h2>
      </div>
    </div>
  );
}
