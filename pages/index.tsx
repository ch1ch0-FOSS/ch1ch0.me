import Link from 'next/link';

export default function Home() {
  return (
    <div style={styles.container}>
      <header style={styles.header}>
        <h1>ch1ch0</h1>
        <p style={styles.tagline}>Linux System Administrator | Infrastructure Engineer</p>
      </header>

      <main style={styles.main}>
        <section style={styles.section}>
          <h2>About</h2>
          <p>
            Transitioning from barber to Linux system administrator. 
            Building hands-on infrastructure experience with Fedora Asahi M1, self-hosted services, and disaster recovery practices.
          </p>
          <p>
            <strong>Currently interviewing for:</strong> Junior/Mid-level Linux sysadmin and DevOps engineer roles.
          </p>
        </section>

        <section style={styles.section}>
          <h2>What I Deploy</h2>
          <ul style={styles.list}>
            <li>Fedora Asahi Linux on Apple Silicon M1 (minimal, hardened)</li>
            <li>Forgejo (self-hosted Git server)</li>
            <li>Vaultwarden (encrypted password management)</li>
            <li>Syncthing (real-time file synchronization)</li>
            <li>Complete backup and disaster recovery infrastructure</li>
          </ul>
        </section>

        <section style={styles.section}>
          <h2>Infrastructure Philosophy</h2>
          <p>
            I believe in building infrastructure that is:
          </p>
          <ul style={styles.list}>
            <li><strong>Reproducible</strong> - Can rebuild from scratch in under 2 hours</li>
            <li><strong>Documented</strong> - Clear procedures for deployment and recovery</li>
            <li><strong>Tested</strong> - Disaster recovery procedures verified monthly</li>
            <li><strong>Minimal</strong> - Only essential tools that do one thing well</li>
            <li><strong>Secure</strong> - Hardened configurations, encrypted storage, automated backups</li>
          </ul>
        </section>

        <section style={styles.section}>
          <h2>My Work</h2>
          <div style={styles.links}>
            <Link href="/infrastructure">
              <a style={styles.link}>→ Infrastructure Details</a>
            </Link>
            <Link href="/portfolio">
              <a style={styles.link}>→ Portfolio & GitHub</a>
            </Link>
            <Link href="/contact">
              <a style={styles.link}>→ Contact</a>
            </Link>
          </div>
        </section>

        <section style={styles.section}>
          <h2>Quick Links</h2>
          <ul style={styles.list}>
            <li><a href="https://github.com/ch1ch0/ch1ch0-FOSS">ch1ch0-FOSS on GitHub</a> - Portfolio landing</li>
            <li><a href="https://github.com/ch1ch0/srv-m1m-asahi">srv-m1m-asahi on GitHub</a> - Infrastructure proof</li>
            <li><a href="https://github.com/ch1ch0.me">GitHub Profile</a></li>
          </ul>
        </section>
      </main>

      <footer style={styles.footer}>
        <p>Built on Fedora Asahi M1 | Deployed via Vercel | Open source</p>
      </footer>
    </div>
  );
}

const styles = {
  container: {
    maxWidth: '800px',
    margin: '0 auto',
    padding: '20px',
    fontFamily: 'system-ui, -apple-system, sans-serif',
    lineHeight: '1.6',
    color: '#333',
  },
  header: {
    textAlign: "center" as const as const as const,
    marginBottom: '40px',
    borderBottom: '2px solid #333',
    paddingBottom: '20px',
  },
  tagline: {
    fontSize: '18px',
    color: '#666',
    marginTop: '10px',
  },
  main: {
    marginBottom: '40px',
  },
  section: {
    marginBottom: '30px',
  },
  list: {
    marginLeft: '20px',
  },
  links: {
    display: 'flex',
    flexDirection: 'column',
    gap: '10px',
  },
  link: {
    color: '#0066cc',
    textDecoration: 'none',
    fontSize: '16px',
  },
  footer: {
    textAlign: "center" as const as const as const,
    borderTop: '2px solid #333',
    paddingTop: '20px',
    color: '#666',
    fontSize: '14px',
  },
};
