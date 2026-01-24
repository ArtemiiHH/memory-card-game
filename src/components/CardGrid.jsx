import Card from "../components/Card";

export default function CardGrid({ cardsToRender, handleScore }) {
  return (
    <div className="card-grid">
      {cardsToRender.map((card) => (
        <Card
          key={card.code}
          name={card.name}
          flag={card.flag}
          handleScore={() => handleScore(card.code)}
        ></Card>
      ))}
    </div>
  );
}
