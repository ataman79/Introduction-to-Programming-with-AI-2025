async function listGitHubRepos(username) {
    const response = await fetch(`https://api.github.com/users/${username}/repos`);
    const repos = await response.json();
    return repos;
}

let repos = await listGitHubRepos('ataman79');
for (let repo of repos)
  console.log(repo.full_name);
