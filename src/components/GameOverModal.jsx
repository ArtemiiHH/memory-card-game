export default function GameOverModal({ gameOver }) {
  return (
    <div className="game-over-modal">
      <div className="modal-box">
        <h2>{gameOver ? "You lose!" : "You win!"}</h2>
      </div>
    </div>
  );
}
