import React, { useState, useEffect } from "react";
import PreLoader from "./components/preloader/PreLoader"; // Replace with the correct path to your PreLoader component
import "./App.css";
import Header from "./components/header/Header";
import Home from "./components/home/Home";
import About from "./components/about/About";
import Skills from "./components/skills/Skills";
import Services from "./components/services/Services";
import Work from "./components/work/Work";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";
import ScrollUp from "./components/scrollup/ScrollUp";
import Mode from "./components/mode/Mode";
import { ThemeProvider } from "./components/theme/ThemeContext";

const App = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate a delay for the preloader (e.g., 3 seconds)
    const delay = 3000;

    // Hide the preloader after the delay
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, delay);

    // Clear the timer to avoid memory leaks
    return () => clearTimeout(timer);
  }, []);

  return (
    <ThemeProvider>
      {isLoading ? (
        <PreLoader ><Mode /></PreLoader>
      ) : (
        <>
          <Header />
          <main className="main">
            <Home />
            <About />
            <Skills />
            <Services />
            <Work />
            <Contact />
          </main>
          <Mode />
          <Footer />
          <ScrollUp />
        </>
      )}
    </ThemeProvider>
  );
};

export default App;
