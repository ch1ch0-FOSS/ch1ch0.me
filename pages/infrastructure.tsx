import dynamic from 'next/dynamic';

const Infrastructure = () => (
  <main className="mx-auto p-10 max-w-2xl">
    <h1 className="font-bold text-3xl mb-4">srv-m1m-asahi Infrastructure</h1>
    <p>M1 Mac Mini running Fedora Asahi Linux, Forgejo, Nextcloud, MariaDB, and privacy-centric services.</p>
    <h2 className="font-bold text-xl mt-4">Architecture</h2>
    <pre className="mermaid">
      {`graph TD
      User -->|SSH| Forgejo
      Forgejo -->|Git| Data_SSD
      User -->|Web| Nextcloud
      Nextcloud --> MariaDB`}
    </pre>
    <h2 className="font-bold text-xl mt-4">Services</h2>
    <ul>
      <li>Forgejo (Git hosting)</li>
      <li>Nextcloud (File sync)</li>
      <li>MariaDB (Database)</li>
      <li>SSH (Secure management)</li>
    </ul>
  </main>
);

export default Infrastructure;

