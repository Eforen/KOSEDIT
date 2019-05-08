/**
 * @fileoverview Flight Control blocks for The Editor.
 * @author kos-edit@eforen.tv (Ariel Lothlorien)
 */
'use strict';

goog.provide('Blockly.Blocks.screen');

goog.require('Blockly.Blocks');


Blockly.Blocks.screen.HUE = 120;

Blockly.Blocks['kos_clearscreen'] = {
  init: function() {
    this.setHelpUrl('http://www.example.com/');
    this.setColour(Blockly.Blocks.screen.HUE);
    this.appendDummyInput()
        .appendField("Clear Screen");
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip('http://ksp-kos.github.io/KOS_DOC/commands/terminalgui.html?highlight=clearscreen#CLEARSCREEN');
  }
};