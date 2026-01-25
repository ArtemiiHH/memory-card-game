import globeImage from "../assets/images/globe.svg";

export default function LoadingScreen() {
  return (
    <div className="loading-screen">
      <img className="globe-image" src={globeImage} />
      <h2 className="loading-text">Loading...</h2>
    </div>
  );
}
