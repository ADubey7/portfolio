import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";

// Project images
import jobPortal from "../../Assets/Projects/job-portal.png";
import taskManager from "../../Assets/Projects/taskmanager.png";
import fireDetection from "../../Assets/Projects/firedetection.png";
import textSummarizer from "../../Assets/Projects/TextSummarizer.png";
import onlineBanking from "../../Assets/Projects/onlinebanking.png";
import productDataExplorer from "../../Assets/Projects/productDataExplorer.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        {/* Heading with AOS Animation */}
        <h1
          className="project-heading"
          data-aos="fade-up"
          data-aos-duration="800"
          data-aos-delay="100"
        >
          My <strong className="purple">Projects </strong>
        </h1>

        <p
          style={{ color: "white" }}
          data-aos="fade-up"
          data-aos-duration="800"
          data-aos-delay="200"
        >
          Here are some of my personal projects.
        </p>

        {/* Projects Grid */}
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={jobPortal}
              isBlog={false}
              title="React Job Portal"
              description="A full-stack MERN (MongoDB, Express, React, Node.js) job portal application that allows job seekers to find and apply for jobs, and employers to post and manage job listings. The project features secure authentication, file uploads, and a modern, responsive UI."
              ghLink="https://github.com/ADubey7/job-portal"
              index={0} // Pass index for staggered animation
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={taskManager}
              isBlog={false}
              title="Task Manager with User Authentication"
              description="A full-stack task management web app with secure user authentication and dark mode. Built using React.js, Node.js, Express.js, and MongoDB. Allows users to create, edit, delete, and complete tasks efficiently via a clean, responsive UI."
              ghLink="https://github.com/ADubey7/task-manager"
              index={1}
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={fireDetection}
              isBlog={false}
              title="Fire Detection Using Deep Learning"
              description="A deep learning-based system that detects fire in images using a trained CNN model. Includes a GUI for testing, preprocessing scripts, and model training pipeline. Built using Python, Keras, and Tkinter."
              ghLink="https://github.com/ADubey7/Fire-Detection-Project"
              index={2}
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={textSummarizer}
              isBlog={false}
              title="AI Text Summarizer App"
              description="AI-powered application that summarizes long text into concise insights. Utilizes NLP APIs to process and extract key points from articles, research papers, or large text blocks. Built with HTML, CSS, and JavaScript."
              ghLink="https://github.com/ADubey7/AI-Text-Summarizer-App-Starter-Template"
              index={3}
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={onlineBanking}
              isBlog={false}
              title="Online Banking System"
              description="A Java-based application simulating key banking features including user registration, login, fund transfers, account management, and transaction history. Built with a focus on security, scalability, and clean design."
              ghLink="https://github.com/ADubey7/Online-Banking-System"
              index={4}
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={productDataExplorer}
              isBlog={false}
              title="Product Data Explorer"
              description="A full-stack web application that scrapes and displays product data from World of Books. Built with Next.js, React, and Express.js, featuring real-time scraping, hierarchical navigation, search with pagination, responsive design, caching, error handling, and smooth loading states."
              ghLink="https://github.com/ADubey7/product-data-explorer"
              demoLink="https://product-data-explorer-psi.vercel.app/"
              index={5}
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
