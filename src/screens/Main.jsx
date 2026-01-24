import CardGrid from "../components/CardGrid";
import ScoreBoard from "../components/ScoreBoard";

export default function Main({
  cardsToRender,
  shuffleCards,
  handleScore,
  score,
  highScore,
}) {
  return (
    <>
      <ScoreBoard
        score={score}
        highScore={highScore}
        cardsToRender={cardsToRender.length}
      ></ScoreBoard>
      <CardGrid
        cardsToRender={cardsToRender}
        shuffleCards={shuffleCards}
        handleScore={handleScore}
      ></CardGrid>
    </>
  );
}
