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
    <main className="mx-auto p-10 max-w-2xl">
      <h1 className="font-bold text-4xl mb-4">ch1ch0</h1>
      <p className="mb-6">
        Self-taught Linux Systems Administrator transitioning from health & wellness to infrastructure and DevOps.
        Building production-grade systems on Apple Silicon with focus on security hardening, automation, and open-source tools.
      </p>
      <h2 className="font-bold text-2xl mb-2">Featured Projects</h2>
      <ul>
        {repos && Array.isArray(repos) && repos.length > 0
          ? repos.map(repo => (
              <li key={repo.id} className="mb-2">
                <a href={repo.html_url} className="text-blue-700 underline font-semibold" target="_blank" rel="noopener noreferrer">
                  {repo.name}
                </a> — {repo.description || 'Infrastructure and system administration'}
              </li>
            ))
          : <li>Loading repositories...</li>
        }
      </ul>
      <div className="mt-8">
        <h2 className="font-bold text-2xl mb-2">Technical Focus</h2>
        <ul className="list-disc list-inside">
          <li>Fedora Asahi Linux on Apple Silicon (M1 Mac Mini)</li>
          <li>Self-hosted infrastructure (Forgejo, Nextcloud, MariaDB)</li>
          <li>Security hardening (SELinux enforcing, SSH keys, firewalld)</li>
          <li>Automation & scripting (Bash, Python, systemd)</li>
          <li>Vim-driven workflow (Sway WM, keyboard-first productivity)</li>
        </ul>
      </div>
    </main>
  );
};

export default Index;
