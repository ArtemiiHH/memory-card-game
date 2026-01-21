export default function Card({ name, flag, shuffleCards }) {
  return (
    <div className="card" onClick={() => shuffleCards()}>
      <img className="country-flag" src={flag} />
      <h3 className="country-name">{name}</h3>
    </div>
  );
}
