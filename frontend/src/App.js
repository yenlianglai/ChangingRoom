import Header from "./Container/Header";
import MainPage from "./Container/MainPage";
import Footer from "./Container/Footer";
import { useEffect, useState } from "react";

const App = () => {
  const [width, setWindowWidth] = useState(0);
  useEffect(() => {
    updateDimensions();

    window.addEventListener("resize", updateDimensions);
    return () => window.removeEventListener("resize", updateDimensions);
  }, []);

  const updateDimensions = () => {
    const width = window.innerWidth;
    setWindowWidth(width);
  };

  return (
    <div className="App">
      <Header width={width} />
      <MainPage width={width} />
      <Footer />
    </div>
  );
};

export default App;
