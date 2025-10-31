const Resume = () => (
  <main className="mx-auto p-10 max-w-2xl">
    <h1 className="font-bold text-3xl mb-4">Resume: ch1ch0</h1>
    <h2 className="font-bold text-xl mt-4">Experience</h2>
    <ul>
      <li>Barber → Linux Sysadmin – 2022-2025</li>
      <li>Options Trading, Volume Price Analysis, Content Creation</li>
      <li>Fedora Asahi Linux Infrastructure Projects</li>
    </ul>
    <h2 className="font-bold text-xl mt-4">Certifications</h2>
    <ul>
      <li>Pending: Linux Foundation Certified Sysadmin</li>
    </ul>
    <a href="/resume.pdf" className="bg-blue-600 text-white px-4 py-2 rounded mt-5 inline-block" download>Download PDF</a>
  </main>
);

export default Resume;

