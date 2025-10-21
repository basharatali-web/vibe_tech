export default function Home() {
  return (
    <div
      style={{
        fontFamily: 'Arial, sans-serif',
        textAlign: 'center',
        padding: '100px',
        backgroundColor: '#f8f9fa',
        color: '#333',
      }}
    >
      <h1>Welcome to <span style={{ color: '#0070f3' }}>Vibe Tech</span> 🚀</h1>
      <p style={{ fontSize: '18px' }}>
        Your Next.js SaaS platform is live and ready!
      </p>
      <a
        href="https://vibe-tech-tau.vercel.app/"
        target="_blank"
        rel="noopener noreferrer"
        style={{
          display: 'inline-block',
          marginTop: '20px',
          padding: '10px 25px',
          backgroundColor: '#0070f3',
          color: '#fff',
          borderRadius: '6px',
          fontWeight: 'bold',
          textDecoration: 'none',
        }}
      >
        Visit Live Site
      </a>
    </div>
  );
}
