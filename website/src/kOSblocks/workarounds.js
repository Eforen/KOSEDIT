
Blockly.Blocks['workaround_input'] = {
  init: function() {
    this.setHelpUrl("#");
    //this.setColour(Blockly.Blocks.texts.HUE);
    this.appendDummyInput()
        .appendField("Raw Code Output")
        .appendField(new Blockly.FieldTextInput(''), 'CODE');
    this.setOutput(true);
    this.setTooltip("Raw Code Input");
  }
};
Blockly.Blocks['workaround_input_flow'] = {
  init: function() {
    this.setHelpUrl("#");
    //this.setColour(Blockly.Blocks.texts.HUE);
    this.appendDummyInput()
        .appendField("Raw Code")
        .appendField(new Blockly.FieldTextInput(''), 'CODE');
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip("Raw Line of Code");
  }
};