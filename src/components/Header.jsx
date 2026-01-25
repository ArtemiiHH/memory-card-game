export default function Header({ music, setMuted, muted }) {
  // Toggle Background Music
  function toggleSound() {
    setMuted((prev) => {
      if (!prev) {
        music.pause();
      } else {
        music.play().catch(() => {});
      }

      return !prev;
    });
  }

  return (
    <header>
      <button className="sound-btn" onClick={toggleSound}>
        {muted ? "🔇" : "🔊"}
      </button>
      <a href="">
        <h1 className="game-title">
          Ge<span className="globe-emoji">🌎</span>graphy Memo Game
        </h1>
      </a>
    </header>
  );
}
