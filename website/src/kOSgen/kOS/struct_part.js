Blockly.kOS['Part_properties'] = function(block) {
  var parentcode = Blockly.kOS.valueToCode(block, 'PARENT', Blockly.kOS.ORDER_NONE);
  var thisname = block.getFieldValue('NAME');
  var code = parentcode+':'+thisname;
  return [code, Blockly.kOS.ORDER_NONE];
};