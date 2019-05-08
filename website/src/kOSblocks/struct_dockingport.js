/**
 * @fileoverview blocks for The Editor. This file is based on the docs at http://ksp-kos.github.io/KOS_DOC/structures/vessels/dockingport.html
 * @author kos-edit@eforen.tv (Ariel Lothlorien)
 */


Blockly.Blocks.flow.HUE = 300;

Blockly.Blocks['DockingPort_properties'] = {
  dropdowns: [["Part", "Part"],["Aquirerange", "AQUIRERANGE"],["Aquireforce", "AQUIREFORCE"],["Aquiretorque", "AQUIRETORQUE"],["Reengageddistance", "REENGAGEDDISTANCE"],["Dockedshipname", "DOCKEDSHIPNAME"],["Portfacing", "PORTFACING"],["State", "STATE"],["Undock", "UNDOCK"],["Targetable", "TARGETABLE"]],


  DataMap: {
    Part:{
      output: "",
      parameter: null,
      tooltip: "No tool tip available",
      help: "http://ksp-kos.github.io/KOS_DOC/structures/vessels/dockingport.htmlpart.html#structure:PART"
    },
    AQUIRERANGE:{
      output: ["Number", "scalar"],
      parameter: null,
      tooltip: "gets the range at which the port will notice another port and pull on it.",
      help: "http://ksp-kos.github.io/KOS_DOC/structures/vessels/dockingport.html#attribute:DOCKINGPORT:AQUIRERANGE"
    },
    AQUIREFORCE:{
      output: ["Number", "scalar"],
      parameter: null,
      tooltip: "gets the force with which the port pulls on another port.",
      help: "http://ksp-kos.github.io/KOS_DOC/structures/vessels/dockingport.html#attribute:DOCKINGPORT:AQUIREFORCE"
    },
    AQUIRETORQUE:{
      output: ["Number", "scalar"],
      parameter: null,
      tooltip: "gets the rotational force with which the port pulls on another port.",
      help: "http://ksp-kos.github.io/KOS_DOC/structures/vessels/dockingport.html#attribute:DOCKINGPORT:AQUIRETORQUE"
    },
    REENGAGEDDISTANCE:{
      output: ["Number", "scalar"],
      parameter: null,
      tooltip: "how far the port has to get away after undocking in order to re-enable docking.",
      help: "http://ksp-kos.github.io/KOS_DOC/structures/vessels/dockingport.html#attribute:DOCKINGPORT:REENGAGEDDISTANCE"
    },
    DOCKEDSHIPNAME:{
      output: "string",
      parameter: null,
      tooltip: "name of vessel on the other side of the docking port.",
      help: "http://ksp-kos.github.io/KOS_DOC/structures/vessels/dockingport.html#attribute:DOCKINGPORT:DOCKEDSHIPNAME"
    },
    PORTFACING:{
      output: "direction",
      parameter: null,
      tooltip: "Gets the facing of this docking port which may differ from the facing of the part itself if the docking port is aimed out the side of the part\, as in the case of the inline shielded docking port.",
      help: "http://ksp-kos.github.io/KOS_DOC/structures/vessels/dockingport.html#attribute:DOCKINGPORT:PORTFACING"
    },
    STATE:{
      output: "string",
      parameter: null,
      tooltip: "One of the following string values\:",
      help: "http://ksp-kos.github.io/KOS_DOC/structures/vessels/dockingport.html#attribute:DOCKINGPORT:STATE"
    },
    UNDOCK:{
      output: "",
      parameter: null,
      tooltip: "Call this to cause the docking port to detach.",
      help: "http://ksp-kos.github.io/KOS_DOC/structures/vessels/dockingport.html#method:DOCKINGPORT:UNDOCK"
    },
    TARGETABLE:{
      output: "boolean",
      parameter: null,
      tooltip: "True if this part can be picked with SET TARGET TO.",
      help: "http://ksp-kos.github.io/KOS_DOC/structures/vessels/dockingport.html#attribute:DOCKINGPORT:TARGETABLE"
    },
    TARGETABLE:{
      output: "boolean",
      parameter: null,
      tooltip: "True if this part can be picked with SET TARGET TO.",
      help: "http://ksp-kos.github.io/KOS_DOC/structures/vessels/dockingport.html#attribute:DOCKINGPORT:TARGETABLE"
    }
  },
  init: function() {
    this.setHelpUrl("http://ksp-kos.github.io/KOS_DOC/structures/vessels/dockingport.html");
    this.setColour(120);

    this.setOutput(true, "Any");
    this.appendValueInput("PARENT")
        .setCheck("dockingport")
        .appendField("Get DockingPort Property")
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
