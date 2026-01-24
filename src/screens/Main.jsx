import CardGrid from "../components/CardGrid";
import ScoreBoard from "../components/ScoreBoard";

export default function Main({
  cardsToRender,
  shuffleCards,
  getCardClicks,
  counter,
}) {
  return (
    <>
      <ScoreBoard></ScoreBoard>
      <CardGrid
        cardsToRender={cardsToRender}
        shuffleCards={shuffleCards}
        getCardClicks={getCardClicks}
      ></CardGrid>
    </>
  );
}
