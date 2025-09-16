import React, { useState, useEffect } from "react";
//import { ThemeProvider } from "./contexts/ThemeContext";
import Preloader from "../src/components/Pre";
import Navbar from "./components/Navbar";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Projects from "./components/Projects/Projects";
import Resume from "./components/Resume/ResumeNew";
import ContactForm from "./components/Contactform/ContactForm";
import Footer from "./components/Footer";
import Section from "./components/Section";
import Certificates from "./components/Certificates/Certificates";
import "./style.css";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import AOS from "aos";
import "aos/dist/aos.css";

function App() {
  const [load, setLoad] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoad(false), 1200);
    return () => clearTimeout(timer);
  }, []);

  // Initialize AOS only once when app loads
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-out-cubic",
      offset: 50,
      once: false,
      mirror: true,
      anchorPlacement: "top-bottom",
      disable: "mobile",
    });

    const handleLoad = () => {
      setTimeout(() => {
        AOS.refresh();
      }, 100);
    };

    let scrollTimeout;
    const handleScroll = () => {
      clearTimeout(scrollTimeout);
      scrollTimeout = setTimeout(() => {
        AOS.refresh();
      }, 100);
    };

    window.addEventListener("load", handleLoad);
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("load", handleLoad);
      window.removeEventListener("scroll", handleScroll);
      clearTimeout(scrollTimeout);
    };
  }, []);

  return (
    <>
      <Preloader load={load} />
      <div className="App" id={load ? "no-scroll" : "scroll"}>
        <Navbar />

        <Section id="home">
          <Home />
        </Section>

        <Section id="about">
          <About />
        </Section>

        <Section id="certificates" disableAOS={true}>
          <Certificates />
        </Section>

        <Section id="projects">
          <Projects />
        </Section>

        <Section id="resume">
          <Resume />
        </Section>

        <Section id="contact" disableAOS={true}>
          <ContactForm />
        </Section>

        <Footer />
      </div>
    </>
  );
}

export default App;
