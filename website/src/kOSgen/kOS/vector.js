/**
 * @fileoverview Ship Systems blocks for The Editor.
 * @author kerboIDE@eforen.tv (Ariel Lothlorien)
 */
'use strict';

goog.provide('Blockly.kOS.vector');

goog.require('Blockly.kOS');

Blockly.kOS['vector_math'] = function(block) {

  var OPERATORS = {
    'ADD': [' + ', Blockly.kOS.ORDER_ADDITION],
    'SUBTRACT': [' - ', Blockly.kOS.ORDER_SUBTRACTION],
    'MULTIPLY': [' * ', Blockly.kOS.ORDER_MULTIPLICATION]
  };

  var v1 = Blockly.kOS.valueToCode(block, 'var1', Blockly.kOS.ORDER_ATOMIC);
  var v2 = Blockly.kOS.valueToCode(block, 'var2', Blockly.kOS.ORDER_ATOMIC);
  var op = block.getFieldValue('OP');

  switch (op) {
  	case 'ADD':
  	case 'SUBTRACT':
  	case 'MULTIPLY':
  		return [v1+' '+OPERATORS[op][0]+' '+v2,OPERATORS[op][1]];
    case 'VECTORDOTPRODUCT':
    case 'VECTORCROSSPRODUCT':
    case 'VECTORANGLE':
    case 'VECTOREXCLUDE':
		return [op+'(' + v1 + ', ' + v1 + ')', Blockly.kOS.ORDER_FUNCTION_CALL];
  }
};

Blockly.kOS['vector_construct'] = function(block) {
  var x = Blockly.kOS.valueToCode(block, 'X', Blockly.kOS.ORDER_ATOMIC);
  var y = Blockly.kOS.valueToCode(block, 'Y', Blockly.kOS.ORDER_ATOMIC);
  var z = Blockly.kOS.valueToCode(block, 'Z', Blockly.kOS.ORDER_ATOMIC);
  // TODO: Assemble kOS into code variable.
  var code = 'V('+x+','+y+','+z+')';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.kOS.ORDER_FUNCTION_CALL];
};