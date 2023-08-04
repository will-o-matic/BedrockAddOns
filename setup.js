const git = require('simple-git')();

// Get latest Bedrock Add-On Samples from Mojang for reference
const repo = 'https://github.com/Mojang/bedrock-samples'; 
const dir = './bedrock-samples'; 

git.clone(repo, dir)
  .then(() => console.log('Repository cloned successfully!'))
  .catch(err => console.error('Failed to clone repository', err));