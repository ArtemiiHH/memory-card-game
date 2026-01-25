import CardGrid from "../components/CardGrid";

export default function Main({ cardsToRender, shuffleCards, handleScore }) {
  return (
    <>
      <CardGrid
        cardsToRender={cardsToRender}
        shuffleCards={shuffleCards}
        handleScore={handleScore}
      ></CardGrid>
    </>
  );
}
