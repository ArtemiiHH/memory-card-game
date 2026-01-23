import { useEffect, useState } from "react";
import "./styles/App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import StartScreen from "./screens/StartScreen";
import LoadingScreen from "./screens/LoadingScreen";
import Main from "./screens/Main";
import GameOverModal from "./components/GameOverModal";
import { getCountries } from "./data/fetchApi";

// TODO:
// REMOVE TIMER LATER IN PRODUCTION

function App() {
  const [currentScreen, setCurrentScreen] = useState("start");
  const [countriesList, setCountriesList] = useState([]);
  const [difficulty, setDifficulty] = useState("");
  const [cardsToRender, setCardsToRender] = useState([]);
  const [clickedCards, setClickedCards] = useState([]);
  const [counter, setCounter] = useState(0);

  // Change screen from Start to Loading
  function changeScreen(value) {
    if (currentScreen === "start") {
      setCurrentScreen("loading");
    }

    // Store difficulty value
    setDifficulty(value);
  }

  // Shuffle all fetched cards
  function startNewRound() {
    // Shuffle all countries first
    let cardDeck = [...countriesList].sort(() => Math.random() - 0.5);

    // Slice deck
    if (difficulty === "easy") {
      cardDeck = cardDeck.slice(0, 5);
    } else if (difficulty === "medium") {
      cardDeck = cardDeck.slice(0, 10);
    } else {
      cardDeck = cardDeck.slice(0, 16);
    }

    // Final deck
    let finalDeck = cardDeck;
    setCardsToRender(finalDeck);
  }

  // Reshuffle already picked cards
  function shuffleCards() {
    const finalCards = [...cardsToRender].sort(() => Math.random() - 0.5);
    setCardsToRender(finalCards);
  }

  // Get card clicks
  function getCardClicks(cardId) {
    setClickedCards((previous) => {
      // If click is duplicate = Game Over
      if (previous.includes(cardId)) {
        setCurrentScreen("gameOver");
        return previous;
      }

      // Add clicked card to array
      const updatedArray = [...previous, cardId];
      setCounter(counter + 1);
      console.log(counter);

      // If all cards are clicked = Game Won
      if (updatedArray.length === cardsToRender.length) {
        setCurrentScreen("gameWon");
        return updatedArray;
      }

      // Continue Game
      shuffleCards();
      return updatedArray;
    });
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

  // Start new round
  useEffect(() => {
    if (difficulty !== "" && countriesList.length !== 0) {
      startNewRound();
    }
  }, [difficulty, countriesList]); // <-- Dependency Array

  return (
    <>
      {/* Game Over Modal */}
      {["gameWon", "gameOver"].includes(currentScreen) && (
        <GameOverModal currentScreen={currentScreen} counter={counter}></GameOverModal>
      )}

      {/* Whole App */}
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
          {["game", "gameWon", "gameOver"].includes(currentScreen) &&
            countriesList.length !== 0 && (
              <Main
                cardsToRender={cardsToRender}
                shuffleCards={shuffleCards}
                getCardClicks={getCardClicks}
                counter={counter}
              ></Main>
            )}
        </main>

        {/* Footer */}
        <Footer></Footer>
      </div>
    </>
  );
}

export default App;
