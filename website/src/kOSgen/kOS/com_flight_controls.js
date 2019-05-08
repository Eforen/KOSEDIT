/**
 * @fileoverview blocks for The Editor. This file is based on the docs at http://ksp-kos.github.io/KOS_DOC/commands/flight/pilot.html
 * @author kos-edit@eforen.tv (Ariel Lothlorien)
 */

Blockly.kOS['RawControl_properties'] = function(block) {
  var parentcode = Blockly.kOS.valueToCode(block, 'PARENT', Blockly.kOS.ORDER_NONE);
  var thisname = block.getFieldValue('NAME');
  var code = parentcode+':'+thisname;
  if(code.charAt(0) == ':') code = thisname;
  return [code, Blockly.kOS.ORDER_NONE];
};

Blockly.kOS['PilotControl_properties'] = function(block) {
  var parentcode = Blockly.kOS.valueToCode(block, 'PARENT', Blockly.kOS.ORDER_NONE);
  var thisname = block.getFieldValue('NAME');
  if(code.charAt(0) == ':') code = thisname;
  return [code, Blockly.kOS.ORDER_NONE];
};