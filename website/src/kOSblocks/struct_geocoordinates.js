/**
 * @fileoverview blocks for The Editor. This file is based on the docs at http://ksp-kos.github.io/KOS_DOC/math/geocoordinates.html
 * @author kos-edit@eforen.tv (Ariel Lothlorien)
 */


Blockly.Blocks.flow.HUE = 300;

Blockly.Blocks['GeoCoordinates_properties'] = {
  dropdowns: [["Lat", "LAT"],["Lng", "LNG"],["Distance", "DISTANCE"],["Terrainheight", "TERRAINHEIGHT"],["Heading", "HEADING"],["Bearing", "BEARING"],["Position", "POSITION"],["Altitudeposition", "ALTITUDEPOSITION"]],


  DataMap: {
    LAT:{
      output: ["Number", "scalar "],
      parameter: null,
      tooltip: "The latitude of this position on the surface.",
      help: "http://ksp-kos.github.io/KOS_DOC/math/geocoordinates.html#attribute:GEOCOORDINATES:LAT"
    },
    LNG:{
      output: ["Number", "scalar "],
      parameter: null,
      tooltip: "The longitude of this position on the surface.",
      help: "http://ksp-kos.github.io/KOS_DOC/math/geocoordinates.html#attribute:GEOCOORDINATES:LNG"
    },
    DISTANCE:{
      output: ["Number", "scalar "],
      parameter: null,
      tooltip: "Distance from the CPU\_Vessel to this point on the surface.",
      help: "http://ksp-kos.github.io/KOS_DOC/math/geocoordinates.html#attribute:GEOCOORDINATES:DISTANCE"
    },
    TERRAINHEIGHT:{
      output: ["Number", "scalar "],
      parameter: null,
      tooltip: "Distance of the terrain above sea level at this geographical position. Negative numbers are below sea level.",
      help: "http://ksp-kos.github.io/KOS_DOC/math/geocoordinates.html#attribute:GEOCOORDINATES:TERRAINHEIGHT"
    },
    HEADING:{
      output: ["Number", "scalar "],
      parameter: null,
      tooltip: "The absolute compass direction from the CPU\_Vessel to this point on the surface.",
      help: "http://ksp-kos.github.io/KOS_DOC/math/geocoordinates.html#attribute:GEOCOORDINATES:HEADING"
    },
    BEARING:{
      output: ["Number", "scalar "],
      parameter: null,
      tooltip: "The relative compass direction from the CPU\_Vessel to this point on the surface. For example\, if the vessel is heading at compass heading 45\, and the geo-coordinates location is at heading 30\, then GeoCoordinates\:BEARING will return -15.",
      help: "http://ksp-kos.github.io/KOS_DOC/math/geocoordinates.html#attribute:GEOCOORDINATES:BEARING"
    },
    POSITION:{
      output: "vector ",
      parameter: null,
      tooltip: "The ship-raw 3D position on the surface of the body\, relative to the current ships Center of mass.",
      help: "http://ksp-kos.github.io/KOS_DOC/math/geocoordinates.html#attribute:GEOCOORDINATES:POSITION"
    },
    ALTITUDEPOSITION:{
      output: "vector ",
      parameter: null,
      tooltip: "The ship-raw 3D position above or below the surface of the body\, relative to the current ships Center of mass.  You pass in an altitude number for the altitude above sea level of the desired location.",
      help: "http://ksp-kos.github.io/KOS_DOC/math/geocoordinates.html#attribute:GEOCOORDINATES:ALTITUDEPOSITION"
    },
    ALTITUDEPOSITION:{
      output: "vector ",
      parameter: null,
      tooltip: "The ship-raw 3D position above or below the surface of the body\, relative to the current ships Center of mass.  You pass in an altitude number for the altitude above sea level of the desired location.",
      help: "http://ksp-kos.github.io/KOS_DOC/math/geocoordinates.html#attribute:GEOCOORDINATES:ALTITUDEPOSITION"
    }
  },
  init: function() {
    this.setHelpUrl("http://ksp-kos.github.io/KOS_DOC/math/geocoordinates.html");
    this.setColour(120);

    this.setOutput(true, "Any");
    this.appendValueInput("PARENT")
        .setCheck("geocoordinates")
        .appendField("Get GeoCoordinates Property")
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
