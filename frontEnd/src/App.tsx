import React, { useEffect } from "react";
import "./App.css";
import "./styles.css";
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import Header from "./components/Header/Header";
import Home from "./pages/Home/Home";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div>
      <Header />
      <Home />
      <Footer />
    </div>
  );
}

export default App;
