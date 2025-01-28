import React from "react";

function About() {
  return (
    <div className="about-container">
      <header className="about-header">
        <h1 className="about-title">ER. A. SURYA</h1>
        <h2 className="about-subtitle">Software Developer</h2>
        <p className="about-contact">
          Nagercoil | Email:{" "}
          <a href="mailto:suryasu5678@gmail.com" className="about-link">
            suryasu5678@gmail.com
          </a>{" "}
          | Phone:{" "}
          <a href="tel:+919597736343" className="about-link">
            9597736343
          </a>{" "}
          | GitHub:{" "}
          <a
            href="https://github.com/Suryasu5678"
            target="_blank"
            rel="noopener noreferrer"
            className="about-link"
          >
            github.com/Suryasu5678
          </a>
        </p>
      </header>

      <section className="summary-section">
        <h3 className="summary-title">Summary</h3>
        <p className="summary-text">
          Passionate front-end developer with expertise in React JS, JavaScript,
          HTML, CSS, Webpack, and RESTful APIs. Proficient in developing
          responsive and user-friendly web applications with a focus on
          performance optimization and cross-browser compatibility. Experienced
          in writing maintainable and scalable code, with a strong understanding
          of agile methodologies. Skilled in version control (Git) and
          collaborating effectively in both remote and in-office teams.
        </p>
      </section>

      <section
        className="skills-section"
        style={{ background: "rgb(243, 224, 196) " }}
      >
        <h3 className="skills-title">Technical Skills</h3>
        <ul className="skills-list">
          <li className="skills-item">
            <strong className="skills-subtitle">Languages:</strong> HTML5, CSS3,
            JavaScript (ES6+), React JS
          </li>
          <li className="skills-item">
            <strong className="skills-subtitle">Tools & Frameworks:</strong>{" "}
            Bootstrap, Webpack, Git & GitHub
          </li>
          <li className="skills-item">
            <strong className="skills-subtitle">Additional Skills:</strong>{" "}
            Debugging and problem-solving, responsive design, team collaboration
          </li>
        </ul>
      </section>

      <section className="experience-section">
        <h3 className="experience-title">Professional Experience</h3>
        <div className="experience-container">
          <div className="experience-item">
            <h4 className="experience-role">
              Frontend Developer (Intern) at Spritle Software, Chennai
            </h4>
            <p className="experience-duration">
              <strong>November 2024 – February 2025</strong>
            </p>
            <ul className="experience-description">
              <li>
                Developed a custom UI library to enhance developer productivity.
              </li>
              <li>
                Built and optimized web applications using React JS, improving
                user experience and performance.
              </li>
              <li>
                Created a reusable component library with Angular Material,
                reducing development time for new features.
              </li>
            </ul>
          </div>
          <div className="experience-item">
            <h4 className="experience-role">
              Frontend Developer (Intern) at Feathers Software, Nagercoil
            </h4>
            <p className="experience-duration">
              <strong>August 2024 – September 2024</strong>
            </p>
            <ul className="experience-description">
              <li>
                Developed and optimized user-friendly web applications using
                React JS.
              </li>
              <li>
                Improved application performance with efficient coding and
                responsive design.
              </li>
              <li>
                Collaborated with cross-functional teams to deliver seamless
                features and functionality.
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section
        className="education-section"
        style={{ background: "rgb(243, 224, 196) " }}
      >
        <h3 className="education-title">Education</h3>
        <div className="education-container">
          <div className="education-item">
            <h4 className="education-school">
              Ponjesly College of Engineering, Nagercoil
            </h4>
            <p className="education-details">
              B.E. in Computer Science Engineering (Graduation Year: 2024, CGPA:
              7.61)
            </p>
          </div>
          <div className="education-item">
            <h4 className="education-school">
              Amrita Institute of Technology, Nagercoil
            </h4>
            <p className="education-details">
              Diploma in Electrical and Electronics Engineering (Percentage:
              72%)
            </p>
          </div>
        </div>
      </section>

      <section className="additional-info-section">
        <h3 className="additional-info-title">Additional Information</h3>
        <ul className="additional-info-list">
          <li className="additional-info-item">
            <strong>Languages:</strong> English (Proficient), Tamil
            (Proficient), Malayalam (Beginner)
          </li>
          <li className="additional-info-item">
            <strong>Certifications:</strong> Certified React Developer,
            Debugging Certification
          </li>
          <li className="additional-info-item">
            <strong>Projects:</strong> E-Commerce Website
          </li>
        </ul>
      </section>
    </div>
  );
}

export default About;
