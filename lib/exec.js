const cdcConnectorRun = require('./run');
const Episode7 = require('episode-7');

process.on('unhandledRejection', function(reason, p) {
  console.error("Unhandled Rejection at: Promise ", p, " reason: ", reason);
});

// Command-line execution via `node lib/exec`
//
// This module does not export anything; it provides shell interaction.
//
Episode7.run(cdcConnectorRun, process.env)
  .catch( error => {
    console.error('!      Failed', error.stack);
    process.exit(1);
  });