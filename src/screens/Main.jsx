import CardGrid from "../components/CardGrid";

export default function Main({
  cardsToRender,
  shuffleCards,
  getCardClicks,
  counter,
}) {
  return (
    <>
      <h2 className="score-counter">{counter}/5</h2>
      <CardGrid
        cardsToRender={cardsToRender}
        shuffleCards={shuffleCards}
        getCardClicks={getCardClicks}
      ></CardGrid>
    </>
  );
}
