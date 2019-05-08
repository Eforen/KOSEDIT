/**
 * @fileoverview blocks for The Editor. This file is based on the docs at http://ksp-kos.github.io/KOS_DOC/structures/misc/vecdraw.html
 * @author kos-edit@eforen.tv (Ariel Lothlorien)
 */


Blockly.Blocks.flow.HUE = 300;

Blockly.Blocks['VecDraw_properties'] = {
  dropdowns: [["Start", "START"],["Vec", "VEC"],["Color", "COLOR"],["Colour", "COLOUR"],["Label", "LABEL"],["Scale", "SCALE"],["Show", "SHOW"]],


  DataMap: {
    START:{
      output: "vector",
      parameter: null,
      tooltip: "Optional\, defaults to V\(0\,0\,0\) - position of the tail of the vector to draw in SHIP-RAW coords. V\(0\,0\,0\) means the ship Center of Mass.",
      help: "http://ksp-kos.github.io/KOS_DOC/structures/misc/vecdraw.html#attribute:VECDRAW:START"
    },
    VEC:{
      output: "vector",
      parameter: null,
      tooltip: "Mandatory - The vector to draw\, SHIP-RAW Coords.",
      help: "http://ksp-kos.github.io/KOS_DOC/structures/misc/vecdraw.html#attribute:VECDRAW:VEC"
    },
    COLOR:{
      output: "color",
      parameter: null,
      tooltip: "Optional\, defaults to white. This is the color to draw the vector. There is a hard-coded fade effect where the tail is a bit more transparent than the head.",
      help: "http://ksp-kos.github.io/KOS_DOC/structures/misc/vecdraw.html#attribute:VECDRAW:COLOR"
    },
    COLOUR:{
      output: "",
      parameter: null,
      tooltip: "Alias for VecDraw\:COLOR",
      help: "http://ksp-kos.github.io/KOS_DOC/structures/misc/vecdraw.html#attribute:VECDRAW:COLOUR"
    },
    LABEL:{
      output: "string",
      parameter: null,
      tooltip: "Optional\, defaults to . Text to show on-screen at the midpoint of the vector.",
      help: "http://ksp-kos.github.io/KOS_DOC/structures/misc/vecdraw.html#attribute:VECDRAW:LABEL"
    },
    SCALE:{
      output: "integer",
      parameter: null,
      tooltip: "Optional\, defauls to 1. Scalar to multiply by both the START and the VEC",
      help: "http://ksp-kos.github.io/KOS_DOC/structures/misc/vecdraw.html#attribute:VECDRAW:SCALE"
    },
    SHOW:{
      output: "boolean",
      parameter: null,
      tooltip: "Set to true to make the arrow appear\, false to hide it. Defaults to false until youre ready to set it to true.",
      help: "http://ksp-kos.github.io/KOS_DOC/structures/misc/vecdraw.html#attribute:VECDRAW:SHOW"
    },
    SHOW:{
      output: "boolean",
      parameter: null,
      tooltip: "Set to true to make the arrow appear\, false to hide it. Defaults to false until youre ready to set it to true.",
      help: "http://ksp-kos.github.io/KOS_DOC/structures/misc/vecdraw.html#attribute:VECDRAW:SHOW"
    }
  },
  init: function() {
    this.setHelpUrl("http://ksp-kos.github.io/KOS_DOC/structures/misc/vecdraw.html");
    this.setColour(120);

    this.setOutput(true, "Any");
    this.appendValueInput("PARENT")
        .setCheck("vecdraw")
        .appendField("Get VecDraw Property")
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
