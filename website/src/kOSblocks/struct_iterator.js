/**
 * @fileoverview blocks for The Editor. This file is based on the docs at http://ksp-kos.github.io/KOS_DOC/structures/misc/iterator.html
 * @author kos-edit@eforen.tv (Ariel Lothlorien)
 */


Blockly.Blocks.flow.HUE = 300;

Blockly.Blocks['Iterator_properties'] = {
  dropdowns: [["Reset", "RESET"],["Next", "NEXT"],["Atend", "ATEND"],["Index", "INDEX"],["Value", "VALUE"]],


  DataMap: {
    RESET:{
      output: "",
      parameter: null,
      tooltip: "Call this to rewind the iterator to just before the beginning of the list. After a call to Iterator\:RESET\, the iterator must be moved with Iterator\:NEXT before it gets to the first value in the list.",
      help: "http://ksp-kos.github.io/KOS_DOC/structures/misc/iterator.html#method:ITERATOR:RESET"
    },
    NEXT:{
      output: "boolean",
      parameter: null,
      tooltip: "Call this to move the iterator to the next item in the list. Returns true if there is such an item\, or false if no such item exists because its already at the end of the list.",
      help: "http://ksp-kos.github.io/KOS_DOC/structures/misc/iterator.html#method:ITERATOR:NEXT"
    },
    ATEND:{
      output: "boolean",
      parameter: null,
      tooltip: "Returns true if the iterator is at the end of the list and therefore cannot be NEXTed\, false otherwise.",
      help: "http://ksp-kos.github.io/KOS_DOC/structures/misc/iterator.html#attribute:ITERATOR:ATEND"
    },
    INDEX:{
      output: "integer",
      parameter: null,
      tooltip: "Returns the numerical index of how far you are into the list\, starting the counting at 0 for the first item in the list. The last item in the list is numbered N-1\, where N is the number of items in the list.",
      help: "http://ksp-kos.github.io/KOS_DOC/structures/misc/iterator.html#attribute:ITERATOR:INDEX"
    },
    VALUE:{
      output: "varies",
      parameter: null,
      tooltip: "Returns the thing stored at the current position in the list.",
      help: "http://ksp-kos.github.io/KOS_DOC/structures/misc/iterator.html#attribute:ITERATOR:VALUE"
    },
    VALUE:{
      output: "varies",
      parameter: null,
      tooltip: "Returns the thing stored at the current position in the list.",
      help: "http://ksp-kos.github.io/KOS_DOC/structures/misc/iterator.html#attribute:ITERATOR:VALUE"
    }
  },
  init: function() {
    this.setHelpUrl("http://ksp-kos.github.io/KOS_DOC/structures/misc/iterator.html");
    this.setColour(120);

    this.setOutput(true, "Any");
    this.appendValueInput("PARENT")
        .setCheck("iterator")
        .appendField("Get Iterator Property")
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
