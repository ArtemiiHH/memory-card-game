import { useState } from "react";
import "./styles/App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import StartScreen from "./screens/StartScreen";
import LoadingScreen from "./screens/LoadingScreen";
import Main from "./screens/Main";

function App() {
  const [currentScreen, setCurrentScreen] = useState("start");

  function changeScreen() {
    if (currentScreen === "start") {
      setCurrentScreen("loading");
    } else if (currentScreen === "loading") {
      setCurrentScreen("game");
    }
  }

  return (
    <div className="app-container">
      <Header></Header>

      <main className="app-main">
        {currentScreen === "start" && (
          <StartScreen changeScreen={changeScreen}></StartScreen>
        )}

        {currentScreen === "loading" && <LoadingScreen></LoadingScreen>}

        {currentScreen === "game" && <Main></Main>}
      </main>

      <Footer></Footer>
    </div>
  );
}

export default App;
