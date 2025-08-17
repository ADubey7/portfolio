import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import { motion } from "framer-motion"; // ✅ Import Framer Motion

// Project images
import jobPortal from "../../Assets/Projects/job-portal.png";
import taskManager from "../../Assets/Projects/taskmanager.png";
import fireDetection from "../../Assets/Projects/firedetection.png";
import textSummarizer from "../../Assets/Projects/TextSummarizer.png";
import onlineBanking from "../../Assets/Projects/onlinebanking.png";

// Variants for stagger effect
const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.2 } // ✅ delay each card
  }
};

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        {/* Heading Animation */}
        <motion.h1
          className="project-heading"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          My <strong className="purple">Projects </strong>
        </motion.h1>

        <motion.p
          style={{ color: "white" }}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          viewport={{ once: true }}
        >
          Here are some of my personal projects.
        </motion.p>

        {/* Projects Grid with Stagger Animation */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
            <Col md={4} className="project-card">
              <ProjectCard
                imgPath={jobPortal}
                isBlog={false}
                title="React Job Portal"
                description="A full-stack MERN (MongoDB, Express, React, Node.js) job portal application that allows job seekers to find and apply for jobs, and employers to post and manage job listings. The project features secure authentication, file uploads, and a modern, responsive UI."
                ghLink="https://github.com/ADubey7/job-portal"
              />
            </Col>

            <Col md={4} className="project-card">
              <ProjectCard
                imgPath={taskManager}
                isBlog={false}
                title="Task Manager with User Authentication"
                description="A full-stack task management web app with secure user authentication and dark mode. Built using React.js, Node.js, Express.js, and MongoDB. Allows users to create, edit, delete, and complete tasks efficiently via a clean, responsive UI."
                ghLink="https://github.com/ADubey7/task-manager"
              />
            </Col>

            <Col md={4} className="project-card">
              <ProjectCard
                imgPath={fireDetection}
                isBlog={false}
                title="Fire Detection Using Deep Learning"
                description="A deep learning-based system that detects fire in images using a trained CNN model. Includes a GUI for testing, preprocessing scripts, and model training pipeline. Built using Python, Keras, and Tkinter."
                ghLink="https://github.com/ADubey7/Fire-Detection-Project"
              />
            </Col>

            <Col md={4} className="project-card">
              <ProjectCard
                imgPath={textSummarizer}
                isBlog={false}
                title="AI Text Summarizer App"
                description="AI-powered application that summarizes long text into concise insights. Utilizes NLP APIs to process and extract key points from articles, research papers, or large text blocks. Built with HTML, CSS, and JavaScript."
                ghLink="https://github.com/ADubey7/AI-Text-Summarizer-App-Starter-Template"
              />
            </Col>

            <Col md={4} className="project-card">
              <ProjectCard
                imgPath={onlineBanking}
                isBlog={false}
                title="Online Banking System"
                description="A Java-based application simulating key banking features including user registration, login, fund transfers, account management, and transaction history. Built with a focus on security, scalability, and clean design."
                ghLink="https://github.com/ADubey7/Online-Banking-System"
              />
            </Col>
          </Row>
        </motion.div>
      </Container>
    </Container>
  );
}

export default Projects;
