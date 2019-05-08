Blockly.kOS['kos_lazyglobal'] = function(block) {
  var checkbox_lazy = block.getFieldValue('lazy') == 'TRUE';
  var code = '// We set the compiler directive @LAZYGLOBAL';
  if (checkbox_lazy) code += 'off';
  else code += 'on';
  Blockly.kOS.LAZYGLOBALS = !checkbox_lazy;
  return code;
};

Blockly.kOS['kos_sas-correction'] = function(block) {
  var checkbox = block.getFieldValue('VALUE') == 'TRUE';
  var code = '//Applying fix for SAS overriding kOS controls';
  Blockly.kOS.FIXSAS = checkbox;
  return code;
};