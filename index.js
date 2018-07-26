const webduinoModule = require('./BitButton');
const supportBlockly = require('./BitButton-blockly');

// Add to webduino-blockly
if (global.boardReady) {
  webduinoModule(global.webduino);
  supportBlockly(global, global.webduino);
}

module.exports = webduinoModule;
