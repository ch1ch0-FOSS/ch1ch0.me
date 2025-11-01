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
      <h1 className="font-bold text-4xl mb-4">ch1ch0 Portfolio</h1>
      <p className="mb-6">Linux Sysadmin & Options Trader. Building digital infrastructure and strategies.</p>
      <h2 className="font-bold text-2xl mb-2">Featured Projects</h2>
      <ul>
        {repos && Array.isArray(repos) && repos.length > 0
          ? repos.map(repo => (
              <li key={repo.id} className="mb-2">
                <a href={repo.html_url} className="text-blue-700 underline font-semibold" target="_blank" rel="noopener noreferrer">
                  {repo.name}
                </a> — {repo.description || 'No description'}
              </li>
            ))
          : <li>Loading repositories...</li>
        }
      </ul>
    </main>
  );
};

export default Index;
