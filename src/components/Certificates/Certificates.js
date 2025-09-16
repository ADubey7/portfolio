import React from "react";
import "./Certificates.css";
import { Award, ExternalLink } from "lucide-react";

const Certificates = () => {
  const certificates = [
    {
      title: "Full Stack Java Development",
      org: "Simplilearn",
      description: "Mastered full-stack development using Java, Spring Boot, SQL and web development technologies",
      image: "/certi/Full Stack Java Development_page-0001.jpg",
      tags: ["Java", "Spring Boot", "SQL", "Web Development"],
      link: "https://link-to-your-certificate.com",
    },
    {
      title: "Full Stack Development Introduction", 
      org: "Infosys Springboard",
      description: "Gained foundational knowledge in HTML, CSS, JavaScript and modern web development practices",
      image: "/certi/Full Stack Development Introduction_page-0001.jpg",
      tags: ["HTML", "CSS", "JavaScript", "Web Development Basics"],
      link: "https://verify.onwingspan.com",
    },
    {
      title: "Fundamentals of DevOps on AWS",
      org: "AWS | Simplilearn", 
      description: "Learned DevOps principles, AWS cloud services, CI/CD pipelines and deployment automation",
      image: "/certi/Fundamentals of DevOps On AWS_page-0001.jpg",
      tags: ["DevOps", "AWS", "CI/CD", "Cloud Deployment", "Scripting"],
      link: "https://link-to-your-certificate.com",
    },
    {
      title: "Fundamentals of Information Security",
      org: "Infosys Springboard",
      description: "Gained foundational knowledge of data protection, risk management, and security principles",
      image: "/certi/Fundamentals of Information Security_page-0001.jpg", 
      tags: ["Cybersecurity", "Information Security", "Network Security", "Data Protection"],
      link: "https://link-to-your-certificate.com",
    },
    {
      title: "Introduction to DevOps Tools",
      org: "Simplilearn",
      description: "Mastered essential DevOps tools including Git, Jenkins, Docker, and Kubernetes",
      image: "/certi/Introduction To DevOps Tools_page-0001.jpg",
      tags: ["DevOps", "Git", "Jenkins", "Docker", "Kubernetes"],
      link: "https://link-to-your-certificate.com",
    },
    {
      title: "Agile Scrum Master",
      org: "Simplilearn", 
      description: "Learned Agile methodologies, Scrum framework and effective team collaboration practices",
      image: "/certi/Agile Scrum Master_page-0001.jpg",
      tags: ["Agile", "Scrum", "Project Management", "Team Collaboration"],
      link: "https://link-to-your-certificate.com",
    },
    {
      title: "C# - Comprehensive",
      org: "Infosys Springboard",
      description: "Comprehensive understanding of C# programming, .NET framework and object-oriented concepts",
      image: "/certi/C%23%20-%20Comprehensive_page-0001.jpg",
      tags: ["C#", ".NET", "Object-Oriented Programming", "Windows Applications"],
      link: "https://link-to-your-certificate.com",
    },
    {
      title: "DSA in Java", 
      org: "Apna College",
      description: "Mastered data structures, algorithms and problem-solving techniques using Java",
      image: "/certi/DSA with java_page-0001.jpg",
      tags: ["Data Structures", "Algorithms", "Problem Solving", "Competitive Programming"],
      link: "https://link-to-your-certificate.com",
    },
    {
      title: "Experiment 1 - Raspberry Pi based Weather Monitoring System",
      org: "Infosys Springboard",
      description: "Built IoT-based weather monitoring system using Raspberry Pi, sensors and Python programming",
      image: "/certi/RaspberryPiWeatherSystempage.jpg",
      tags: ["IoT", "Raspberry Pi", "Sensors", "Weather Monitoring", "Python"],
      link: "https://link-to-your-certificate.com",
    },
  ];

  return (
    <section id="certificates" className="cert-section">
      <div className="cert-container">
        <h2 
          className="cert-title"
          data-aos="fade-up"
          data-aos-duration="600"
          data-aos-delay="50"
        >
          Achievements And Certifications 🏆
        </h2>
        <p 
          className="cert-subtitle"
          data-aos="fade-up"
          data-aos-duration="600"
          data-aos-delay="100"
        >
          ACHIEVEMENTS, CERTIFICATIONS THAT I HAVE DONE !
        </p>

        <div className="cert-grid">
          {certificates.map((cert, index) => (
            <div 
              key={index} 
              className="cert-card"
              data-aos="fade-up"
              data-aos-duration="600"
              data-aos-delay={150 + (index * 50)} // Faster staggered animation
              data-aos-once="false"
            >
              <div className="cert-image-container">
                <img 
                  src={cert.image} 
                  alt={cert.title}
                  className="cert-image"
                  onError={(e) => {
                    e.target.style.display = 'none';
                    e.target.nextSibling.style.display = 'flex';
                  }}
                />
                <div className="cert-image-fallback" style={{display: 'none'}}>
                  <Award size={48} />
                  <span>Certificate</span>
                </div>
              </div>
              
              <div className="cert-content">
                <h3 className="cert-card-title">{cert.title}</h3>
                <p className="cert-description">{cert.description}</p>
                
                <div className="cert-tags">
                  {cert.tags.slice(0, 3).map((tag, i) => (
                    <span key={i} className="cert-tag">
                      {tag}
                    </span>
                  ))}
                </div>

                <button className="cert-btn">
                  Certification
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certificates;