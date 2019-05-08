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
 * @fileoverview Generating kOS for math blocks.
 * @author q.neutron@gmail.com (Quynh Neutron)
 */
'use strict';

goog.provide('Blockly.kOS.math');

goog.require('Blockly.kOS');


Blockly.kOS['math_number'] = function(block) {
  // Numeric value.
  var code = parseFloat(block.getFieldValue('NUM'));
  return [code, Blockly.kOS.ORDER_ATOMIC];
};

Blockly.kOS['math_arithmetic'] = function(block) {
  // Basic arithmetic operators, and power.
  var OPERATORS = {
    'ADD': [' + ', Blockly.kOS.ORDER_ADDITION],
    'MINUS': [' - ', Blockly.kOS.ORDER_SUBTRACTION],
    'MULTIPLY': [' * ', Blockly.kOS.ORDER_MULTIPLICATION],
    'DIVIDE': [' / ', Blockly.kOS.ORDER_DIVISION],
    'POWER': [null, Blockly.kOS.ORDER_COMMA]  // Handle power separately.
  };
  var tuple = OPERATORS[block.getFieldValue('OP')];
  var operator = tuple[0];
  var order = tuple[1];
  var argument0 = Blockly.kOS.valueToCode(block, 'A', order) || '0';
  var argument1 = Blockly.kOS.valueToCode(block, 'B', order) || '0';
  var code;
  // Power in kOS requires a special case since it has no operator.
  if (!operator) {
    code = argument0 + ' ^ ' + argument1;
    return [code, Blockly.kOS.ORDER_COMMA];
  }
  code = argument0 + operator + argument1;
  return [code, order];
};

Blockly.kOS['math_single'] = function(block) {
  // Math operators with single operand.
  var operator = block.getFieldValue('OP');
  var code;
  var arg;
  if (operator == 'NEG') {
    // Negation is a special case given its different operator precedence.
    arg = Blockly.kOS.valueToCode(block, 'NUM',
        Blockly.kOS.ORDER_UNARY_NEGATION) || '0';
    if (arg[0] == '-') {
      // --3 is not legal in JS.
      arg = ' ' + arg;
    }
    code = '-' + arg;
    return [code, Blockly.kOS.ORDER_UNARY_NEGATION];
  }
  if (operator == 'SIN' || operator == 'COS' || operator == 'TAN') {
    arg = Blockly.kOS.valueToCode(block, 'NUM',
        Blockly.kOS.ORDER_DIVISION) || '0';
  } else {
    arg = Blockly.kOS.valueToCode(block, 'NUM',
        Blockly.kOS.ORDER_NONE) || '0';
  }
  // First, handle cases which generate values that don't need parentheses
  // wrapping the code.
  switch (operator) {
    case 'ABS':
      code = 'ABS(' + arg + ')';
      break;
    case 'ROOT':
      code = 'SQRT(' + arg + ')';
      break;
    case 'LN':
      code = 'LN(' + arg + ')';
      break;
    case 'EXP':
      code = 'constant():e ^ ' + arg;
      break;
    case 'POW10':
      code = '10^ ' + arg;
      break;
    case 'ROUND':
      code = 'ROUND(' + arg + ')';
      break;
    case 'ROUNDUP':
      code = 'CEILING(' + arg + ')';
      break;
    case 'ROUNDDOWN':
      code = 'CEILING(' + arg + ')';
      break;
    case 'SIN':
      code = 'SIN(' + arg + ')';
      break;
    case 'COS':
      code = 'COS(' + arg + ')';
      break;
    case 'TAN':
      code = 'TAN(' + arg + ')';
      break;
  }
  if (code) {
    return [code, Blockly.kOS.ORDER_FUNCTION_CALL];
  }
  // Second, handle cases which generate values that may need parentheses
  // wrapping the code.
  switch (operator) {
    case 'LOG10':
      code = 'LOG10(' + arg + ')';
      break;
    case 'ASIN':
      code = 'ARCSIN(' + arg + ')';
      break;
    case 'ACOS':
      code = 'ARCCOS(' + arg + ')';
      break;
    case 'ATAN':
      code = 'ARCTAN(' + arg + ')';
      break;
    default:
      throw 'Unknown math operator: ' + operator;
  }
  return [code, Blockly.kOS.ORDER_DIVISION];
};

