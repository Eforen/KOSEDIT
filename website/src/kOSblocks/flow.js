/**
 * @fileoverview Flight Control blocks for The Editor.
 * @author kos-edit@eforen.tv (Ariel Lothlorien)
 */
'use strict';

goog.provide('Blockly.Blocks.flow');

goog.require('Blockly.Blocks');


Blockly.Blocks.flow.HUE = 0;

Blockly.Blocks['kos_stage'] = {
  init: function() {
    this.setHelpUrl('http://ksp-kos.github.io/KOS_DOC/tutorials/quickstart.html#step-3-make-the-script-actually-do-something');
    this.setColour(Blockly.Blocks.flow.HUE);
    this.appendDummyInput()
        .appendField("Stage");
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip('Stages the rocket as if the user pressed the SpaceBar');
  }
};

Blockly.Blocks['kos_wait'] = {
  init: function() {
    this.setHelpUrl('http://ksp-kos.github.io/KOS_DOC/language/flow.html#wait');
    this.setColour(Blockly.Blocks.flow.HUE);
    this.appendValueInput("TIME")
        .setCheck("Number")
        .appendField("Wait");
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip('Halts execution for a specified amount of time.');
  }
};

Blockly.Blocks['kos_wait_until'] = {
  init: function() {
    this.setHelpUrl('http://ksp-kos.github.io/KOS_DOC/tutorials/quickstart.html#step-3-make-the-script-actually-do-something');
    this.setColour(Blockly.Blocks.flow.HUE);
    this.appendValueInput("CONDITION")
        .setCheck("Boolean")
        .appendField("Wait Until");
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip('Halts execution until a specific set of criteria are met.');
  }
};

Blockly.Blocks['kos_set'] = {
  init: function() {
    this.setHelpUrl('http://ksp-kos.github.io/KOS_DOC/language/variables.html?highlight=lock#lock');
    this.setColour(Blockly.Blocks.flow.HUE);
    this.appendValueInput("TARGET")
        .appendField("SET");
    this.appendValueInput("VALUE")
        .appendField("TO");
    this.setInputsInline(true);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip('Sets the value of a variable. Declares a global variable if it doesn’t already exist.');
  }
};

Blockly.Blocks['kos_lock'] = {
  init: function() {
    this.setHelpUrl('http://ksp-kos.github.io/KOS_DOC/language/variables.html?highlight=lock#lock');
    this.setColour(Blockly.Blocks.flow.HUE);
    this.appendValueInput("TARGET")
        .appendField("LOCK");
    this.appendValueInput("VALUE")
        .appendField("TO");
    this.setInputsInline(true);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip('Locks an identifier to an expression. Each time the identifier is used in an expression, its value will be re-calculated on the fly');
  }
};

Blockly.Blocks['kos_toggle'] = {
  init: function() {
    this.setHelpUrl('http://ksp-kos.github.io/KOS_DOC/language/variables.html?highlight=declare#toggle');
    this.setColour(Blockly.Blocks.flow.HUE);
    this.appendValueInput("TARGET")
        .appendField("TOGGLE");
    this.setInputsInline(true);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip('Locks an identifier to an expression. Each time the identifier is used in an expression, its value will be re-calculated on the fly');
  }
};

Blockly.Blocks['kos_ontrigger'] = {
  init: function() {
    this.setHelpUrl('http://ksp-kos.github.io/KOS_DOC/language/flow.html#on');
    this.setColour(165);
    this.appendValueInput("TRIGGER")
        .setCheck("Boolean")
        .appendField("ON");
    this.appendStatementInput("CODE");
    this.setInputsInline(true);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip('');
  }
};