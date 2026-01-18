export default function Card({ name, flag }) {
  return (
    <div className="card">
      <img src={flag} />
      <h3>{name}</h3>
    </div>
  );
}
