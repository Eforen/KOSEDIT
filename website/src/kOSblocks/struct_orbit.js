/**
 * @fileoverview blocks for The Editor. This file is based on the docs at http://ksp-kos.github.io/KOS_DOC/structures/orbits/orbit.html
 * @author kos-edit@eforen.tv (Ariel Lothlorien)
 */


Blockly.Blocks.flow.HUE = 300;

Blockly.Blocks['Orbit_properties'] = {
  dropdowns: [["Name", "NAME"],["Apoapsis", "APOAPSIS"],["Periapsis", "PERIAPSIS"],["Body", "BODY"],["Period", "PERIOD"],["Inclination", "INCLINATION"],["Eccentricity", "ECCENTRICITY"],["Semimajoraxis", "SEMIMAJORAXIS"],["Semiminoraxis", "SEMIMINORAXIS"],["Lan", "LAN"],["Longitudeofascendingnode", "LONGITUDEOFASCENDINGNODE"],["Argumentofperiapsis", "ARGUMENTOFPERIAPSIS"],["Trueanomaly", "TRUEANOMALY"],["Meananomalyatepoch", "MEANANOMALYATEPOCH"],["Transition", "TRANSITION"],["Position", "POSITION"],["Velocity", "VELOCITY"],["Nextpatch", "NEXTPATCH"],["Hasnextpatch", "HASNEXTPATCH"]],


  DataMap: {
    NAME:{
      output: "string",
      parameter: null,
      tooltip: "a name for this orbit.",
      help: "http://ksp-kos.github.io/KOS_DOC/structures/orbits/orbit.html#attribute:ORBIT:NAME"
    },
    APOAPSIS:{
      output: ["Number", "scalar "],
      parameter: null,
      tooltip: "The max altitude expected to be reached.",
      help: "http://ksp-kos.github.io/KOS_DOC/structures/orbits/orbit.html#attribute:ORBIT:APOAPSIS"
    },
    PERIAPSIS:{
      output: ["Number", "scalar "],
      parameter: null,
      tooltip: "The min altitude expected to be reached.",
      help: "http://ksp-kos.github.io/KOS_DOC/structures/orbits/orbit.html#attribute:ORBIT:PERIAPSIS"
    },
    BODY:{
      output: "body",
      parameter: null,
      tooltip: "The celestial body this orbit is orbiting.",
      help: "http://ksp-kos.github.io/KOS_DOC/structures/orbits/orbit.html#attribute:ORBIT:BODY"
    },
    PERIOD:{
      output: ["Number", "scalar "],
      parameter: null,
      tooltip: "orbital period",
      help: "http://ksp-kos.github.io/KOS_DOC/structures/orbits/orbit.html#attribute:ORBIT:PERIOD"
    },
    INCLINATION:{
      output: ["Number", "scalar "],
      parameter: null,
      tooltip: "orbital inclination",
      help: "http://ksp-kos.github.io/KOS_DOC/structures/orbits/orbit.html#attribute:ORBIT:INCLINATION"
    },
    ECCENTRICITY:{
      output: ["Number", "scalar"],
      parameter: null,
      tooltip: "orbital eccentricity",
      help: "http://ksp-kos.github.io/KOS_DOC/structures/orbits/orbit.html#attribute:ORBIT:ECCENTRICITY"
    },
    SEMIMAJORAXIS:{
      output: ["Number", "scalar "],
      parameter: null,
      tooltip: "semi-major axis",
      help: "http://ksp-kos.github.io/KOS_DOC/structures/orbits/orbit.html#attribute:ORBIT:SEMIMAJORAXIS"
    },
    SEMIMINORAXIS:{
      output: ["Number", "scalar "],
      parameter: null,
      tooltip: "semi-minor axis",
      help: "http://ksp-kos.github.io/KOS_DOC/structures/orbits/orbit.html#attribute:ORBIT:SEMIMINORAXIS"
    },
    LAN:{
      output: ["Number", "scalar "],
      parameter: null,
      tooltip: "Same as Orbit\:LONGITUDEOFASCENDINGNODE.",
      help: "http://ksp-kos.github.io/KOS_DOC/structures/orbits/orbit.html#attribute:ORBIT:LAN"
    },
    LONGITUDEOFASCENDINGNODE:{
      output: ["Number", "scalar "],
      parameter: null,
      tooltip: "Longitude of the ascending node. Its unclear what the basis line the game uses for this is\, though. The real-world basis is the constellation Ares\, which of course doesnt exist in the Kerbal universe.",
      help: "http://ksp-kos.github.io/KOS_DOC/structures/orbits/orbit.html#attribute:ORBIT:LONGITUDEOFASCENDINGNODE"
    },
    ARGUMENTOFPERIAPSIS:{
      output: ["Number", "scalar"],
      parameter: null,
      tooltip: "argument of periapsis",
      help: "http://ksp-kos.github.io/KOS_DOC/structures/orbits/orbit.html#attribute:ORBIT:ARGUMENTOFPERIAPSIS"
    },
    TRUEANOMALY:{
      output: ["Number", "scalar"],
      parameter: null,
      tooltip: "true anomaly",
      help: "http://ksp-kos.github.io/KOS_DOC/structures/orbits/orbit.html#attribute:ORBIT:TRUEANOMALY"
    },
    MEANANOMALYATEPOCH:{
      output: ["Number", "scalar"],
      parameter: null,
      tooltip: "mean anomaly",
      help: "http://ksp-kos.github.io/KOS_DOC/structures/orbits/orbit.html#attribute:ORBIT:MEANANOMALYATEPOCH"
    },
    TRANSITION:{
      output: "string",
      parameter: null,
      tooltip: "Describes the way in which this orbit will end and become a different orbit\, with a value taken from this list.",
      help: "http://ksp-kos.github.io/KOS_DOC/structures/orbits/orbit.html#attribute:ORBIT:TRANSITION"
    },
    POSITION:{
      output: "vector",
      parameter: null,
      tooltip: "The current position of whatever the object is that is in this orbit.",
      help: "http://ksp-kos.github.io/KOS_DOC/structures/orbits/orbit.html#attribute:ORBIT:POSITION"
    },
    VELOCITY:{
      output: "vector",
      parameter: null,
      tooltip: "The current velocity of whatever the object is that is in this orbit.",
      help: "http://ksp-kos.github.io/KOS_DOC/structures/orbits/orbit.html#attribute:ORBIT:VELOCITY"
    },
    NEXTPATCH:{
      output: "orbit",
      parameter: null,
      tooltip: "When this orbit has a transition to another orbit coming up\, this suffix returns the next Orbit patch after this one. For example\, when escaping from a Mun orbit into a Kerbin orbit from which you will escape and hit a Solar orbit\, then the current orbits \:NEXTPATCH will show the Kerbin orbit\, and \:NEXTPATCH\:NEXTPATCH will show the solar orbit. The number of patches into the future that you can peek depends on your conic patches setting in your Kerbal Space Program Settings.cfg file.",
      help: "http://ksp-kos.github.io/KOS_DOC/structures/orbits/orbit.html#attribute:ORBIT:NEXTPATCH"
    },
    HASNEXTPATCH:{
      output: "boolean",
      parameter: null,
      tooltip: "boolean\
\:access\: Get only",
      help: "http://ksp-kos.github.io/KOS_DOC/structures/orbits/orbit.html#attribute:ORBIT:HASNEXTPATCH"
    },
    HASNEXTPATCH:{
      output: "boolean",
      parameter: null,
      tooltip: "boolean\
\:access\: Get only",
      help: "http://ksp-kos.github.io/KOS_DOC/structures/orbits/orbit.html#attribute:ORBIT:HASNEXTPATCH"
    }
  },
  init: function() {
    this.setHelpUrl("http://ksp-kos.github.io/KOS_DOC/structures/orbits/orbit.html");
    this.setColour(120);

    this.setOutput(true, "Any");
    this.appendValueInput("PARENT")
        .setCheck("orbit")
        .appendField("Get Orbit Property")
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
