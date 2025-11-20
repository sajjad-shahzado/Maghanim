import React from "react";

// Placeholder for Main Website Content
function MainWebsite() {
  return (
    <div style={{
      padding: "40px",
      maxWidth: "700px",
      margin: "60px auto",
      background: "#fff",
      borderRadius: "10px",
      boxShadow: "0 2px 10px rgba(0,0,0,0.07)",
      fontFamily: "Arial, sans-serif",
    }}>
      <h1 style={{ color: "#007bff", marginBottom: "16px" }}>Welcome to Maghanim Medical!</h1>
      <p>
        Maghanim Medical is your trusted platform for up-to-date medical packages, solutions, and health insights.
        Browse our services, learn about the latest advancements, and connect with professionals.
      </p>
      <ul>
        <li>💊 Medical Packages</li>
        <li>🩺 Health Services</li>
        <li>📢 Latest News & Updates</li>
        <li>📞 Contact Support</li>
      </ul>
      <button
        style={{
          marginTop: "28px",
          padding: "12px 30px",
          fontSize: "16px",
          border: "none",
          borderRadius: "5px",
          backgroundColor: "#28a745",
          color: "#fff",
          cursor: "pointer",
        }}
        onClick={() => window.open("mailto:support@maghanimmedical.com")}
      >
        Contact Us
      </button>
    </div>
  );
}

function App() {
  // Display main site instead of update notice!
  return (
    <MainWebsite />
  );
}

export default App;