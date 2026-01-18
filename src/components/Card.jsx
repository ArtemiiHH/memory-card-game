export default function Card({ name, flag }) {
  return (
    <div className="card">
      <img className="country-image" src={flag} />
      <h3 className="country-name">{name}</h3>
    </div>
  );
}
