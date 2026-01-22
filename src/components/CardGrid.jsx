import Card from "../components/Card";

export default function CardGrid({ cardsToRender, getCardClicks }) {
  return (
    <div className="card-grid">
      {cardsToRender.map((card) => (
        <Card
          key={card.code}
          name={card.name}
          flag={card.flag}
          getCardClicks={() => getCardClicks(card.code)}
        ></Card>
      ))}
    </div>
  );
}
