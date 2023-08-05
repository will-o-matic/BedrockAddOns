const fs = require('fs');
const path = require('path');

// Load settings
const settings = JSON.parse(fs.readFileSync('./settings.json'));

// Get behavior pack name and new folder path
const bpName = settings.bp_name; 
const modName = settings.modname;
const bpSourceLocation = `./dev-packs/` + modName + `/` + bpName;
const comMojangLocation = settings.com_mojang;
const devBpFolder = comMojangLocation + `/development_behavior_packs/${bpName}`;

// Move folder
fs.copyFileSync(bpSourceLocation, devBpFolder);

//Get resource pack name and new folder path
// Get behavior pack name and new folder path
const rpName = settings.rp_name; 
const rpSourceLocation = `./dev-packs/` + modName + `/` + rpName;
const devRpFolder = comMojangLocation + `/development_resource_packs/${rpName}`;

// Move folder
fs.copyFileSync(rpSourceLocation, devRpFolder);