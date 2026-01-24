export default function ScoreBoard({ cardsToRender, counter }) {
  return (
    <div className="score-board">
      <h2>
        Score: {counter} / {cardsToRender}
      </h2>
      <h2>Highscore: </h2>
    </div>
  );
}
