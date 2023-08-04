// Import required modules
const fs = require('fs');
const path = require('path');

// Get add-on name from user
const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});

readline.question('What is the name of your add-on? ', (addonName) => {

  // Create add-on folder structure

  const addonRootFolder = `./dev-packs`;
  if (!fs.existsSync(addonRootFolder)) {
    fs.mkdirSync(addonRootFolder);
  }

  const addonFolder = `./dev-packs/${addonName}`;
  if (!fs.existsSync(addonFolder)) {
    fs.mkdirSync(addonFolder);
  }

  const behaviorPackRootFolder = `${addonFolder}/behavior_packs`;
  if (!fs.existsSync(behaviorPackRootFolder)) {
    fs.mkdirSync(behaviorPackRootFolder);
  }

  const behaviorPackFolder = `${addonFolder}/behavior_packs/${addonName}_bp`;
  if (!fs.existsSync(behaviorPackFolder)) {
    fs.mkdirSync(behaviorPackFolder);
  }

  const resourcePackRootFolder = `${addonFolder}/resource_packs`;
  if (!fs.existsSync(resourcePackRootFolder)) {
    fs.mkdirSync(resourcePackRootFolder); 
  }

  const resourcePackFolder = `${addonFolder}/resource_packs/${addonName}_rp`;
  if (!fs.existsSync(resourcePackFolder)) {
    fs.mkdirSync(resourcePackFolder); 
  }

  // Create main behavior pack files
  const manifest = {
    "format_version": 2,
    "header": {
      "name": `${addonName} Behavior Pack`,
      "description": "",
      "uuid": "",
      "version": [0, 0, 1],
      "min_engine_version": [1, 16, 0]
    },
    "modules": [
      {
        "description": "",
        "type": "resources",
        "uuid": "",
        "version": [0, 0, 1]
      }
    ]
  };

  fs.writeFileSync(`${behaviorPackFolder}/manifest.json`, JSON.stringify(manifest, null, 2));

  readline.close();

  console.log('Add-on created successfully!');
});