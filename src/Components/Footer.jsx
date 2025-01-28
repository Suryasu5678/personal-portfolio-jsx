import React from "react";
import { FaInstagram, FaFacebook, FaLinkedin } from "react-icons/fa";

function Footer() {
  return (
    <footer
      style={{
        height: "auto",
        textAlign: "center",
        backgroundColor: "#121212",
        color: "white",
        padding: "2rem 0",
        borderTop: "1px solid #333",
      }}
    >
      <p>&copy; 2025 Surya. All Rights Reserved.</p>
      <div
        style={{
          display: "flex",
          justifyContent: "space-around",
          gap: "20px",
          marginTop: "1rem",
          fontSize: "1.2rem",
          flexWrap:"wrap"
        }}
      >
        <a
          href="https://www.instagram.com/dotzz_001/profilecard/?igsh=bXBkbWMwaWY0NHU="
          target="_blank"
          rel="noopener noreferrer"
          style={{
            color: "white",
            textDecoration: "none",
            display: "flex",
            alignItems: "center",
            gap: "10px",
            transition: "transform 0.3s ease, color 0.3s ease",
          }}
          onMouseEnter={(e) => {
            e.target.style.transform = "scale(1.2)";
            e.target.style.color = "#E4405F";
          }}
          onMouseLeave={(e) => {
            e.target.style.transform = "scale(1)";
            e.target.style.color = "white";
          }}
        >
          <FaInstagram />
          Instagram
        </a>
        <a
          href="https://www.facebook.com/share/12L4pwwmiHq/?mibextid=wwXIfr"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            color: "white",
            textDecoration: "none",
            display: "flex",
            alignItems: "center",
            gap: "10px",
            transition: "transform 0.3s ease, color 0.3s ease",
          }}
          onMouseEnter={(e) => {
            e.target.style.transform = "scale(1.2)";
            e.target.style.color = "#1877F2";
          }}
          onMouseLeave={(e) => {
            e.target.style.transform = "scale(1)";
            e.target.style.color = "white";
          }}
        >
          <FaFacebook />
          Facebook
        </a>
        <a
          href="https://www.linkedin.com/in/surya-a-9a971a314/"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            color: "white",
            textDecoration: "none",
            display: "flex",
            alignItems: "center",
            gap: "10px",
            transition: "transform 0.3s ease, color 0.3s ease",
          }}
          onMouseEnter={(e) => {
            e.target.style.transform = "scale(1.2)";
            e.target.style.color = "#0A66C2";
          }}
          onMouseLeave={(e) => {
            e.target.style.transform = "scale(1)";
            e.target.style.color = "white";
          }}
        >
          <FaLinkedin />
          LinkedIn
        </a>
      </div>
    </footer>
  );
}

export default Footer;