Blockly.kOS['math_constant'] = function(block) {
  // Constants: PI, E, the Golden Ratio, sqrt(2), 1/sqrt(2), INFINITY.
  var CONSTANTS = {
    'PI': ['Constant():PI', Blockly.kOS.ORDER_MEMBER],
    'E': ['Constant():E', Blockly.kOS.ORDER_MEMBER],
    'GRAV':
        ['Constant():G', Blockly.kOS.ORDER_MEMBER],
    'SQRT2': ['1.4142135623730951', Blockly.kOS.ORDER_MEMBER],
    'SQRT1_2': ['0.7071067811865476', Blockly.kOS.ORDER_MEMBER],
    'INFINITY': ['Infinity', Blockly.kOS.ORDER_ATOMIC]
  };
  return CONSTANTS[block.getFieldValue('CONSTANT')];
};

Blockly.kOS['math_number_property'] = function(block) {
  // Check if a number is even, odd, prime, whole, positive, or negative
  // or if it is divisible by certain number. Returns true or false.
  var number_to_check = Blockly.kOS.valueToCode(block, 'NUMBER_TO_CHECK',
      Blockly.kOS.ORDER_MODULUS) || '0';
  var dropdown_property = block.getFieldValue('PROPERTY');
  var code;
  if (dropdown_property == 'PRIME') {
    // Prime is a special case as it is not a one-liner test.
    var functionName = Blockly.kOS.provideFunction_(
        'math_isPrime',
        [ 'function ' + Blockly.kOS.FUNCTION_NAME_PLACEHOLDER_ + '(n) {',
          '  // https://en.wikipedia.org/wiki/Primality_test#Naive_methods',
          '  if (n == 2 || n == 3) {',
          '    return true;',
          '  }',
          '  // False if n is NaN, negative, is 1, or not whole.',
          '  // And false if n is divisible by 2 or 3.',
          '  if (isNaN(n) || n <= 1 || n % 1 != 0 || n % 2 == 0 ||' +
            ' n % 3 == 0) {',
          '    return false;',
          '  }',
          '  // Check all the numbers of form 6k +/- 1, up to sqrt(n).',
          '  for (var x = 6; x <= Math.sqrt(n) + 1; x += 6) {',
          '    if (n % (x - 1) == 0 || n % (x + 1) == 0) {',
          '      return false;',
          '    }',
          '  }',
          '  return true;',
          '}']);
    code = functionName + '(' + number_to_check + ')';
    return [code, Blockly.kOS.ORDER_FUNCTION_CALL];
  }
  switch (dropdown_property) {
    case 'EVEN':
      code = number_to_check + ' % 2 == 0';
      break;
    case 'ODD':
      code = number_to_check + ' % 2 == 1';
      break;
    case 'WHOLE':
      code = number_to_check + ' % 1 == 0';
      break;
    case 'POSITIVE':
      code = number_to_check + ' > 0';
      break;
    case 'NEGATIVE':
      code = number_to_check + ' < 0';
      break;
    case 'DIVISIBLE_BY':
      var divisor = Blockly.kOS.valueToCode(block, 'DIVISOR',
          Blockly.kOS.ORDER_MODULUS) || '0';
      code = number_to_check + ' % ' + divisor + ' == 0';
      break;
  }
  return [code, Blockly.kOS.ORDER_EQUALITY];
};

Blockly.kOS['math_change'] = function(block) {
  // Add to a variable in place.
  var argument0 = Blockly.kOS.valueToCode(block, 'DELTA',
      Blockly.kOS.ORDER_ADDITION) || '0';
  var varName = Blockly.kOS.variableDB_.getName(
      block.getFieldValue('VAR'), Blockly.Variables.NAME_TYPE);
  return varName + ' = (typeof ' + varName + ' == \'number\' ? ' + varName +
      ' : 0) + ' + argument0 + ';\n';
};

