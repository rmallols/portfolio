const cypress = require('cypress')
const { start, stop } = require('../scripts/server');

return start().then(async server => {
    await cypress.run();
    return stop(server);
});