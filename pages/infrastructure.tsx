import Link from "next/link";

export default function Infrastructure() {
  return (
    <div className="max-w-2xl mx-auto p-6 font-sans text-gray-800">
      <header className="mb-10 pb-5 border-b-2 border-gray-800">
        <Link href="/" className="text-blue-600 underline">&larr; Back</Link>
        <h1 className="text-3xl font-semibold mt-2">Infrastructure</h1>
        <p className="text-lg text-gray-600">What I Can Deploy &amp; Maintain</p>
      </header>
      <main className="mb-10">
        <section className="mb-7">
          <h2 className="text-2xl font-bold">Fedora Asahi M1 Server</h2>
          <p>
            Minimal, hardened Linux on Apple Silicon M1.<br />
            <strong>See: </strong>
            <a className="text-blue-600 underline" href="https://github.com/ch1ch0-FOSS/srv-m1m-asahi/tree/main/00-BOOTSTRAP" target="_blank" rel="noopener noreferrer">
              Bootstrap Procedure
            </a>
          </p>
        </section>
        <section className="mb-7">
          <h2 className="text-xl font-bold">Self-Hosted Services</h2>
          <p>
            <strong>Forgejo (Git Server):</strong> 
            <a className="text-blue-600 underline ml-1" href="https://github.com/ch1ch0-FOSS/srv-m1m-asahi/tree/main/01-FORGEJO" target="_blank" rel="noopener noreferrer">
              Forgejo Deployment
            </a>
            <br />
            <strong>Vaultwarden (Password Manager):</strong>
            <a className="text-blue-600 underline ml-1" href="https://github.com/ch1ch0-FOSS/srv-m1m-asahi/tree/main/02-VAULTWARDEN" target="_blank" rel="noopener noreferrer">
              Vaultwarden Deployment
            </a>
            <br />
            <strong>Syncthing (File Sync):</strong>
            <a className="text-blue-600 underline ml-1" href="https://github.com/ch1ch0-FOSS/srv-m1m-asahi/tree/main/03-SYNCTHING" target="_blank" rel="noopener noreferrer">
              Syncthing Configuration
            </a>
          </p>
        </section>
        <section className="mb-7">
          <h2 className="text-xl font-bold">Infrastructure Monitoring</h2>
          <p>
            Health checks, monitoring, alerting.<br />
            <strong>See: </strong>
            <a className="text-blue-600 underline" href="https://github.com/ch1ch0-FOSS/srv-m1m-asahi/tree/main/04-INFRASTRUCTURE" target="_blank" rel="noopener noreferrer">
              Infrastructure Setup
            </a>
          </p>
        </section>
        <section className="mb-7">
          <h2 className="text-xl font-bold">Disaster Recovery (My Core Expertise)</h2>
          <ul className="ml-5 list-disc">
            <li>Automated daily backups to external storage</li>
            <li>Encrypted backup verification</li>
            <li>Monthly disaster recovery testing (documented)</li>
            <li>Recovery time: under 30 minutes</li>
          </ul>
          <strong>See: </strong>
          <a className="text-blue-600 underline" href="https://github.com/ch1ch0-FOSS/srv-m1m-asahi/tree/main/05-DISASTER-RECOVERY" target="_blank" rel="noopener noreferrer">
            Complete Disaster Recovery Plan
          </a>
        </section>
        <section className="mb-7">
          <h2 className="text-xl font-bold">Tools &amp; Technologies</h2>
          <ul className="ml-5 list-disc">
            <li>Fedora Linux (latest)</li>
            <li>Docker / Podman</li>
            <li>Systemd</li>
            <li>Bash scripting</li>
            <li>Git / Forgejo</li>
            <li>SSL/TLS</li>
            <li>Automated backup tools</li>
          </ul>
        </section>
      </main>
      <footer className="border-t-2 border-gray-800 pt-5 text-center text-sm text-gray-600">
        <Link href="/" className="text-blue-600 underline">&larr; Back to Home</Link>
      </footer>
    </div>
  );
}

