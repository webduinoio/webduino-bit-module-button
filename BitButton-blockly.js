+(function (factory) {
  if (typeof exports === 'undefined') {
    factory(window, window.webduino);
  } else {
    module.exports = factory;
  }
}(function (scope, webduino) {

  'use strict';

  scope.getButton = function (board, pin) {
    return new webduino.module.Button(board, board.getDigitalPin(pin));
  };
}));