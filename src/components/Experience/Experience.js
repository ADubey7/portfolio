import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./Experience.css";

function Experience() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      easing: "ease-in-out",
    });
  }, []);

  const experiences = [
    {
      title: "Full Stack Web Development Intern",
      company: "Labmentix",
      date: "April 2025 – october 2025",
      points: [
        "Worked on frontend (HTML, CSS, JavaScript, React/Vue/Angular) and backend (Node.js, Express.js, Python/Django, PHP) development",
        "Managed databases (MySQL, MongoDB) and contributed to design, development, and testing of web applications"
      ],
    },
    {
      title: "Java Programming internship",
      company: "DIGITAL BHEM",
      date: "March 2025 – June 2025",
      points: [
        "Developed Java-based applications, collaborating with cross functional teams to enhance performance and to ensure best practices in coding standards and performance",
        "Improved debugging efficiency and optimized code performance, resulting in more reliable and maintainable applications",
      ],
    },
  ];

  return (
    <div className="experience-section" id="experience">
      <h1 
        className="project-heading"
        data-aos="fade-up"
      >
        Work <strong className="purple">Experience</strong>
      </h1>
      <div className="timeline">
        {experiences.map((exp, index) => (
          <div
            key={index}
            className={`timeline-container ${index % 2 === 0 ? "left" : "right"}`}
            data-aos={index % 2 === 0 ? "fade-right" : "fade-left"}
            data-aos-delay={index * 200}
          >
            <div className="content">
              <h3>{exp.title}</h3>
              <h5 className="company">{exp.company}</h5>
              <p className="date">{exp.date}</p>
              <ul>
                {exp.points.map((point, i) => (
                  <li key={i}>{point}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Experience;