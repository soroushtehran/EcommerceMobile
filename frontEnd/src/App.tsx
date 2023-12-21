import React, { useEffect } from "react";
import "./App.css";
import "./styles.css";
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import Header from "./components/Header/Header";
import Home from "./pages/Home/Home";

function App() {
  return (
    <div>
      <Header />
      <Home />
    </div>
  );
}

export default App;
