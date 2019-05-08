Blockly.kOS['lang_declare'] = function(block) {
  var value = Blockly.kOS.valueToCode(block, 'VALUE', Blockly.kOS.ORDER_ATOMIC);
   var variable = Blockly.kOS.variableDB_.getName(block.getFieldValue('VAR'), Blockly.Variables.NAME_TYPE);
  var code = 'declare '+variable+' to '+value+'.';
  return code;
};