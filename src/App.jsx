import { useState } from "react";
import "./styles/App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import StartScreen from "./screens/StartScreen";
import LoadingScreen from "./screens/LoadingScreen";
import Main from "./screens/Main";

function App() {
  const [currentScreen, setCurrentScreen] = useState("start");

  // Change screens
  function changeScreen() {
    if (currentScreen === "start") {
      setCurrentScreen("loading");
    } else if (currentScreen === "loading") {
      setCurrentScreen("game");
    }
  }

  return (
    <div className="app-container">
      {/* Header */}
      <Header></Header>

      {/* Main Section */}
      <main className="app-main">
        {/* Start Screen */}
        {currentScreen === "start" && (
          <StartScreen changeScreen={changeScreen}></StartScreen>
        )}

        {/* Loading Screen */}
        {currentScreen === "loading" && <LoadingScreen></LoadingScreen>}

        {/* Main Game Screen */}
        {currentScreen === "game" && <Main></Main>}
      </main>

      {/* Footer */}
      <Footer></Footer>
    </div>
  );
}

export default App;
