/**
 * @fileoverview blocks for The Editor. This file is based on the docs at http://ksp-kos.github.io/KOS_DOC/structures/waypoint.html
 * @author kos-edit@eforen.tv (Ariel Lothlorien)
 */


Blockly.Blocks.flow.HUE = 300;

Blockly.Blocks['Waypoint_properties'] = {
  dropdowns: [["Name", "NAME"],["Body", "BODY"],["Geoposition", "GEOPOSITION"],["Position", "POSITION"],["Altitude", "ALTITUDE"],["Agl", "AGL"],["Nearsurface", "NEARSURFACE"],["Grounded", "GROUNDED"],["Index", "INDEX"],["Clustered", "CLUSTERED"]],


  DataMap: {
    NAME:{
      output: "string",
      parameter: null,
      tooltip: "Name of waypoint as it appears on the map and contract",
      help: "http://ksp-kos.github.io/KOS_DOC/structures/waypoint.html#attribute:WAYPOINT:NAME"
    },
    BODY:{
      output: "bodytarget",
      parameter: null,
      tooltip: "Celestial body the waypoint is attached to",
      help: "http://ksp-kos.github.io/KOS_DOC/structures/waypoint.html#attribute:WAYPOINT:BODY"
    },
    GEOPOSITION:{
      output: "geocoordinates",
      parameter: null,
      tooltip: "The LATLNG of this waypoint",
      help: "http://ksp-kos.github.io/KOS_DOC/structures/waypoint.html#attribute:WAYPOINT:GEOPOSITION"
    },
    POSITION:{
      output: "vector",
      parameter: null,
      tooltip: "The Vector position of this waypoint in 3D space\, in ship-raw coords.",
      help: "http://ksp-kos.github.io/KOS_DOC/structures/waypoint.html#attribute:WAYPOINT:POSITION"
    },
    ALTITUDE:{
      output: ["Number", "scalar"],
      parameter: null,
      tooltip: "Altitude of waypoint above sea level.  Warning\, this a point somewhere in the midst of the contract altitude range\, not the edge of the altitude range.  It corresponds towhere the marker tip hovers on the map\, which is not actually at the very edge of the contract conditions range.  It represents a typical midling location inside the contracts altitude range.",
      help: "http://ksp-kos.github.io/KOS_DOC/structures/waypoint.html#attribute:WAYPOINT:ALTITUDE"
    },
    AGL:{
      output: ["Number", "scalar"],
      parameter: null,
      tooltip: "Altitude of waypoint above ground.  Warning\, this a point somewhere in the midst of the contract altitude range\, not the edge of the altitude range.  It corresponds to where the marker tip hovers on the map\, which is not actually at the very edge of the contract conditions range.  It represents a typical midling location inside the contracts altitude range.",
      help: "http://ksp-kos.github.io/KOS_DOC/structures/waypoint.html#attribute:WAYPOINT:AGL"
    },
    NEARSURFACE:{
      output: "boolean",
      parameter: null,
      tooltip: "True if waypoint is a point near or on the body rather than high in orbit.",
      help: "http://ksp-kos.github.io/KOS_DOC/structures/waypoint.html#attribute:WAYPOINT:NEARSURFACE"
    },
    GROUNDED:{
      output: "boolean",
      parameter: null,
      tooltip: "True if waypoint is actually glued to the ground.",
      help: "http://ksp-kos.github.io/KOS_DOC/structures/waypoint.html#attribute:WAYPOINT:GROUNDED"
    },
    INDEX:{
      output: ["Number", "scalar"],
      parameter: null,
      tooltip: "The integer index of this waypoint amongst its cluster of sibling waypoints.  In other words\, when you have a cluster of waypoints called Somewhere Alpha\, Somewhere Beta\, and Somewhere Gamma\, then the alpha site has index 0\, the beta site has index 1 and the gamma site has index 2. When Waypoint\:CLUSTERED is false\, this value is zero but meaningless.",
      help: "http://ksp-kos.github.io/KOS_DOC/structures/waypoint.html#attribute:WAYPOINT:INDEX"
    },
    CLUSTERED:{
      output: "boolean",
      parameter: null,
      tooltip: "True if this waypoint is part of a set of clustered waypoints with greek letter names appended \(Alpha\, Beta\, Gamma\, etc\).  If true\, there should be a one-to-one correspondence with the greek letter name and the \:INDEX suffix. \(0 \= Alpha\, 1 \= Beta\, 2 \= Gamma\, etc\).",
      help: "http://ksp-kos.github.io/KOS_DOC/structures/waypoint.html#attribute:WAYPOINT:CLUSTERED"
    },
    CLUSTERED:{
      output: "boolean",
      parameter: null,
      tooltip: "True if this waypoint is part of a set of clustered waypoints with greek letter names appended \(Alpha\, Beta\, Gamma\, etc\).  If true\, there should be a one-to-one correspondence with the greek letter name and the \:INDEX suffix. \(0 \= Alpha\, 1 \= Beta\, 2 \= Gamma\, etc\).",
      help: "http://ksp-kos.github.io/KOS_DOC/structures/waypoint.html#attribute:WAYPOINT:CLUSTERED"
    }
  },
  init: function() {
    this.setHelpUrl("http://ksp-kos.github.io/KOS_DOC/structures/waypoint.html");
    this.setColour(120);

    this.setOutput(true, "Any");
    this.appendValueInput("PARENT")
        .setCheck("waypoint")
        .appendField("Get Waypoint Property")
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
