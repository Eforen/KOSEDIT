/**
 * @fileoverview blocks for The Editor. This file is based on the docs at http://ksp-kos.github.io/KOS_DOC/structures/vessels/node.html
 * @author kos-edit@eforen.tv (Ariel Lothlorien)
 */


Blockly.Blocks.flow.HUE = 300;

Blockly.Blocks['ManeuverNode_properties'] = {
  dropdowns: [["Deltav", "DELTAV"],["Burnvector", "BURNVECTOR"],["Eta", "ETA"],["Prograde", "PROGRADE"],["Radialout", "RADIALOUT"],["Normal", "NORMAL"],["Orbit", "ORBIT"]],


  DataMap: {
    DELTAV:{
      output: "vector ",
      parameter: null,
      tooltip: "The vector giving the total burn of the node. The vector can be used to steer with\, and its magnitude is the delta V of the burn.",
      help: "http://ksp-kos.github.io/KOS_DOC/structures/vessels/node.html#attribute:MANEUVERNODE:DELTAV"
    },
    BURNVECTOR:{
      output: "vector ",
      parameter: null,
      tooltip: "Alias for ManeuverNode\:DELTAV.",
      help: "http://ksp-kos.github.io/KOS_DOC/structures/vessels/node.html#attribute:MANEUVERNODE:BURNVECTOR"
    },
    ETA:{
      output: ["Number", "scalar "],
      parameter: null,
      tooltip: "The number of seconds until the expected burn time. If you SET this\, it will actually move the maneuver node along the path in the map view\, identically to grabbing the maneuver node and dragging it.",
      help: "http://ksp-kos.github.io/KOS_DOC/structures/vessels/node.html#attribute:MANEUVERNODE:ETA"
    },
    PROGRADE:{
      output: ["Number", "scalar "],
      parameter: null,
      tooltip: "The delta V in \(meters\/s\) along just the prograde direction \(the yellow and green knobs of the maneuver node\). A positive value is a prograde burn and a negative value is a retrograde burn.",
      help: "http://ksp-kos.github.io/KOS_DOC/structures/vessels/node.html#attribute:MANEUVERNODE:PROGRADE"
    },
    RADIALOUT:{
      output: ["Number", "scalar "],
      parameter: null,
      tooltip: "The delta V in \(meters\/s\) along just the radial direction \(the cyan knobs of the maneuver node\). A positive value is a radial out burn and a negative value is a radial in burn.",
      help: "http://ksp-kos.github.io/KOS_DOC/structures/vessels/node.html#attribute:MANEUVERNODE:RADIALOUT"
    },
    NORMAL:{
      output: ["Number", "scalar "],
      parameter: null,
      tooltip: "The delta V in \(meters\/s\) along just the normal direction \(the purple knobs of the maneuver node\). A positive value is a normal burn and a negative value is an anti-normal burn.",
      help: "http://ksp-kos.github.io/KOS_DOC/structures/vessels/node.html#attribute:MANEUVERNODE:NORMAL"
    },
    ORBIT:{
      output: "orbit",
      parameter: null,
      tooltip: "The new orbit patch that will begin starting with the burn of this node\, under the assumption that the burn will occur exactly as planned.",
      help: "http://ksp-kos.github.io/KOS_DOC/structures/vessels/node.html#attribute:MANEUVERNODE:ORBIT"
    },
    ORBIT:{
      output: "orbit",
      parameter: null,
      tooltip: "The new orbit patch that will begin starting with the burn of this node\, under the assumption that the burn will occur exactly as planned.",
      help: "http://ksp-kos.github.io/KOS_DOC/structures/vessels/node.html#attribute:MANEUVERNODE:ORBIT"
    }
  },
  init: function() {
    this.setHelpUrl("http://ksp-kos.github.io/KOS_DOC/structures/vessels/node.html");
    this.setColour(120);

    this.setOutput(true, "Any");
    this.appendValueInput("PARENT")
        .setCheck("maneuvernode")
        .appendField("Get ManeuverNode Property")
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
