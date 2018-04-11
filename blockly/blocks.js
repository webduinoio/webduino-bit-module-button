var mainUrl = 'https://tutorials.webduino.io/zh-tw/docs/';
var utmUrl = '?utm_source=cloud-blockly&utm_medium=contextMenu&utm_campaign=tutorials';

Blockly.Blocks['button_new'] = {
  init: function () {
    this.appendDummyInput()
      .appendField(Blockly.Msg.WEBDUINO_BUTTON_NEW)
      .appendField(new Blockly.FieldDropdown([
        ['A', '35'],
        ['B', '27']
      ]), 'pin_')
    this.setOutput(true);
    this.setTooltip('');
    this.setColour(230);
    this.setHelpUrl(mainUrl + 'basic/component/button.html' + utmUrl);
  }
};

Blockly.Blocks['button_event'] = {
  init: function () {
    this.appendDummyInput()
      .appendField(Blockly.Msg.WEBDUINO_BUTTON_EVENT_WHEN)
      .appendField(new Blockly.FieldVariable('button'), 'var_')
      .appendField(Blockly.Msg.WEBDUINO_BUTTON_EVENT_WAS)
      .appendField(new Blockly.FieldDropdown([
        [Blockly.Msg.WEBDUINO_BUTTON_EVENT_PRESSED, 'pressed'],
        [Blockly.Msg.WEBDUINO_BUTTON_EVENT_RELEASED, 'released'],
        [Blockly.Msg.WEBDUINO_BUTTON_EVENT_LONGPRESS, 'longPress']
      ]), 'event_')
      .appendField(Blockly.Msg.WEBDUINO_BUTTON_EVENT_TO);
    this.appendStatementInput('do_')
      .appendField(Blockly.Msg.WEBDUINO_BUTTON_EVENT_DO);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip('');
    this.setColour(65);
    this.setHelpUrl(mainUrl + 'basic/component/button.html' + utmUrl);
  }
};