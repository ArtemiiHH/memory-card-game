export default function Card({ name, flag, handleScore }) {
  return (
    <div className="card" onClick={handleScore}>
      <img className="country-flag" src={flag} />
      <h3 className="country-name">{name}</h3>
    </div>
  );
}