// Rounding functions have a single operand.
Blockly.kOS['math_round'] = Blockly.kOS['math_single'];
// Trigonometry functions have a single operand.
Blockly.kOS['math_trig'] = Blockly.kOS['math_single'];

Blockly.kOS['math_on_list'] = function(block) {
  // Math functions for lists.
  var func = block.getFieldValue('OP');
  var list, code;
  switch (func) {
    case 'SUM':
      list = Blockly.kOS.valueToCode(block, 'LIST',
          Blockly.kOS.ORDER_MEMBER) || '[]';
      code = list + '.reduce(function(x, y) {return x + y;})';
      break;
    case 'MIN':
      list = Blockly.kOS.valueToCode(block, 'LIST',
          Blockly.kOS.ORDER_COMMA) || '[]';
      code = 'Math.min.apply(null, ' + list + ')';
      break;
    case 'MAX':
      list = Blockly.kOS.valueToCode(block, 'LIST',
          Blockly.kOS.ORDER_COMMA) || '[]';
      code = 'Math.max.apply(null, ' + list + ')';
      break;
    case 'AVERAGE':
      // math_median([null,null,1,3]) == 2.0.
      var functionName = Blockly.kOS.provideFunction_(
          'math_mean',
          [ 'function ' + Blockly.kOS.FUNCTION_NAME_PLACEHOLDER_ +
              '(myList) {',
            '  return myList.reduce(function(x, y) {return x + y;}) / ' +
                  'myList.length;',
            '}']);
      list = Blockly.kOS.valueToCode(block, 'LIST',
          Blockly.kOS.ORDER_NONE) || '[]';
      code = functionName + '(' + list + ')';
      break;
    case 'MEDIAN':
      // math_median([null,null,1,3]) == 2.0.
      var functionName = Blockly.kOS.provideFunction_(
          'math_median',
          [ 'function ' + Blockly.kOS.FUNCTION_NAME_PLACEHOLDER_ +
              '(myList) {',
            '  var localList = myList.filter(function (x) ' +
              '{return typeof x == \'number\';});',
            '  if (!localList.length) return null;',
            '  localList.sort(function(a, b) {return b - a;});',
            '  if (localList.length % 2 == 0) {',
            '    return (localList[localList.length / 2 - 1] + ' +
              'localList[localList.length / 2]) / 2;',
            '  } else {',
            '    return localList[(localList.length - 1) / 2];',
            '  }',
            '}']);
      list = Blockly.kOS.valueToCode(block, 'LIST',
          Blockly.kOS.ORDER_NONE) || '[]';
      code = functionName + '(' + list + ')';
      break;
    case 'MODE':
      // As a list of numbers can contain more than one mode,
      // the returned result is provided as an array.
      // Mode of [3, 'x', 'x', 1, 1, 2, '3'] -> ['x', 1].
      var functionName = Blockly.kOS.provideFunction_(
          'math_modes',
          [ 'function ' + Blockly.kOS.FUNCTION_NAME_PLACEHOLDER_ +
              '(values) {',
            '  var modes = [];',
            '  var counts = [];',
            '  var maxCount = 0;',
            '  for (var i = 0; i < values.length; i++) {',
            '    var value = values[i];',
            '    var found = false;',
            '    var thisCount;',
            '    for (var j = 0; j < counts.length; j++) {',
            '      if (counts[j][0] === value) {',
            '        thisCount = ++counts[j][1];',
            '        found = true;',
            '        break;',
            '      }',
            '    }',
            '    if (!found) {',
            '      counts.push([value, 1]);',
            '      thisCount = 1;',
            '    }',
            '    maxCount = Math.max(thisCount, maxCount);',
            '  }',
            '  for (var j = 0; j < counts.length; j++) {',
            '    if (counts[j][1] == maxCount) {',
            '        modes.push(counts[j][0]);',
            '    }',
            '  }',
            '  return modes;',
            '}']);
      list = Blockly.kOS.valueToCode(block, 'LIST',
          Blockly.kOS.ORDER_NONE) || '[]';
      code = functionName + '(' + list + ')';
      break;
    case 'STD_DEV':
      var functionName = Blockly.kOS.provideFunction_(
          'math_standard_deviation',
          [ 'function ' + Blockly.kOS.FUNCTION_NAME_PLACEHOLDER_ +
              '(numbers) {',
            '  var n = numbers.length;',
            '  if (!n) return null;',
            '  var mean = numbers.reduce(function(x, y) {return x + y;}) / n;',
            '  var variance = 0;',
            '  for (var j = 0; j < n; j++) {',
            '    variance += Math.pow(numbers[j] - mean, 2);',
            '  }',
            '  variance = variance / n;',
            '  return Math.sqrt(variance);',
            '}']);
      list = Blockly.kOS.valueToCode(block, 'LIST',
          Blockly.kOS.ORDER_NONE) || '[]';
      code = functionName + '(' + list + ')';
      break;
    case 'RANDOM':
      var functionName = Blockly.kOS.provideFunction_(
          'math_random_list',
          [ 'function ' + Blockly.kOS.FUNCTION_NAME_PLACEHOLDER_ +
              '(list) {',
            '  var x = Math.floor(Math.random() * list.length);',
            '  return list[x];',
            '}']);
      list = Blockly.kOS.valueToCode(block, 'LIST',
          Blockly.kOS.ORDER_NONE) || '[]';
      code = functionName + '(' + list + ')';
      break;
    default:
      throw 'Unknown operator: ' + func;
  }
  return [code, Blockly.kOS.ORDER_FUNCTION_CALL];
};

