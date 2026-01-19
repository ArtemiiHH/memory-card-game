import Card from "../components/Card";

export default function CardGrid({ countriesList }) {
  return (
    <div className="card-grid">
      {countriesList.map((country) => (
        <Card name={country.name} flag={country.flag}></Card>
      ))}
    </div>
  );
}
