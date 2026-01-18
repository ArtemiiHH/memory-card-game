import { useState } from "react";
import "./styles/App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import StartScreen from "./screens/StartScreen";
import LoadingScreen from "./screens/LoadingScreen";
import Main from "./screens/Main";

function App() {
  return (
    <div className="app-container">
      <Header></Header>

      <main className="app-main">
        <LoadingScreen></LoadingScreen>
      </main>

      <Footer></Footer>
    </div>
  );
}

export default App;
