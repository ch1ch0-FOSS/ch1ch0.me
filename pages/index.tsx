import Link from "next/link";

export default function Home() {
  return (
    <div className="max-w-2xl mx-auto p-6 font-sans text-gray-800">
      <header className="text-center mb-10 border-b-2 border-gray-800 pb-5">
        <h1 className="text-4xl font-bold mb-2">ch1ch0</h1>
        <p className="text-lg text-gray-600">
          Linux System Administrator | Infrastructure Engineer
        </p>
      </header>
      <main className="mb-10">
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-2">About</h2>
          <p>
            Transitioning from barber to Linux system administrator. Building hands-on infrastructure experience with Fedora Asahi M1, self-hosted services, and disaster recovery practices.
          </p>
          <p className="mt-2">
            <strong>Currently interviewing for:</strong> Junior/Mid-level Linux sysadmin and DevOps engineer roles.
          </p>
        </section>
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-2">What I Deploy</h2>
          <ul className="ml-5 list-disc">
            <li>Fedora Asahi Linux on Apple Silicon M1 (minimal, hardened)</li>
            <li>Forgejo (self-hosted Git server)</li>
            <li>Vaultwarden (encrypted password management)</li>
            <li>Syncthing (real-time file synchronization)</li>
            <li>Complete backup and disaster recovery infrastructure</li>
          </ul>
        </section>
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-2">Infrastructure Philosophy</h2>
          <ul className="ml-5 list-disc">
            <li><strong>Reproducible</strong> – Can rebuild from scratch in under 2 hours</li>
            <li><strong>Documented</strong> – Clear deployment and recovery procedures</li>
            <li><strong>Tested</strong> – Disaster recovery procedures verified monthly</li>
            <li><strong>Minimal</strong> – Only essential tools that do one thing well</li>
            <li><strong>Secure</strong> – Hardened configurations, encrypted storage, automated backups</li>
          </ul>
        </section>
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-2">My Work</h2>
          <div className="flex flex-col gap-2 mb-2">
            <Link href="/infrastructure" className="text-blue-600 underline">→ Infrastructure Details</Link>
            <Link href="/portfolio" className="text-blue-600 underline">→ Portfolio & GitHub</Link>
            {/* Add other internal links as needed */}
          </div>
        </section>
        <section>
          <h2 className="text-2xl font-semibold mb-2">Quick Links</h2>
          <ul className="ml-5 list-disc">
            <li>
              <a href="https://github.com/ch1ch0-FOSS/ch1ch0-FOSS" target="_blank" className="text-blue-600 underline" rel="noopener noreferrer">
                ch1ch0-FOSS on GitHub
              </a>{" "}
              – Portfolio landing
            </li>
            <li>
              <a href="https://github.com/ch1ch0-FOSS/srv-m1m-asahi" target="_blank" className="text-blue-600 underline" rel="noopener noreferrer">
                srv-m1m-asahi on GitHub
              </a>{" "}
              – Infrastructure proof
            </li>
            <li>
              <a href="https://github.com/ch1ch0-FOSS" target="_blank" className="text-blue-600 underline" rel="noopener noreferrer">
                GitHub Profile
              </a>
            </li>
          </ul>
        </section>
      </main>
      <footer className="text-center border-t-2 border-gray-800 pt-5 text-sm text-gray-600">
        Built on Fedora Asahi M1 | Deployed via Vercel | Open source
      </footer>
    </div>
  );
}

