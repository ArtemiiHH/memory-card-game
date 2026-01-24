export default function ScoreBoard({ cardsToRender, score, highScore }) {
  return (
    <div className="score-board">
      <h2 className="score">
        Score: {score} / {cardsToRender}
      </h2>
      <h2 className="high-score">
        🏆 High score: {highScore}
      </h2>
    </div>
  );
}
