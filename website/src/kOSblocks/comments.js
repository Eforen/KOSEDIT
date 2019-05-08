/**
 * @fileoverview Flight Control blocks for The Editor.
 * @author kos-edit@eforen.tv (Ariel Lothlorien)
 */
'use strict';

goog.provide('Blockly.Blocks.Comments');

goog.require('Blockly.Blocks');


Blockly.Blocks.Comments.HUE = 210;

Blockly.Blocks['comment'] = {
  init: function() {
    this.setHelpUrl('http://www.google.com/');
    this.setColour(Blockly.Blocks.Comments.HUE);
    this.appendDummyInput()
        .appendField("Comment")
        .appendField(new Blockly.FieldTextInput("Text"), "TEXT");
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip('Example "//Text"');
  }
};