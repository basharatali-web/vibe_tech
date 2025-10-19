export default function Home() {
  return (
    <div
      style={{
        textAlign: "center",
        padding: "80px",
        fontFamily: "Arial, sans-serif",
        backgroundColor: "#f8f9fa",
        height: "100vh",
      }}
    >
      <h1>
        Welcome to <span style={{ color: "#0070f3" }}>Vibe Tech</span>
      </h1>
      <p style={{ fontSize: "18px", marginTop: "10px" }}>
        Your Next.js SaaS platform is live and ready!
      </p>
      <a
        href="https://vibe-tech-tau.vercel.app/"
        target="_blank"
        rel="noopener noreferrer"
        style={{
          display: "inline-block",
          marginTop: "25px",
          backgroundColor: "#0070f3",
          color: "#fff",
          padding: "12px 28px",
          borderRadius: "6px",
          fontWeight: "bold",
          textDecoration: "none",
          transition: "background-color 0.3s ease",
        }}
        onMouseOver={(e) => (e.target.style.backgroundColor = "#0059c1")}
        onMouseOut={(e) => (e.target.style.backgroundColor = "#0070f3")}
      >
        Visit Live Site
      </a>
    </div>
  );
}
