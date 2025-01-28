import React from "react";

function Portfolio() {
  const projects = [
    {
      name: "E-commerce Website",
      description: "Full-stack e-commerce platform built with React.",
      link: "https://suryaecommerce-jsx.netlify.app",
      skills: ["React", "JavaScript", "APIs"],
    },
    {
      name: "Kanban Board",
      description: "A task management board to organize tasks.",
      link: "https://surya-kanbanboard-jsx.netlify.app",
      skills: ["React", "JavaScript"],
    },
    {
      name: "Form Using onState",
      description: "A simple form handling using React state.",
      link: "https://surya-form-using-onestate-jsx.netlify.app",
      skills: ["React", "JavaScript"],
    },
    {
      name: "Calculator (Manual)",
      description: "A basic calculator built with React.",
      link: "https://calculator-manual-jsx.netlify.app",
      skills: ["React", "JavaScript"],
    },
    {
      name: "Digital Clock",
      description: "A real-time digital clock built with React.",
      link: "https://surya-digitalclock-jsx.netlify.app",
      skills: ["React", "JavaScript"],
    },
    {
      name: "Analog Clock",
      description: "An analog clock built with React.",
      link: "https://surya-analogclock-jsx.netlify.app",
      skills: ["React", "JavaScript"],
    },
    {
      name: "Weather App (JSX)",
      description: "Weather app fetching data using APIs.",
      link: "https://suryaweatherjsx.netlify.app",
      skills: ["React", "APIs"],
    },
    {
      name: "Weather App (API)",
      description: "Weather app fetching data with advanced API features.",
      link: "https://suryaweatherapi-jsx.netlify.app",
      skills: ["React", "APIs"],
    },
  ];

  return (
    <section
      id="portfolio"
      className="portfolio"
      style={{
        minHeight: "calc(100vh - 10vh)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: "2rem",
        backgroundColor: "#121212",
        color: "white",
        flexDirection: "column",
      }}
    >
      <h2>My Portfolio</h2>
      <p>Here you can find a collection of my recent projects.</p>

      <div
        style={{
          display: "flex",
          justifyContent: "space-around",
          gap: "20px",
          marginTop: "20px",
          flexWrap: "wrap",
        }}
      >
        {projects.map((project, index) => (
          <div
            key={index}
            style={{
              backgroundColor: "#1e1e1e",
              borderRadius: "8px",
              padding: "20px",
              color: "white",
              width: "100%", 
            }}
            className="project-card"
          >
            <h3>{project.name}</h3>
            <p>{project.description}</p>
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                color: "#00bcd4",
                textDecoration: "none",
                fontWeight: "bold",
              }}
            >
              View Project
            </a>
            <p>Skills: {project.skills.join(", ")}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Portfolio;
