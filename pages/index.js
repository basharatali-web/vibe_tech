// pages/index.js
export default function Home() {
  return (
    <div style={{
      textAlign: 'center',
      padding: '80px',
      fontFamily: 'Arial, sans-serif'
    }}>
      <h1 style={{ fontSize: 48, margin: 0 }}>
        Welcome to <span style={{ color: '#0070f3' }}>Vibe Tech</span>
      </h1>

      <p style={{ fontSize: 18, marginTop: 18 }}>
        Your Next.js SaaS platform is live and ready!
      </p>

      <a
        href="https://vibe-tech-tau.vercel.app/"  /* <-- اپنے current domain یہاں رکھیں */
        target="_blank"
        rel="noopener noreferrer"
        style={{
          display: 'inline-block',
          marginTop: 28,
          backgroundColor: '#0070f3',
          color: '#fff',
          padding: '12px 28px',
          borderRadius: 8,
          fontWeight: '700',
          textDecoration: 'none'
        }}
      >
        Visit Live Site
      </a>
    </div>
  );
}
