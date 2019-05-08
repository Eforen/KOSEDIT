
Blockly.kOS['workaround_input'] = function(block) {
  var code = block.getFieldValue('CODE');
  if (code.trim().endsWith('.') == false) code = + '.'
  return [code, Blockly.kOS.ORDER_ATOMIC];
};
Blockly.kOS['workaround_input_flow'] = function(block) {
  var code = block.getFieldValue('CODE');
  if (code.trim().endsWith('.') == false) code =+ '.'
  return [code, Blockly.kOS.Blockly.kOS.ORDER_ATOMIC];
};
