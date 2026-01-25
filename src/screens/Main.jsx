import CardGrid from "../components/CardGrid";

export default function Main({
  cardsToRender,
  shuffleCards,
  handleScore,
  playSoundEffect,
}) {
  return (
    <>
      <CardGrid
        cardsToRender={cardsToRender}
        shuffleCards={shuffleCards}
        handleScore={handleScore}
        playSoundEffect={playSoundEffect}
      ></CardGrid>
    </>
  );
}
