import Card from "../components/Card";

export default function CardGrid({ cardsToRender }) {
  return (
    <div className="card-grid">
      {cardsToRender.map((country) => (
        <Card key={country.code} name={country.name} flag={country.flag}></Card>
      ))}
    </div>
  );
}
