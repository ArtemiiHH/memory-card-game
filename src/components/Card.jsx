export default function Card({ name, image }) {
  return (
    <div className="card">
      <img src={image} />
      <h3>{name}</h3>
    </div>
  );
}
