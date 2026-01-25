import { useState } from "react";
import Card from "../components/Card";

export default function CardGrid({
  cardsToRender,
  handleScore,
  playSoundEffect,
}) {
  const [isFlipped, setIsFlipped] = useState(false);
  const [isLocked, setIsLocked] = useState(false);

  function handleCardClick(cardId) {
    if (isLocked) return;

    playSoundEffect("flip");

    setIsLocked(true);
    setIsFlipped(true);

    // Flip back after first flip
    setTimeout(() => {
      setIsFlipped(false);
    }, 400);

    // Handle score + shuffle AFTER animation
    setTimeout(() => {
      handleScore(cardId);
      setIsLocked(false);
    }, 800);
  }

  return (
    <div className="card-grid">
      {cardsToRender.map((card) => (
        <Card
          key={card.code}
          name={card.name}
          flag={card.flag}
          flipped={isFlipped}
          handleScore={() => handleCardClick(card.code)}
        />
      ))}
    </div>
  );
}
