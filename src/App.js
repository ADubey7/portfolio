import React, { useState, useEffect } from "react";
import Preloader from "../src/components/Pre";
import Navbar from "./components/Navbar";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Projects from "./components/Projects/Projects";
import Resume from "./components/Resume/ResumeNew";
import ContactForm from "./components/Contactform/ContactForm";
import Footer from "./components/Footer";
import Section from "./components/Section"; // 👈 new wrapper
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

  useEffect(() => {
    AOS.init({
      duration: 1200,
      easing: "ease-out-quart",
      offset: 100,
      once: false,
      mirror: true,
    });
    const onLoad = () => AOS.refresh();
    window.addEventListener("load", onLoad);
    return () => window.removeEventListener("load", onLoad);
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

        <Section id="projects">
          <Projects />
        </Section>

        <Section id="resume">
          <Resume />
        </Section>

        <Section id="contact">
          <ContactForm />
        </Section>

        <Footer />
      </div>
    </>
  );
}

export default App;
