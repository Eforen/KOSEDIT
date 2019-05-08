/**
 * @fileoverview Ship Systems blocks for The Editor.
 * @author kerboIDE@eforen.tv (Ariel Lothlorien)
 */
'use strict';

goog.provide('Blockly.Blocks.specVars');

goog.require('Blockly.Blocks');

Blockly.Blocks.specVars.HUE = 105;

Blockly.Blocks['kos_on'] = {
  init: function() {
    this.setHelpUrl('http://ksp-kos.github.io/KOS_DOC/language/flow.html#on');
    this.setColour(165);
    this.appendDummyInput()
        .appendField("On");
    this.setOutput(true, "on-off");
    this.setTooltip('The ON State.');
  }
};

Blockly.Blocks['kos_off'] = {
  init: function() {
    this.setHelpUrl('http://ksp-kos.github.io/KOS_DOC/language/flow.html#off');
    this.setColour(165);
    this.appendDummyInput()
        .appendField("On");
    this.setOutput(true, "on-off");
    this.setTooltip('The OFF State.');
  }
};

Blockly.Blocks['kos_onoff'] = {
  init: function() {
    this.setHelpUrl('http://ksp-kos.github.io/KOS_DOC/language/flow.html');
    this.setColour(165);
    this.appendDummyInput()
        .appendField(new Blockly.FieldCheckbox("TRUE", this._checkboxUpdated), "STATE")
        .appendField("ON");
    this.setOutput(true, "on-off");
    this.setTooltip('');
  },
  _checkboxUpdated: function(value){
    if(value) {
      this.sourceBlock_.inputList[0].fieldRow[1].text_="ON"
      this.sourceBlock_.inputList[0].fieldRow[1].textElement_.textContent="ON"
      this.sourceBlock_.setTooltip("The ON State.")
      this.sourceBlock_.setHelpUrl('http://ksp-kos.github.io/KOS_DOC/language/flow.html#on');
    } else {
      this.sourceBlock_.inputList[0].fieldRow[1].text_="OFF"
      this.sourceBlock_.inputList[0].fieldRow[1].textElement_.textContent="OFF"
      this.sourceBlock_.setTooltip("The OFF State.")
      this.sourceBlock_.setHelpUrl('http://ksp-kos.github.io/KOS_DOC/language/flow.html#off');
    }
  }
};