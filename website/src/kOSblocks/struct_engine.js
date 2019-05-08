/**
 * @fileoverview blocks for The Editor. This file is based on the docs at http://ksp-kos.github.io/KOS_DOC/structures/vessels/engine.html
 * @author kos-edit@eforen.tv (Ariel Lothlorien)
 */


Blockly.Blocks.flow.HUE = 300;

Blockly.Blocks['Engine_properties'] = {
  dropdowns: [["Part", "Part"],["Activate", "ACTIVATE"],["Shutdown", "SHUTDOWN"],["Thrustlimit", "THRUSTLIMIT"],["Maxthrust", "MAXTHRUST"],["Thrust", "THRUST"],["Fuelflow", "FUELFLOW"],["Isp", "ISP"],["Flameout", "FLAMEOUT"],["Ignition", "IGNITION"],["Allowrestart", "ALLOWRESTART"],["Allowshutdown", "ALLOWSHUTDOWN"],["Throttlelock", "THROTTLELOCK"]],


  DataMap: {
    Part:{
      output: "",
      parameter: null,
      tooltip: "No tool tip available",
      help: "http://ksp-kos.github.io/KOS_DOC/structures/vessels/engine.htmlpart.html#structure:PART"
    },
    ACTIVATE:{
      output: "",
      parameter: null,
      tooltip: "Call to make the engine turn on.",
      help: "http://ksp-kos.github.io/KOS_DOC/structures/vessels/engine.html#method:ENGINE:ACTIVATE"
    },
    SHUTDOWN:{
      output: "",
      parameter: null,
      tooltip: "Call to make the engine turn off.",
      help: "http://ksp-kos.github.io/KOS_DOC/structures/vessels/engine.html#method:ENGINE:SHUTDOWN"
    },
    THRUSTLIMIT:{
      output: ["Number", "scalar "],
      parameter: null,
      tooltip: "If this an engine with a thrust limiter \(tweakable\) enabled\, what percentage is it limited to\?",
      help: "http://ksp-kos.github.io/KOS_DOC/structures/vessels/engine.html#attribute:ENGINE:THRUSTLIMIT"
    },
    MAXTHRUST:{
      output: ["Number", "scalar "],
      parameter: null,
      tooltip: "How much thrust would this engine give if the throttle was max and conditions were ideal.",
      help: "http://ksp-kos.github.io/KOS_DOC/structures/vessels/engine.html#attribute:ENGINE:MAXTHRUST"
    },
    THRUST:{
      output: ["Number", "scalar "],
      parameter: null,
      tooltip: "How much thrust is this engine giving at this very moment.",
      help: "http://ksp-kos.github.io/KOS_DOC/structures/vessels/engine.html#attribute:ENGINE:THRUST"
    },
    FUELFLOW:{
      output: ["Number", "scalar "],
      parameter: null,
      tooltip: "Rate at which fuel is being burned. Not sure what the units are.",
      help: "http://ksp-kos.github.io/KOS_DOC/structures/vessels/engine.html#attribute:ENGINE:FUELFLOW"
    },
    ISP:{
      output: ["Number", "scalar"],
      parameter: null,
      tooltip: "Specific impulse",
      help: "http://ksp-kos.github.io/KOS_DOC/structures/vessels/engine.html#attribute:ENGINE:ISP"
    },
    FLAMEOUT:{
      output: "boolean",
      parameter: null,
      tooltip: "Is this engine failed because it is starved of a resource \(liquidfuel\, oxidizer\, oxygen\)\?",
      help: "http://ksp-kos.github.io/KOS_DOC/structures/vessels/engine.html#attribute:ENGINE:FLAMEOUT"
    },
    IGNITION:{
      output: "boolean",
      parameter: null,
      tooltip: "Has this engine been ignited\? If both Engine\:IGNITION and Engine\:FLAMEOUT are true\, that means the engine could start up again immediately if more resources were made available to it.",
      help: "http://ksp-kos.github.io/KOS_DOC/structures/vessels/engine.html#attribute:ENGINE:IGNITION"
    },
    ALLOWRESTART:{
      output: "boolean",
      parameter: null,
      tooltip: "Is this an engine that can be started again\? Usually True\, but false for solid boosters.",
      help: "http://ksp-kos.github.io/KOS_DOC/structures/vessels/engine.html#attribute:ENGINE:ALLOWRESTART"
    },
    ALLOWSHUTDOWN:{
      output: "boolean",
      parameter: null,
      tooltip: "Is this an engine that can be shut off once started\? Usually True\, but false for solid boosters.",
      help: "http://ksp-kos.github.io/KOS_DOC/structures/vessels/engine.html#attribute:ENGINE:ALLOWSHUTDOWN"
    },
    THROTTLELOCK:{
      output: "boolean",
      parameter: null,
      tooltip: "Is this an engine that is stuck at a fixed throttle\? \(i.e. solid boosters\)",
      help: "http://ksp-kos.github.io/KOS_DOC/structures/vessels/engine.html#attribute:ENGINE:THROTTLELOCK"
    },
    THROTTLELOCK:{
      output: "boolean",
      parameter: null,
      tooltip: "Is this an engine that is stuck at a fixed throttle\? \(i.e. solid boosters\)",
      help: "http://ksp-kos.github.io/KOS_DOC/structures/vessels/engine.html#attribute:ENGINE:THROTTLELOCK"
    }
  },
  init: function() {
    this.setHelpUrl("http://ksp-kos.github.io/KOS_DOC/structures/vessels/engine.html");
    this.setColour(120);

    this.setOutput(true, "Any");
    this.appendValueInput("PARENT")
        .setCheck("engine")
        .appendField("Get Engine Property")
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
