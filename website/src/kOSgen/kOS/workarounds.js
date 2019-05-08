
Blockly.kOS['workaround_input'] = function(block) {
  var code = block.getFieldValue('CODE');
  if (code.trim().endsWith('.') == false) code = '' + code + '.'
  return '' + code;
};
Blockly.kOS['workaround_input_flow'] = function(block) {
  var code = block.getFieldValue('CODE');
  if (code.trim().endsWith('.') == false) code = '' + code + '.'
  return '' + code + '\n';
};
