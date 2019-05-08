/**
 * @fileoverview Ship System blocks for The Editor.
 * @author kos-edit@eforen.tv (Ariel Lothlorien)
 */
'use strict';

goog.provide('Blockly.Blocks.ShipSys');

goog.require('Blockly.Blocks');

Blockly.Blocks.ShipSys.HUE = 300;

Blockly.Blocks['kos_shipsys_rcs'] = {
  init: function() {
    this.setHelpUrl('http://ksp-kos.github.io/KOS_DOC/commands/flight/systems.html#global:RCS');
    this.setColour(Blockly.Blocks.ShipSys.HUE);
    this.appendValueInput("STATE")
        .setCheck(["Boolean", "on-off"])
        .appendField("Set RCS to")
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setOutput(false);
    this.setTooltip('Turns the RCS on or off, like using R at the keyboard.');
  }
};
Blockly.Blocks['kos_shipsys_sas'] = {
  init: function() {
    this.setHelpUrl('http://ksp-kos.github.io/KOS_DOC/commands/flight/systems.html#global:SAS');
    this.setColour(Blockly.Blocks.ShipSys.HUE);
    this.appendValueInput("STATE")
        .setCheck(["Boolean", "on-off"])
        .appendField("Set SAS to")
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setOutput(false);
    this.setTooltip('Turns the SAS on or off, like using T at the keybaord.');
  }
};
Blockly.Blocks['kos_shipsys_lights'] = {
  init: function() {
    this.setHelpUrl('http://ksp-kos.github.io/KOS_DOC/commands/flight/systems.html#global:LIGHTS');
    this.setColour(Blockly.Blocks.ShipSys.HUE);
    this.appendValueInput("STATE")
        .setCheck(["Boolean", "on-off"])
        .appendField("Set lights to")
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setOutput(false);
    this.setTooltip('Turns the lights on or off, like using the U key at the keyboard');
  }
};
Blockly.Blocks['kos_shipsys_brakes'] = {
  init: function() {
    this.setHelpUrl('http://ksp-kos.github.io/KOS_DOC/commands/flight/systems.html#global:BRAKES');
    this.setColour(Blockly.Blocks.ShipSys.HUE);
    this.appendValueInput("STATE")
        .setCheck(["Boolean", "on-off"])
        .appendField("Set Brakes to")
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setOutput(false);
    this.setTooltip('Turns the brakes on or off, like clicking the brakes button, though not like using the B key, because they stay on.');
  }
};
Blockly.Blocks['kos_shipsys_target'] = {
  init: function() {
    this.setHelpUrl('http://ksp-kos.github.io/KOS_DOC/commands/flight/systems.html#global:TARGET');
    this.setColour(Blockly.Blocks.ShipSys.HUE);
    this.appendValueInput("NAME")
        .setCheck("String")
        .appendField("Set Target to")
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setOutput(false);
    this.setTooltip('Where name is the name of a target vessel or planet, this will set the current target: {SET TARGET TO name.}');
  }
};


Blockly.Blocks['kos_shipsys_rcs_key'] = {
  init: function() {
    this.setHelpUrl('http://ksp-kos.github.io/KOS_DOC/commands/flight/systems.html#global:RCS');
    this.setColour(Blockly.Blocks.ShipSys.HUE);
    this.appendDummyInput()
        .appendField("RCS");
    this.setOutput(true);
    this.setTooltip('As keyword for SET/TOGGLE/LOCK');
  }
};
Blockly.Blocks['kos_shipsys_sas_key'] = {
  init: function() {
    this.setHelpUrl('http://ksp-kos.github.io/KOS_DOC/commands/flight/systems.html#global:SAS');
    this.setColour(Blockly.Blocks.ShipSys.HUE);
    this.appendDummyInput()
        .appendField("SAS");
    this.setOutput(true);
    this.setTooltip('As keyword for SET/TOGGLE/LOCK');
  }
};
Blockly.Blocks['kos_shipsys_lights_key'] = {
  init: function() {
    this.setHelpUrl('http://ksp-kos.github.io/KOS_DOC/commands/flight/systems.html#global:LIGHTS');
    this.setColour(Blockly.Blocks.ShipSys.HUE);
    this.appendDummyInput()
        .appendField("LIGHTS");
    this.setOutput(true);
    this.setTooltip('As keyword for SET/TOGGLE/LOCK');
  }
};
Blockly.Blocks['kos_shipsys_brakes_key'] = {
  init: function() {
    this.setHelpUrl('http://ksp-kos.github.io/KOS_DOC/commands/flight/systems.html#global:BRAKES');
    this.setColour(Blockly.Blocks.ShipSys.HUE);
    this.appendDummyInput()
        .appendField("BRAKES");
    this.setOutput(true);
    this.setTooltip('As keyword for SET/TOGGLE/LOCK');
  }
};