import { useState } from "react";
import "./styles/App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import StartScreen from "./screens/StartScreen";
import LoadingScreen from "./screens/LoadingScreen";
import Main from "./screens/Main";

function App() {
  const [hasGameStarted, setHasGameStarted] = useState(false);
  const [currentPage, setCurrentPage] = useState("start");

  function startGame() {
    setHasGameStarted(true);
  }

  return (
    <div className="app-container">
      <Header></Header>

      <main className="app-main">
        <StartScreen startGame={startGame}></StartScreen>
      </main>

      <Footer></Footer>
    </div>
  );
}

export default App;
