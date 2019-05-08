/**
 * @fileoverview blocks for The Editor. This file is based on the docs at http://ksp-kos.github.io/KOS_DOC/structures/vessels/partmodule.html
 * @author kos-edit@eforen.tv (Ariel Lothlorien)
 */


Blockly.Blocks.flow.HUE = 300;

Blockly.Blocks['PartModule_properties'] = {
  dropdowns: [["Name", "NAME"],["Part", "PART"],["Allfields", "ALLFIELDS"],["Allevents", "ALLEVENTS"],["Allactions", "ALLACTIONS"],["Getfield(name)", "GETFIELD(name)"],["Setfield(name,value)", "SETFIELD(name,value)"],["Doevent(name)", "DOEVENT(name)"],["Doaction(name,bool)", "DOACTION(name,bool)"],["Hasfield(name)", "HASFIELD(name)"],["Hasevent(name)", "HASEVENT(name)"],["Hasaction(name)", "HASACTION(name)"]],


  DataMap: {
    NAME:{
      output: "string",
      parameter: null,
      tooltip: "Get the name of the module. Note that its the same as the name given in the MODULE section of the Part.cfg file for the part.",
      help: "http://ksp-kos.github.io/KOS_DOC/structures/vessels/partmodule.html#attribute:PARTMODULE:NAME"
    },
    PART:{
      output: "part",
      parameter: null,
      tooltip: "Get the Part that this PartModule is attached to.",
      help: "http://ksp-kos.github.io/KOS_DOC/structures/vessels/partmodule.html#attribute:PARTMODULE:PART"
    },
    ALLFIELDS:{
      output: "list of strings",
      parameter: null,
      tooltip: "Get a list of all the names of KSPFields on this PartModule that the kos script is CURRENTLY allowed to get or set with \:GETFIELD or \:SETFIELD. Note the Security access comments below. This list can become obsolete as the game continues running depending on what the PartModule chooses to do.",
      help: "http://ksp-kos.github.io/KOS_DOC/structures/vessels/partmodule.html#attribute:PARTMODULE:ALLFIELDS"
    },
    ALLEVENTS:{
      output: "list of strings",
      parameter: null,
      tooltip: "Get a list of all the names of KSPEvents on this PartModule that the kos script is CURRENTLY allowed to trigger with \:DOEVENT. Note the Security access comments below. This list can become obsolete as the game continues running depending on what the PartModule chooses to do.",
      help: "http://ksp-kos.github.io/KOS_DOC/structures/vessels/partmodule.html#attribute:PARTMODULE:ALLEVENTS"
    },
    ALLACTIONS:{
      output: "list of strings",
      parameter: null,
      tooltip: "Get a list of all the names of KSPActions on this PartModule that the kos script is CURRENTLY allowed to trigger with \:DOACTION. Note the Security access comments below.",
      help: "http://ksp-kos.github.io/KOS_DOC/structures/vessels/partmodule.html#attribute:PARTMODULE:ALLACTIONS"
    },
    GETFIELD:{
      output: "",
      parameter: null,
      tooltip: "Get the value of one of the fields that this PartModule has placed onto the rightclick menu for the part. Note the Security comments below.",
      help: "http://ksp-kos.github.io/KOS_DOC/structures/vessels/partmodule.html#method:PARTMODULE:GETFIELD"
    },
    SETFIELD:{
      output: "",
      parameter: null,
      tooltip: "Set the value of one of the fields that this PartModule has placed onto the rightclick menu for the part. Note the Security comments below.",
      help: "http://ksp-kos.github.io/KOS_DOC/structures/vessels/partmodule.html#method:PARTMODULE:SETFIELD"
    },
    DOEVENT:{
      output: "",
      parameter: null,
      tooltip: "Trigger an event button that is on the rightclick part menu at the moment. Note the Security comments below.",
      help: "http://ksp-kos.github.io/KOS_DOC/structures/vessels/partmodule.html#method:PARTMODULE:DOEVENT"
    },
    DOACTION:{
      output: "",
      parameter: null,
      tooltip: "Activate one of this PartModules action-group-able actions\, bypassing the action group system entirely by just activating it for this one part directly. The boolean value decides whether you are toggling the action ON or toggling it OFF. Note the Security comments below.",
      help: "http://ksp-kos.github.io/KOS_DOC/structures/vessels/partmodule.html#method:PARTMODULE:DOACTION"
    },
    HASFIELD:{
      output: "boolean",
      parameter: null,
      tooltip: "Return true if the given field name is currently available for use with \:GETFIELD or \:SETFIELD on this PartModule\, false otherwise.",
      help: "http://ksp-kos.github.io/KOS_DOC/structures/vessels/partmodule.html#method:PARTMODULE:HASFIELD"
    },
    HASEVENT:{
      output: "boolean",
      parameter: null,
      tooltip: "Return true if the given event name is currently available for use with \:DOEVENT on this PartModule\, false otherwise.",
      help: "http://ksp-kos.github.io/KOS_DOC/structures/vessels/partmodule.html#method:PARTMODULE:HASEVENT"
    },
    HASACTION:{
      output: "boolean",
      parameter: null,
      tooltip: "Return true if the given action name is currently available for use with \:DOACTION on this PartModule\, false otherwise.",
      help: "http://ksp-kos.github.io/KOS_DOC/structures/vessels/partmodule.html#method:PARTMODULE:HASACTION"
    },
    HASACTION:{
      output: "boolean",
      parameter: null,
      tooltip: "Return true if the given action name is currently available for use with \:DOACTION on this PartModule\, false otherwise.",
      help: "http://ksp-kos.github.io/KOS_DOC/structures/vessels/partmodule.html#method:PARTMODULE:HASACTION"
    }
  },
  init: function() {
    this.setHelpUrl("http://ksp-kos.github.io/KOS_DOC/structures/vessels/partmodule.html");
    this.setColour(120);

    this.setOutput(true, "Any");
    this.appendValueInput("PARENT")
        .setCheck("partmodule")
        .appendField("Get PartModule Property")
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
