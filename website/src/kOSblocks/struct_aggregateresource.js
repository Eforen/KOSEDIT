/**
 * @fileoverview blocks for The Editor. This file is based on the docs at http://ksp-kos.github.io/KOS_DOC/structures/vessels/aggregateresource.html
 * @author kos-edit@eforen.tv (Ariel Lothlorien)
 */


Blockly.Blocks.flow.HUE = 300;

Blockly.Blocks['AggregateResource_properties'] = {
  dropdowns: [["Name", "NAME"],["Amount", "AMOUNT"],["Capacity", "CAPACITY"],["Parts", "PARTS"]],


  DataMap: {
    NAME:{
      output: "string",
      parameter: null,
      tooltip: "The name of the resource\, i.e. LIQUIDFUEL\, ELECTRICCHARGE\, MONOPROP.",
      help: "http://ksp-kos.github.io/KOS_DOC/structures/vessels/aggregateresource.html#attribute:AGGREGATERESOURCE:NAME"
    },
    AMOUNT:{
      output: ["Number", "scalar"],
      parameter: null,
      tooltip: "The value of how much resource is left.",
      help: "http://ksp-kos.github.io/KOS_DOC/structures/vessels/aggregateresource.html#attribute:AGGREGATERESOURCE:AMOUNT"
    },
    CAPACITY:{
      output: ["Number", "scalar"],
      parameter: null,
      tooltip: "What AMOUNT would be if the resource was filled to the top.",
      help: "http://ksp-kos.github.io/KOS_DOC/structures/vessels/aggregateresource.html#attribute:AGGREGATERESOURCE:CAPACITY"
    },
    PARTS:{
      output: "list",
      parameter: null,
      tooltip: "Because this is a summation of the resources from many parts. kOS gives you the list of all parts that do or could contain the resource.",
      help: "http://ksp-kos.github.io/KOS_DOC/structures/vessels/aggregateresource.html#attribute:AGGREGATERESOURCE:PARTS"
    },
    PARTS:{
      output: "list",
      parameter: null,
      tooltip: "Because this is a summation of the resources from many parts. kOS gives you the list of all parts that do or could contain the resource.",
      help: "http://ksp-kos.github.io/KOS_DOC/structures/vessels/aggregateresource.html#attribute:AGGREGATERESOURCE:PARTS"
    }
  },
  init: function() {
    this.setHelpUrl("http://ksp-kos.github.io/KOS_DOC/structures/vessels/aggregateresource.html");
    this.setColour(120);

    this.setOutput(true, "Any");
    this.appendValueInput("PARENT")
        .setCheck("aggregateresource")
        .appendField("Get AggregateResource Property")
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
