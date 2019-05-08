/**
 * @fileoverview blocks for The Editor. This file is based on the docs at http://ksp-kos.github.io/KOS_DOC/structures/vessels/sensor.html
 * @author kos-edit@eforen.tv (Ariel Lothlorien)
 */


Blockly.Blocks.flow.HUE = 300;

Blockly.Blocks['Sensor_properties'] = {
  dropdowns: [["Part", "Part"],["Active", "ACTIVE"],["Type", "TYPE"],["Readout", "READOUT"],["Powerconsumption", "POWERCONSUMPTION"],["Toggle()", "TOGGLE()"]],


  DataMap: {
    Part:{
      output: "",
      parameter: null,
      tooltip: "No tool tip available",
      help: "http://ksp-kos.github.io/KOS_DOC/structures/vessels/sensor.htmlpart.html#structure:PART"
    },
    ACTIVE:{
      output: "boolean",
      parameter: null,
      tooltip: "True of the sensor is enabled. Can SET to cause the sensor to activate or de-activate.",
      help: "http://ksp-kos.github.io/KOS_DOC/structures/vessels/sensor.html#attribute:SENSOR:ACTIVE"
    },
    TYPE:{
      output: "",
      parameter: null,
      tooltip: "No tool tip available",
      help: "http://ksp-kos.github.io/KOS_DOC/structures/vessels/sensor.html#attribute:SENSOR:TYPE"
    },
    READOUT:{
      output: "varies",
      parameter: null,
      tooltip: "The value of the sensors readout\, usually a double.",
      help: "http://ksp-kos.github.io/KOS_DOC/structures/vessels/sensor.html#attribute:SENSOR:READOUT"
    },
    POWERCONSUMPTION:{
      output: ["Number", "scalar"],
      parameter: null,
      tooltip: "The rate at which this sensor drains ElectricCharge.",
      help: "http://ksp-kos.github.io/KOS_DOC/structures/vessels/sensor.html#attribute:SENSOR:POWERCONSUMPTION"
    },
    TOGGLE:{
      output: "",
      parameter: null,
      tooltip: "Call this method to cause the sensor to switch between active and deactivated or visa versa.",
      help: "http://ksp-kos.github.io/KOS_DOC/structures/vessels/sensor.html#method:SENSOR:TOGGLE"
    },
    TOGGLE:{
      output: "",
      parameter: null,
      tooltip: "Call this method to cause the sensor to switch between active and deactivated or visa versa.",
      help: "http://ksp-kos.github.io/KOS_DOC/structures/vessels/sensor.html#method:SENSOR:TOGGLE"
    }
  },
  init: function() {
    this.setHelpUrl("http://ksp-kos.github.io/KOS_DOC/structures/vessels/sensor.html");
    this.setColour(120);

    this.setOutput(true, "Any");
    this.appendValueInput("PARENT")
        .setCheck("sensor")
        .appendField("Get Sensor Property")
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
