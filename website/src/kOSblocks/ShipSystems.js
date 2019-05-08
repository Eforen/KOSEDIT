/**
 * @fileoverview Ship Systems blocks for The Editor.
 * @author kos-edit@eforen.tv (Ariel Lothlorien)
 */
'use strict';

goog.provide('Blockly.Blocks.ship');

goog.require('Blockly.Blocks');

Blockly.Blocks.ship.HUE = 105;

Blockly.Blocks['ship_rcs'] = {
  init: function() {
    this.setHelpUrl('http://ksp-kos.github.io/KOS_DOC/commands/flight/systems.html');
    this.setColour(Blockly.Blocks.ship.HUE);
    this.appendValueInput("state")
        .setCheck(["Boolean", "on-off"])
        .appendField("RCS");
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip('Turns the RCS on or off, like using R at the keyboard');
  }
};

Blockly.Blocks['ship_sas'] = {
  init: function() {
    this.setHelpUrl('http://ksp-kos.github.io/KOS_DOC/commands/flight/systems.html');
    this.setColour(Blockly.Blocks.ship.HUE);
    this.appendValueInput("state")
        .setCheck(["Boolean", "on-off"])
        .appendField("SAS");
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip('Turns the SAS on or off, like using T at the keybaord');
  }
};

Blockly.Blocks['ship_lights'] = {
  init: function() {
    this.setHelpUrl('http://ksp-kos.github.io/KOS_DOC/commands/flight/systems.html');
    this.setColour(Blockly.Blocks.ship.HUE);
    this.appendValueInput("state")
        .setCheck(["Boolean", "on-off"])
        .appendField("LIGHTS");
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip('Turns the lights on or off, like using the U key at the keyboard');
  }
};

Blockly.Blocks['ship_brakes'] = {
  init: function() {
    this.setHelpUrl('http://ksp-kos.github.io/KOS_DOC/commands/flight/systems.html');
    this.setColour(Blockly.Blocks.ship.HUE);
    this.appendValueInput("state")
        .setCheck(["Boolean", "on-off"])
        .appendField("BRAKES");
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip('Turns the lights on or off, like using the U key at the keyboard');
  }
};