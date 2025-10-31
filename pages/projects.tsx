import React, { useEffect, useState } from 'react';

const GITHUB_USER = 'ch1ch0';

const Projects = () => {
  const [repos, setRepos] = useState([]);
  useEffect(() => {
    fetch(`https://api.github.com/users/${GITHUB_USER}/repos?sort=updated`)
      .then(res => res.json())
      .then(data => setRepos(data));
  }, []);
  return (
    <main className="mx-auto p-10 max-w-2xl">
      <h1 className="font-bold text-3xl mb-4">Projects</h1>
      <ul>
        {repos.map(repo => (
          <li key={repo.id} className="mb-4">
            <a href={repo.html_url} className="text-blue-700 underline font-semibold" target="_blank" rel="noopener noreferrer">
              {repo.name}
            </a> — {repo.description || 'No description'}
            <div>
              <span>⭐ {repo.stargazers_count} | 🍴 {repo.forks_count}</span>
            </div>
          </li>
        ))}
      </ul>
    </main>
  );
};

export default Projects;

