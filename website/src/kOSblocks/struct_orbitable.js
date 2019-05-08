/**
 * @fileoverview blocks for The Editor. This file is based on the docs at http://ksp-kos.github.io/KOS_DOC/structures/orbits/orbitable.html
 * @author kos-edit@eforen.tv (Ariel Lothlorien)
 */


Blockly.Blocks.flow.HUE = 300;

Blockly.Blocks['Orbitable_properties'] = {
  dropdowns: [["Name", "NAME"],["Body", "BODY"],["Hasbody", "HASBODY"],["Hasorbit", "HASORBIT"],["Hasobt", "HASOBT"],["Obt", "OBT"],["Up", "UP"],["North", "NORTH"],["Prograde", "PROGRADE"],["Srfprograde", "SRFPROGRADE"],["Retrograde", "RETROGRADE"],["Srfretrograde", "SRFRETROGRADE"],["Position", "POSITION"],["Velocity", "VELOCITY"],["Distance", "DISTANCE"],["Direction", "DIRECTION"],["Latitude", "LATITUDE"],["Longitude", "LONGITUDE"],["Altitude", "ALTITUDE"],["Geoposition", "GEOPOSITION"],["Patches", "PATCHES"],["Obt", "OBT"],["Apoapsis", "APOAPSIS"],["Periapsis", "PERIAPSIS"]],


  DataMap: {
    NAME:{
      output: "string",
      parameter: null,
      tooltip: "Name of this vessel or body.",
      help: "http://ksp-kos.github.io/KOS_DOC/structures/orbits/orbitable.html#attribute:ORBITABLE:NAME"
    },
    BODY:{
      output: "body",
      parameter: null,
      tooltip: "The Body that this object is orbiting. I.e. Mun\:BODY returns Kerbin.",
      help: "http://ksp-kos.github.io/KOS_DOC/structures/orbits/orbitable.html#attribute:ORBITABLE:BODY"
    },
    HASBODY:{
      output: "boolean",
      parameter: null,
      tooltip: "True if this object has a body it orbits \(false only when this object is the Sun\, pretty much\).",
      help: "http://ksp-kos.github.io/KOS_DOC/structures/orbits/orbitable.html#attribute:ORBITABLE:HASBODY"
    },
    HASORBIT:{
      output: "boolean",
      parameter: null,
      tooltip: "Alias for HASBODY.",
      help: "http://ksp-kos.github.io/KOS_DOC/structures/orbits/orbitable.html#attribute:ORBITABLE:HASORBIT"
    },
    HASOBT:{
      output: "boolean",
      parameter: null,
      tooltip: "Alias for HASBODY.",
      help: "http://ksp-kos.github.io/KOS_DOC/structures/orbits/orbitable.html#attribute:ORBITABLE:HASOBT"
    },
    OBT:{
      output: "orbit",
      parameter: null,
      tooltip: "The current single orbit patch that this object is on \(not the future orbits it might be expected to achieve after maneuver nodes or encounter transitions\, but what the current orbit would be if nothing changed and no encounters perturbed the orbit.",
      help: "http://ksp-kos.github.io/KOS_DOC/structures/orbits/orbitable.html#attribute:ORBITABLE:OBT"
    },
    UP:{
      output: "direction",
      parameter: null,
      tooltip: "pointing straight up away from the SOI body.",
      help: "http://ksp-kos.github.io/KOS_DOC/structures/orbits/orbitable.html#attribute:ORBITABLE:UP"
    },
    NORTH:{
      output: "direction",
      parameter: null,
      tooltip: "pointing straight north on the SOI body\, parallel to the surface of the SOI body.",
      help: "http://ksp-kos.github.io/KOS_DOC/structures/orbits/orbitable.html#attribute:ORBITABLE:NORTH"
    },
    PROGRADE:{
      output: "direction",
      parameter: null,
      tooltip: "pointing in the direction of this objects orbitable-frame velocity",
      help: "http://ksp-kos.github.io/KOS_DOC/structures/orbits/orbitable.html#attribute:ORBITABLE:PROGRADE"
    },
    SRFPROGRADE:{
      output: "direction",
      parameter: null,
      tooltip: "pointing in the direction of this objects surface-frame velocity. Note that if this Orbitable is itself a body\, remember that this is relative to the surface of the SOI body\, not this body.",
      help: "http://ksp-kos.github.io/KOS_DOC/structures/orbits/orbitable.html#attribute:ORBITABLE:SRFPROGRADE"
    },
    RETROGRADE:{
      output: "direction",
      parameter: null,
      tooltip: "pointing in the opposite of the direction of this objects orbitable-frame velocity",
      help: "http://ksp-kos.github.io/KOS_DOC/structures/orbits/orbitable.html#attribute:ORBITABLE:RETROGRADE"
    },
    SRFRETROGRADE:{
      output: "direction",
      parameter: null,
      tooltip: "pointing in the opposite of the direction of this objects surface-frame velocity. Note that this is relative to the surface of the SOI body.",
      help: "http://ksp-kos.github.io/KOS_DOC/structures/orbits/orbitable.html#attribute:ORBITABLE:SRFRETROGRADE"
    },
    POSITION:{
      output: "vector",
      parameter: null,
      tooltip: "The position of this object in the SHIP-RAW reference frame",
      help: "http://ksp-kos.github.io/KOS_DOC/structures/orbits/orbitable.html#attribute:ORBITABLE:POSITION"
    },
    VELOCITY:{
      output: "orbitablevelocity",
      parameter: null,
      tooltip: "The orbitable velocity of this object in the SHIP-RAW reference frame",
      help: "http://ksp-kos.github.io/KOS_DOC/structures/orbits/orbitable.html#attribute:ORBITABLE:VELOCITY"
    },
    DISTANCE:{
      output: ["Number", "scalar "],
      parameter: null,
      tooltip: "The scalar distance between this object and the center of SHIP.",
      help: "http://ksp-kos.github.io/KOS_DOC/structures/orbits/orbitable.html#attribute:ORBITABLE:DISTANCE"
    },
    DIRECTION:{
      output: "direction",
      parameter: null,
      tooltip: "pointing in the direction of this object from SHIP.",
      help: "http://ksp-kos.github.io/KOS_DOC/structures/orbits/orbitable.html#attribute:ORBITABLE:DIRECTION"
    },
    LATITUDE:{
      output: ["Number", "scalar "],
      parameter: null,
      tooltip: "The latitude in degrees of the spot on the surface of the SOI body directly under this object.",
      help: "http://ksp-kos.github.io/KOS_DOC/structures/orbits/orbitable.html#attribute:ORBITABLE:LATITUDE"
    },
    LONGITUDE:{
      output: ["Number", "scalar "],
      parameter: null,
      tooltip: "The longitude in degrees of the spot on the surface of the SOI body directly under this object. Longitude returned will always be normalized to be in the range \[-180\,180\].",
      help: "http://ksp-kos.github.io/KOS_DOC/structures/orbits/orbitable.html#attribute:ORBITABLE:LONGITUDE"
    },
    ALTITUDE:{
      output: ["Number", "scalar "],
      parameter: null,
      tooltip: "The altitude in meters above the sea level surface of the SOI body \(not the center of the SOI body. To get the true radius of the orbit for proper math calculations remember to add altitude to the SOI bodys radius.\)",
      help: "http://ksp-kos.github.io/KOS_DOC/structures/orbits/orbitable.html#attribute:ORBITABLE:ALTITUDE"
    },
    GEOPOSITION:{
      output: "geocoordinates",
      parameter: null,
      tooltip: "A combined structure of the latitude and longitude numbers.",
      help: "http://ksp-kos.github.io/KOS_DOC/structures/orbits/orbitable.html#attribute:ORBITABLE:GEOPOSITION"
    },
    PATCHES:{
      output: "list of orbits",
      parameter: null,
      tooltip: "The list of all the orbit patches that this object will transition to\, not taking into account maneuver nodes. The zero-th patch of the list is the current orbit.",
      help: "http://ksp-kos.github.io/KOS_DOC/structures/orbits/orbitable.html#attribute:ORBITABLE:PATCHES"
    },
    APOAPSIS:{
      output: ["Number", "scalar "],
      parameter: null,
      tooltip: "No tool tip available",
      help: "http://ksp-kos.github.io/KOS_DOC/structures/orbits/orbitable.html#attribute:ORBITABLE:APOAPSIS"
    },
    PERIAPSIS:{
      output: ["Number", "scalar "],
      parameter: null,
      tooltip: "No tool tip available",
      help: "http://ksp-kos.github.io/KOS_DOC/structures/orbits/orbitable.html#attribute:ORBITABLE:PERIAPSIS"
    },
    PERIAPSIS:{
      output: ["Number", "scalar "],
      parameter: null,
      tooltip: "No tool tip available",
      help: "http://ksp-kos.github.io/KOS_DOC/structures/orbits/orbitable.html#attribute:ORBITABLE:PERIAPSIS"
    }
  },
  init: function() {
    this.setHelpUrl("http://ksp-kos.github.io/KOS_DOC/structures/orbits/orbitable.html");
    this.setColour(120);

    this.setOutput(true, "Any");
    this.appendValueInput("PARENT")
        .setCheck("orbitable")
        .appendField("Get Orbitable Property")
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
