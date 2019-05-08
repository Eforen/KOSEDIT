/**
 * @fileoverview blocks for The Editor. This file is based on the docs at http://ksp-kos.github.io/KOS_DOC/structures/celestial_bodies/atmosphere.html
 * @author kos-edit@eforen.tv (Ariel Lothlorien)
 */


Blockly.Blocks.flow.HUE = 300;

Blockly.Blocks['Atmosphere_properties'] = {
  dropdowns: [["Body", "BODY"],["Exists", "EXISTS"],["Oxygen", "OXYGEN"],["Scale", "SCALE"],["Sealevelpressure", "SEALEVELPRESSURE"],["Height", "HEIGHT"]],


  DataMap: {
    BODY:{
      output: "string",
      parameter: null,
      tooltip: "The Body that this atmosphere is around - as a STRING NAME\, not a Body object.",
      help: "http://ksp-kos.github.io/KOS_DOC/structures/celestial_bodies/atmosphere.html#attribute:ATMOSPHERE:BODY"
    },
    EXISTS:{
      output: "bool",
      parameter: null,
      tooltip: "True if this atmosphere is real and not just a dummy placeholder.",
      help: "http://ksp-kos.github.io/KOS_DOC/structures/celestial_bodies/atmosphere.html#attribute:ATMOSPHERE:EXISTS"
    },
    OXYGEN:{
      output: "bool",
      parameter: null,
      tooltip: "True if the air has oxygen and could therefore be used by a jet engines intake.",
      help: "http://ksp-kos.github.io/KOS_DOC/structures/celestial_bodies/atmosphere.html#attribute:ATMOSPHERE:OXYGEN"
    },
    SCALE:{
      output: ["Number", "scalar"],
      parameter: null,
      tooltip: "A math constant plugged into a formula to find atmosphere density \(see below\).",
      help: "http://ksp-kos.github.io/KOS_DOC/structures/celestial_bodies/atmosphere.html#attribute:ATMOSPHERE:SCALE"
    },
    SEALEVELPRESSURE:{
      output: ["Number", "scalar "],
      parameter: null,
      tooltip: "Number of Atms at planets sea level 1.0 Atms \= same as Kerbin.",
      help: "http://ksp-kos.github.io/KOS_DOC/structures/celestial_bodies/atmosphere.html#attribute:ATMOSPHERE:SEALEVELPRESSURE"
    },
    HEIGHT:{
      output: ["Number", "scalar "],
      parameter: null,
      tooltip: "The altitude at which the atmosphere is officially advertised as ending. \(actual ending value differs\, see below\).",
      help: "http://ksp-kos.github.io/KOS_DOC/structures/celestial_bodies/atmosphere.html#attribute:ATMOSPHERE:HEIGHT"
    },
    HEIGHT:{
      output: ["Number", "scalar "],
      parameter: null,
      tooltip: "The altitude at which the atmosphere is officially advertised as ending. \(actual ending value differs\, see below\).",
      help: "http://ksp-kos.github.io/KOS_DOC/structures/celestial_bodies/atmosphere.html#attribute:ATMOSPHERE:HEIGHT"
    }
  },
  init: function() {
    this.setHelpUrl("http://ksp-kos.github.io/KOS_DOC/structures/celestial_bodies/atmosphere.html");
    this.setColour(120);

    this.setOutput(true, "Any");
    this.appendValueInput("PARENT")
        .setCheck("atmosphere")
        .appendField("Get Atmosphere Property")
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
