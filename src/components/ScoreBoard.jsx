export default function ScoreBoard({ cardsToRender, score }) {
  return (
    <div className="score-board">
      <h2>
        Score: {score} / {cardsToRender}
      </h2>
      <h2>High score: </h2>
    </div>
  );
}
