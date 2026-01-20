import { useEffect, useState } from "react";
import "./styles/App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import StartScreen from "./screens/StartScreen";
import LoadingScreen from "./screens/LoadingScreen";
import Main from "./screens/Main";
import { getCountries } from "./data/fetchApi";

// TODO:
// REMOVE TIMER LATER IN PRODUCTION

function App() {
  const [currentScreen, setCurrentScreen] = useState("start");
  const [countriesList, setCountriesList] = useState([]);
  const [difficulty, setDifficulty] = useState("");
  const [cardsToRender, setCardsToRender] = useState([]);

  // Change screen from Start to Loading
  function changeScreen(value) {
    if (currentScreen === "start") {
      setCurrentScreen("loading");
    }

    // Store difficulty value
    setDifficulty(value);
  }

  function roundShuffle() {
    const result = [...countriesList].sort(() => Math.random() - 0.5);
    setCardsToRender(result);
  }

  // Fetch countries
  useEffect(() => {
    // Fetch only if current is Loading Screen
    if (currentScreen === "loading") {
      // Timeout of 2 secs
      setTimeout(() => {
        // Fetch countries
        async function fetchCountries() {
          const countries = await getCountries();
          setCountriesList(countries);

          // Change screen to Game
          setCurrentScreen("game");
        }

        fetchCountries();
      }, 1000); // <-- 1000ms Timer
    }
  }, [currentScreen]); // <-- Dependency Array

  useEffect(() => {
    roundShuffle();
  }, []); // <-- Dependency Array

  return (
    <div className="app-container">
      {/* Header */}
      <Header></Header>

      {/* Main Section Screens */}
      <main className="app-main">
        {/* Load Start Screen */}
        {currentScreen === "start" && (
          <StartScreen changeScreen={changeScreen}></StartScreen>
        )}

        {/* Load Loading Screen */}
        {currentScreen === "loading" && !countriesList.length && (
          <LoadingScreen></LoadingScreen>
        )}

        {/* Load Main Game Screen */}
        {currentScreen === "game" && countriesList.length !== 0 && (
          <Main countriesList={countriesList}></Main>
        )}
      </main>

      {/* Footer */}
      <Footer></Footer>
    </div>
  );
}

export default App;
