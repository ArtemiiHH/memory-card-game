import Card from "../components/Card";

export default function CardGrid({ cardsToRender }) {
  return (
    <div className="card-grid">
      {cardsToRender.map((country) => (
        <Card name={country.name} flag={country.flag}></Card>
      ))}
    </div>
  );
}
