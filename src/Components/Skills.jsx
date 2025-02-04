import React from "react";

function Skills() {
  const skills = [
    "HTML",
    "CSS",
    "JavaScript",
    "ReactJS",
    "Git",
    "GitHub",
    "Team Management",
    "Team Lead",
    "Critical Thinking",
    "Problem Solving",
    "Communication",
    "Time Management",
    "Adaptability",
    "Leadership",
    "Collaboration",
    "Project Management",
    "Conflict Resolution",
    "Decision Making",
  ];

  return (
    <section
      id="skills"
      className="skills"
      style={{
        minHeight: "calc(100vh - 10vh)",
        display: "flex",
        alignItems: "center",
        padding: "2rem",
        backgroundColor: "#0d1117",
        color: "white",
        height: "100%",
      }}
    >
      <ul
        style={{
          listStyle: "none",
          display: "flex",
          flexWrap: "wrap",
          gap: "2rem",
          padding: "0",
          margin: "0",
          justifyContent: "center",
        }}
      >
        {skills.map((skill, index) => (
          <button
            key={index}
            style={{
              background: "white",
              padding: "1rem 2rem",
              borderRadius: "5px",
              boxShadow: "0 10px 20px rgba(0, 0, 0, 0.3)",
              transition:
                "transform 0.3s ease, box-shadow 0.3s ease, background-color 0.3s ease",
              cursor: "pointer",
              fontSize: "1.25rem",
              fontWeight: "600",
              maxWidth: "250px",
              color: "black",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              border:'none'
            }}
            onMouseEnter={(e) => {
              e.target.style.transform = "scale(1.1)";
              e.target.style.boxShadow = "0 15px 25px rgba(255, 165, 0, 0.6)";
              e.target.style.backgroundColor = "#FF5733";
              e.target.style.color = "white";
            }}
            onMouseLeave={(e) => {
              e.target.style.transform = "scale(1)";
              e.target.style.boxShadow = "0 10px 20px rgba(0, 0, 0, 0.3)";
              e.target.style.backgroundColor = "white";
              e.target.style.color = "black";
            }}
          >
            {skill}
          </button>
        ))}
      </ul>
    </section>
  );
}

export default Skills;
