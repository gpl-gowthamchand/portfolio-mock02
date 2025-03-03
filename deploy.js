const { exec } = require('child_process')

const repoUrl = 'https://github.com/gpl-gowthamchand/portfolio'
const branch = 'main'

exec(
  `git add . && git commit -m "Deploy updates" && git push ${repoUrl} ${branch} --force`,
  (err, stdout, stderr) => {
    if (err) {
      console.error(`Error: ${stderr}`)
      return
    }
    console.log(`Output: ${stdout}`)
  }
)
