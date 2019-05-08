/**
 * @fileoverview blocks for The Editor. This file is based on the docs at http://ksp-kos.github.io/KOS_DOC/structures/vessels/gimbal.html
 * @author kos-edit@eforen.tv (Ariel Lothlorien)
 */


Blockly.Blocks.flow.HUE = 300;

Blockly.Blocks['Gimbal_properties'] = {
  dropdowns: [["Range", "RANGE"],["Responsespeed", "RESPONSESPEED"],["Pitchangle", "PITCHANGLE"],["Yawangle", "YAWANGLE"],["Rollangle", "ROLLANGLE"],["Lock", "LOCK"]],


  DataMap: {
    RANGE:{
      output: ["Number", "scalar"],
      parameter: null,
      tooltip: "The maximum extent of travel possible for the gimbal along all 3 axis \(Pitch\, Yaw\, Roll\)",
      help: "http://ksp-kos.github.io/KOS_DOC/structures/vessels/gimbal.html#attribute:GIMBAL:RANGE"
    },
    RESPONSESPEED:{
      output: ["Number", "scalar"],
      parameter: null,
      tooltip: "A Measure of the rate of travel for the gimbal",
      help: "http://ksp-kos.github.io/KOS_DOC/structures/vessels/gimbal.html#attribute:GIMBAL:RESPONSESPEED"
    },
    PITCHANGLE:{
      output: ["Number", "scalar"],
      parameter: null,
      tooltip: "The gimbals current pitch\, has a range of -1 to 1. Will always be 0 when LOCK is true",
      help: "http://ksp-kos.github.io/KOS_DOC/structures/vessels/gimbal.html#attribute:GIMBAL:PITCHANGLE"
    },
    YAWANGLE:{
      output: ["Number", "scalar"],
      parameter: null,
      tooltip: "The gimbals current yaw\, has a range of -1 to 1. Will always be 0 when LOCK is true",
      help: "http://ksp-kos.github.io/KOS_DOC/structures/vessels/gimbal.html#attribute:GIMBAL:YAWANGLE"
    },
    ROLLANGLE:{
      output: ["Number", "scalar"],
      parameter: null,
      tooltip: "The gimbals current roll\, has a range of -1 to 1. Will always be 0 when LOCK is true",
      help: "http://ksp-kos.github.io/KOS_DOC/structures/vessels/gimbal.html#attribute:GIMBAL:ROLLANGLE"
    },
    LOCK:{
      output: "boolean",
      parameter: null,
      tooltip: "Can this Gimbal produce torque right now\, when you set it to false it will snap the engine back to 0s for pitch\,yaw and roll",
      help: "http://ksp-kos.github.io/KOS_DOC/structures/vessels/gimbal.html#attribute:GIMBAL:LOCK"
    },
    LOCK:{
      output: "boolean",
      parameter: null,
      tooltip: "Can this Gimbal produce torque right now\, when you set it to false it will snap the engine back to 0s for pitch\,yaw and roll",
      help: "http://ksp-kos.github.io/KOS_DOC/structures/vessels/gimbal.html#attribute:GIMBAL:LOCK"
    }
  },
  init: function() {
    this.setHelpUrl("http://ksp-kos.github.io/KOS_DOC/structures/vessels/gimbal.html");
    this.setColour(120);

    this.setOutput(true, "Any");
    this.appendValueInput("PARENT")
        .setCheck("gimbal")
        .appendField("Get Gimbal Property")
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
