import globeImage from "../assets/globe.svg";

export default function LoadingScreen() {
  return (
    <div className="loading-screen">
      <img className="globe-image" src={globeImage} />
    </div>
  );
}
