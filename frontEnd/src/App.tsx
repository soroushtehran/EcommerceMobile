import React, { useEffect } from "react";
import "./App.css";
import "./styles.css";
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import { useRoutes } from "react-router-dom";
import routes from "./routes";
import ProgressTop from "./components/ProgressTop/ProgressTop";

function App() {
  const router = useRoutes(routes);

  return (
    <div>
      <ProgressTop />
      <Header />
      {router}
      <Footer />
    </div>
  );
}

export default App;
