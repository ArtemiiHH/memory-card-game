export default function Card({ name, flag, handleScore, flipped }) {
  return (
    <div className={`card ${flipped ? "flip" : ""}`} onClick={handleScore}>
      {/* FRONT */}
      <div className="card-face card-front">
        <img className="country-flag" src={flag} />
        <h3 className="country-name">{name}</h3>
      </div>

      {/* BACK */}
      <div className="card-face card-back">🌍</div>
    </div>
  );
}
