'use strict';

// =================================================================================
// App Configuration
// =================================================================================

const webhook = require('jovo-framework').Webhook;
const app = require('./dist/index.js');

// Listen for post requests
webhook.listen(3000, function() {
  console.log('Local development server listening on port 3000.');
});

webhook.post('/webhook', function(req, res) {
  app(req, res);
});