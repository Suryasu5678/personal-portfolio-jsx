import React, { useState } from "react";
import cv from "../assets/Surya_Web_Developer.pdf";
import imgg from "../assets/Untitled.png";

function Home() {
  const [name] = useState("Surya A");
  const [role] = useState("Frontend Developer");

  return (
    <section id="home" className="home">
      <div className="content">
        <h2 className="home-greeting">Hello, It&apos;s Me</h2>
        <h1 className="home-name">
          <span className="home-name-part1">{name[0]}</span>
          <span className="home-name-part2">{name[1]}</span>
          <span className="home-name-part3">{name[2]}</span>
          <span className="home-name-part4">{name[3]}</span>
          <span className="home-name-part5">{name[4]}</span>
          <span className="home-name-dot">{"."}</span>
          <span className="home-name-part6">{name[6]}</span>
        </h1>
        <h3 className="home-role">
          And I&apos;m a <span className="home-role-highlight">{role}</span>
        </h3>
        <p className="home-description">
          Passionate front-end developer with expertise in React JS, JavaScript,
          HTML, CSS, Webpack, and RESTful APIs. Proficient in developing
          responsive and user-friendly web applications with a focus on
          performance optimization and cross-browser compatibility. Experienced
          in writing maintainable and scalable code, with a strong understanding
          of agile methodologies. Skilled in version control (Git) and
          collaborating effectively in both remote and in-office teams.
        </p>

        <a href={cv} className="home-btn" download>
          Download CV
        </a>
      </div>
      <div className="image">
        <div className="image-wrapper">
          <img src={imgg} alt="Surya" className="home-img" />
        </div>
      </div>
    </section>
  );
}

export default Home;

