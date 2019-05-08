/**
 * @fileoverview Ship Systems blocks for The Editor.
 * @author kerboIDE@eforen.tv (Ariel Lothlorien)
 */
'use strict';

goog.provide('Blockly.kOS.screen');

goog.require('Blockly.kOS');

Blockly.kOS['kos_clearscreen'] = function(block) {
  var code = 'CLEARSCREEN. \n';
  return code;
};