Blockly.kOS['math_modulo'] = function(block) {
  // Remainder computation.
  var argument0 = Blockly.kOS.valueToCode(block, 'DIVIDEND',
      Blockly.kOS.ORDER_MODULUS) || '0';
  var argument1 = Blockly.kOS.valueToCode(block, 'DIVISOR',
      Blockly.kOS.ORDER_MODULUS) || '0';
  var code = argument0 + ' % ' + argument1;
  return [code, Blockly.kOS.ORDER_MODULUS];
};

Blockly.kOS['math_constrain'] = function(block) {
  // Constrain a number between two limits.
  var argument0 = Blockly.kOS.valueToCode(block, 'VALUE',
      Blockly.kOS.ORDER_COMMA) || '0';
  var argument1 = Blockly.kOS.valueToCode(block, 'LOW',
      Blockly.kOS.ORDER_COMMA) || '0';
  var argument2 = Blockly.kOS.valueToCode(block, 'HIGH',
      Blockly.kOS.ORDER_COMMA) || 'Infinity';
  var code = 'Math.min(Math.max(' + argument0 + ', ' + argument1 + '), ' +
      argument2 + ')';
  return [code, Blockly.kOS.ORDER_FUNCTION_CALL];
};

Blockly.kOS['math_random_int'] = function(block) {
  // Random integer between [X] and [Y].
  var argument0 = Blockly.kOS.valueToCode(block, 'FROM',
      Blockly.kOS.ORDER_COMMA) || '0';
  var argument1 = Blockly.kOS.valueToCode(block, 'TO',
      Blockly.kOS.ORDER_COMMA) || '0';
  var functionName = Blockly.kOS.provideFunction_(
      'math_random_int',
      [ 'function ' + Blockly.kOS.FUNCTION_NAME_PLACEHOLDER_ +
          '(a, b) {',
        '  if (a > b) {',
        '    // Swap a and b to ensure a is smaller.',
        '    var c = a;',
        '    a = b;',
        '    b = c;',
        '  }',
        '  return Math.floor(Math.random() * (b - a + 1) + a);',
        '}']);
  var code = functionName + '(' + argument0 + ', ' + argument1 + ')';
  return [code, Blockly.kOS.ORDER_FUNCTION_CALL];
};

Blockly.kOS['math_random_float'] = function(block) {
  // Random fraction between 0 and 1.
  return ['Math.random()', Blockly.kOS.ORDER_FUNCTION_CALL];
};
