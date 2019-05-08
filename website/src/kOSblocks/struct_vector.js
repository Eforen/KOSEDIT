/**
 * @fileoverview blocks for The Editor. This file is based on the docs at http://ksp-kos.github.io/KOS_DOC/math/vector.html
 * @author kos-edit@eforen.tv (Ariel Lothlorien)
 */


Blockly.Blocks.flow.HUE = 300;

Blockly.Blocks['Vector_properties'] = {
  dropdowns: [["X", "X"],["Y", "Y"],["Y", "Y"],["Mag", "MAG"],["Normalized", "NORMALIZED"],["Sqrmagnitude", "SQRMAGNITUDE"],["Direction", "DIRECTION"],["Vec", "VEC"]],


  DataMap: {
    X:{
      output: ["Number", "scalar"],
      parameter: null,
      tooltip: "The \\(x\\) component of the vector.",
      help: "http://ksp-kos.github.io/KOS_DOC/math/vector.html#attribute:VECTOR:X"
    },
    Y:{
      output: ["Number", "scalar"],
      parameter: null,
      tooltip: "The \\(y\\) component of the vector.",
      help: "http://ksp-kos.github.io/KOS_DOC/math/vector.html#attribute:VECTOR:Y"
    },
    Y:{
      output: ["Number", "scalar"],
      parameter: null,
      tooltip: "The \\(y\\) component of the vector.",
      help: "http://ksp-kos.github.io/KOS_DOC/math/vector.html#attribute:VECTOR:Y"
    },
    MAG:{
      output: ["Number", "scalar"],
      parameter: null,
      tooltip: "The magnitude of the vector\, as a scalar number\, by the Pythagorean Theorem.",
      help: "http://ksp-kos.github.io/KOS_DOC/math/vector.html#attribute:VECTOR:MAG"
    },
    NORMALIZED:{
      output: "vector",
      parameter: null,
      tooltip: "This creates a unit vector pointing in the same direction as this vector. This is the same effect as multiplying the vector by the scalar 1 \/ vec\:MAG.",
      help: "http://ksp-kos.github.io/KOS_DOC/math/vector.html#attribute:VECTOR:NORMALIZED"
    },
    SQRMAGNITUDE:{
      output: ["Number", "scalar"],
      parameter: null,
      tooltip: "The magnitude of the vector\, squared. Use instead of vec\:MAG\^2 if you need to square of the magnitude as this skips the step in the Pythagorean formula where you take the square root in the first place. Taking the square root and then squaring that would introduce floating point error needlessly.",
      help: "http://ksp-kos.github.io/KOS_DOC/math/vector.html#attribute:VECTOR:SQRMAGNITUDE"
    },
    DIRECTION:{
      output: "direction",
      parameter: null,
      tooltip: "No tool tip available",
      help: "http://ksp-kos.github.io/KOS_DOC/math/vector.html#attribute:VECTOR:DIRECTION"
    },
    VEC:{
      output: "vector",
      parameter: null,
      tooltip: "This is a suffix that creates a COPY of this vector. Useful if you want to copy a vector and then change the copy. Normally if you SET v2 TO v1\, then v1 and v2 are two names for the same vector and changing one would change the other.",
      help: "http://ksp-kos.github.io/KOS_DOC/math/vector.html#attribute:VECTOR:VEC"
    },
    VEC:{
      output: "vector",
      parameter: null,
      tooltip: "This is a suffix that creates a COPY of this vector. Useful if you want to copy a vector and then change the copy. Normally if you SET v2 TO v1\, then v1 and v2 are two names for the same vector and changing one would change the other.",
      help: "http://ksp-kos.github.io/KOS_DOC/math/vector.html#attribute:VECTOR:VEC"
    }
  },
  init: function() {
    this.setHelpUrl("http://ksp-kos.github.io/KOS_DOC/math/vector.html");
    this.setColour(120);

    this.setOutput(true, "Any");
    this.appendValueInput("PARENT")
        .setCheck("vector")
        .appendField("Get Vector Property")
        .appendField(new Blockly.FieldDropdown(this.dropdowns, this.dropdown_updated_), "NAME")
        .appendField("from");
    this.setTooltip("");
    var dataObj = this.DataMap[this.getFieldValue("NAME")];
    var secondInput = (dataObj.parameter != null);
    this.updateShape_(secondInput);
  },

  dropdown_updated_: function(option) {
    var wasoption = this.sourceBlock_.getFieldValue("NAME");
    var dataObj = this.sourceBlock_.DataMap[option];
    var secondInput = (dataObj.parameter != null);
    this.sourceBlock_.updateShape_(secondInput, option);
    //this.sourceBlock_.setTooltip(dataObj.tooltip);
    //this.sourceBlock_.setHelpUrl(dataObj.help);
    //this.sourceBlock_.setOutput(true, dataObj.output);
  },
  /**
   * Create XML to represent whether the "secondInput" should be present.
   * @return {Element} XML storage element.
   * @this Blockly.Block
   */
  mutationToDom: function() {
    var container = document.createElement("mutation");
    var option = this.getFieldValue("NAME");
    var secondInput = (this.DataMap[option].parameter != null);
    container.setAttribute("second_input", secondInput);
    return container;
  },
  /**
   * Parse XML to restore the "secondInput".
   * @param {!Element} xmlElement XML storage element.
   * @this Blockly.Block
   */
  domToMutation: function(xmlElement) {
    var secondInput = (xmlElement.getAttribute("second_input") == "true");
    this.updateShape_(secondInput);
  },
  /**
   * Modify this block to have (or not have) an input for "is divisible by".
   * @param {boolean} secondInput True if this block has a divisor input.
   * @private
   * @this Blockly.Block
   */
  updateShape_: function(secondInput) {
    // Get Data
    var dataObj = this.DataMap[this.getFieldValue("NAME")];
    if (arguments.length == 2){
      dataObj = this.DataMap[arguments[1]];
    }

    // Add or remove a Value Input.
    var inputExists = this.getInput("ARG");
    if (secondInput) {
      if (!inputExists) {
        this.appendValueInput("ARG")
            .setAlign(Blockly.ALIGN_RIGHT)
            .appendField("Argument")
            .setCheck(dataObj.parameter);
      } else{
        inputExists.setCheck(dataObj.parameter)
      }
    } else if (inputExists) {
      this.removeInput("ARG");
    }

    var secondInput = (dataObj.parameter != null);
    this.setTooltip(dataObj.tooltip);
    this.setHelpUrl(dataObj.help);
    this.changeOutput(dataObj.output);
  }
};
