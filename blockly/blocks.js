var mainUrl = 'https://tutorials.webduino.io/zh-tw/docs/';
var utmUrl = '?utm_source=cloud-blockly&utm_medium=contextMenu&utm_campaign=tutorials';

Blockly.Blocks['button_new_bit'] = {
  init: function () {
    this.appendDummyInput()
      .appendField(Blockly.Msg.WEBDUINO_BUTTON_NEW_BIT)
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

Blockly.Blocks['button_pin_get_bit'] = {
  init: function () {
    this.appendDummyInput()
      .appendField(Blockly.Msg.WEBDUINO_BUTTON_PIN_BIT)
      .appendField(new Blockly.FieldDropdown([
        ["0~", "0"],
        ["1~ ( A4 )", "1"],
        ["2~ ( A5 )", "2"],
        ["3~", "3"],
        ["4~", "4"],
        ["5 ( A7 )", "5"],
        ["6", "6"],
        ["7", "7"],
        ["8", "8"],
        ["9", "9"],
        ["10~", "10"],
        ["11", "11"],
        ["13", "13"],
        ["14", "14"],
        ["15", "15"],
        ["16", "16"]
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

Blockly.Blocks['button_event_2_bit'] = {
  init: function () {
    this.appendDummyInput()
      .appendField(Blockly.Msg.WEBDUINO_BUTTON_EVENT_WHEN)
      .appendField(new Blockly.FieldVariable('button'), 'var_')
      .appendField(Blockly.Msg.WEBDUINO_BUTTON_AND)
      .appendField(new Blockly.FieldVariable('button2'), 'var2_')
      .appendField(Blockly.Msg.WEBDUINO_BUTTON_EVENT_ARE)
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
