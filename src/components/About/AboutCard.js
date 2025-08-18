import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone! 👋 I’m <span className="purple">Ashish Raj</span> from{" "}
            <span className="purple">Ara, India.</span>
            <br />
            Currently, I’m pursuing my Master’s in Computer Applications (MCA)
            from <span className="purple">NMIT, Bangalore.</span>
            <br />I hold a Bachelor’s degree in Computer Applications (BCA) from{" "}
            <span className="purple">CIMAGE, Patna.</span>
            <br />
            <br />
            Apart from coding, here are a few things I love doing:
            <br />
            🎮 Playing Games
            <br />
            ✈️ Travelling
            <br />
            <br />
            
          </p>

          {/* 
<ul>
  <li className="about-activity">
    <ImPointRight /> Playing Games
  </li>
  <li className="about-activity">
    <ImPointRight /> Travelling
  </li>
</ul>
*/}


          <p style={{ color: "rgb(155 126 172)" }}>
            "Building the future—one line of code at a time."{" "}
          </p>
          <footer className="blockquote-footer">Ashish</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
