import CardGrid from "../components/CardGrid";
import ScoreBoard from "../components/ScoreBoard";

export default function Main({
  cardsToRender,
  shuffleCards,
  handleScore,
  score,
}) {
  return (
    <>
      <ScoreBoard
        score={score}
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
