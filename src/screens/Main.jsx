import CardGrid from "../components/CardGrid";

export default function Main({ cardsToRender, shuffleCards }) {
  return (
    <CardGrid
      cardsToRender={cardsToRender}
      shuffleCards={shuffleCards}
    ></CardGrid>
  );
}
