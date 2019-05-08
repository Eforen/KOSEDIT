/**
 * @fileoverview Special Vars blocks for The Editor.
 * @author kerboIDE@eforen.tv (Ariel Lothlorien)
 */

Blockly.kOS['kos_on'] = function(block) {
  return ["ON", Blockly.kOS.ORDER_NONE];
};

Blockly.kOS['kos_off'] = function(block) {
  return ["OFF", Blockly.kOS.ORDER_NONE];
};

Blockly.kOS['kos_onoff'] = function(block) {
  var checkbox_state = block.getFieldValue('STATE') == 'TRUE';
  if(checkbox_state) return ["ON", Blockly.kOS.ORDER_NONE];
  return ["OFF", Blockly.kOS.ORDER_NONE];
};