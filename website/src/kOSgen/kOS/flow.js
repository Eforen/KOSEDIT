/**
 * @fileoverview Flight Control blocks for The Editor.
 * @author kos-edit@eforen.tv (Ariel Lothlorien)
 */
'use strict';

'use strict';

goog.provide('Blockly.kOS.variables');

goog.require('Blockly.kOS');

Blockly.kOS['kos_stage'] = function(block) {
  var code = 'STAGE. \n';
  return code;
};

Blockly.kOS['kos_wait'] = function(block) {
  var value_time = Blockly.kOS.valueToCode(block, 'TIME', Blockly.kOS.ORDER_ASSIGNMENT) || '0';
  var code = 'WAIT ' + value_time + '. \n';
  return code;
};

Blockly.kOS['kos_wait_until'] = function(block) {
  var argument = Blockly.kOS.valueToCode(block, 'CONDITION', Blockly.kOS.ORDER_NONE) || 'true';
  var code = 'WAIT UNTIL ' + argument + '. \n';
  return code;
};

Blockly.kOS['kos_lock'] = function(block) {
  var value_target = Blockly.kOS.valueToCode(block, 'TARGET', Blockly.kOS.ORDER_ATOMIC);
  var value_value = Blockly.kOS.valueToCode(block, 'VALUE', Blockly.kOS.ORDER_ATOMIC);
  // TODO: Assemble kOS into code variable.
  var code = 'LOCK ' + value_target + ' TO '+value_value+'. \n';
  return code;
};

Blockly.kOS['kos_set'] = function(block) {
  var value_target = Blockly.kOS.valueToCode(block, 'TARGET', Blockly.kOS.ORDER_ATOMIC);
  var value_value = Blockly.kOS.valueToCode(block, 'VALUE', Blockly.kOS.ORDER_ATOMIC);
  // TODO: Assemble kOS into code variable.
  var code = 'SET ' + value_target + ' TO '+value_value+'. \n';
  return code;
};

Blockly.kOS['kos_toggle'] = function(block) {
  var value_target = Blockly.kOS.valueToCode(block, 'TARGET', Blockly.kOS.ORDER_ATOMIC);
  // TODO: Assemble kOS into code variable.
  var code = 'TOGGLE ' + value_target + '. \n';
  return code;
};

Blockly.kOS['kos_ontrigger'] = function(block) {
  var value_trigger = Blockly.kOS.valueToCode(block, 'TRIGGER', Blockly.kOS.ORDER_NONE) || 'false';
  var statements_code = Blockly.kOS.statementToCode(block, 'CODE');
  // TODO: Assemble kOS into code variable.
  var code = 'ON ' + value_trigger + ' {\n' +statements_code + '} \n';
  return code;
};