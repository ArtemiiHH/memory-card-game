export default function Card({ name, flag, getCardClicks }) {
  return (
    <div className="card" onClick={getCardClicks}>
      <img className="country-flag" src={flag} />
      <h3 className="country-name">{name}</h3>
    </div>
  );
}
