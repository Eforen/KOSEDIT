Blockly.kOS['vessel_byname'] = function(block) {
  var thisname = block.getFieldValue('NAME');
  var code = 'VESSEL("'+thisname+'"")';
  return [code, Blockly.kOS.ORDER_NONE];
};

Blockly.kOS['kos_vessels_ship'] = function(block) {
  return ["SHIP", Blockly.kOS.ORDER_NONE];
};

Blockly.kOS['kos_vessels_ship_control'] = function(block) {
  return ["SHIP:CONTROL", Blockly.kOS.ORDER_NONE];
};

Blockly.kOS['kos_vessels_target'] = function(block) {
  return ["TARGET", Blockly.kOS.ORDER_NONE];
};

Blockly.kOS['kos_vessels_target_control'] = function(block) {
  return ["TARGET:CONTROL", Blockly.kOS.ORDER_NONE];
};