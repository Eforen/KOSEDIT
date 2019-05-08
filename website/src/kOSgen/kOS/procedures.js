/**
 * @license
 * Visual Blocks Language
 *
 * Copyright 2012 Google Inc.
 * https://developers.google.com/blockly/
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * @fileoverview Generating kOS for procedure blocks.
 * @author fraser@google.com (Neil Fraser)
 */
'use strict';

goog.provide('Blockly.kOS.procedures');

goog.require('Blockly.kOS');


Blockly.kOS['procedures_defreturn'] = function(block) {
  // Define a procedure with a return value.
  var funcName = Blockly.kOS.variableDB_.getName(
      block.getFieldValue('NAME'), Blockly.Procedures.NAME_TYPE);
  var branch = Blockly.kOS.statementToCode(block, 'STACK');
  if (Blockly.kOS.STATEMENT_PREFIX) {
    branch = Blockly.kOS.prefixLines(
        Blockly.kOS.STATEMENT_PREFIX.replace(/%1/g,
        '\'' + block.id + '\''), Blockly.kOS.INDENT) + branch;
  }
  if (Blockly.kOS.INFINITE_LOOP_TRAP) {
    branch = Blockly.kOS.INFINITE_LOOP_TRAP.replace(/%1/g,
        '\'' + block.id + '\'') + branch;
  }
  var returnValue = Blockly.kOS.valueToCode(block, 'RETURN',
      Blockly.kOS.ORDER_NONE) || '';
  if (returnValue) {
    returnValue = '  return ' + returnValue + '.\n';
  }
  var args = [];
  for (var x = 0; x < block.arguments_.length; x++) {
    args[x] = Blockly.kOS.variableDB_.getName(block.arguments_[x],
        Blockly.Variables.NAME_TYPE);
  }
  var parameters = '';
  if (args.length>0){
    parameters = '  declare parameter ' + args.join(', ') + '.\n';
  }

  var code = 'declare function ' + funcName  + ' {\n' + 
      parameters+
      branch +
      returnValue + '}';
  code = Blockly.kOS.scrub_(block, code);
  Blockly.kOS.definitions_[funcName] = code;
  return null;
};

// Defining a procedure without a return value uses the same generator as
// a procedure with a return value.
Blockly.kOS['procedures_defnoreturn'] =
    Blockly.kOS['procedures_defreturn'];

Blockly.kOS['procedures_callreturn'] = function(block) {
  // Call a procedure with a return value.
  var funcName = Blockly.kOS.variableDB_.getName(
      block.getFieldValue('NAME'), Blockly.Procedures.NAME_TYPE);
  var args = [];
  for (var x = 0; x < block.arguments_.length; x++) {
    args[x] = Blockly.kOS.valueToCode(block, 'ARG' + x,
        Blockly.kOS.ORDER_COMMA) || 'null';
  }

  var code = funcName + '(' + args.join(', ') + ')';
  return [code, Blockly.kOS.ORDER_FUNCTION_CALL];
};

Blockly.kOS['procedures_callnoreturn'] = function(block) {
  // Call a procedure with no return value.
  var funcName = Blockly.kOS.variableDB_.getName(
      block.getFieldValue('NAME'), Blockly.Procedures.NAME_TYPE);
  var args = [];
  for (var x = 0; x < block.arguments_.length; x++) {
    args[x] = Blockly.kOS.valueToCode(block, 'ARG' + x,
        Blockly.kOS.ORDER_COMMA) || 'null';
  }

  var code = funcName + '(' + args.join(', ') + ').\n';
  return code;
};

Blockly.kOS['procedures_ifreturn'] = function(block) {
  // Conditionally return value from a procedure.
  var condition = Blockly.kOS.valueToCode(block, 'CONDITION',
      Blockly.kOS.ORDER_NONE) || 'false';
  var code = 'if (' + condition + ') {\n';
  if (block.hasReturnValue_) {
    var value = Blockly.kOS.valueToCode(block, 'VALUE',
        Blockly.kOS.ORDER_NONE) || 'null';
    code += '  return ' + value + '.\n';
  } else {
    code += '  return.\n';
  }
  code += '}\n';
  return code;
};
