const Resume = () => (
  <main className="mx-auto p-10 max-w-3xl">
    <h1 className="font-bold text-4xl mb-2">Resume</h1>
    <p className="text-gray-600 mb-6">Linux Systems Administrator | DevOps Engineer | Infrastructure Architect</p>
    
    <div className="mb-8">
      <a 
        href="/resume.pdf" 
        download="ch1ch0-linux-admin-resume.pdf"
        className="inline-block bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-3 rounded-lg font-semibold transition-all hover:shadow-lg"
      >
        Download Full Resume (PDF)
      </a>
    </div>

    <div className="border-t-2 border-gray-200 pt-8">
      <h2 className="font-bold text-2xl mb-4">Professional Summary</h2>
      <p className="text-gray-700 mb-6">
        Self-taught Linux Systems Administrator with hands-on infrastructure expertise. Specializing in production-grade system administration, security hardening, automation, and DevOps practices.
      </p>

      <h2 className="font-bold text-2xl mb-4 mt-8">Core Competencies</h2>
      <div className="grid grid-cols-2 gap-4 mb-8">
        <div>
          <h3 className="font-semibold text-indigo-700 mb-2">Systems Infrastructure</h3>
          <ul className="text-sm text-gray-700 space-y-1">
            <li>Linux Server Administration (Fedora)</li>
            <li>Fedora Asahi (Apple Silicon M1)</li>
            <li>SELinux Hardening</li>
            <li>Firewall Configuration (firewalld)</li>
            <li>SSH Key Management</li>
          </ul>
        </div>
        <div>
          <h3 className="font-semibold text-indigo-700 mb-2">DevOps Automation</h3>
          <ul className="text-sm text-gray-700 space-y-1">
            <li>CI/CD Pipelines (Vercel)</li>
            <li>Version Control (Git, Forgejo)</li>
            <li>Shell Scripting (Bash)</li>
            <li>Systemd Management</li>
            <li>Automated Deployment</li>
          </ul>
        </div>
        <div>
          <h3 className="font-semibold text-indigo-700 mb-2">Services Tools</h3>
          <ul className="text-sm text-gray-700 space-y-1">
            <li>Forgejo (Self-Hosted Git)</li>
            <li>Nextcloud (File Sync)</li>
            <li>MariaDB (Database)</li>
            <li>Docker (Containerization)</li>
            <li>Backup Recovery (3-2-1 Strategy)</li>
          </ul>
        </div>
        <div>
          <h3 className="font-semibold text-indigo-700 mb-2">Development</h3>
          <ul className="text-sm text-gray-700 space-y-1">
            <li>Next.js React</li>
            <li>TypeScript</li>
            <li>Python</li>
            <li>HTML CSS Tailwind</li>
            <li>Terminal CLI Tools</li>
          </ul>
        </div>
      </div>

      <h2 className="font-bold text-2xl mb-4 mt-8">Professional Experience</h2>
      <div className="mb-6">
        <h3 className="font-semibold text-lg">Linux Systems Administrator</h3>
        <p className="text-gray-600 text-sm mb-2">Self-Taught | 2023 - Present</p>
        <ul className="text-gray-700 space-y-2 text-sm">
          <li>Built and maintained production Linux infrastructure on Apple Silicon M1</li>
          <li>Implemented security hardening with SELinux enforcing and SSH key-only authentication</li>
          <li>Designed and deployed self-hosted services: Forgejo, Nextcloud, MariaDB</li>
          <li>Established local-first Git workflow with Forgejo primary, GitHub mirror</li>
          <li>Created automated CI/CD pipeline: Forgejo to GitHub to Vercel</li>
          <li>Developed comprehensive documentation and reproducible infrastructure-as-code</li>
          <li>Implemented 3-2-1 backup strategy with automated disaster recovery</li>
        </ul>
      </div>

      <h2 className="font-bold text-2xl mb-4 mt-8">Projects Portfolio</h2>
      <div className="space-y-4">
        <div className="border-l-4 border-indigo-600 pl-4">
          <h3 className="font-semibold">ch1ch0.me Portfolio Site</h3>
          <p className="text-sm text-gray-600">Next.js, React, TypeScript, Tailwind CSS</p>
          <p className="text-sm text-gray-700 mt-1">Professional portfolio showcasing Linux infrastructure expertise with automated deployment pipeline.</p>
        </div>
        <div className="border-l-4 border-indigo-600 pl-4">
          <h3 className="font-semibold">srv-m1m-asahi Infrastructure</h3>
          <p className="text-sm text-gray-600">Fedora Asahi, Systemd, Security Hardening</p>
          <p className="text-sm text-gray-700 mt-1">Complete system documentation and setup scripts for production Linux server on M1.</p>
        </div>
        <div className="border-l-4 border-indigo-600 pl-4">
          <h3 className="font-semibold">Sysadmin Toolkit Configuration</h3>
          <p className="text-sm text-gray-600">Bash, Shell Scripts, Dotfiles</p>
          <p className="text-sm text-gray-700 mt-1">Reusable scripts and configuration management for Linux systems automation.</p>
        </div>
      </div>

      <h2 className="font-bold text-2xl mb-4 mt-8">Education Certifications</h2>
      <ul className="text-gray-700 space-y-2 text-sm">
        <li>Self-Taught Linux Administrator: Hands-on infrastructure projects</li>
        <li>Linux Foundation Training: Professional system administration path</li>
        <li>Git Version Control: Local-first workflow with Forgejo and GitHub</li>
        <li>Security Hardening: SELinux, SSH, firewall configuration best practices</li>
      </ul>

      <h2 className="font-bold text-2xl mb-4 mt-8">Philosophy Approach</h2>
      <p className="text-gray-700 text-sm leading-relaxed">
        Local-first, audit-ready, keyboard-driven. I believe in self-hosted infrastructure, transparent documentation, and vim-aligned productivity. All work originates in local Forgejo before mirroring to GitHub. Systems built for reproducibility, security, and long-term maintainability.
      </p>

      <h2 className="font-bold text-2xl mb-4 mt-8">Contact Links</h2>
      <div className="bg-gray-50 p-4 rounded-lg text-sm">
        <p><strong>Email:</strong> ch1ch0@duck.com</p>
        <p><strong>GitHub:</strong> <a href="https://github.com/ch1ch0-FOSS" className="text-indigo-600 underline">https://github.com/ch1ch0-FOSS\</a\>\</p\>
        <p><strong>Portfolio:</strong> <a href="https://www.ch1ch0.me" className="text-indigo-600 underline">https://www.ch1ch0.me\</a\>\</p\>
      </div>
    </div>
  </main>
);

export default Resume;
