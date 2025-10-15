export default function Home() {
  return (
    <div style={{
      textAlign: 'center',
      padding: '80px',
      fontFamily: 'Arial'
    }}>
      <h1 style={{ color: '#0070f3' }}>Welcome to Vibe Tech 🚀</h1>
      <p style={{ fontSize: '18px', color: '#444' }}>
        Your Next.js SaaS platform is live and ready to shine!
      </p>
      <a href="https://vibe-tech.vercel.app"
         style={{
           background: '#0070f3',
           color: '#fff',
           padding: '12px 24px',
           borderRadius: '8px',
           textDecoration: 'none',
           display: 'inline-block',
           marginTop: '20px'
         }}>
        Visit Live Site
      </a>
    </div>
  );
}
