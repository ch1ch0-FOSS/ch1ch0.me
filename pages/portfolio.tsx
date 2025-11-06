;import Link from "next/link";

export default function Portfolio() {
  return (
    <div className="max-w-2xl mx-auto p-6 font-sans text-gray-800">
      <header className="mb-10 pb-5 border-b-2 border-gray-800">
        <Link href="/" className="text-blue-600 underline">&larr; Back</Link>
        <h1 className="text-3xl font-semibold mt-2">Portfolio</h1>
        <p className="text-lg text-gray-600">GitHub Infrastructure Projects (ch1ch0-FOSS)</p>
      </header>
      <main className="mb-10">
        <section className="mb-7">
          <h2 className="text-2xl font-bold">ch1ch0-FOSS</h2>
          <a href="https://github.com/ch1ch0-FOSS/ch1ch0-FOSS" className="text-blue-600 underline" target="_blank" rel="noopener noreferrer">
            GitHub: ch1ch0-FOSS
          </a>
          <p>
            Portfolio landing page and hub linking to all infrastructure work and career transition documentation.
          </p>
        </section>
        <section className="mb-7">
          <h2 className="text-xl font-bold">srv-m1m-asahi</h2>
          <a href="https://github.com/ch1ch0-FOSS/srv-m1m-asahi" className="text-blue-600 underline" target="_blank" rel="noopener noreferrer">
            GitHub: srv-m1m-asahi
          </a>
          <p>
            Proof of practice showing Fedora Asahi M1 infrastructure. Complete setup, backup, and disaster recovery.
          </p>
        </section>
        <section className="mb-7">
          <h2 className="text-xl font-bold">What You Should Look For</h2>
          <ul className="ml-5 list-disc">
            <li>Bootstrap scripts (reproducible in 2 hours)</li>
            <li>Clear service configs and troubleshooting</li>
            <li>Automated backup scripts and logs</li>
            <li>Monthly disaster recovery testing</li>
            <li>Incident response documentation</li>
          </ul>
        </section>
        <section>
          <h2 className="text-xl font-bold">See All Repos and Contributions</h2>
          <a href="https://github.com/ch1ch0-FOSS" className="text-blue-600 underline" target="_blank" rel="noopener noreferrer">
            @ch1ch0-FOSS on GitHub
          </a>
        </section>
      </main>
      <footer className="border-t-2 border-gray-800 pt-5 text-center text-sm text-gray-600">
        <Link href="/" className="text-blue-600 underline">&larr; Back to Home</Link>
      </footer>
    </div>
  );
}

