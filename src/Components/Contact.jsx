import React from "react";

function Contact() {
  return (
    <div
      style={{
        fontFamily: "Arial, sans-serif",
        backgroundColor: "#121212",
        padding: "50px 20px",
        minHeight: "calc(100vh - 10vh)",
        color: "#343a40",
      }}
    >
      <h3
        style={{
          fontSize: "32px",
          fontWeight: "600",
          color: "#ffffff",
          textAlign: "center",
          marginBottom: "30px",
        }}
      >
        Contact Me
      </h3>

      <div
        style={{
          maxWidth: "700px",
          margin: "0 auto",
          backgroundColor: "#fff",
          padding: "30px",
          borderRadius: "12px",
          boxShadow: "0 15px 30px rgba(0, 0, 0, 0.1)",
          transition: "all 0.3s ease",
        }}
      >
        <form
          action="mailto:suryasu5678@gmail.com"
          method="POST"
          encType="multipart/form-data"
        >
          <div style={{ marginBottom: "20px" }}>
            <label
              htmlFor="name"
              style={{
                fontSize: "16px",
                color: "#34495e",
                fontWeight: "500",
                marginBottom: "8px",
                display: "block",
              }}
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              style={{
                width: "95%",
                padding: "14px",
                fontSize: "16px",
                borderRadius: "8px",
                border: "1px solid #dcdcdc",
                backgroundColor: "#f0f8ff",
                transition: "border 0.3s ease",
              }}
              required
            />
          </div>

          <div style={{ marginBottom: "20px" }}>
            <label
              htmlFor="email"
              style={{
                fontSize: "16px",
                color: "#34495e",
                fontWeight: "500",
                marginBottom: "8px",
                display: "block",
              }}
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              style={{
                width: "95%",
                padding: "14px",
                fontSize: "16px",
                borderRadius: "8px",
                border: "1px solid #dcdcdc",
                backgroundColor: "#f0f8ff",
                transition: "border 0.3s ease",
              }}
              required
            />
          </div>

          <div style={{ marginBottom: "20px" }}>
            <label
              htmlFor="message"
              style={{
                fontSize: "16px",
                color: "#34495e",
                fontWeight: "500",
                marginBottom: "8px",
                display: "block",
              }}
            >
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows="6"
              style={{
                width: "95%",
                padding: "14px",
                fontSize: "16px",
                borderRadius: "8px",
                border: "1px solid #dcdcdc",
                backgroundColor: "#f0f8ff",
                transition: "border 0.3s ease",
              }}
              required
            ></textarea>
          </div>

          <div style={{ textAlign: "center" }}>
            <button
              type="submit"
              style={{
                padding: "14px 35px",
                fontSize: "16px",
                borderRadius: "8px",
                backgroundColor: "#3498db",
                color: "#fff",
                border: "none",
                cursor: "pointer",
                transition: "background-color 0.3s ease",
              }}
              onMouseOver={(e) => (e.target.style.backgroundColor = "#2980b9")}
              onMouseOut={(e) => (e.target.style.backgroundColor = "#3498db")}
            >
              Send Message
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Contact;
