var execSync = require('child_process').execSync;
var stat = require('fs').stat;

// Node 0.10 check execSync availability
if (!execSync) {
  execSync = require('sync-exec');
}

function exec(command) {
  // Synchronous: will block the Node.js event loop
  execSync(command, { stdio: [0, 1, 2] });
}

stat('dist-modules', function(error, stat) {
  if (error || !stat.isDirectory()) {
    // Install necessary dependencies and build library
    exec('npm i babel-cli babel-preset-es2015 babel-preset-stage-1 babel-preset-react');
    exec('npm run dist:modules');
  }
});
