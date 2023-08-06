const { exec } = require('child_process');

// Function to run npm install
function runNpmInstall() {
  return new Promise((resolve, reject) => {
    exec('npm install', (error, stdout, stderr) => {
      if (error) {
        console.error(`Error running npm install: ${error.message}`);
        reject(error);
      } else {
        console.log('npm install successful');
        resolve();
      }
    });
  });
}

// Function to run npm run start
function runNpmStart() {
  return new Promise((resolve, reject) => {
    exec('npm run start', (error, stdout, stderr) => {
      if (error) {
        console.error(`Error running npm run start: ${error.message}`);
        reject(error);
      } else {
        console.log('npm run start successful');
        resolve();
      }
    });
  });
}

// Run npm install followed by npm run start
async function runApp() {
  try {
    await runNpmInstall();
    await runNpmStart();
  } catch (error) {
    console.error('Error during the application startup:', error);
  }
}

// Start the application
runApp();
