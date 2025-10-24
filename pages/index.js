export default function Home() {
  return (
    <div style={{
      fontFamily: 'Arial, sans-serif',
      textAlign: 'center',
      padding: '80px',
      backgroundColor: '#f9f9f9',
      minHeight: '100vh'
    }}>
      <h1 style={{ fontSize: '2.5rem', color: '#222' }}>
        Welcome to <span style={{ color: '#0070f3' }}>Vibe Tech 🚀</span>
      </h1>
      <p style={{ fontSize: '1.25rem', color: '#444', marginTop: '20px' }}>
        Your Next.js SaaS platform is live and ready!
      </p>
      <a
        href="https://vibe-tech-tau.vercel.app/"
        target="_blank"
        rel="noopener noreferrer"
        style={{
          display: 'inline-block',
          marginTop: '30px',
          backgroundColor: '#0070f3',
          color: '#fff',
          padding: '12px 28px',
          borderRadius: '8px',
          fontWeight: 'bold',
          textDecoration: 'none',
        }}
      >
        Visit Live Site
      </a>
    </div>
  );
}
