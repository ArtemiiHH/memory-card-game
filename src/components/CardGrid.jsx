import Card from "../components/Card";

export default function CardGrid({ countriesList }) {
  return (
    <div className="card-grid">
      {countriesList.slice(0, 5).map((country) => (
        <Card name={country.name} flag={country.flag}></Card>
      ))}
    </div>
  );
}
