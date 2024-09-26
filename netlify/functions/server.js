const { app } = require('../../dist/crudApp/server/main');
const serverless = require('serverless-http');

exports.handler = serverless(app);