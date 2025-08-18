import React, { useState, useEffect } from "react";
import Preloader from "../src/components/Pre";
import Navbar from "./components/Navbar";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Projects from "./components/Projects/Projects";
import Resume from "./components/Resume/ResumeNew";
import ContactForm from "./components/Contactform/ContactForm"; // 👈 Import ContactForm
import Footer from "./components/Footer";
import "./style.css";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import AOS from "aos";
import "aos/dist/aos.css";

function App() {
  const [load, setLoad] = useState(true);

  // 🔹 Preloader
  useEffect(() => {
    const timer = setTimeout(() => setLoad(false), 1200);
    return () => clearTimeout(timer);
  }, []);

  // 🔹 Initialize AOS
  useEffect(() => {
    AOS.init({
      duration: 1200, // Smoother animation
      easing: "ease-out-quart", // Premium easing
      offset: 100, // Trigger slightly before element enters
      once: false, // Animate every scroll
      mirror: true, // Animate back when scrolling up
    });

    const onLoad = () => AOS.refresh();
    window.addEventListener("load", onLoad);
    return () => window.removeEventListener("load", onLoad);
  }, []);

  // 🔹 Smooth scrolling
  useEffect(() => {
    const handleAnchorClick = (e) => {
      if (
        e.target.tagName === "A" &&
        e.target.getAttribute("href")?.startsWith("#")
      ) {
        e.preventDefault();
        const targetId = e.target.getAttribute("href").substring(1);
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
          targetElement.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      }
    };

    document.addEventListener("click", handleAnchorClick);
    return () => document.removeEventListener("click", handleAnchorClick);
  }, []);

  return (
    <>
      <Preloader load={load} />
      <div className="App" id={load ? "no-scroll" : "scroll"}>
        <Navbar />

        {/* 🔹 Sections with same AOS animation as About */}
        <section id="home" data-aos="fade-up-right" data-aos-delay="200">
          <Home />
        </section>

        <section id="about" data-aos="fade-up-right" data-aos-delay="200">
          <About />
        </section>

        <section id="projects" data-aos="fade-up-right" data-aos-delay="200">
          <Projects />
        </section>

        <section id="resume" data-aos="fade-up-right" data-aos-delay="200">
          <Resume />
        </section>

        <section id="contact" data-aos="fade-up-right" data-aos-delay="200">
          <ContactForm />
        </section>

        <Footer />
      </div>
    </>
  );
}

export default App;
