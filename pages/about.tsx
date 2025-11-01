const About = () => (
  <main className="mx-auto p-10 max-w-2xl">
    <h1 className="font-bold text-3xl mb-4">About ch1ch0</h1>
    <p className="mb-4">
      Career-changer transitioning from health & wellness industry to Linux system administration and DevOps engineering. 
      Self-taught through hands-on infrastructure projects and open-source contributions.
    </p>
    <h2 className="font-bold text-xl mt-6">Technical Skills</h2>
    <div className="grid grid-cols-2 gap-4 my-3">
      <span>Linux Server Administration</span>
      <span>Fedora Asahi (Apple Silicon)</span>
      <span>Version Control (Git, Forgejo)</span>
      <span>Security Hardening (SELinux)</span>
      <span>Self-Hosted Services</span>
      <span>Automation & Scripting</span>
      <span>Infrastructure as Code</span>
      <span>Privacy-First Technologies</span>
    </div>
    <h2 className="font-bold text-xl mt-6">Current Focus</h2>
    <ul className="list-disc list-inside my-3">
      <li>Building production Linux infrastructure on M1 Mac Mini</li>
      <li>Developing vim-first workflows and keyboard-driven productivity tools</li>
      <li>Automating deployment pipelines (Forgejo → GitHub → Vercel)</li>
      <li>Contributing to open-source projects and maintaining public documentation</li>
    </ul>
    <h2 className="font-bold text-xl mt-6">Career Goals</h2>
    <p className="my-3">
      Seeking junior-to-mid level Linux System Administrator or DevOps Engineer role where I can apply my 
      self-taught expertise, problem-solving skills, and passion for infrastructure automation.
    </p>
  </main>
);

export default About;
