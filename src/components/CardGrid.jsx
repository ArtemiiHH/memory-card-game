import Card from "../components/Card";

export default function CardGrid({ cardsToRender, shuffleCards }) {
  return (
    <div className="card-grid">
      {cardsToRender.map((card) => (
        <Card
          key={card.code}
          name={card.name}
          flag={card.flag}
          shuffleCards={shuffleCards}
        ></Card>
      ))}
    </div>
  );
}
