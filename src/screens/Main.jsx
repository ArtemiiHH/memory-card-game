import CardGrid from "../components/CardGrid";

export default function Main({ cardsToRender, shuffleCards, getCardClicks }) {
  return (
    <CardGrid
      cardsToRender={cardsToRender}
      shuffleCards={shuffleCards}
      getCardClicks={getCardClicks}
    ></CardGrid>
  );
}
