import React, { useEffect, useState } from 'react';

const GITHUB_USER = 'ch1ch0-FOSS';

const Index = () => {
  const [repos, setRepos] = useState([]);
  useEffect(() => {
    fetch(`https://api.github.com/users/${GITHUB_USER}/repos?sort=updated`)
      .then(res => res.json())
      .then(data => {
        console.log('GitHub repos:', data);
        setRepos(data.slice(0, 3));
      })
      .catch(err => console.error('GitHub API error:', err));
  }, []);
  
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-indigo-600 to-purple-700 text-white py-16 px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl font-bold mb-4">Linux Infrastructure Engineer</h1>
          <p className="text-xl mb-8 opacity-90">
            Self-taught systems administrator building production-grade infrastructure on Fedora Asahi M1
          </p>
          
          {/* Stat Boxes */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-10">
            <div className="bg-white bg-opacity-10 backdrop-blur-lg p-6 rounded-lg border border-white border-opacity-20">
              <h3 className="text-2xl font-bold mb-2">Fedora Asahi</h3>
              <p className="text-sm opacity-85">Production baseline with reproducible setup scripts</p>
            </div>
            <div className="bg-white bg-opacity-10 backdrop-blur-lg p-6 rounded-lg border border-white border-opacity-20">
              <h3 className="text-2xl font-bold mb-2">Self-Hosted Stack</h3>
              <p className="text-sm opacity-85">Forgejo, Nextcloud, MariaDB with SELinux hardening</p>
            </div>
            <div className="bg-white bg-opacity-10 backdrop-blur-lg p-6 rounded-lg border border-white border-opacity-20">
              <h3 className="text-2xl font-bold mb-2">CI/CD Pipeline</h3>
              <p className="text-sm opacity-85">Forgejo → GitHub → Vercel automated deployment</p>
            </div>
          </div>
          
          {/* CTAs */}
          <div className="flex gap-4 justify-center flex-wrap mt-8">
            <a href="/infrastructure" className="bg-white text-indigo-600 px-6 py-3 rounded-lg font-semibold hover:bg-opacity-90 transition-all hover:shadow-lg">
              View My Infrastructure
            </a>
            <a href="https://github.com/ch1ch0-FOSS" target="_blank" rel="noopener noreferrer" className="bg-transparent border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:bg-opacity-10 transition-all">
              Explore GitHub
            </a>
          </div>
        </div>
      </section>

      {/* Featured Projects Section */}
      <main className="max-w-4xl mx-auto p-10">
        <h2 className="font-bold text-3xl mb-4">Featured Projects</h2>
        <p className="mb-6 text-gray-600">
          Self-taught through hands-on infrastructure projects and open-source contributions.
        </p>
        <ul className="space-y-3">
          {repos && Array.isArray(repos) && repos.length > 0
            ? repos.map(repo => (
                <li key={repo.id} className="border-l-4 border-indigo-600 pl-4 py-2">
                  <a href={repo.html_url} className="text-indigo-700 underline font-semibold text-lg hover:text-indigo-900" target="_blank" rel="noopener noreferrer">
                    {repo.name}
                  </a>
                  <p className="text-gray-600 text-sm">{repo.description || 'Infrastructure and system administration'}</p>
                </li>
              ))
            : <li className="text-gray-500">Loading repositories...</li>
          }
        </ul>
        
        {/* Technical Focus */}
        <div className="mt-12">
          <h2 className="font-bold text-3xl mb-4">Technical Focus</h2>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 text-gray-700">
            <li className="flex items-start">
              <span className="text-indigo-600 mr-2">▸</span>
              Fedora Asahi Linux on Apple Silicon (M1 Mac Mini)
            </li>
            <li className="flex items-start">
              <span className="text-indigo-600 mr-2">▸</span>
              Self-hosted infrastructure (Forgejo, Nextcloud, MariaDB)
            </li>
            <li className="flex items-start">
              <span className="text-indigo-600 mr-2">▸</span>
              Security hardening (SELinux enforcing, SSH keys, firewalld)
            </li>
            <li className="flex items-start">
              <span className="text-indigo-600 mr-2">▸</span>
              Automation & scripting (Bash, Python, systemd)
            </li>
            <li className="flex items-start">
              <span className="text-indigo-600 mr-2">▸</span>
              Vim-driven workflow (Sway WM, keyboard-first productivity)
            </li>
            <li className="flex items-start">
              <span className="text-indigo-600 mr-2">▸</span>
              Infrastructure-as-code & version control best practices
            </li>
          </ul>
        </div>
      </main>
    </div>
  );
};

export default Index;
