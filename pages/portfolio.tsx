import Link from 'next/link';

export default function Portfolio() {
  return (
    <div style={styles.container}>
      <header style={styles.header}>
        <Link href="/">
          <a style={styles.backLink}>← Back</a>
        </Link>
        <h1>Portfolio</h1>
        <p style={styles.tagline}>My GitHub Infrastructure Projects</p>
      </header>

      <main style={styles.main}>
        <section style={styles.section}>
          <h2>ch1ch0-FOSS</h2>
          <p>
            <a href="https://github.com/ch1ch0/ch1ch0-FOSS">GitHub: ch1ch0-FOSS</a>
          </p>
          <p>
            My portfolio landing page. 
            This repo serves as the hub linking to all my infrastructure work and career transition documentation.
          </p>
        </section>

        <section style={styles.section}>
          <h2>srv-m1m-asahi</h2>
          <p>
            <a href="https://github.com/ch1ch0/srv-m1m-asahi">GitHub: srv-m1m-asahi</a>
          </p>
          <p>
            <strong>This is my proof of practice.</strong>
          </p>
          <p>
            Complete Fedora Asahi M1 infrastructure. 
            Shows how I bootstrap a server from scratch, deploy services, maintain backups, and execute disaster recovery.
          </p>
          
          <h3>Directory Structure:</h3>
          <ul style={styles.list}>
            <li><strong>00-BOOTSTRAP</strong> - Build Fedora from scratch (reproducible)</li>
            <li><strong>01-FORGEJO</strong> - Self-hosted Git server deployment</li>
            <li><strong>02-VAULTWARDEN</strong> - Encrypted password management</li>
            <li><strong>03-SYNCTHING</strong> - File synchronization setup</li>
            <li><strong>04-INFRASTRUCTURE</strong> - Monitoring, health checks, automation</li>
            <li><strong>05-DISASTER-RECOVERY</strong> - Backup strategy + monthly test logs (your selling point)</li>
          </ul>

          <h3>What You Should Look For:</h3>
          <ul style={styles.list}>
            <li>Reproducible bootstrap scripts (can rebuild in 2 hours)</li>
            <li>Clear service configurations with troubleshooting guides</li>
            <li>Automated backup scripts (daily snapshots)</li>
            <li>Monthly disaster recovery test documentation</li>
            <li>Incident response procedures</li>
          </ul>
        </section>

        <section style={styles.section}>
          <h2>Why This Portfolio Matters</h2>
          <p>
            Most portfolios show side projects. This shows <strong>production infrastructure</strong>.
          </p>
          <p>
            Most developers don't test recovery. I do it monthly and document it.
          </p>
          <p>
            Most sysadmins don't publish their infrastructure. I do, and I invite scrutiny.
          </p>
          <p>
            This is what hiring managers want to see: proof that you take infrastructure seriously.
          </p>
        </section>

        <section style={styles.section}>
          <h2>GitHub Profile</h2>
          <p>
            <a href="https://github.com/ch1ch0">ch1ch0 on GitHub</a>
          </p>
          <p>
            See all repositories and contribution history.
          </p>
        </section>

        <section style={styles.section}>
          <h2>Interview Talking Points</h2>
          <p>
            When I interview, I bring:
          </p>
          <ul style={styles.list}>
            <li>Live M1 server running (SSH access to show running processes)</li>
            <li>Backup logs showing last 3 months of automated snapshots</li>
            <li>Monthly disaster recovery test documentation</li>
            <li>Ansible playbooks or shell scripts for reproducible deployments</li>
            <li>Clear explanations of why I chose each tool</li>
          </ul>
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
