/**
 * @fileoverview Ship System blocks for The Editor.
 * @author kos-edit@eforen.tv (Ariel Lothlorien)
 */

Blockly.kOS['kos_shipsys_rcs'] = function(block) {
  var value = Blockly.kOS.valueToCode(block, 'STATE', Blockly.kOS.ORDER_NONE);
  if (value == "true") value = "ON"
  if (value == "false") value = "OFF"
  return ["RCS "+value+".", Blockly.kOS.ORDER_NONE];
};
Blockly.kOS['kos_shipsys_sas'] = function(block) {
  var value = Blockly.kOS.valueToCode(block, 'STATE', Blockly.kOS.ORDER_NONE);
  if (value == "true") value = "ON"
  if (value == "false") value = "OFF"
  return ["SAS "+value+".", Blockly.kOS.ORDER_NONE];
};
Blockly.kOS['kos_shipsys_lights'] = function(block) {
  var value = Blockly.kOS.valueToCode(block, 'STATE', Blockly.kOS.ORDER_NONE);
  if (value == "true") value = "ON"
  if (value == "false") value = "OFF"
  return ["LIGHTS "+value+".", Blockly.kOS.ORDER_NONE];
};
Blockly.kOS['kos_shipsys_brakes'] = function(block) {
  var value = Blockly.kOS.valueToCode(block, 'STATE', Blockly.kOS.ORDER_NONE);
  if (value == "true") value = "ON"
  if (value == "false") value = "OFF"
  return ["BRAKES "+value+".", Blockly.kOS.ORDER_NONE];
};

Blockly.Blocks['kos_shipsys_target']
Blockly.kOS['vessel_byname'] = function(block) {
  var value = Blockly.kOS.valueToCode(block, 'NAME', Blockly.kOS.ORDER_NONE);
  var code = 'SET TARGET TO '+value+".";
  return [code, Blockly.kOS.ORDER_NONE];
};

Blockly.kOS['kos_shipsys_rcs_key'] = function(block) {
  return ["RCS", Blockly.kOS.ORDER_NONE];
};
Blockly.kOS['kos_shipsys_sas_key'] = function(block) {
  return ["SAS", Blockly.kOS.ORDER_NONE];
};
Blockly.kOS['kos_shipsys_lights_key'] = function(block) {
  return ["LIGHTS", Blockly.kOS.ORDER_NONE];
};
Blockly.kOS['kos_shipsys_brakes_key'] = function(block) {
  return ["BRAKES", Blockly.kOS.ORDER_NONE];
};