import { useState } from "react";
import Home from "./Components/Home";
import CoinDetail from "./Components/CoinDetail";
import About from "./Components/About";
import { BrowserRouter, Routes, Route, Link } from "resct-router-dom";

function App() {
  return (
    <BrowserRouter>
      <header>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/about">About Coin Lizard</Link>
        </nav>
      </header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/coindetail/:id:" element={<CoinDetail />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
