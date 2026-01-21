export default function Card({ name, flag, code }) {
  return (
    <div key={code} className="card">
      <img className="country-flag" src={flag} />
      <h3 className="country-name">{name}</h3>
    </div>
  );
}
