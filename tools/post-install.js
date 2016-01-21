var execSync = require('child_process').execSync;

// Node 0.10 check execSync availability
if (!execSync) {
  execSync = require('sync-exec');
}

function exec(command) {
  // Synchronous: will block the Node.js event loop
  execSync(command, { stdio: [0, 1, 2] });
}

// Install necessary dependencies and build library
exec('npm run dist');
exec('npm run dist:min');
