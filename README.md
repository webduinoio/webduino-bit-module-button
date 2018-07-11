# webduino-bit-module-button
Module for Webduino:bit Button.

## Installation
#### bower
```sh
bower install https://github.com/webduinoio/webduino-bit-module-button.git
```
#### Node.js
```sh
$ npm install webduino-bit-module-button
```

## Usage
```javascript
let webduino = require('webduino-js');
require('webduino-bit-module-button')(webduino);

const opts = {
  board: 'Bit',
  device: 'device_id',
  transport: 'mqtt'
};
  
let board = new webduino.board[opts.board](opts);

board.once(webduino.BoardEvent.READY, (board) => {
  board.samplingInterval = 250;
  const btnA = new webduino.module.Button(board, board.getDigitalPin(35), webduino.module.Button.PULL_UP);
  btnA.on("pressed", () => console.log('pressed'));
});
```

## License
This project is licensed under the MIT license, see [LICENSE](LICENSE) for more information.
