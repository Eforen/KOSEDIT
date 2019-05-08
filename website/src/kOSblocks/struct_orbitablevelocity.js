/**
 * @fileoverview blocks for The Editor. This file is based on the docs at http://ksp-kos.github.io/KOS_DOC/structures/orbits/orbitablevelocity.html
 * @author kos-edit@eforen.tv (Ariel Lothlorien)
 */


Blockly.Blocks.flow.HUE = 300;

Blockly.Blocks['OrbitableVelocity_properties'] = {
  dropdowns: [["Orbit", "ORBIT"],["Surface", "SURFACE"]],


  DataMap: {
    ORBIT:{
      output: "vector",
      parameter: null,
      tooltip: "Returns the orbital velocity.",
      help: "http://ksp-kos.github.io/KOS_DOC/structures/orbits/orbitablevelocity.html#attribute:ORBITABLEVELOCITY:ORBIT"
    },
    SURFACE:{
      output: "vector",
      parameter: null,
      tooltip: "Returns the surface-frame velocity. Note that this is the surface velocity relative to the surface of the SOI body\, not the orbiting object itself. \(i.e. Mun\:VELOCITY\:SURFACE returns the Muns velocity relative to the surface of its SOI body\, Kerbin\).",
      help: "http://ksp-kos.github.io/KOS_DOC/structures/orbits/orbitablevelocity.html#attribute:ORBITABLEVELOCITY:SURFACE"
    },
    SURFACE:{
      output: "vector",
      parameter: null,
      tooltip: "Returns the surface-frame velocity. Note that this is the surface velocity relative to the surface of the SOI body\, not the orbiting object itself. \(i.e. Mun\:VELOCITY\:SURFACE returns the Muns velocity relative to the surface of its SOI body\, Kerbin\).",
      help: "http://ksp-kos.github.io/KOS_DOC/structures/orbits/orbitablevelocity.html#attribute:ORBITABLEVELOCITY:SURFACE"
    }
  },
  init: function() {
    this.setHelpUrl("http://ksp-kos.github.io/KOS_DOC/structures/orbits/orbitablevelocity.html");
    this.setColour(120);

    this.setOutput(true, "Any");
    this.appendValueInput("PARENT")
        .setCheck("orbitablevelocity")
        .appendField("Get OrbitableVelocity Property")
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
