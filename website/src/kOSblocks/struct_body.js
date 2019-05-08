/**
 * @fileoverview blocks for The Editor. This file is based on the docs at http://ksp-kos.github.io/KOS_DOC/structures/celestial_bodies/body.html
 * @author kos-edit@eforen.tv (Ariel Lothlorien)
 */


Blockly.Blocks.flow.HUE = 300;

Blockly.Blocks['Body_properties'] = {
  dropdowns: [["Name", "NAME"],["Description", "DESCRIPTION"],["Mass", "MASS"],["Altitude", "ALTITUDE"],["Rotationperiod", "ROTATIONPERIOD"],["Radius", "RADIUS"],["Mu", "MU"],["Atm", "ATM"],["Angularvel", "ANGULARVEL"],["Geopositionof", "GEOPOSITIONOF"],["Altitudeof", "ALTITUDEOF"]],


  DataMap: {
    NAME:{
      output: "string",
      parameter: null,
      tooltip: "The name of the body. Example\: Mun.",
      help: "http://ksp-kos.github.io/KOS_DOC/structures/celestial_bodies/body.html#attribute:BODY:NAME"
    },
    DESCRIPTION:{
      output: "string",
      parameter: null,
      tooltip: "Longer description of the body\, often just a duplicate of the name.",
      help: "http://ksp-kos.github.io/KOS_DOC/structures/celestial_bodies/body.html#attribute:BODY:DESCRIPTION"
    },
    MASS:{
      output: ["Number", "scalar "],
      parameter: null,
      tooltip: "The mass of the body in kilograms.",
      help: "http://ksp-kos.github.io/KOS_DOC/structures/celestial_bodies/body.html#attribute:BODY:MASS"
    },
    ALTITUDE:{
      output: ["Number", "scalar "],
      parameter: null,
      tooltip: "The altitude of this body above the sea level surface of its parent body. I.e. the altitude of Mun above Kerbin.",
      help: "http://ksp-kos.github.io/KOS_DOC/structures/celestial_bodies/body.html#attribute:BODY:ALTITUDE"
    },
    ROTATIONPERIOD:{
      output: ["Number", "scalar "],
      parameter: null,
      tooltip: "The length of the bodys day in seconds. I.e. how long it takes for it to make one rotation.",
      help: "http://ksp-kos.github.io/KOS_DOC/structures/celestial_bodies/body.html#attribute:BODY:ROTATIONPERIOD"
    },
    RADIUS:{
      output: ["Number", "scalar "],
      parameter: null,
      tooltip: "The radius from the bodys center to its sea level.",
      help: "http://ksp-kos.github.io/KOS_DOC/structures/celestial_bodies/body.html#attribute:BODY:RADIUS"
    },
    MU:{
      output: ["Number", "scalar "],
      parameter: null,
      tooltip: "The Gravitational Parameter of the body.",
      help: "http://ksp-kos.github.io/KOS_DOC/structures/celestial_bodies/body.html#attribute:BODY:MU"
    },
    ATM:{
      output: "atmosphere",
      parameter: null,
      tooltip: "A variable that describes the atmosphere of this body.",
      help: "http://ksp-kos.github.io/KOS_DOC/structures/celestial_bodies/body.html#attribute:BODY:ATM"
    },
    ANGULARVEL:{
      output: "direction in ship-raw",
      parameter: null,
      tooltip: "Despite the name\, this is technically not a velocity. It only tells you the axis of rotation\, not the speed of rotation around that axis.",
      help: "http://ksp-kos.github.io/KOS_DOC/structures/celestial_bodies/body.html#attribute:BODY:ANGULARVEL"
    },
    GEOPOSITIONOF:{
      output: "geocoordinates in ship-raw",
      parameter: null,
      tooltip: "The geoposition underneath the given vector position.  SHIP\:BODY\:GEOPOSITIONOF\(SHIP\:POSITION\) should\, in principle\, give the same thing as SHIP\:GEOPOSITION\, while SHIP\:BODY\:GEOPOSITIONOF\(SHIP\:POSITION + 1000*SHIP\:NORTH\) would give you the lat\/lng of the position 1 kilometer north of you.  Be careful not to confuse this with \:GEOPOSITION \(no OF in the name\)\, which is also a suffix of Body by virtue of the fact that Body is an Orbitable\, but it doesnt mean the same thing.",
      help: "http://ksp-kos.github.io/KOS_DOC/structures/celestial_bodies/body.html#attribute:BODY:GEOPOSITIONOF"
    },
    ALTITUDEOF:{
      output: ["Number", "scalar "],
      parameter: null,
      tooltip: "The altitude of the given vector position\, above this bodys sea level.  SHIP\:BODY\:ALTITUDEOF\(SHIP\:POSITION\) should\, in principle\, give the same thing as SHIP\:ALTITUDE.  Example\: Eve\:ALTITUDEOF\(GILLY\:POSITION\) gives the altitude of gillys current position above Eve\, even if youre not actually anywhere near the SOI of Eve at the time.  Be careful not to confuse this with \:ALTITUDE \(no OF in the name\)\, which is also a suffix of Body by virtue of the fact that Body is an Orbitable\, but it doesnt mean the same thing.",
      help: "http://ksp-kos.github.io/KOS_DOC/structures/celestial_bodies/body.html#attribute:BODY:ALTITUDEOF"
    },
    ALTITUDEOF:{
      output: ["Number", "scalar "],
      parameter: null,
      tooltip: "The altitude of the given vector position\, above this bodys sea level.  SHIP\:BODY\:ALTITUDEOF\(SHIP\:POSITION\) should\, in principle\, give the same thing as SHIP\:ALTITUDE.  Example\: Eve\:ALTITUDEOF\(GILLY\:POSITION\) gives the altitude of gillys current position above Eve\, even if youre not actually anywhere near the SOI of Eve at the time.  Be careful not to confuse this with \:ALTITUDE \(no OF in the name\)\, which is also a suffix of Body by virtue of the fact that Body is an Orbitable\, but it doesnt mean the same thing.",
      help: "http://ksp-kos.github.io/KOS_DOC/structures/celestial_bodies/body.html#attribute:BODY:ALTITUDEOF"
    }
  },
  init: function() {
    this.setHelpUrl("http://ksp-kos.github.io/KOS_DOC/structures/celestial_bodies/body.html");
    this.setColour(120);

    this.setOutput(true, "Any");
    this.appendValueInput("PARENT")
        .setCheck("body")
        .appendField("Get Body Property")
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
