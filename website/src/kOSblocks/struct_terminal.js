/**
 * @fileoverview blocks for The Editor. This file is based on the docs at http://ksp-kos.github.io/KOS_DOC/structures/misc/terminal.html
 * @author kos-edit@eforen.tv (Ariel Lothlorien)
 */


Blockly.Blocks.flow.HUE = 300;

Blockly.Blocks['Terminal_properties'] = {
  dropdowns: [["Width", "WIDTH"],["Height", "HEIGHT"]],


  DataMap: {
    WIDTH:{
      output: "integer",
      parameter: null,
      tooltip: "If you read the width it will return a number of character cells wide the terminal\
is.  If you set this value\, it will cause the terminal to resize.\
If theres multiple terminals connected to the same CPU part via telnet clients\,\
then kOS will attempt to keep them all the same size\, and one terminal being resized\
will resize them all.  \(caveat\: Some terminal types cannot be resized from the\
server side\, and therefore this doesnt always work in both directions\).",
      help: "http://ksp-kos.github.io/KOS_DOC/structures/misc/terminal.html#attribute:TERMINAL:WIDTH"
    },
    HEIGHT:{
      output: "integer",
      parameter: null,
      tooltip: "If you read the width it will return a number of character cells tall the terminal\
is.  If you set this value\, it will cause the terminal to resize.\
If theres multiple terminals connected to the same CPU part via telnet clients\,\
then kOS will attempt to keep them all the same size\, and one terminal being resized\
will resize them all.  \(caveat\: Some terminal types cannot be resized from the\
server side\, and therefore this doesnt always work in both directions\).",
      help: "http://ksp-kos.github.io/KOS_DOC/structures/misc/terminal.html#attribute:TERMINAL:HEIGHT"
    },
    HEIGHT:{
      output: "integer",
      parameter: null,
      tooltip: "If you read the width it will return a number of character cells tall the terminal\
is.  If you set this value\, it will cause the terminal to resize.\
If theres multiple terminals connected to the same CPU part via telnet clients\,\
then kOS will attempt to keep them all the same size\, and one terminal being resized\
will resize them all.  \(caveat\: Some terminal types cannot be resized from the\
server side\, and therefore this doesnt always work in both directions\).",
      help: "http://ksp-kos.github.io/KOS_DOC/structures/misc/terminal.html#attribute:TERMINAL:HEIGHT"
    }
  },
  init: function() {
    this.setHelpUrl("http://ksp-kos.github.io/KOS_DOC/structures/misc/terminal.html");
    this.setColour(120);

    this.setOutput(true, "Any");
    this.appendValueInput("PARENT")
        .setCheck("terminal")
        .appendField("Get Terminal Property")
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
