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
      <ScoreBoard counter={counter} cardsToRender={cardsToRender.length}></ScoreBoard>
      <CardGrid
        cardsToRender={cardsToRender}
        shuffleCards={shuffleCards}
        getCardClicks={getCardClicks}
      ></CardGrid>
    </>
  );
}
