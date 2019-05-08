/**
 * @fileoverview blocks for The Editor. This file is based on the docs at http://ksp-kos.github.io/KOS_DOC/structures/vessels/resource.html
 * @author kos-edit@eforen.tv (Ariel Lothlorien)
 */


Blockly.Blocks.flow.HUE = 300;

Blockly.Blocks['Resource_properties'] = {
  dropdowns: [["Name", "NAME"],["Amount", "AMOUNT"],["Capacity", "CAPACITY"],["Toggleable", "TOGGLEABLE"],["Enabled", "ENABLED"]],


  DataMap: {
    NAME:{
      output: "string",
      parameter: null,
      tooltip: "The name of the resource\, i.e. LIQUIDFUEL\, ELECTRICCHARGE\, MONOPROP.",
      help: "http://ksp-kos.github.io/KOS_DOC/structures/vessels/resource.html#attribute:RESOURCE:NAME"
    },
    AMOUNT:{
      output: ["Number", "scalar"],
      parameter: null,
      tooltip: "The value of how much resource is left.",
      help: "http://ksp-kos.github.io/KOS_DOC/structures/vessels/resource.html#attribute:RESOURCE:AMOUNT"
    },
    CAPACITY:{
      output: ["Number", "scalar"],
      parameter: null,
      tooltip: "What AMOUNT would be if the resource was filled to the top.",
      help: "http://ksp-kos.github.io/KOS_DOC/structures/vessels/resource.html#attribute:RESOURCE:CAPACITY"
    },
    TOGGLEABLE:{
      output: "boolean",
      parameter: null,
      tooltip: "Many\, but not all\, resources can be turned on and off\, this removes them from the fuel flow.",
      help: "http://ksp-kos.github.io/KOS_DOC/structures/vessels/resource.html#attribute:RESOURCE:TOGGLEABLE"
    },
    ENABLED:{
      output: "boolean",
      parameter: null,
      tooltip: "If the resource is TOGGLEABLE\, setting this to false will prevent the resource from being taken out normally.",
      help: "http://ksp-kos.github.io/KOS_DOC/structures/vessels/resource.html#attribute:RESOURCE:ENABLED"
    },
    ENABLED:{
      output: "boolean",
      parameter: null,
      tooltip: "If the resource is TOGGLEABLE\, setting this to false will prevent the resource from being taken out normally.",
      help: "http://ksp-kos.github.io/KOS_DOC/structures/vessels/resource.html#attribute:RESOURCE:ENABLED"
    }
  },
  init: function() {
    this.setHelpUrl("http://ksp-kos.github.io/KOS_DOC/structures/vessels/resource.html");
    this.setColour(120);

    this.setOutput(true, "Any");
    this.appendValueInput("PARENT")
        .setCheck("resource")
        .appendField("Get Resource Property")
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
