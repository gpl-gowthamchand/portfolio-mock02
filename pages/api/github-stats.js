export const config = {
  runtime: 'edge',
}

export default async function handler(req, res) {
  try {
    const userResponse = await fetch('https://api.github.com/users/gpl-gowthamchand')
    const userReposResponse = await fetch(
      'https://api.github.com/users/gpl-gowthamchand/repos?per_page=100'
    )

    if (!userResponse.ok || !userReposResponse.ok) {
      return res.status(500).json({ error: 'Failed to fetch GitHub data' })
    }

    const user = await userResponse.json()
    const repositories = await userReposResponse.json()
    const mine = repositories.filter((repo) => !repo.fork)
    const stars = mine.reduce((accumulator, repository) => {
      return accumulator + repository['stargazers_count']
    }, 0)

    res.setHeader('Cache-Control', 'public, s-maxage=1200, stale-while-revalidate=600')

    return res.status(200).json({
      followers: user.followers,
      stars,
      repos: user.public_repos,
      gists: user.public_gists,
    })
  } catch (error) {
    return res.status(500).json({ error: 'Failed to fetch GitHub data' })
  }
}
