/**
 * @fileoverview Flight Control blocks for The Editor.
 * @author kos-edit@eforen.tv (Ariel Lothlorien)
 */
'use strict';

goog.provide('Blockly.Blocks.flow');

goog.require('Blockly.Blocks');


Blockly.Blocks.flow.HUE = 300;

Blockly.Blocks['vessel_byname'] = {
  init: function() {
    this.setHelpUrl('http://ksp-kos.github.io/KOS_DOC/structures/vessels/vessel.html');
    this.setColour(Blockly.Blocks.flow.HUE);
    this.appendValueInput("NAME")
        .setCheck("String")
        .appendField("Get Vessel by Name");
    this.setOutput(true, ["struct", "orbitable", "vessel"]);
    this.setTooltip('Get a vessel by it\'s name. The name is Case Sensitive.');
  }
};

Blockly.Blocks['kos_vessels_ship'] = {
  init: function() {
    this.setHelpUrl('http://ksp-kos.github.io/KOS_DOC/structures/vessels/vessel.html');
    this.setColour(Blockly.Blocks.flow.HUE);
    this.appendDummyInput()
        .appendField("Ship");
    this.setOutput(true, ["struct", "orbitable", "vessel"]);
    this.setTooltip('Refrence to the current vessel.');
  }
};

Blockly.Blocks['kos_vessels_target'] = {
  init: function() {
    this.setHelpUrl('http://ksp-kos.github.io/KOS_DOC/structures/vessels/vessel.html');
    this.setColour(Blockly.Blocks.flow.HUE);
    this.appendDummyInput()
        .appendField("Target");
    this.setOutput(true, ["struct", "orbitable", "vessel"]);
    this.setTooltip('Refrence to the target vessel.');
  }
};