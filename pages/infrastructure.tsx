import Link from 'next/link';

export default function Infrastructure() {
  return (
    <div style={styles.container}>
      <header style={styles.header}>
        <Link href="/">
          <a style={styles.backLink}>← Back</a>
        </Link>
        <h1>Infrastructure</h1>
        <p style={styles.tagline}>What I Can Deploy & Maintain</p>
      </header>

      <main style={styles.main}>
        <section style={styles.section}>
          <h2>Fedora Asahi M1 Server</h2>
          <p>
            A minimal, hardened Linux server running on Apple Silicon M1. 
            Built from scratch, fully documented, reproducible in under 2 hours.
          </p>
          <p>
            <strong>See:</strong> <a href="https://github.com/ch1ch0/srv-m1m-asahi/tree/main/00-BOOTSTRAP">Bootstrap Procedure</a>
          </p>
        </section>

        <section style={styles.section}>
          <h2>Self-Hosted Services</h2>
          
          <h3>Forgejo (Git Server)</h3>
          <p>
            Self-hosted Git repository management. 
            Handles version control, mirrors to GitHub, maintains automated backups.
          </p>
          <p>
            <strong>See:</strong> <a href="https://github.com/ch1ch0/srv-m1m-asahi/tree/main/01-FORGEJO">Forgejo Deployment</a>
          </p>

          <h3>Vaultwarden (Password Manager)</h3>
          <p>
            End-to-end encrypted password management. 
            Self-hosted, encrypted database, automated backups, monthly recovery tests.
          </p>
          <p>
            <strong>See:</strong> <a href="https://github.com/ch1ch0/srv-m1m-asahi/tree/main/02-VAULTWARDEN">Vaultwarden Deployment</a>
          </p>

          <h3>Syncthing (File Sync)</h3>
          <p>
            Real-time file synchronization across devices.
            Direct peer-to-peer, no cloud intermediary, bandwidth-optimized.
          </p>
          <p>
            <strong>See:</strong> <a href="https://github.com/ch1ch0/srv-m1m-asahi/tree/main/03-SYNCTHING">Syncthing Configuration</a>
          </p>
        </section>

        <section style={styles.section}>
          <h2>Infrastructure Monitoring</h2>
          <p>
            Health checks, system monitoring, performance tracking, and alerting.
            Ensures all services remain operational.
          </p>
          <p>
            <strong>See:</strong> <a href="https://github.com/ch1ch0/srv-m1m-asahi/tree/main/04-INFRASTRUCTURE">Infrastructure Setup</a>
          </p>
        </section>

        <section style={styles.section}>
          <h2>Disaster Recovery (My Core Expertise)</h2>
          <p>
            <strong>This is what sets me apart.</strong>
          </p>
          <ul style={styles.list}>
            <li>Automated daily backups to external storage</li>
            <li>Encrypted backup verification</li>
            <li>Monthly disaster recovery testing (documented)</li>
            <li>Recovery time objective: under 30 minutes total loss recovery</li>
            <li>Clear incident response procedures</li>
          </ul>
          <p>
            <strong>See:</strong> <a href="https://github.com/ch1ch0/srv-m1m-asahi/tree/main/05-DISASTER-RECOVERY">Complete Disaster Recovery Plan</a>
          </p>
        </section>

        <section style={styles.section}>
          <h2>Tools & Technologies</h2>
          <ul style={styles.list}>
            <li>Fedora Linux (latest)</li>
            <li>Docker / Podman (containerization)</li>
            <li>Systemd (service management)</li>
            <li>Bash scripting (automation)</li>
            <li>Git / Forgejo (version control)</li>
            <li>SSL/TLS (encryption)</li>
            <li>Automated backup tools</li>
          </ul>
        </section>

        <section style={styles.section}>
          <h2>Why This Matters</h2>
          <p>
            These aren't side projects or experiments. 
            This is production infrastructure I actively maintain and rely on.
          </p>
          <p>
            I test recovery procedures monthly. I document everything. 
            I plan for failure before it happens.
          </p>
          <p>
            This is the mindset that separates junior sysadmins from reliable operators.
          </p>
        </section>
      </main>

      <footer style={styles.footer}>
        <Link href="/">
          <a style={styles.backLink}>← Back to Home</a>
        </Link>
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
    marginBottom: '40px',
    borderBottom: '2px solid #333',
    paddingBottom: '20px',
  },
  backLink: {
    color: '#0066cc',
    textDecoration: 'none',
    fontSize: '16px',
    marginBottom: '10px',
    display: 'block',
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
  footer: {
    textAlign: "center" as const as const,
    borderTop: '2px solid #333',
    paddingTop: '20px',
    color: '#666',
    fontSize: '14px',
  },
};
