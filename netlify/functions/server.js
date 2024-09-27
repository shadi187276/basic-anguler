const server = require('../dist/crudApp/server/main');
const express = require('express');
const serverless = require('serverless-http'); 
const app = express();
const path = require('path'); // Change here

// Serve static files from /browser
app.use(express.static(path.join(__dirname, '../../dist/crudApp/browser'))); // Update to use path.join

// Use the existing server logic for SSR
app.use((req, res) => server.app(req, res));

// Export handler for Netlify
exports.handler = serverless(app);
