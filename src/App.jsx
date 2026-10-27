import Navbar from './components/Navbar';

export default function App() {
  return (
    <div className="app-container">
      <Navbar />
      {/* Rest of page layout can be nested safely here below the header entry */}
      <main style={{ padding: '4rem 2rem', textAlign: 'center', maxWidth: '1200px', margin: '0 auto' }}>
        <h1 style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>Enhance Your Skills with NexusCode</h1>
        <p style={{ color: '#475569', fontSize: '1.1rem' }}>A free community of coders who love to share knowledge with others.</p>
      </main>
    </div>
  );
}