var cron = require('node-cron');
const { syncDb } = require('./tasks/sync-db');

console.log('Incio');

cron.schedule('1-59/5 * * * * *', syncDb);

console.log("Fiiiiiiiin");
