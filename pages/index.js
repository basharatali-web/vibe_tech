export default function Home() {
  return (
    <div style={{
      textAlign: 'center',
      padding: '80px',
      fontFamily: 'Arial, sans-serif'
    }}>
      <h1>Welcome to <span style={{ color: '#0070f3' }}>Vibe Tech</span></h1>
      <p style={{ fontSize: '18px' }}>
        Your Next.js SaaS platform is live and ready to shine!
      </p>
      <a
        href="https://vibe-tech-tau.vercel.app/"
        target="_blank"
        rel="noopener noreferrer"
        style={{
          display: 'inline-block',
          marginTop: '20px',
          backgroundColor: '#0070f3',
          color: '#fff',
          padding: '10px 25px',
          borderRadius: '6px',
          fontWeight: 'bold',
          textDecoration: 'none'
        }}
      >
        Visit Live Site 🚀
      </a>
    </div>
  );
}
