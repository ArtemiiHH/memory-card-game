export default function Card({ name, flag }) {
  return (
    <div className="card">
      <img className="country-flag" src={flag} />
      <h3 className="country-name">{name}</h3>
    </div>
  );
}
