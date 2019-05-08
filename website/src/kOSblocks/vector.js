/**
 * @fileoverview Vector blocks for The Editor.
 * @author kos-edit@eforen.tv (Ariel Lothlorien)
 */
'use strict';

goog.provide('Blockly.Blocks.vector');

goog.require('Blockly.Blocks');

Blockly.Blocks['vector_math'] = {
  init: function() {
    this.setColour(160);
    this.appendDummyInput()
        .appendField("Vector");
    this.appendValueInput("var1")
        .setCheck(["vector"]);
    this.appendDummyInput()
        .appendField(new Blockly.FieldDropdown([["+", "ADD"], ["-", "SUBTRACT"], ["*", "MULTIPLY"], ["Dot Product", "VECTORDOTPRODUCT"], ["Cross Product", "VECTORCROSSPRODUCT"], ["Angle To", "VECTORANGLE"], ["Exclude From", "VECTOREXCLUDE"]]), "OP");
    this.appendValueInput("var2")
        .setCheck(["Number", "vector"]);
    this.setInputsInline(true);
    this.setOutput(true, ["struct", "vector"]);
    // Assign 'this' to a variable for use in the tooltip and help closure below.
    var thisBlock = this;

    this.setHelpUrl(function() {
      var mode = thisBlock.getFieldValue('OP');
      var URLs = {
        'ADD': 'http://ksp-kos.github.io/KOS_DOC/math/vector.html#id1',
        'SUBTRACT': 'http://ksp-kos.github.io/KOS_DOC/math/vector.html#id1',
        'MULTIPLY': 'http://ksp-kos.github.io/KOS_DOC/math/vector.html#vector',
        'VECTORDOTPRODUCT': 'http://ksp-kos.github.io/KOS_DOC/math/vector.html#function:VECTORDOTPRODUCT',
        'VECTORCROSSPRODUCT': 'http://ksp-kos.github.io/KOS_DOC/math/vector.html#function:VECTORCROSSPRODUCT',
        'VECTORANGLE': 'http://ksp-kos.github.io/KOS_DOC/math/vector.html#function:VECTORANGLE',
        'VECTOREXCLUDE': 'http://ksp-kos.github.io/KOS_DOC/math/vector.html#function:VECTOREXCLUDE'
      };
      return URLs[mode];
    });

    this.setTooltip(function() {
      var mode = thisBlock.getFieldValue('OP');
      var TOOLTIPS = {
        'ADD': "Vector addition by a scalar or another Vector",
        'SUBTRACT': "Vector subtraction by a scalar or another Vector",
        'MULTIPLY': "Scalar multiplication or dot product of two Vectors",
        'VECTORDOTPRODUCT': "The vector cross product of two vectors in the order (v1,v2) returning a new Vector",
        'VECTORCROSSPRODUCT': "The vector cross product of two vectors in the order (v1,v2) returning a new Vector",
        'VECTORANGLE': "This returns the angle between v1 and v2",
        'VECTOREXCLUDE': "This is a vector, v2 with all of v1 excluded from it. In other words, the projection of v2 onto the plane that is normal to v1."
      };
      return TOOLTIPS[mode];
    });
  }
};

Blockly.Blocks['vector_construct'] = {
  init: function() {
    this.setHelpUrl('http://ksp-kos.github.io/KOS_DOC/math/vector.html#creation');
    this.setColour(160);
    this.appendDummyInput()
        .appendField("Vector (");
    this.appendValueInput("X")
        .setCheck("Number")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("X");
    this.appendValueInput("Y")
        .setCheck("Number")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("Y");
    this.appendValueInput("Z")
        .setCheck("Number")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("Z");
    this.appendDummyInput()
        .appendField(")");
    this.setInputsInline(true);
    this.setOutput(true, ["struct", "vector"]);
    this.setTooltip('This creates a new vector from 3 components in (x,y,z):');
  }
};