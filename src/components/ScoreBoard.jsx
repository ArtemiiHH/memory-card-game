export default function ScoreBoard({ cardsToRender, score, highScore }) {
  return (
    <div className="score-board">
      <h2 className="score">
        Score: {score} / {cardsToRender}
      </h2>
      <div className="high-score-group">
        <span className="cup-emoji">🏆 </span>
        <h2 className="high-score-text">High score: {highScore}</h2>
      </div>
    </div>
  );
}
