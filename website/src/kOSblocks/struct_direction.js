/**
 * @fileoverview blocks for The Editor. This file is based on the docs at http://ksp-kos.github.io/KOS_DOC/math/direction.html
 * @author kos-edit@eforen.tv (Ariel Lothlorien)
 */


Blockly.Blocks.flow.HUE = 300;

Blockly.Blocks['Direction_properties'] = {
  dropdowns: [["Pitch", "PITCH"],["Yaw", "YAW"],["Roll", "ROLL"],["Forevector", "FOREVECTOR"],["Topvector", "TOPVECTOR"],["Starvector", "STARVECTOR"]],


  DataMap: {
    PITCH:{
      output: ["Number", "scalar "],
      parameter: null,
      tooltip: "Rotation around the \\(x\\) axis.",
      help: "http://ksp-kos.github.io/KOS_DOC/math/direction.html#attribute:DIRECTION:PITCH"
    },
    YAW:{
      output: ["Number", "scalar "],
      parameter: null,
      tooltip: "Rotation around the \\(y\\) axis.",
      help: "http://ksp-kos.github.io/KOS_DOC/math/direction.html#attribute:DIRECTION:YAW"
    },
    ROLL:{
      output: ["Number", "scalar "],
      parameter: null,
      tooltip: "Rotation around the \\(z\\) axis.",
      help: "http://ksp-kos.github.io/KOS_DOC/math/direction.html#attribute:DIRECTION:ROLL"
    },
    FOREVECTOR:{
      output: "vector",
      parameter: null,
      tooltip: "Vector of length 1 that is in the same direction as the look-at of this Direction.  Note that it is the same meaning as what the Z axis of the universe would be rotated to if this rotation was applied to the basis axes of the universe.  When you LOCK STEERING to a direction\, that directions FOREVECTOR is the vector the nose of the ship will orient to.  SHIP\:FACING\:FOREVECTOR is the way the ships nose is aimed right now.",
      help: "http://ksp-kos.github.io/KOS_DOC/math/direction.html#attribute:DIRECTION:FOREVECTOR"
    },
    TOPVECTOR:{
      output: "vector",
      parameter: null,
      tooltip: "Vector of length 1 that is in the same direction as the look-up of this Direction.  Note that it is the same meaning as what the Y axis of the universe would be rotated to if this rotation was applied to the basis axes of the universe. When you LOCK STEERING to a direction\, that directions TOPVECTOR is the vector the roof of the ship will orient to.  SHIP\:FACING\:TOPVECTOR is the way the ships roof is aimed right now.",
      help: "http://ksp-kos.github.io/KOS_DOC/math/direction.html#attribute:DIRECTION:TOPVECTOR"
    },
    STARVECTOR:{
      output: "vector",
      parameter: null,
      tooltip: "Vector of length 1 that is in the same direction as the starboard side of this Direction.  Note that it is the same meaning as what the X axis of the universe would be rotated to if this rotation was applied to the basis axes of the universe. When you LOCK STEERING to a direction\, that directions STARVECTOR is the vector the right wing of the ship will orient to.  SHIP\:FACING\:STARVECTOR is the way the ships right wing is aimed right now.",
      help: "http://ksp-kos.github.io/KOS_DOC/math/direction.html#attribute:DIRECTION:STARVECTOR"
    },
    STARVECTOR:{
      output: "vector",
      parameter: null,
      tooltip: "Vector of length 1 that is in the same direction as the starboard side of this Direction.  Note that it is the same meaning as what the X axis of the universe would be rotated to if this rotation was applied to the basis axes of the universe. When you LOCK STEERING to a direction\, that directions STARVECTOR is the vector the right wing of the ship will orient to.  SHIP\:FACING\:STARVECTOR is the way the ships right wing is aimed right now.",
      help: "http://ksp-kos.github.io/KOS_DOC/math/direction.html#attribute:DIRECTION:STARVECTOR"
    }
  },
  init: function() {
    this.setHelpUrl("http://ksp-kos.github.io/KOS_DOC/math/direction.html");
    this.setColour(120);

    this.setOutput(true, "Any");
    this.appendValueInput("PARENT")
        .setCheck("direction")
        .appendField("Get Direction Property")
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
