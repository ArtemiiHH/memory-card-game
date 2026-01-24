import CardGrid from "../components/CardGrid";
import ScoreBoard from "../components/ScoreBoard";

export default function Main({
  cardsToRender,
  shuffleCards,
  getCardClicks,
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
        getCardClicks={getCardClicks}
      ></CardGrid>
    </>
  );
}
