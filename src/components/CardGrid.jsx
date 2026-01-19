import Card from "../components/Card";

export default function CardGrid({ countriesList }) {
  // Shuffle cards array and get random countries
  function shuffleArray(array) {
    return [...array].sort(() => Math.random() - 0.5);
  }

  return (
    <div className="card-grid">
      {shuffleArray(countriesList)
        .slice(0, 5)
        .map((country) => (
          <Card name={country.name} flag={country.flag}></Card>
        ))}
    </div>
  );
}
