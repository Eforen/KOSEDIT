/**
 * @fileoverview Flight Control blocks for The Editor.
 * @author kos-edit@eforen.tv (Ariel Lothlorien)
 */
'use strict';

goog.provide('Blockly.Blocks.flow');

goog.require('Blockly.Blocks');


Blockly.Blocks.flow.HUE = 300;

Blockly.Blocks['vessel_byname'] = {
  init: function() {
    this.setHelpUrl('http://ksp-kos.github.io/KOS_DOC/structures/vessels/vessel.html');
    this.setColour(Blockly.Blocks.flow.HUE);
    this.appendValueInput("NAME")
        .setCheck("String")
        .appendField("Get Vessel by Name");
    this.setOutput(true, ["struct", "orbitable", "vessel"]);
    this.setTooltip('Get a vessel by it\'s name. The name is Case Sensitive.');
  }
};

Blockly.Blocks['kos_vessels_ship'] = {
  init: function() {
    this.setHelpUrl('http://ksp-kos.github.io/KOS_DOC/structures/vessels/vessel.html');
    this.setColour(Blockly.Blocks.flow.HUE);
    this.appendDummyInput()
        .appendField("Ship");
    this.setOutput(true, ["struct", "orbitable", "vessel"]);
    this.setTooltip('Refrence to the current vessel.');
  }
};

Blockly.Blocks['kos_vessels_target'] = {
  init: function() {
    this.setHelpUrl('http://ksp-kos.github.io/KOS_DOC/structures/vessels/vessel.html');
    this.setColour(Blockly.Blocks.flow.HUE);
    this.appendDummyInput()
        .appendField("Target");
    this.setOutput(true, ["struct", "orbitable", "vessel"]);
    this.setTooltip('Refrence to the target vessel.');
  }
};
/**
 * @fileoverview Flight Control blocks for The Editor.
 * @author kos-edit@eforen.tv (Ariel Lothlorien)
 */
'use strict';

goog.provide('Blockly.Blocks.Comments');

goog.require('Blockly.Blocks');


Blockly.Blocks.Comments.HUE = 210;

Blockly.Blocks['comment'] = {
  init: function() {
    this.setHelpUrl('http://www.google.com/');
    this.setColour(Blockly.Blocks.Comments.HUE);
    this.appendDummyInput()
        .appendField("Comment")
        .appendField(new Blockly.FieldTextInput("Text"), "TEXT");
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip('Example "//Text"');
  }
};
/**
 * @fileoverview blocks for The Editor. This file is based on the docs at http://ksp-kos.github.io/KOS_DOC/commands/flight/pilot.html
 * @author kos-edit@eforen.tv (Ariel Lothlorien)
 */


Blockly.Blocks.flow.HUE = 300;

Blockly.Blocks['kos_warp'] = {
  init: function() {
    this.setHelpUrl('http://ksp-kos.github.io/KOS_DOC/commands/flight/warp.html');
    this.setColour(Blockly.Blocks.flow.HUE);
    this.appendDummyInput()
        .appendField("Warp");
    this.setOutput(true);
    this.setTooltip('Refrence to the warp state.');
  }
};

Blockly.Blocks['RawControl_properties'] = {
  dropdowns: [["MAINTHROTTLE", "MAINTHROTTLE"],["YAW", "YAW"],["PITCH", "PITCH"],["ROLL", "ROLL"],["ROTATION", "ROTATION"],["YAWTRIM", "YAWTRIM"],["PITCHTRIM", "PITCHTRIM"],["ROLLTRIM", "ROLLTRIM"],["FORE", "FORE"],["STARBOARD", "STARBOARD"],["TOP", "TOP"],["TRANSLATION", "TRANSLATION"],["WHEELSTEER", "WHEELSTEER"],["WHEELTHROTTLE", "WHEELTHROTTLE"],["WHEELSTEERTRIM", "WHEELSTEERTRIM"],["WHEELTHROTTLETRIM", "WHEELTHROTTLETRIM"],["NEUTRAL", "NEUTRAL"],["NEUTRALIZE", "NEUTRALIZE"]],
  DataMap: {
    MAINTHROTTLE:{
      output: ["Number", "scalar"],
      parameter: null,
      tooltip: "As if user pressed (LEFT-CTRL, LEFT-SHIFT) Set between 0 and 1 much like the cooked flying LOCK THROTTLE command.",
      help: "http://ksp-kos.github.io/KOS_DOC/commands/flight/raw.html#ship-control-mainthrottle"
    },
    YAW:{
      output: ["Number", "scalar"],
      parameter: null,
      tooltip: "As if user pressed (D, A) This is the rotation about the “up” vector as the pilot faces forward. Essentially left (−1) or right (+1).",
      help: "http://ksp-kos.github.io/KOS_DOC/commands/flight/raw.html#ship-control-yaw"
    },
    PITCH:{
      output: ["Number", "scalar"],
      parameter: null,
      tooltip: "As if user pressed (W, S) Rotation about the starboard vector up (+1) or down (−1).",
      help: "http://ksp-kos.github.io/KOS_DOC/commands/flight/raw.html#ship-control-pitch"
    },
    ROLL:{
      output: ["Number", "scalar"],
      parameter: null,
      tooltip: "As if user pressed (Q, E) Rotation about the logintudinal axis of the ship left-wing-down (−1) or left-wing-up (+1).",
      help: "http://ksp-kos.github.io/KOS_DOC/commands/flight/raw.html#ship-control-roll"
    },
    ROTATION:{
      output: "vector",
      parameter: null,
      tooltip: "(YAW,PITCH,ROLL) This is a Vector object containing (YAW, PITCH, ROLL) in that order.",
      help: "http://ksp-kos.github.io/KOS_DOC/commands/flight/raw.html#ship-control-rotation"
    },
    YAWTRIM:{
      output: ["Number", "scalar"],
      parameter: null,
      tooltip: "As if user pressed (ALT+D, ALT+A) Controls the YAW of the rotational trim.",
      help: "http://ksp-kos.github.io/KOS_DOC/commands/flight/raw.html#ship-control-yawtrim"
    },
    PITCHTRIM:{
      output: ["Number", "scalar"],
      parameter: null,
      tooltip: "As if user pressed (ALT+W, ALT+S) Controls the PITCH of the rotational trim.",
      help: "http://ksp-kos.github.io/KOS_DOC/commands/flight/raw.html#ship-control-pitchtrim"
    },
    ROLLTRIM:{
      output: ["Number", "scalar"],
      parameter: null,
      tooltip: "As if user pressed (ALT+Q, ALT+E) Controls the ROLL of the rotational trim.",
      help: "http://ksp-kos.github.io/KOS_DOC/commands/flight/raw.html#ship-control-rolltrim"
    },
    FORE:{
      output: ["Number", "scalar"],
      parameter: null,
      tooltip: "As if user pressed (N, H) Controls the translation of the ship forward (+1) or backward (−1).",
      help: "http://ksp-kos.github.io/KOS_DOC/commands/flight/raw.html#ship-control-fore"
    },
    STARBOARD:{
      output: ["Number", "scalar"],
      parameter: null,
      tooltip: "As if user pressed (L, J) Controls the translation of the ship to the right (+1) or left (−1) from the pilot’s perspective.",
      help: "http://ksp-kos.github.io/KOS_DOC/commands/flight/raw.html#ship-control-starboard"
    },
    TOP:{
      output: ["Number", "scalar"],
      parameter: null,
      tooltip: "As if user pressed (I, K) Controls the translation of the ship up (+1) or down (−1) from the pilot’s perspective.",
      help: "http://ksp-kos.github.io/KOS_DOC/commands/flight/raw.html#ship-control-top"
    },
    TRANSLATION:{
      output: "vector",
      parameter: null,
      tooltip: "(FORE,STARBOARD,TOP) Controls the translation as a Vector (FORE, STARBOARD, TOP).",
      help: "http://ksp-kos.github.io/KOS_DOC/commands/flight/raw.html#ship-control-translation"
    },
    WHEELSTEER:{
      output: ["Number", "scalar"],
      parameter: null,
      tooltip: "As if user pressed (A, D) Turns the wheels left (−1) or right (+1).",
      help: "http://ksp-kos.github.io/KOS_DOC/commands/flight/raw.html#ship-control-wheelsteer"
    },
    WHEELTHROTTLE:{
      output: ["Number", "scalar"],
      parameter: null,
      tooltip: "As if user pressed (W, S) Controls the wheels to move the ship forward (+1) or backward (−1) while on the ground.",
      help: "http://ksp-kos.github.io/KOS_DOC/commands/flight/raw.html#ship-control-wheelthrottle"
    },
    WHEELSTEERTRIM:{
      output: ["Number", "scalar"],
      parameter: null,
      tooltip: "As if user pressed (ALT+A, ALT+D) Controls the trim of the wheel steering.",
      help: "http://ksp-kos.github.io/KOS_DOC/commands/flight/raw.html#ship-control-wheelsteertrim"
    },
    WHEELTHROTTLETRIM:{
      output: ["Number", "scalar"],
      parameter: null,
      tooltip: "As if user pressed (ALT+W, ALT+S) Controls the trim of the wheel throttle.",
      help: "http://ksp-kos.github.io/KOS_DOC/commands/flight/raw.html#ship-control-wheelthrottletrim"
    },
    NEUTRAL:{
      output: "Boolean",
      parameter: null,
      tooltip: "[Short]Is kOS Controlling? Returns true or false depending if kOS has any set controls. This is not settable.",
      help: "http://ksp-kos.github.io/KOS_DOC/commands/flight/raw.html#ship-control-neutral"
    },
    NEUTRALIZE:{
      output: "Boolean",
      parameter: null,
      tooltip: "[Short]Releases Control This causes manual control to let go. When set to true, kOS lets go of the controls and allows the player to manually control them again. This is not gettable.",
      help: "http://ksp-kos.github.io/KOS_DOC/commands/flight/raw.html#ship-control-neutralize"
    }
  },

  init: function() {
    this.setHelpUrl("http://ksp-kos.github.io/KOS_DOC/commands/flight/raw.html");
    this.setColour(120);

    this.setOutput(true, "Any");
    this.appendValueInput("PARENT")
        .setCheck("control")
        .appendField("Raw Control Property")
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


Blockly.Blocks['PilotControl_properties'] = {
  dropdowns: [["Pilotmainthrottle", "PILOTMAINTHROTTLE"],["Pilotyaw", "PILOTYAW"],["Pilotpitch", "PILOTPITCH"],["Pilotroll", "PILOTROLL"],["Pilotrotation", "PILOTROTATION"],["Pilotyawtrim", "PILOTYAWTRIM"],["Pilotpitchtrim", "PILOTPITCHTRIM"],["Pilotrolltrim", "PILOTROLLTRIM"],["Pilotfore", "PILOTFORE"],["Pilotstarboard", "PILOTSTARBOARD"],["Pilottop", "PILOTTOP"],["Pilottranslation", "PILOTTRANSLATION"],["Pilotwheelsteer", "PILOTWHEELSTEER"],["Pilotwheelthrottle", "PILOTWHEELTHROTTLE"],["Pilotwheelsteertrim", "PILOTWHEELSTEERTRIM"],["Pilotwheelthrottletrim", "PILOTWHEELTHROTTLETRIM"],["Pilotneutral", "PILOTNEUTRAL"]],
  DataMap: {
    PILOTMAINTHROTTLE:{
      output: ["Number", "scalar"],
      parameter: null,
      tooltip: "As if user pressed (LEFT-CTRL, LEFT-SHIFT) Returns the pilot’s input for the throttle. This is the only PILOT variable that is settable and is used to set the throttle upon termination of the current kOS program.",
      help: "http://ksp-kos.github.io/KOS_DOC/commands/flight/pilot.html#ship-control-pilotmainthrottle"
    },
    PILOTYAW:{
      output: ["Number", "scalar"],
      parameter: null,
      tooltip: "As if user pressed (D, A) Returns the pilot’s rotation input about the “up” vector as the pilot faces forward. Essentially left (−1) or right (+1).",
      help: "http://ksp-kos.github.io/KOS_DOC/commands/flight/pilot.html#ship-control-pilotyaw"
    },
    PILOTPITCH:{
      output: ["Number", "scalar"],
      parameter: null,
      tooltip: "As if user pressed (W, S) Returns the pilot’s rotation input about the starboard vector up (+1) or down (−1).",
      help: "http://ksp-kos.github.io/KOS_DOC/commands/flight/pilot.html#ship-control-pilotpitch"
    },
    PILOTROLL:{
      output: ["Number", "scalar"],
      parameter: null,
      tooltip: "Returns the pilot’s rotation input about the logintudinal axis of the ship left-wing-down (−1) or left-wing-up (+1).",
      help: "http://ksp-kos.github.io/KOS_DOC/commands/flight/pilot.html#ship-control-pilotroll"
    },
    PILOTROTATION:{
      output: "vector",
      parameter: null,
      tooltip: "(YAW,PITCH,ROLL) Returns the pilot’s input for the YAW of the rotational trim.",
      help: "http://ksp-kos.github.io/KOS_DOC/commands/flight/pilot.html#ship-control-pilotrotation"
    },
    PILOTYAWTRIM:{
      output: ["Number", "scalar"],
      parameter: null,
      tooltip: "Returns the pilot’s input for the YAW of the rotational trim.",
      help: "http://ksp-kos.github.io/KOS_DOC/commands/flight/pilot.html#ship-control-pilotyawtrim"
    },
    PILOTPITCHTRIM:{
      output: ["Number", "scalar"],
      parameter: null,
      tooltip: "Returns the pilot’s input for the PITCH of the rotational trim.",
      help: "http://ksp-kos.github.io/KOS_DOC/commands/flight/pilot.html#ship-control-pilotpitchtrim"
    },
    PILOTROLLTRIM:{
      output: ["Number", "scalar"],
      parameter: null,
      tooltip: "Returns the pilot’s input for the ROLL of the rotational trim.",
      help: "http://ksp-kos.github.io/KOS_DOC/commands/flight/pilot.html#ship-control-pilotrolltrim"
    },
    PILOTFORE:{
      output: ["Number", "scalar"],
      parameter: null,
      tooltip: "Returns the the pilot’s input for the translation of the ship forward (+1) or backward (−1).",
      help: "http://ksp-kos.github.io/KOS_DOC/commands/flight/pilot.html#ship-control-pilotfore"
    },
    PILOTSTARBOARD:{
      output: ["Number", "scalar"],
      parameter: null,
      tooltip: "Returns the the pilot’s input for the translation of the ship to the right (+1) or left (−1) from the pilot’s perspective.",
      help: "http://ksp-kos.github.io/KOS_DOC/commands/flight/pilot.html#ship-control-pilotstarboard"
    },
    PILOTTOP:{
      output: ["Number", "scalar"],
      parameter: null,
      tooltip: "Returns the the pilot’s input for the translation of the ship up (+1) or down (−1) from the pilot’s perspective.",
      help: "http://ksp-kos.github.io/KOS_DOC/commands/flight/pilot.html#ship-control-pilottop"
    },
    PILOTTRANSLATION:{
      output: "vector",
      parameter: null,
      tooltip: "(FORE,STARBOARD,TOP) Returns the the pilot’s input for translation as a Vector (FORE, STARBOARD, TOP).",
      help: "http://ksp-kos.github.io/KOS_DOC/commands/flight/pilot.html#ship-control-pilottranslation"
    },
    PILOTWHEELSTEER:{
      output: ["Number", "scalar"],
      parameter: null,
      tooltip: "As if user pressed (A, D) Returns the the pilot’s input for wheel steering left (−1) or right (+1).",
      help: "http://ksp-kos.github.io/KOS_DOC/commands/flight/pilot.html#ship-control-pilotwheelsteer"
    },
    PILOTWHEELTHROTTLE:{
      output: ["Number", "scalar"],
      parameter: null,
      tooltip: "As if user pressed (W, S) Returns the the pilot’s input for the wheels to move the ship forward (+1) or backward (−1) while on the ground.",
      help: "http://ksp-kos.github.io/KOS_DOC/commands/flight/pilot.html#ship-control-pilotwheelthrottle"
    },
    PILOTWHEELSTEERTRIM:{
      output: ["Number", "scalar"],
      parameter: null,
      tooltip: "Returns the the pilot’s input for the trim of the wheel steering.",
      help: "http://ksp-kos.github.io/KOS_DOC/commands/flight/pilot.html#ship-control-pilotwheelsteertrim"
    },
    PILOTWHEELTHROTTLETRIM:{
      output: ["Number", "scalar"],
      parameter: null,
      tooltip: "Returns the the pilot’s input for the trim of the wheel throttle.",
      help: "http://ksp-kos.github.io/KOS_DOC/commands/flight/pilot.html#ship-control-pilotwheelthrottletrim"
    },
    PILOTNEUTRAL:{
      output: "Boolean",
      parameter: null,
      tooltip: "[Short]Is kOS Controlling? Returns true or false if the pilot is active or not.",
      help: "http://ksp-kos.github.io/KOS_DOC/commands/flight/pilot.html#ship-control-pilotneutral"
    }
  },

  init: function() {
    this.setHelpUrl("http://ksp-kos.github.io/KOS_DOC/commands/flight/pilot.html");
    this.setColour(120);

    this.setOutput(true, "Any");
    this.appendValueInput("PARENT")
        .setCheck("control")
        .appendField("Pilot Input Control")
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

/**
 * @fileoverview Ship System blocks for The Editor.
 * @author kos-edit@eforen.tv (Ariel Lothlorien)
 */
'use strict';

goog.provide('Blockly.Blocks.ShipSys');

goog.require('Blockly.Blocks');

Blockly.Blocks.ShipSys.HUE = 300;

Blockly.Blocks['kos_shipsys_rcs'] = {
  init: function() {
    this.setHelpUrl('http://ksp-kos.github.io/KOS_DOC/commands/flight/systems.html#global:RCS');
    this.setColour(Blockly.Blocks.ShipSys.HUE);
    this.appendValueInput("STATE")
        .setCheck(["Boolean", "on-off"])
        .appendField("Set RCS to")
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setOutput(false);
    this.setTooltip('Turns the RCS on or off, like using R at the keyboard.');
  }
};
Blockly.Blocks['kos_shipsys_sas'] = {
  init: function() {
    this.setHelpUrl('http://ksp-kos.github.io/KOS_DOC/commands/flight/systems.html#global:SAS');
    this.setColour(Blockly.Blocks.ShipSys.HUE);
    this.appendValueInput("STATE")
        .setCheck(["Boolean", "on-off"])
        .appendField("Set SAS to")
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setOutput(false);
    this.setTooltip('Turns the SAS on or off, like using T at the keybaord.');
  }
};
Blockly.Blocks['kos_shipsys_lights'] = {
  init: function() {
    this.setHelpUrl('http://ksp-kos.github.io/KOS_DOC/commands/flight/systems.html#global:LIGHTS');
    this.setColour(Blockly.Blocks.ShipSys.HUE);
    this.appendValueInput("STATE")
        .setCheck(["Boolean", "on-off"])
        .appendField("Set lights to")
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setOutput(false);
    this.setTooltip('Turns the lights on or off, like using the U key at the keyboard');
  }
};
Blockly.Blocks['kos_shipsys_brakes'] = {
  init: function() {
    this.setHelpUrl('http://ksp-kos.github.io/KOS_DOC/commands/flight/systems.html#global:BRAKES');
    this.setColour(Blockly.Blocks.ShipSys.HUE);
    this.appendValueInput("STATE")
        .setCheck(["Boolean", "on-off"])
        .appendField("Set Brakes to")
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setOutput(false);
    this.setTooltip('Turns the brakes on or off, like clicking the brakes button, though not like using the B key, because they stay on.');
  }
};
Blockly.Blocks['kos_shipsys_target'] = {
  init: function() {
    this.setHelpUrl('http://ksp-kos.github.io/KOS_DOC/commands/flight/systems.html#global:TARGET');
    this.setColour(Blockly.Blocks.ShipSys.HUE);
    this.appendValueInput("NAME")
        .setCheck("String")
        .appendField("Set Target to")
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setOutput(false);
    this.setTooltip('Where name is the name of a target vessel or planet, this will set the current target: {SET TARGET TO name.}');
  }
};


Blockly.Blocks['kos_shipsys_rcs_key'] = {
  init: function() {
    this.setHelpUrl('http://ksp-kos.github.io/KOS_DOC/commands/flight/systems.html#global:RCS');
    this.setColour(Blockly.Blocks.ShipSys.HUE);
    this.appendDummyInput()
        .appendField("RCS");
    this.setOutput(true);
    this.setTooltip('As keyword for SET/TOGGLE/LOCK');
  }
};
Blockly.Blocks['kos_shipsys_sas_key'] = {
  init: function() {
    this.setHelpUrl('http://ksp-kos.github.io/KOS_DOC/commands/flight/systems.html#global:SAS');
    this.setColour(Blockly.Blocks.ShipSys.HUE);
    this.appendDummyInput()
        .appendField("SAS");
    this.setOutput(true);
    this.setTooltip('As keyword for SET/TOGGLE/LOCK');
  }
};
Blockly.Blocks['kos_shipsys_lights_key'] = {
  init: function() {
    this.setHelpUrl('http://ksp-kos.github.io/KOS_DOC/commands/flight/systems.html#global:LIGHTS');
    this.setColour(Blockly.Blocks.ShipSys.HUE);
    this.appendDummyInput()
        .appendField("LIGHTS");
    this.setOutput(true);
    this.setTooltip('As keyword for SET/TOGGLE/LOCK');
  }
};
Blockly.Blocks['kos_shipsys_brakes_key'] = {
  init: function() {
    this.setHelpUrl('http://ksp-kos.github.io/KOS_DOC/commands/flight/systems.html#global:BRAKES');
    this.setColour(Blockly.Blocks.ShipSys.HUE);
    this.appendDummyInput()
        .appendField("BRAKES");
    this.setOutput(true);
    this.setTooltip('As keyword for SET/TOGGLE/LOCK');
  }
};
/**
 * @fileoverview Flight Control blocks for The Editor.
 * @author kos-edit@eforen.tv (Ariel Lothlorien)
 */
'use strict';

goog.provide('Blockly.Blocks.flight');

goog.require('Blockly.Blocks');
/**
 * @fileoverview Flight Control blocks for The Editor.
 * @author kos-edit@eforen.tv (Ariel Lothlorien)
 */
'use strict';

goog.provide('Blockly.Blocks.flow');

goog.require('Blockly.Blocks');


Blockly.Blocks.flow.HUE = 0;

Blockly.Blocks['kos_stage'] = {
  init: function() {
    this.setHelpUrl('http://ksp-kos.github.io/KOS_DOC/tutorials/quickstart.html#step-3-make-the-script-actually-do-something');
    this.setColour(Blockly.Blocks.flow.HUE);
    this.appendDummyInput()
        .appendField("Stage");
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip('Stages the rocket as if the user pressed the SpaceBar');
  }
};

Blockly.Blocks['kos_wait'] = {
  init: function() {
    this.setHelpUrl('http://ksp-kos.github.io/KOS_DOC/language/flow.html#wait');
    this.setColour(Blockly.Blocks.flow.HUE);
    this.appendValueInput("TIME")
        .setCheck("Number")
        .appendField("Wait");
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip('Halts execution for a specified amount of time.');
  }
};

Blockly.Blocks['kos_wait_until'] = {
  init: function() {
    this.setHelpUrl('http://ksp-kos.github.io/KOS_DOC/tutorials/quickstart.html#step-3-make-the-script-actually-do-something');
    this.setColour(Blockly.Blocks.flow.HUE);
    this.appendValueInput("CONDITION")
        .setCheck("Boolean")
        .appendField("Wait Until");
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip('Halts execution until a specific set of criteria are met.');
  }
};

Blockly.Blocks['kos_set'] = {
  init: function() {
    this.setHelpUrl('http://ksp-kos.github.io/KOS_DOC/language/variables.html?highlight=lock#lock');
    this.setColour(Blockly.Blocks.flow.HUE);
    this.appendValueInput("TARGET")
        .appendField("SET");
    this.appendValueInput("VALUE")
        .appendField("TO");
    this.setInputsInline(true);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip('Sets the value of a variable. Declares a global variable if it doesn’t already exist.');
  }
};

Blockly.Blocks['kos_lock'] = {
  init: function() {
    this.setHelpUrl('http://ksp-kos.github.io/KOS_DOC/language/variables.html?highlight=lock#lock');
    this.setColour(Blockly.Blocks.flow.HUE);
    this.appendValueInput("TARGET")
        .appendField("LOCK");
    this.appendValueInput("VALUE")
        .appendField("TO");
    this.setInputsInline(true);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip('Locks an identifier to an expression. Each time the identifier is used in an expression, its value will be re-calculated on the fly');
  }
};

Blockly.Blocks['kos_toggle'] = {
  init: function() {
    this.setHelpUrl('http://ksp-kos.github.io/KOS_DOC/language/variables.html?highlight=declare#toggle');
    this.setColour(Blockly.Blocks.flow.HUE);
    this.appendValueInput("TARGET")
        .appendField("TOGGLE");
    this.setInputsInline(true);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip('Locks an identifier to an expression. Each time the identifier is used in an expression, its value will be re-calculated on the fly');
  }
};

Blockly.Blocks['kos_ontrigger'] = {
  init: function() {
    this.setHelpUrl('http://ksp-kos.github.io/KOS_DOC/language/flow.html#on');
    this.setColour(165);
    this.appendValueInput("TRIGGER")
        .setCheck("Boolean")
        .appendField("ON");
    this.appendStatementInput("CODE");
    this.setInputsInline(true);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip('');
  }
};
//Blockly.Blocks.kos_lazyglobal_enabled = true;

Blockly.Blocks['kos_lazyglobal'] = {
  init: function() {
    this.setHelpUrl('https://youtu.be/BYE-V6luP0U?t=7m15s');
    this.appendDummyInput()
        .appendField("Manual Variable Definition")
        .appendField(new Blockly.FieldCheckbox("FALSE"), "lazy");
    this.setTooltip('Compiler Directive @LAZYGLOBAL. WARNING! This means you will need to Declare all vars or you will get errors.');
  }
};

Blockly.Blocks['kos_sas-correction'] = {
  init: function() {
    this.setHelpUrl('http://ksp-kos.github.io/KOS_DOC/commands/flight.html');
    this.appendDummyInput()
        .appendField("Fix override of kOS control by SAS")
        .appendField(new Blockly.FieldCheckbox("TRUE"), "VALUE");
    this.setTooltip('With the current implementation of flight control, if you leave SAS turned on, it will override kOS‘s attempts to steer the ship. In order for kOS to be able to turn the ship, you need to set SAS OFF. In manual control, you can pilot with SAS ON, because the pilot’s manual controls override the SAS and “fight” against it. In KOS no such ability exists. If SAS is on, kOS won’t be able to turn the ship. It is common for people writing kOS scripts to explicitly start them with a use of the SAS OFF command just in case you forgot to turn it off before running the script. To fix this kOS IDE adds "SAS OFF" to the beginning of the script.');
  }
};

/**
 * @fileoverview Flight Control blocks for The Editor.
 * @author kos-edit@eforen.tv (Ariel Lothlorien)
 */
'use strict';

goog.provide('Blockly.Blocks.flow');

goog.require('Blockly.Blocks');


Blockly.Blocks.flow.HUE = 300;

Blockly.Blocks['vessel_byname'] = {
  init: function() {
    this.setHelpUrl('http://ksp-kos.github.io/KOS_DOC/structures/vessels/vessel.html');
    this.setColour(Blockly.Blocks.flow.HUE);
    this.appendValueInput("NAME")
        .setCheck("String")
        .appendField("Get Vessel by Name");
    this.setOutput(true, ["struct", "orbitable", "vessel"]);
    this.setTooltip('Get a vessel by it\'s name. The name is Case Sensitive.');
  }
};

Blockly.Blocks['kos_vessels_ship'] = {
  init: function() {
    this.setHelpUrl('http://ksp-kos.github.io/KOS_DOC/structures/vessels/vessel.html');
    this.setColour(Blockly.Blocks.flow.HUE);
    this.appendDummyInput()
        .appendField("Ship");
    this.setOutput(true, ["struct", "orbitable", "vessel"]);
    this.setTooltip('Refrence to the current vessel.');
  }
};

Blockly.Blocks['kos_vessels_target'] = {
  init: function() {
    this.setHelpUrl('http://ksp-kos.github.io/KOS_DOC/structures/vessels/vessel.html');
    this.setColour(Blockly.Blocks.flow.HUE);
    this.appendDummyInput()
        .appendField("Target");
    this.setOutput(true, ["struct", "orbitable", "vessel"]);
    this.setTooltip('Refrence to the target vessel.');
  }
};

Blockly.Blocks['kos_vessels_ship_control'] = {
  init: function() {
    this.setHelpUrl('http://ksp-kos.github.io/KOS_DOC/structures/vessels/vessel.html#attribute:VESSEL:CONTROL');
    this.setColour(Blockly.Blocks.flow.HUE);
    this.appendDummyInput()
        .appendField("Ship Control");
    this.setOutput(true, ["struct", "control"]);
    this.setTooltip('Refrence to the current vessel\'s controls.');
  }
};

Blockly.Blocks['kos_vessels_target_control'] = {
  init: function() {
    this.setHelpUrl('http://ksp-kos.github.io/KOS_DOC/structures/vessels/vessel.html#attribute:VESSEL:CONTROL');
    this.setColour(Blockly.Blocks.flow.HUE);
    this.appendDummyInput()
        .appendField("Target Control");
    this.setOutput(true, ["struct", "control"]);
    this.setTooltip('Refrence to the target vessel\'s controls.');
  }
};
/**
 * @fileoverview Flight Control blocks for The Editor.
 * @author kos-edit@eforen.tv (Ariel Lothlorien)
 */
'use strict';

goog.provide('Blockly.Blocks.screen');

goog.require('Blockly.Blocks');


Blockly.Blocks.screen.HUE = 120;

Blockly.Blocks['kos_clearscreen'] = {
  init: function() {
    this.setHelpUrl('http://www.example.com/');
    this.setColour(Blockly.Blocks.screen.HUE);
    this.appendDummyInput()
        .appendField("Clear Screen");
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip('http://ksp-kos.github.io/KOS_DOC/commands/terminalgui.html?highlight=clearscreen#CLEARSCREEN');
  }
};
/**
 * @fileoverview Ship Systems blocks for The Editor.
 * @author kos-edit@eforen.tv (Ariel Lothlorien)
 */
'use strict';

goog.provide('Blockly.Blocks.ship');

goog.require('Blockly.Blocks');

Blockly.Blocks.ship.HUE = 105;

Blockly.Blocks['ship_rcs'] = {
  init: function() {
    this.setHelpUrl('http://ksp-kos.github.io/KOS_DOC/commands/flight/systems.html');
    this.setColour(Blockly.Blocks.ship.HUE);
    this.appendValueInput("state")
        .setCheck(["Boolean", "on-off"])
        .appendField("RCS");
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip('Turns the RCS on or off, like using R at the keyboard');
  }
};

Blockly.Blocks['ship_sas'] = {
  init: function() {
    this.setHelpUrl('http://ksp-kos.github.io/KOS_DOC/commands/flight/systems.html');
    this.setColour(Blockly.Blocks.ship.HUE);
    this.appendValueInput("state")
        .setCheck(["Boolean", "on-off"])
        .appendField("SAS");
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip('Turns the SAS on or off, like using T at the keybaord');
  }
};

Blockly.Blocks['ship_lights'] = {
  init: function() {
    this.setHelpUrl('http://ksp-kos.github.io/KOS_DOC/commands/flight/systems.html');
    this.setColour(Blockly.Blocks.ship.HUE);
    this.appendValueInput("state")
        .setCheck(["Boolean", "on-off"])
        .appendField("LIGHTS");
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip('Turns the lights on or off, like using the U key at the keyboard');
  }
};

Blockly.Blocks['ship_brakes'] = {
  init: function() {
    this.setHelpUrl('http://ksp-kos.github.io/KOS_DOC/commands/flight/systems.html');
    this.setColour(Blockly.Blocks.ship.HUE);
    this.appendValueInput("state")
        .setCheck(["Boolean", "on-off"])
        .appendField("BRAKES");
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip('Turns the lights on or off, like using the U key at the keyboard');
  }
};
/**
 * @fileoverview Ship Systems blocks for The Editor.
 * @author kerboIDE@eforen.tv (Ariel Lothlorien)
 */
'use strict';

goog.provide('Blockly.Blocks.specVars');

goog.require('Blockly.Blocks');

Blockly.Blocks.specVars.HUE = 105;

Blockly.Blocks['kos_on'] = {
  init: function() {
    this.setHelpUrl('http://ksp-kos.github.io/KOS_DOC/language/flow.html#on');
    this.setColour(165);
    this.appendDummyInput()
        .appendField("On");
    this.setOutput(true, "on-off");
    this.setTooltip('The ON State.');
  }
};

Blockly.Blocks['kos_off'] = {
  init: function() {
    this.setHelpUrl('http://ksp-kos.github.io/KOS_DOC/language/flow.html#off');
    this.setColour(165);
    this.appendDummyInput()
        .appendField("On");
    this.setOutput(true, "on-off");
    this.setTooltip('The OFF State.');
  }
};

Blockly.Blocks['kos_onoff'] = {
  init: function() {
    this.setHelpUrl('http://ksp-kos.github.io/KOS_DOC/language/flow.html');
    this.setColour(165);
    this.appendDummyInput()
        .appendField(new Blockly.FieldCheckbox("TRUE", this._checkboxUpdated), "STATE")
        .appendField("ON");
    this.setOutput(true, "on-off");
    this.setTooltip('');
  },
  _checkboxUpdated: function(value){
    if(value) {
      this.sourceBlock_.inputList[0].fieldRow[1].text_="ON"
      this.sourceBlock_.inputList[0].fieldRow[1].textElement_.textContent="ON"
      this.sourceBlock_.setTooltip("The ON State.")
      this.sourceBlock_.setHelpUrl('http://ksp-kos.github.io/KOS_DOC/language/flow.html#on');
    } else {
      this.sourceBlock_.inputList[0].fieldRow[1].text_="OFF"
      this.sourceBlock_.inputList[0].fieldRow[1].textElement_.textContent="OFF"
      this.sourceBlock_.setTooltip("The OFF State.")
      this.sourceBlock_.setHelpUrl('http://ksp-kos.github.io/KOS_DOC/language/flow.html#off');
    }
  }
};
/**
 * @fileoverview blocks for The Editor. This file is based on the docs at http://ksp-kos.github.io/KOS_DOC/structures/vessels/aggregateresource.html
 * @author kos-edit@eforen.tv (Ariel Lothlorien)
 */


Blockly.Blocks.flow.HUE = 300;

Blockly.Blocks['AggregateResource_properties'] = {
  dropdowns: [["Name", "NAME"],["Amount", "AMOUNT"],["Capacity", "CAPACITY"],["Parts", "PARTS"]],


  DataMap: {
    NAME:{
      output: "string",
      parameter: null,
      tooltip: "The name of the resource\, i.e. LIQUIDFUEL\, ELECTRICCHARGE\, MONOPROP.",
      help: "http://ksp-kos.github.io/KOS_DOC/structures/vessels/aggregateresource.html#attribute:AGGREGATERESOURCE:NAME"
    },
    AMOUNT:{
      output: ["Number", "scalar"],
      parameter: null,
      tooltip: "The value of how much resource is left.",
      help: "http://ksp-kos.github.io/KOS_DOC/structures/vessels/aggregateresource.html#attribute:AGGREGATERESOURCE:AMOUNT"
    },
    CAPACITY:{
      output: ["Number", "scalar"],
      parameter: null,
      tooltip: "What AMOUNT would be if the resource was filled to the top.",
      help: "http://ksp-kos.github.io/KOS_DOC/structures/vessels/aggregateresource.html#attribute:AGGREGATERESOURCE:CAPACITY"
    },
    PARTS:{
      output: "list",
      parameter: null,
      tooltip: "Because this is a summation of the resources from many parts. kOS gives you the list of all parts that do or could contain the resource.",
      help: "http://ksp-kos.github.io/KOS_DOC/structures/vessels/aggregateresource.html#attribute:AGGREGATERESOURCE:PARTS"
    },
    PARTS:{
      output: "list",
      parameter: null,
      tooltip: "Because this is a summation of the resources from many parts. kOS gives you the list of all parts that do or could contain the resource.",
      help: "http://ksp-kos.github.io/KOS_DOC/structures/vessels/aggregateresource.html#attribute:AGGREGATERESOURCE:PARTS"
    }
  },
  init: function() {
    this.setHelpUrl("http://ksp-kos.github.io/KOS_DOC/structures/vessels/aggregateresource.html");
    this.setColour(120);

    this.setOutput(true, "Any");
    this.appendValueInput("PARENT")
        .setCheck("aggregateresource")
        .appendField("Get AggregateResource Property")
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

/**
 * @fileoverview blocks for The Editor. This file is based on the docs at http://ksp-kos.github.io/KOS_DOC/structures/misc/config.html
 * @author kos-edit@eforen.tv (Ariel Lothlorien)
 */


Blockly.Blocks.flow.HUE = 300;

Blockly.Blocks['Config_properties'] = {
  dropdowns: [["Ipu", "IPU"],["Ucp", "UCP"],["Stat", "STAT"],["Rt2", "RT2"],["Arch", "ARCH"],["Safe", "SAFE"],["Verbose", "VERBOSE"],["Telnet", "TELNET"],["Tport", "TPORT"],["Loopback", "LOOPBACK"]],


  DataMap: {
    IPU:{
      output: "integer",
      parameter: null,
      tooltip: "Configures the InstructionsPerUpdate setting.",
      help: "http://ksp-kos.github.io/KOS_DOC/structures/misc/config.html#attribute:CONFIG:IPU"
    },
    UCP:{
      output: "boolean",
      parameter: null,
      tooltip: "Configures the UseCompressedPersistence setting.",
      help: "http://ksp-kos.github.io/KOS_DOC/structures/misc/config.html#attribute:CONFIG:UCP"
    },
    STAT:{
      output: "boolean",
      parameter: null,
      tooltip: "Configures the ShowStatistics setting.",
      help: "http://ksp-kos.github.io/KOS_DOC/structures/misc/config.html#attribute:CONFIG:STAT"
    },
    RT2:{
      output: "boolean",
      parameter: null,
      tooltip: "Configures the EnableRT2Integration setting.",
      help: "http://ksp-kos.github.io/KOS_DOC/structures/misc/config.html#attribute:CONFIG:RT2"
    },
    ARCH:{
      output: "boolean",
      parameter: null,
      tooltip: "Configures the StartOnArchive setting.",
      help: "http://ksp-kos.github.io/KOS_DOC/structures/misc/config.html#attribute:CONFIG:ARCH"
    },
    SAFE:{
      output: "boolean",
      parameter: null,
      tooltip: "Configures the EnableSafeMode setting.",
      help: "http://ksp-kos.github.io/KOS_DOC/structures/misc/config.html#attribute:CONFIG:SAFE"
    },
    VERBOSE:{
      output: "boolean",
      parameter: null,
      tooltip: "Configures the VerboseExceptions setting.",
      help: "http://ksp-kos.github.io/KOS_DOC/structures/misc/config.html#attribute:CONFIG:VERBOSE"
    },
    TELNET:{
      output: "boolean",
      parameter: null,
      tooltip: "Configures the EnableTelnet setting.",
      help: "http://ksp-kos.github.io/KOS_DOC/structures/misc/config.html#attribute:CONFIG:TELNET"
    },
    TPORT:{
      output: "integer",
      parameter: null,
      tooltip: "Configures the TelnetPort setting.",
      help: "http://ksp-kos.github.io/KOS_DOC/structures/misc/config.html#attribute:CONFIG:TPORT"
    },
    LOOPBACK:{
      output: "boolean",
      parameter: null,
      tooltip: "Configures the TelnetLoopback setting.",
      help: "http://ksp-kos.github.io/KOS_DOC/structures/misc/config.html#attribute:CONFIG:LOOPBACK"
    },
    LOOPBACK:{
      output: "boolean",
      parameter: null,
      tooltip: "Configures the TelnetLoopback setting.",
      help: "http://ksp-kos.github.io/KOS_DOC/structures/misc/config.html#attribute:CONFIG:LOOPBACK"
    }
  },
  init: function() {
    this.setHelpUrl("http://ksp-kos.github.io/KOS_DOC/structures/misc/config.html");
    this.setColour(120);

    this.setOutput(true, "Any");
    this.appendValueInput("PARENT")
        .setCheck("config")
        .appendField("Get Config Property")
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

/**
 * @fileoverview blocks for The Editor. This file is based on the docs at http://ksp-kos.github.io/KOS_DOC/math/direction.html
 * @author kos-edit@eforen.tv (Ariel Lothlorien)
 */


Blockly.Blocks.flow.HUE = 300;

Blockly.Blocks['Direction_properties'] = {
  dropdowns: [["Pitch", "PITCH"],["Yaw", "YAW"],["Roll", "ROLL"],["Forevector", "FOREVECTOR"],["Topvector", "TOPVECTOR"],["Starvector", "STARVECTOR"]],


  DataMap: {
    PITCH:{
      output: ["Number", "scalar "],
      parameter: null,
      tooltip: "Rotation around the \\(x\\) axis.",
      help: "http://ksp-kos.github.io/KOS_DOC/math/direction.html#attribute:DIRECTION:PITCH"
    },
    YAW:{
      output: ["Number", "scalar "],
      parameter: null,
      tooltip: "Rotation around the \\(y\\) axis.",
      help: "http://ksp-kos.github.io/KOS_DOC/math/direction.html#attribute:DIRECTION:YAW"
    },
    ROLL:{
      output: ["Number", "scalar "],
      parameter: null,
      tooltip: "Rotation around the \\(z\\) axis.",
      help: "http://ksp-kos.github.io/KOS_DOC/math/direction.html#attribute:DIRECTION:ROLL"
    },
    FOREVECTOR:{
      output: "vector",
      parameter: null,
      tooltip: "Vector of length 1 that is in the same direction as the look-at of this Direction.  Note that it is the same meaning as what the Z axis of the universe would be rotated to if this rotation was applied to the basis axes of the universe.  When you LOCK STEERING to a direction\, that directions FOREVECTOR is the vector the nose of the ship will orient to.  SHIP\:FACING\:FOREVECTOR is the way the ships nose is aimed right now.",
      help: "http://ksp-kos.github.io/KOS_DOC/math/direction.html#attribute:DIRECTION:FOREVECTOR"
    },
    TOPVECTOR:{
      output: "vector",
      parameter: null,
      tooltip: "Vector of length 1 that is in the same direction as the look-up of this Direction.  Note that it is the same meaning as what the Y axis of the universe would be rotated to if this rotation was applied to the basis axes of the universe. When you LOCK STEERING to a direction\, that directions TOPVECTOR is the vector the roof of the ship will orient to.  SHIP\:FACING\:TOPVECTOR is the way the ships roof is aimed right now.",
      help: "http://ksp-kos.github.io/KOS_DOC/math/direction.html#attribute:DIRECTION:TOPVECTOR"
    },
    STARVECTOR:{
      output: "vector",
      parameter: null,
      tooltip: "Vector of length 1 that is in the same direction as the starboard side of this Direction.  Note that it is the same meaning as what the X axis of the universe would be rotated to if this rotation was applied to the basis axes of the universe. When you LOCK STEERING to a direction\, that directions STARVECTOR is the vector the right wing of the ship will orient to.  SHIP\:FACING\:STARVECTOR is the way the ships right wing is aimed right now.",
      help: "http://ksp-kos.github.io/KOS_DOC/math/direction.html#attribute:DIRECTION:STARVECTOR"
    },
    STARVECTOR:{
      output: "vector",
      parameter: null,
      tooltip: "Vector of length 1 that is in the same direction as the starboard side of this Direction.  Note that it is the same meaning as what the X axis of the universe would be rotated to if this rotation was applied to the basis axes of the universe. When you LOCK STEERING to a direction\, that directions STARVECTOR is the vector the right wing of the ship will orient to.  SHIP\:FACING\:STARVECTOR is the way the ships right wing is aimed right now.",
      help: "http://ksp-kos.github.io/KOS_DOC/math/direction.html#attribute:DIRECTION:STARVECTOR"
    }
  },
  init: function() {
    this.setHelpUrl("http://ksp-kos.github.io/KOS_DOC/math/direction.html");
    this.setColour(120);

    this.setOutput(true, "Any");
    this.appendValueInput("PARENT")
        .setCheck("direction")
        .appendField("Get Direction Property")
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

/**
 * @fileoverview blocks for The Editor. This file is based on the docs at http://ksp-kos.github.io/KOS_DOC/structures/vessels/engine.html
 * @author kos-edit@eforen.tv (Ariel Lothlorien)
 */


Blockly.Blocks.flow.HUE = 300;

Blockly.Blocks['Engine_properties'] = {
  dropdowns: [["Part", "Part"],["Activate", "ACTIVATE"],["Shutdown", "SHUTDOWN"],["Thrustlimit", "THRUSTLIMIT"],["Maxthrust", "MAXTHRUST"],["Thrust", "THRUST"],["Fuelflow", "FUELFLOW"],["Isp", "ISP"],["Flameout", "FLAMEOUT"],["Ignition", "IGNITION"],["Allowrestart", "ALLOWRESTART"],["Allowshutdown", "ALLOWSHUTDOWN"],["Throttlelock", "THROTTLELOCK"]],


  DataMap: {
    Part:{
      output: "",
      parameter: null,
      tooltip: "No tool tip available",
      help: "http://ksp-kos.github.io/KOS_DOC/structures/vessels/engine.htmlpart.html#structure:PART"
    },
    ACTIVATE:{
      output: "",
      parameter: null,
      tooltip: "Call to make the engine turn on.",
      help: "http://ksp-kos.github.io/KOS_DOC/structures/vessels/engine.html#method:ENGINE:ACTIVATE"
    },
    SHUTDOWN:{
      output: "",
      parameter: null,
      tooltip: "Call to make the engine turn off.",
      help: "http://ksp-kos.github.io/KOS_DOC/structures/vessels/engine.html#method:ENGINE:SHUTDOWN"
    },
    THRUSTLIMIT:{
      output: ["Number", "scalar "],
      parameter: null,
      tooltip: "If this an engine with a thrust limiter \(tweakable\) enabled\, what percentage is it limited to\?",
      help: "http://ksp-kos.github.io/KOS_DOC/structures/vessels/engine.html#attribute:ENGINE:THRUSTLIMIT"
    },
    MAXTHRUST:{
      output: ["Number", "scalar "],
      parameter: null,
      tooltip: "How much thrust would this engine give if the throttle was max and conditions were ideal.",
      help: "http://ksp-kos.github.io/KOS_DOC/structures/vessels/engine.html#attribute:ENGINE:MAXTHRUST"
    },
    THRUST:{
      output: ["Number", "scalar "],
      parameter: null,
      tooltip: "How much thrust is this engine giving at this very moment.",
      help: "http://ksp-kos.github.io/KOS_DOC/structures/vessels/engine.html#attribute:ENGINE:THRUST"
    },
    FUELFLOW:{
      output: ["Number", "scalar "],
      parameter: null,
      tooltip: "Rate at which fuel is being burned. Not sure what the units are.",
      help: "http://ksp-kos.github.io/KOS_DOC/structures/vessels/engine.html#attribute:ENGINE:FUELFLOW"
    },
    ISP:{
      output: ["Number", "scalar"],
      parameter: null,
      tooltip: "Specific impulse",
      help: "http://ksp-kos.github.io/KOS_DOC/structures/vessels/engine.html#attribute:ENGINE:ISP"
    },
    FLAMEOUT:{
      output: "boolean",
      parameter: null,
      tooltip: "Is this engine failed because it is starved of a resource \(liquidfuel\, oxidizer\, oxygen\)\?",
      help: "http://ksp-kos.github.io/KOS_DOC/structures/vessels/engine.html#attribute:ENGINE:FLAMEOUT"
    },
    IGNITION:{
      output: "boolean",
      parameter: null,
      tooltip: "Has this engine been ignited\? If both Engine\:IGNITION and Engine\:FLAMEOUT are true\, that means the engine could start up again immediately if more resources were made available to it.",
      help: "http://ksp-kos.github.io/KOS_DOC/structures/vessels/engine.html#attribute:ENGINE:IGNITION"
    },
    ALLOWRESTART:{
      output: "boolean",
      parameter: null,
      tooltip: "Is this an engine that can be started again\? Usually True\, but false for solid boosters.",
      help: "http://ksp-kos.github.io/KOS_DOC/structures/vessels/engine.html#attribute:ENGINE:ALLOWRESTART"
    },
    ALLOWSHUTDOWN:{
      output: "boolean",
      parameter: null,
      tooltip: "Is this an engine that can be shut off once started\? Usually True\, but false for solid boosters.",
      help: "http://ksp-kos.github.io/KOS_DOC/structures/vessels/engine.html#attribute:ENGINE:ALLOWSHUTDOWN"
    },
    THROTTLELOCK:{
      output: "boolean",
      parameter: null,
      tooltip: "Is this an engine that is stuck at a fixed throttle\? \(i.e. solid boosters\)",
      help: "http://ksp-kos.github.io/KOS_DOC/structures/vessels/engine.html#attribute:ENGINE:THROTTLELOCK"
    },
    THROTTLELOCK:{
      output: "boolean",
      parameter: null,
      tooltip: "Is this an engine that is stuck at a fixed throttle\? \(i.e. solid boosters\)",
      help: "http://ksp-kos.github.io/KOS_DOC/structures/vessels/engine.html#attribute:ENGINE:THROTTLELOCK"
    }
  },
  init: function() {
    this.setHelpUrl("http://ksp-kos.github.io/KOS_DOC/structures/vessels/engine.html");
    this.setColour(120);

    this.setOutput(true, "Any");
    this.appendValueInput("PARENT")
        .setCheck("engine")
        .appendField("Get Engine Property")
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

/**
 * @fileoverview blocks for The Editor. This file is based on the docs at http://ksp-kos.github.io/KOS_DOC/structures/vessels/gimbal.html
 * @author kos-edit@eforen.tv (Ariel Lothlorien)
 */


Blockly.Blocks.flow.HUE = 300;

Blockly.Blocks['Gimbal_properties'] = {
  dropdowns: [["Range", "RANGE"],["Responsespeed", "RESPONSESPEED"],["Pitchangle", "PITCHANGLE"],["Yawangle", "YAWANGLE"],["Rollangle", "ROLLANGLE"],["Lock", "LOCK"]],


  DataMap: {
    RANGE:{
      output: ["Number", "scalar"],
      parameter: null,
      tooltip: "The maximum extent of travel possible for the gimbal along all 3 axis \(Pitch\, Yaw\, Roll\)",
      help: "http://ksp-kos.github.io/KOS_DOC/structures/vessels/gimbal.html#attribute:GIMBAL:RANGE"
    },
    RESPONSESPEED:{
      output: ["Number", "scalar"],
      parameter: null,
      tooltip: "A Measure of the rate of travel for the gimbal",
      help: "http://ksp-kos.github.io/KOS_DOC/structures/vessels/gimbal.html#attribute:GIMBAL:RESPONSESPEED"
    },
    PITCHANGLE:{
      output: ["Number", "scalar"],
      parameter: null,
      tooltip: "The gimbals current pitch\, has a range of -1 to 1. Will always be 0 when LOCK is true",
      help: "http://ksp-kos.github.io/KOS_DOC/structures/vessels/gimbal.html#attribute:GIMBAL:PITCHANGLE"
    },
    YAWANGLE:{
      output: ["Number", "scalar"],
      parameter: null,
      tooltip: "The gimbals current yaw\, has a range of -1 to 1. Will always be 0 when LOCK is true",
      help: "http://ksp-kos.github.io/KOS_DOC/structures/vessels/gimbal.html#attribute:GIMBAL:YAWANGLE"
    },
    ROLLANGLE:{
      output: ["Number", "scalar"],
      parameter: null,
      tooltip: "The gimbals current roll\, has a range of -1 to 1. Will always be 0 when LOCK is true",
      help: "http://ksp-kos.github.io/KOS_DOC/structures/vessels/gimbal.html#attribute:GIMBAL:ROLLANGLE"
    },
    LOCK:{
      output: "boolean",
      parameter: null,
      tooltip: "Can this Gimbal produce torque right now\, when you set it to false it will snap the engine back to 0s for pitch\,yaw and roll",
      help: "http://ksp-kos.github.io/KOS_DOC/structures/vessels/gimbal.html#attribute:GIMBAL:LOCK"
    },
    LOCK:{
      output: "boolean",
      parameter: null,
      tooltip: "Can this Gimbal produce torque right now\, when you set it to false it will snap the engine back to 0s for pitch\,yaw and roll",
      help: "http://ksp-kos.github.io/KOS_DOC/structures/vessels/gimbal.html#attribute:GIMBAL:LOCK"
    }
  },
  init: function() {
    this.setHelpUrl("http://ksp-kos.github.io/KOS_DOC/structures/vessels/gimbal.html");
    this.setColour(120);

    this.setOutput(true, "Any");
    this.appendValueInput("PARENT")
        .setCheck("gimbal")
        .appendField("Get Gimbal Property")
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

/**
 * @fileoverview blocks for The Editor. This file is based on the docs at http://ksp-kos.github.io/KOS_DOC/structures/misc/iterator.html
 * @author kos-edit@eforen.tv (Ariel Lothlorien)
 */


Blockly.Blocks.flow.HUE = 300;

Blockly.Blocks['Iterator_properties'] = {
  dropdowns: [["Reset", "RESET"],["Next", "NEXT"],["Atend", "ATEND"],["Index", "INDEX"],["Value", "VALUE"]],


  DataMap: {
    RESET:{
      output: "",
      parameter: null,
      tooltip: "Call this to rewind the iterator to just before the beginning of the list. After a call to Iterator\:RESET\, the iterator must be moved with Iterator\:NEXT before it gets to the first value in the list.",
      help: "http://ksp-kos.github.io/KOS_DOC/structures/misc/iterator.html#method:ITERATOR:RESET"
    },
    NEXT:{
      output: "boolean",
      parameter: null,
      tooltip: "Call this to move the iterator to the next item in the list. Returns true if there is such an item\, or false if no such item exists because its already at the end of the list.",
      help: "http://ksp-kos.github.io/KOS_DOC/structures/misc/iterator.html#method:ITERATOR:NEXT"
    },
    ATEND:{
      output: "boolean",
      parameter: null,
      tooltip: "Returns true if the iterator is at the end of the list and therefore cannot be NEXTed\, false otherwise.",
      help: "http://ksp-kos.github.io/KOS_DOC/structures/misc/iterator.html#attribute:ITERATOR:ATEND"
    },
    INDEX:{
      output: "integer",
      parameter: null,
      tooltip: "Returns the numerical index of how far you are into the list\, starting the counting at 0 for the first item in the list. The last item in the list is numbered N-1\, where N is the number of items in the list.",
      help: "http://ksp-kos.github.io/KOS_DOC/structures/misc/iterator.html#attribute:ITERATOR:INDEX"
    },
    VALUE:{
      output: "varies",
      parameter: null,
      tooltip: "Returns the thing stored at the current position in the list.",
      help: "http://ksp-kos.github.io/KOS_DOC/structures/misc/iterator.html#attribute:ITERATOR:VALUE"
    },
    VALUE:{
      output: "varies",
      parameter: null,
      tooltip: "Returns the thing stored at the current position in the list.",
      help: "http://ksp-kos.github.io/KOS_DOC/structures/misc/iterator.html#attribute:ITERATOR:VALUE"
    }
  },
  init: function() {
    this.setHelpUrl("http://ksp-kos.github.io/KOS_DOC/structures/misc/iterator.html");
    this.setColour(120);

    this.setOutput(true, "Any");
    this.appendValueInput("PARENT")
        .setCheck("iterator")
        .appendField("Get Iterator Property")
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

/**
 * @fileoverview blocks for The Editor. This file is based on the docs at http://ksp-kos.github.io/KOS_DOC/structures/vessels/part.html
 * @author kos-edit@eforen.tv (Ariel Lothlorien)
 */


Blockly.Blocks.flow.HUE = 300;

Blockly.Blocks['Part_properties'] = {
  dropdowns: [["Name", "NAME"],["Title", "TITLE"],["Mass", "MASS"],["Drymass", "DRYMASS"],["Wetmass", "WETMASS"],["Tag", "TAG"],["Controlfrom", "CONTROLFROM"],["Stage", "STAGE"],["Uid", "UID"],["Rotation", "ROTATION"],["Position", "POSITION"],["Facing", "FACING"],["Resources", "RESOURCES"],["Targetable", "TARGETABLE"],["Ship", "SHIP"],["Getmodule(name)", "GETMODULE(name)"],["Modules", "MODULES"],["Allmodules", "ALLMODULES"],["Parent", "PARENT"],["Hasparent", "HASPARENT"],["Hasphysics", "HASPHYSICS"],["Children", "CHILDREN"]],


  DataMap: {
    NAME:{
      output: "string",
      parameter: null,
      tooltip: "Name of part as it is used behind the scenes in the games API code.",
      help: "http://ksp-kos.github.io/KOS_DOC/structures/vessels/part.html#attribute:PART:NAME"
    },
    TITLE:{
      output: "string",
      parameter: null,
      tooltip: "The title of the part as it appears on-screen in the gui.",
      help: "http://ksp-kos.github.io/KOS_DOC/structures/vessels/part.html#attribute:PART:TITLE"
    },
    MASS:{
      output: ["Number", "scalar"],
      parameter: null,
      tooltip: "The current mass or the part and its resources. If the part has no physics this will always be 0.",
      help: "http://ksp-kos.github.io/KOS_DOC/structures/vessels/part.html#attribute:PART:MASS"
    },
    DRYMASS:{
      output: ["Number", "scalar"],
      parameter: null,
      tooltip: "The mass of the part if all of its resources were empty. If the part has no physics this will always be 0.",
      help: "http://ksp-kos.github.io/KOS_DOC/structures/vessels/part.html#attribute:PART:DRYMASS"
    },
    WETMASS:{
      output: ["Number", "scalar"],
      parameter: null,
      tooltip: "The mass of the part if all of its resources were full. If the part has no physics this will always be 0.",
      help: "http://ksp-kos.github.io/KOS_DOC/structures/vessels/part.html#attribute:PART:WETMASS"
    },
    TAG:{
      output: "string",
      parameter: null,
      tooltip: "The name tag value that may exist on this part if you have given the part a name via the name-tag system.",
      help: "http://ksp-kos.github.io/KOS_DOC/structures/vessels/part.html#attribute:PART:TAG"
    },
    CONTROLFROM:{
      output: "boolean",
      parameter: null,
      tooltip: "Set to TRUE to cause the game to do the same thing as when you right-click a part on a vessel and select control from here on the menu. It rotates the control orientation so that fore\/aft\/left\/right\/up\/down now match the orientation of this part. NOTE that this will not work for every type of part. It only works for those parts that KSP itself allows this for \(control cores and docking ports\).",
      help: "http://ksp-kos.github.io/KOS_DOC/structures/vessels/part.html#attribute:PART:CONTROLFROM"
    },
    STAGE:{
      output: ["Number", "scalar"],
      parameter: null,
      tooltip: "the stage this part is part of.",
      help: "http://ksp-kos.github.io/KOS_DOC/structures/vessels/part.html#attribute:PART:STAGE"
    },
    UID:{
      output: "string",
      parameter: null,
      tooltip: "All parts have a unique ID number. Test if two parts are the same part by seeing if this is the same between them.",
      help: "http://ksp-kos.github.io/KOS_DOC/structures/vessels/part.html#attribute:PART:UID"
    },
    ROTATION:{
      output: "direction",
      parameter: null,
      tooltip: "The rotation of this parts X-axis\, which points out of its side and is probably not what you want. You probably want the Part\:FACING suffix instead.",
      help: "http://ksp-kos.github.io/KOS_DOC/structures/vessels/part.html#attribute:PART:ROTATION"
    },
    POSITION:{
      output: "vector",
      parameter: null,
      tooltip: "The location of this part in the universe. It is expressed in the same frame of reference as all the other positions in kOS\, and thus can be used to help do things like navigate toward the position of a docking port.",
      help: "http://ksp-kos.github.io/KOS_DOC/structures/vessels/part.html#attribute:PART:POSITION"
    },
    FACING:{
      output: "direction",
      parameter: null,
      tooltip: "the direction that this part is facing.",
      help: "http://ksp-kos.github.io/KOS_DOC/structures/vessels/part.html#attribute:PART:FACING"
    },
    RESOURCES:{
      output: "list",
      parameter: null,
      tooltip: "list of the Resource in this part.",
      help: "http://ksp-kos.github.io/KOS_DOC/structures/vessels/part.html#attribute:PART:RESOURCES"
    },
    TARGETABLE:{
      output: "boolean",
      parameter: null,
      tooltip: "true if this part can be selected by KSP as a target.",
      help: "http://ksp-kos.github.io/KOS_DOC/structures/vessels/part.html#attribute:PART:TARGETABLE"
    },
    SHIP:{
      output: "vessel",
      parameter: null,
      tooltip: "the vessel that contains this part.",
      help: "http://ksp-kos.github.io/KOS_DOC/structures/vessels/part.html#attribute:PART:SHIP"
    },
    GETMODULE:{
      output: "partmodule",
      parameter: null,
      tooltip: "Get one of the PartModules attached to this part\, given the name of the module. \(See Part\:MODULES for a list of all the names available\).",
      help: "http://ksp-kos.github.io/KOS_DOC/structures/vessels/part.html#method:PART:GETMODULE"
    },
    MODULES:{
      output: "list",
      parameter: null,
      tooltip: "list of the names of PartModules enabled for this part.",
      help: "http://ksp-kos.github.io/KOS_DOC/structures/vessels/part.html#attribute:PART:MODULES"
    },
    ALLMODULES:{
      output: "list",
      parameter: null,
      tooltip: "Same as Part\:MODULES",
      help: "http://ksp-kos.github.io/KOS_DOC/structures/vessels/part.html#attribute:PART:ALLMODULES"
    },
    PARENT:{
      output: "part",
      parameter: null,
      tooltip: "When walking the tree of parts\, this is the part that this part is attached to on the way up toward the root part.",
      help: "http://ksp-kos.github.io/KOS_DOC/structures/vessels/part.html#attribute:PART:PARENT"
    },
    HASPARENT:{
      output: "boolean",
      parameter: null,
      tooltip: "When walking the tree of parts\, this is true as long as there is a parent part to this part\, and is false if this part has no parent \(which can only happen on the root part\).",
      help: "http://ksp-kos.github.io/KOS_DOC/structures/vessels/part.html#attribute:PART:HASPARENT"
    },
    HASPHYSICS:{
      output: "boolean",
      parameter: null,
      tooltip: "This comes from a parts configuration and is an artifact of the KSP simulation.",
      help: "http://ksp-kos.github.io/KOS_DOC/structures/vessels/part.html#attribute:PART:HASPHYSICS"
    },
    CHILDREN:{
      output: "list",
      parameter: null,
      tooltip: "When walking the tree of parts\, this is all the parts that are attached as children of this part. It returns a list of zero length when this part is a leaf of the parts tree.",
      help: "http://ksp-kos.github.io/KOS_DOC/structures/vessels/part.html#attribute:PART:CHILDREN"
    },
    CHILDREN:{
      output: "list",
      parameter: null,
      tooltip: "When walking the tree of parts\, this is all the parts that are attached as children of this part. It returns a list of zero length when this part is a leaf of the parts tree.",
      help: "http://ksp-kos.github.io/KOS_DOC/structures/vessels/part.html#attribute:PART:CHILDREN"
    }
  },
  init: function() {
    this.setHelpUrl("http://ksp-kos.github.io/KOS_DOC/structures/vessels/part.html");
    this.setColour(120);

    this.setOutput(true, "Any");
    this.appendValueInput("PARENT")
        .setCheck("part")
        .appendField("Get Part Property")
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

/**
 * @fileoverview blocks for The Editor. This file is based on the docs at http://ksp-kos.github.io/KOS_DOC/structures/vessels/resource.html
 * @author kos-edit@eforen.tv (Ariel Lothlorien)
 */


Blockly.Blocks.flow.HUE = 300;

Blockly.Blocks['Resource_properties'] = {
  dropdowns: [["Name", "NAME"],["Amount", "AMOUNT"],["Capacity", "CAPACITY"],["Toggleable", "TOGGLEABLE"],["Enabled", "ENABLED"]],


  DataMap: {
    NAME:{
      output: "string",
      parameter: null,
      tooltip: "The name of the resource\, i.e. LIQUIDFUEL\, ELECTRICCHARGE\, MONOPROP.",
      help: "http://ksp-kos.github.io/KOS_DOC/structures/vessels/resource.html#attribute:RESOURCE:NAME"
    },
    AMOUNT:{
      output: ["Number", "scalar"],
      parameter: null,
      tooltip: "The value of how much resource is left.",
      help: "http://ksp-kos.github.io/KOS_DOC/structures/vessels/resource.html#attribute:RESOURCE:AMOUNT"
    },
    CAPACITY:{
      output: ["Number", "scalar"],
      parameter: null,
      tooltip: "What AMOUNT would be if the resource was filled to the top.",
      help: "http://ksp-kos.github.io/KOS_DOC/structures/vessels/resource.html#attribute:RESOURCE:CAPACITY"
    },
    TOGGLEABLE:{
      output: "boolean",
      parameter: null,
      tooltip: "Many\, but not all\, resources can be turned on and off\, this removes them from the fuel flow.",
      help: "http://ksp-kos.github.io/KOS_DOC/structures/vessels/resource.html#attribute:RESOURCE:TOGGLEABLE"
    },
    ENABLED:{
      output: "boolean",
      parameter: null,
      tooltip: "If the resource is TOGGLEABLE\, setting this to false will prevent the resource from being taken out normally.",
      help: "http://ksp-kos.github.io/KOS_DOC/structures/vessels/resource.html#attribute:RESOURCE:ENABLED"
    },
    ENABLED:{
      output: "boolean",
      parameter: null,
      tooltip: "If the resource is TOGGLEABLE\, setting this to false will prevent the resource from being taken out normally.",
      help: "http://ksp-kos.github.io/KOS_DOC/structures/vessels/resource.html#attribute:RESOURCE:ENABLED"
    }
  },
  init: function() {
    this.setHelpUrl("http://ksp-kos.github.io/KOS_DOC/structures/vessels/resource.html");
    this.setColour(120);

    this.setOutput(true, "Any");
    this.appendValueInput("PARENT")
        .setCheck("resource")
        .appendField("Get Resource Property")
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

/**
 * @fileoverview blocks for The Editor. This file is based on the docs at http://ksp-kos.github.io/KOS_DOC/structures/vessels/sensor.html
 * @author kos-edit@eforen.tv (Ariel Lothlorien)
 */


Blockly.Blocks.flow.HUE = 300;

Blockly.Blocks['Sensor_properties'] = {
  dropdowns: [["Part", "Part"],["Active", "ACTIVE"],["Type", "TYPE"],["Readout", "READOUT"],["Powerconsumption", "POWERCONSUMPTION"],["Toggle()", "TOGGLE()"]],


  DataMap: {
    Part:{
      output: "",
      parameter: null,
      tooltip: "No tool tip available",
      help: "http://ksp-kos.github.io/KOS_DOC/structures/vessels/sensor.htmlpart.html#structure:PART"
    },
    ACTIVE:{
      output: "boolean",
      parameter: null,
      tooltip: "True of the sensor is enabled. Can SET to cause the sensor to activate or de-activate.",
      help: "http://ksp-kos.github.io/KOS_DOC/structures/vessels/sensor.html#attribute:SENSOR:ACTIVE"
    },
    TYPE:{
      output: "",
      parameter: null,
      tooltip: "No tool tip available",
      help: "http://ksp-kos.github.io/KOS_DOC/structures/vessels/sensor.html#attribute:SENSOR:TYPE"
    },
    READOUT:{
      output: "varies",
      parameter: null,
      tooltip: "The value of the sensors readout\, usually a double.",
      help: "http://ksp-kos.github.io/KOS_DOC/structures/vessels/sensor.html#attribute:SENSOR:READOUT"
    },
    POWERCONSUMPTION:{
      output: ["Number", "scalar"],
      parameter: null,
      tooltip: "The rate at which this sensor drains ElectricCharge.",
      help: "http://ksp-kos.github.io/KOS_DOC/structures/vessels/sensor.html#attribute:SENSOR:POWERCONSUMPTION"
    },
    TOGGLE:{
      output: "",
      parameter: null,
      tooltip: "Call this method to cause the sensor to switch between active and deactivated or visa versa.",
      help: "http://ksp-kos.github.io/KOS_DOC/structures/vessels/sensor.html#method:SENSOR:TOGGLE"
    },
    TOGGLE:{
      output: "",
      parameter: null,
      tooltip: "Call this method to cause the sensor to switch between active and deactivated or visa versa.",
      help: "http://ksp-kos.github.io/KOS_DOC/structures/vessels/sensor.html#method:SENSOR:TOGGLE"
    }
  },
  init: function() {
    this.setHelpUrl("http://ksp-kos.github.io/KOS_DOC/structures/vessels/sensor.html");
    this.setColour(120);

    this.setOutput(true, "Any");
    this.appendValueInput("PARENT")
        .setCheck("sensor")
        .appendField("Get Sensor Property")
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

/**
 * @fileoverview blocks for The Editor. This file is based on the docs at http://ksp-kos.github.io/KOS_DOC/structures/misc/terminal.html
 * @author kos-edit@eforen.tv (Ariel Lothlorien)
 */


Blockly.Blocks.flow.HUE = 300;

Blockly.Blocks['Terminal_properties'] = {
  dropdowns: [["Width", "WIDTH"],["Height", "HEIGHT"]],


  DataMap: {
    WIDTH:{
      output: "integer",
      parameter: null,
      tooltip: "If you read the width it will return a number of character cells wide the terminal\
is.  If you set this value\, it will cause the terminal to resize.\
If theres multiple terminals connected to the same CPU part via telnet clients\,\
then kOS will attempt to keep them all the same size\, and one terminal being resized\
will resize them all.  \(caveat\: Some terminal types cannot be resized from the\
server side\, and therefore this doesnt always work in both directions\).",
      help: "http://ksp-kos.github.io/KOS_DOC/structures/misc/terminal.html#attribute:TERMINAL:WIDTH"
    },
    HEIGHT:{
      output: "integer",
      parameter: null,
      tooltip: "If you read the width it will return a number of character cells tall the terminal\
is.  If you set this value\, it will cause the terminal to resize.\
If theres multiple terminals connected to the same CPU part via telnet clients\,\
then kOS will attempt to keep them all the same size\, and one terminal being resized\
will resize them all.  \(caveat\: Some terminal types cannot be resized from the\
server side\, and therefore this doesnt always work in both directions\).",
      help: "http://ksp-kos.github.io/KOS_DOC/structures/misc/terminal.html#attribute:TERMINAL:HEIGHT"
    },
    HEIGHT:{
      output: "integer",
      parameter: null,
      tooltip: "If you read the width it will return a number of character cells tall the terminal\
is.  If you set this value\, it will cause the terminal to resize.\
If theres multiple terminals connected to the same CPU part via telnet clients\,\
then kOS will attempt to keep them all the same size\, and one terminal being resized\
will resize them all.  \(caveat\: Some terminal types cannot be resized from the\
server side\, and therefore this doesnt always work in both directions\).",
      help: "http://ksp-kos.github.io/KOS_DOC/structures/misc/terminal.html#attribute:TERMINAL:HEIGHT"
    }
  },
  init: function() {
    this.setHelpUrl("http://ksp-kos.github.io/KOS_DOC/structures/misc/terminal.html");
    this.setColour(120);

    this.setOutput(true, "Any");
    this.appendValueInput("PARENT")
        .setCheck("terminal")
        .appendField("Get Terminal Property")
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

/**
 * @fileoverview blocks for The Editor. This file is based on the docs at http://ksp-kos.github.io/KOS_DOC/structures/misc/time.html
 * @author kos-edit@eforen.tv (Ariel Lothlorien)
 */


Blockly.Blocks.flow.HUE = 300;

Blockly.Blocks['TimeSpan_properties'] = {
  dropdowns: [["Clock", "CLOCK"],["Calendar", "CALENDAR"],["Second", "SECOND"],["Minute", "MINUTE"],["Hour", "HOUR"],["Day", "DAY"],["Year", "YEAR"],["Seconds", "SECONDS"]],


  DataMap: {
    CLOCK:{
      output: "string",
      parameter: null,
      tooltip: "Time in \(HH\:MM\:SS\) format.",
      help: "http://ksp-kos.github.io/KOS_DOC/structures/misc/time.html#attribute:TIMESPAN:CLOCK"
    },
    CALENDAR:{
      output: "string",
      parameter: null,
      tooltip: "Day in Year YYYY\, day DDD format. \(Kerbals dont have months.\)",
      help: "http://ksp-kos.github.io/KOS_DOC/structures/misc/time.html#attribute:TIMESPAN:CALENDAR"
    },
    SECOND:{
      output: "integer ",
      parameter: null,
      tooltip: "Second-hand number.",
      help: "http://ksp-kos.github.io/KOS_DOC/structures/misc/time.html#attribute:TIMESPAN:SECOND"
    },
    MINUTE:{
      output: "integer ",
      parameter: null,
      tooltip: "Minute-hand number",
      help: "http://ksp-kos.github.io/KOS_DOC/structures/misc/time.html#attribute:TIMESPAN:MINUTE"
    },
    HOUR:{
      output: "integer ",
      parameter: null,
      tooltip: "Hour-hand number. Kerbin has six hours in its day.",
      help: "http://ksp-kos.github.io/KOS_DOC/structures/misc/time.html#attribute:TIMESPAN:HOUR"
    },
    DAY:{
      output: "integer ",
      parameter: null,
      tooltip: "Day-hand number. Kerbin has 426 days in its year.",
      help: "http://ksp-kos.github.io/KOS_DOC/structures/misc/time.html#attribute:TIMESPAN:DAY"
    },
    YEAR:{
      output: "integer",
      parameter: null,
      tooltip: "Year-hand number",
      help: "http://ksp-kos.github.io/KOS_DOC/structures/misc/time.html#attribute:TIMESPAN:YEAR"
    },
    SECONDS:{
      output: "integer",
      parameter: null,
      tooltip: "Total Seconds since Epoch.",
      help: "http://ksp-kos.github.io/KOS_DOC/structures/misc/time.html#attribute:TIMESPAN:SECONDS"
    },
    SECONDS:{
      output: "integer",
      parameter: null,
      tooltip: "Total Seconds since Epoch.",
      help: "http://ksp-kos.github.io/KOS_DOC/structures/misc/time.html#attribute:TIMESPAN:SECONDS"
    }
  },
  init: function() {
    this.setHelpUrl("http://ksp-kos.github.io/KOS_DOC/structures/misc/time.html");
    this.setColour(120);

    this.setOutput(true, "Any");
    this.appendValueInput("PARENT")
        .setCheck("timespan")
        .appendField("Get TimeSpan Property")
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

/**
 * @fileoverview blocks for The Editor. This file is based on the docs at http://ksp-kos.github.io/KOS_DOC/structures/misc/vecdraw.html
 * @author kos-edit@eforen.tv (Ariel Lothlorien)
 */


Blockly.Blocks.flow.HUE = 300;

Blockly.Blocks['VecDraw_properties'] = {
  dropdowns: [["Start", "START"],["Vec", "VEC"],["Color", "COLOR"],["Colour", "COLOUR"],["Label", "LABEL"],["Scale", "SCALE"],["Show", "SHOW"]],


  DataMap: {
    START:{
      output: "vector",
      parameter: null,
      tooltip: "Optional\, defaults to V\(0\,0\,0\) - position of the tail of the vector to draw in SHIP-RAW coords. V\(0\,0\,0\) means the ship Center of Mass.",
      help: "http://ksp-kos.github.io/KOS_DOC/structures/misc/vecdraw.html#attribute:VECDRAW:START"
    },
    VEC:{
      output: "vector",
      parameter: null,
      tooltip: "Mandatory - The vector to draw\, SHIP-RAW Coords.",
      help: "http://ksp-kos.github.io/KOS_DOC/structures/misc/vecdraw.html#attribute:VECDRAW:VEC"
    },
    COLOR:{
      output: "color",
      parameter: null,
      tooltip: "Optional\, defaults to white. This is the color to draw the vector. There is a hard-coded fade effect where the tail is a bit more transparent than the head.",
      help: "http://ksp-kos.github.io/KOS_DOC/structures/misc/vecdraw.html#attribute:VECDRAW:COLOR"
    },
    COLOUR:{
      output: "",
      parameter: null,
      tooltip: "Alias for VecDraw\:COLOR",
      help: "http://ksp-kos.github.io/KOS_DOC/structures/misc/vecdraw.html#attribute:VECDRAW:COLOUR"
    },
    LABEL:{
      output: "string",
      parameter: null,
      tooltip: "Optional\, defaults to . Text to show on-screen at the midpoint of the vector.",
      help: "http://ksp-kos.github.io/KOS_DOC/structures/misc/vecdraw.html#attribute:VECDRAW:LABEL"
    },
    SCALE:{
      output: "integer",
      parameter: null,
      tooltip: "Optional\, defauls to 1. Scalar to multiply by both the START and the VEC",
      help: "http://ksp-kos.github.io/KOS_DOC/structures/misc/vecdraw.html#attribute:VECDRAW:SCALE"
    },
    SHOW:{
      output: "boolean",
      parameter: null,
      tooltip: "Set to true to make the arrow appear\, false to hide it. Defaults to false until youre ready to set it to true.",
      help: "http://ksp-kos.github.io/KOS_DOC/structures/misc/vecdraw.html#attribute:VECDRAW:SHOW"
    },
    SHOW:{
      output: "boolean",
      parameter: null,
      tooltip: "Set to true to make the arrow appear\, false to hide it. Defaults to false until youre ready to set it to true.",
      help: "http://ksp-kos.github.io/KOS_DOC/structures/misc/vecdraw.html#attribute:VECDRAW:SHOW"
    }
  },
  init: function() {
    this.setHelpUrl("http://ksp-kos.github.io/KOS_DOC/structures/misc/vecdraw.html");
    this.setColour(120);

    this.setOutput(true, "Any");
    this.appendValueInput("PARENT")
        .setCheck("vecdraw")
        .appendField("Get VecDraw Property")
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

/**
 * @fileoverview blocks for The Editor. This file is based on the docs at http://ksp-kos.github.io/KOS_DOC/math/vector.html
 * @author kos-edit@eforen.tv (Ariel Lothlorien)
 */


Blockly.Blocks.flow.HUE = 300;

Blockly.Blocks['Vector_properties'] = {
  dropdowns: [["X", "X"],["Y", "Y"],["Y", "Y"],["Mag", "MAG"],["Normalized", "NORMALIZED"],["Sqrmagnitude", "SQRMAGNITUDE"],["Direction", "DIRECTION"],["Vec", "VEC"]],


  DataMap: {
    X:{
      output: ["Number", "scalar"],
      parameter: null,
      tooltip: "The \\(x\\) component of the vector.",
      help: "http://ksp-kos.github.io/KOS_DOC/math/vector.html#attribute:VECTOR:X"
    },
    Y:{
      output: ["Number", "scalar"],
      parameter: null,
      tooltip: "The \\(y\\) component of the vector.",
      help: "http://ksp-kos.github.io/KOS_DOC/math/vector.html#attribute:VECTOR:Y"
    },
    Y:{
      output: ["Number", "scalar"],
      parameter: null,
      tooltip: "The \\(y\\) component of the vector.",
      help: "http://ksp-kos.github.io/KOS_DOC/math/vector.html#attribute:VECTOR:Y"
    },
    MAG:{
      output: ["Number", "scalar"],
      parameter: null,
      tooltip: "The magnitude of the vector\, as a scalar number\, by the Pythagorean Theorem.",
      help: "http://ksp-kos.github.io/KOS_DOC/math/vector.html#attribute:VECTOR:MAG"
    },
    NORMALIZED:{
      output: "vector",
      parameter: null,
      tooltip: "This creates a unit vector pointing in the same direction as this vector. This is the same effect as multiplying the vector by the scalar 1 \/ vec\:MAG.",
      help: "http://ksp-kos.github.io/KOS_DOC/math/vector.html#attribute:VECTOR:NORMALIZED"
    },
    SQRMAGNITUDE:{
      output: ["Number", "scalar"],
      parameter: null,
      tooltip: "The magnitude of the vector\, squared. Use instead of vec\:MAG\^2 if you need to square of the magnitude as this skips the step in the Pythagorean formula where you take the square root in the first place. Taking the square root and then squaring that would introduce floating point error needlessly.",
      help: "http://ksp-kos.github.io/KOS_DOC/math/vector.html#attribute:VECTOR:SQRMAGNITUDE"
    },
    DIRECTION:{
      output: "direction",
      parameter: null,
      tooltip: "No tool tip available",
      help: "http://ksp-kos.github.io/KOS_DOC/math/vector.html#attribute:VECTOR:DIRECTION"
    },
    VEC:{
      output: "vector",
      parameter: null,
      tooltip: "This is a suffix that creates a COPY of this vector. Useful if you want to copy a vector and then change the copy. Normally if you SET v2 TO v1\, then v1 and v2 are two names for the same vector and changing one would change the other.",
      help: "http://ksp-kos.github.io/KOS_DOC/math/vector.html#attribute:VECTOR:VEC"
    },
    VEC:{
      output: "vector",
      parameter: null,
      tooltip: "This is a suffix that creates a COPY of this vector. Useful if you want to copy a vector and then change the copy. Normally if you SET v2 TO v1\, then v1 and v2 are two names for the same vector and changing one would change the other.",
      help: "http://ksp-kos.github.io/KOS_DOC/math/vector.html#attribute:VECTOR:VEC"
    }
  },
  init: function() {
    this.setHelpUrl("http://ksp-kos.github.io/KOS_DOC/math/vector.html");
    this.setColour(120);

    this.setOutput(true, "Any");
    this.appendValueInput("PARENT")
        .setCheck("vector")
        .appendField("Get Vector Property")
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

/**
 * @fileoverview blocks for The Editor. This file is based on the docs at http://ksp-kos.github.io/KOS_DOC/structures/vessels/vessel.html
 * @author kos-edit@eforen.tv (Ariel Lothlorien)
 */


Blockly.Blocks.flow.HUE = 300;

Blockly.Blocks['Vessel_properties'] = {
  dropdowns: [["Control", "CONTROL"],["Bearing", "BEARING"],["Heading", "HEADING"],["Maxthrust", "MAXTHRUST"],["Facing", "FACING"],["Mass", "MASS"],["Wetmass", "WETMASS"],["Drymass", "DRYMASS"],["Verticalspeed", "VERTICALSPEED"],["Surfacespeed", "SURFACESPEED"],["Airspeed", "AIRSPEED"],["Termvelocity", "TERMVELOCITY"],["Shipname", "SHIPNAME"],["Name", "NAME"],["Angularmomentum", "ANGULARMOMENTUM"],["Angularvel", "ANGULARVEL"],["Sensors", "SENSORS"],["Loaded", "LOADED"],["Patches", "PATCHES"],["Rootpart", "ROOTPART"],["Parts", "PARTS"],["Resources", "RESOURCES"],["Partsnamed(name)", "PARTSNAMED(name)"],["Partstitled(title)", "PARTSTITLED(title)"],["Partstagged(tag)", "PARTSTAGGED(tag)"],["Partsdubbed(name)", "PARTSDUBBED(name)"],["Modulesnamed(name)", "MODULESNAMED(name)"],["Partsingroup(group)", "PARTSINGROUP(group)"],["Modulesingroup(group)", "MODULESINGROUP(group)"],["Allpartstagged()", "ALLPARTSTAGGED()"]],


  DataMap: {
    CONTROL:{
      output: "control",
      parameter: null,
      tooltip: "The structure representing the raw flight controls for the vessel.",
      help: "http://ksp-kos.github.io/KOS_DOC/structures/vessels/vessel.html#attribute:VESSEL:CONTROL"
    },
    BEARING:{
      output: ["Number", "scalar "],
      parameter: null,
      tooltip: "relative compass heading \(degrees\) to this vessel from the CPU Vessel\, taking into account the CPU Vessels own heading.",
      help: "http://ksp-kos.github.io/KOS_DOC/structures/vessels/vessel.html#attribute:VESSEL:BEARING"
    },
    HEADING:{
      output: ["Number", "scalar "],
      parameter: null,
      tooltip: "absolute compass heading \(degrees\) to this vessel from the CPU Vessel",
      help: "http://ksp-kos.github.io/KOS_DOC/structures/vessels/vessel.html#attribute:VESSEL:HEADING"
    },
    MAXTHRUST:{
      output: ["Number", "scalar"],
      parameter: null,
      tooltip: "Sum of all the Max thrust of all the currently active engines In Kilonewtons.",
      help: "http://ksp-kos.github.io/KOS_DOC/structures/vessels/vessel.html#attribute:VESSEL:MAXTHRUST"
    },
    FACING:{
      output: "direction",
      parameter: null,
      tooltip: "The way the vessel is pointed.",
      help: "http://ksp-kos.github.io/KOS_DOC/structures/vessels/vessel.html#attribute:VESSEL:FACING"
    },
    MASS:{
      output: ["Number", "scalar "],
      parameter: null,
      tooltip: "The mass of the ship",
      help: "http://ksp-kos.github.io/KOS_DOC/structures/vessels/vessel.html#attribute:VESSEL:MASS"
    },
    WETMASS:{
      output: ["Number", "scalar "],
      parameter: null,
      tooltip: "The mass of the ship if all resources were full",
      help: "http://ksp-kos.github.io/KOS_DOC/structures/vessels/vessel.html#attribute:VESSEL:WETMASS"
    },
    DRYMASS:{
      output: ["Number", "scalar "],
      parameter: null,
      tooltip: "The mass of the ship if all resources were empty",
      help: "http://ksp-kos.github.io/KOS_DOC/structures/vessels/vessel.html#attribute:VESSEL:DRYMASS"
    },
    VERTICALSPEED:{
      output: ["Number", "scalar "],
      parameter: null,
      tooltip: "How fast the ship is moving. in the up direction relative to the SOI Bodys sea level surface.",
      help: "http://ksp-kos.github.io/KOS_DOC/structures/vessels/vessel.html#attribute:VESSEL:VERTICALSPEED"
    },
    SURFACESPEED:{
      output: ["Number", "scalar "],
      parameter: null,
      tooltip: "How fast the ship is moving in the plane horizontal to the SOI bodys sea level surface.",
      help: "http://ksp-kos.github.io/KOS_DOC/structures/vessels/vessel.html#attribute:VESSEL:SURFACESPEED"
    },
    AIRSPEED:{
      output: ["Number", "scalar "],
      parameter: null,
      tooltip: "How fast the ship is moving relative to the air. KSP models atmosphere as simply a solid block of air glued to the planet surface \(the weather on Kerbin is boring and theres no wind\). Therefore airspeed is generally the same thing as as the magnitude of the surface velocity.",
      help: "http://ksp-kos.github.io/KOS_DOC/structures/vessels/vessel.html#attribute:VESSEL:AIRSPEED"
    },
    TERMVELOCITY:{
      output: ["Number", "scalar "],
      parameter: null,
      tooltip: "terminal velocity of the vessel in freefall through atmosphere\, based on the vessels current altitude above sea level\, and its drag properties. Warning\, can cause values of Infinity if used in a vacuum\, and kOS sometimes does not let you store Infinity in a variable.",
      help: "http://ksp-kos.github.io/KOS_DOC/structures/vessels/vessel.html#attribute:VESSEL:TERMVELOCITY"
    },
    SHIPNAME:{
      output: "string",
      parameter: null,
      tooltip: "The name of the vessel as it appears in the tracking station. When you set this\, it cannot be empty.",
      help: "http://ksp-kos.github.io/KOS_DOC/structures/vessels/vessel.html#attribute:VESSEL:SHIPNAME"
    },
    NAME:{
      output: "string",
      parameter: null,
      tooltip: "Same as Vessel\:SHIPNAME.",
      help: "http://ksp-kos.github.io/KOS_DOC/structures/vessels/vessel.html#attribute:VESSEL:NAME"
    },
    ANGULARMOMENTUM:{
      output: "vector",
      parameter: null,
      tooltip: "Given in SHIP\_RAW reference frame. The vector represents the axis of the rotation\, and its magnitude is the angular momentum of the rotation\, which varies not only with the speed of the rotation\, but also with the angular inertia of the vessel.",
      help: "http://ksp-kos.github.io/KOS_DOC/structures/vessels/vessel.html#attribute:VESSEL:ANGULARMOMENTUM"
    },
    ANGULARVEL:{
      output: "vector",
      parameter: null,
      tooltip: "Given in SHIP\_RAW reference frame. The vector represents the axis of the rotation\, and its magnitude is the speed of that rotation \(Presumably in degrees per second\?  This is not documented in the KSP API and may take some experimentation to discover if its radians or degrees\).",
      help: "http://ksp-kos.github.io/KOS_DOC/structures/vessels/vessel.html#attribute:VESSEL:ANGULARVEL"
    },
    SENSORS:{
      output: "vesselsensors",
      parameter: null,
      tooltip: "Structure holding summary information of sensor data for the vessel",
      help: "http://ksp-kos.github.io/KOS_DOC/structures/vessels/vessel.html#attribute:VESSEL:SENSORS"
    },
    LOADED:{
      output: "boolean",
      parameter: null,
      tooltip: "true if the vessel is fully loaded into the complete KSP physics engine \(false if its on rails\).",
      help: "http://ksp-kos.github.io/KOS_DOC/structures/vessels/vessel.html#attribute:VESSEL:LOADED"
    },
    PATCHES:{
      output: "list",
      parameter: null,
      tooltip: "The list of orbit patches that describe this vessels current travel path based on momentum alone with no thrusting changes. If the current path has no transitions to other bodies\, then this will be a list of only one orbit. If the current path intersects other bodies\, then this will be a list describing the transitions into and out of the intersecting bodys sphere of influence. SHIP\:PATCHES\[0\] is always exactly the same as SHIP\:OBT\, SHIP\:PATCHES\[1\] is the same as SHIP\:OBT\:NEXTPATCH\, SHIP\:PATCHES\[2\] is the same as SHIP\:OBT\:NEXTPATCH\:NEXTPATCH\, and so on. Note that you will only see as far into the future as your KSP settings allow. \(See the setting CONIC\_PATCH\_LIMIT in your settings.cfg file\)",
      help: "http://ksp-kos.github.io/KOS_DOC/structures/vessels/vessel.html#attribute:VESSEL:PATCHES"
    },
    ROOTPART:{
      output: "part",
      parameter: null,
      tooltip: "The first Part that was used to begin the ship design - the command core. Vessels in KSP are built in a tree-structure\, and the first part that was placed is the root of that tree.",
      help: "http://ksp-kos.github.io/KOS_DOC/structures/vessels/vessel.html#attribute:VESSEL:ROOTPART"
    },
    PARTS:{
      output: "list",
      parameter: null,
      tooltip: "A List of all the parts on the vessel. SET FOO TO SHIP\:PARTS. has exactly the same effect as LIST PARTS IN FOO.. For more information\, see ship parts and modules.",
      help: "http://ksp-kos.github.io/KOS_DOC/structures/vessels/vessel.html#attribute:VESSEL:PARTS"
    },
    RESOURCES:{
      output: "list",
      parameter: null,
      tooltip: "A List of all the AggregateResources on the vessel. SET FOO TO SHIP\:RESOURCES. has exactly the same effect as LIST RESOURCES IN FOO..",
      help: "http://ksp-kos.github.io/KOS_DOC/structures/vessels/vessel.html#attribute:VESSEL:RESOURCES"
    },
    PARTSNAMED:{
      output: "list",
      parameter: null,
      tooltip: "Part\:NAME. The matching is done case-insensitively. For more information\, see ship parts and modules.",
      help: "http://ksp-kos.github.io/KOS_DOC/structures/vessels/vessel.html#method:VESSEL:PARTSNAMED"
    },
    PARTSTITLED:{
      output: "list",
      parameter: null,
      tooltip: "Part\:TITLE. The matching is done case-insensitively. For more information\, see ship parts and modules.",
      help: "http://ksp-kos.github.io/KOS_DOC/structures/vessels/vessel.html#method:VESSEL:PARTSTITLED"
    },
    PARTSTAGGED:{
      output: "list",
      parameter: null,
      tooltip: "Part\:TAG value. The matching is done case-insensitively. For more information\, see ship parts and modules.",
      help: "http://ksp-kos.github.io/KOS_DOC/structures/vessels/vessel.html#method:VESSEL:PARTSTAGGED"
    },
    PARTSDUBBED:{
      output: "list",
      parameter: null,
      tooltip: "name regardless of whether that name is the Part\:Name\, the Part\:Tag\, or the Part\:Title. It is effectively the distinct union of \:PARTSNAMED\(val\)\, \:PARTSTITLED\(val\)\, \:PARTSTAGGED\(val\). The matching is done case-insensitively. For more information\, see ship parts and modules.",
      help: "http://ksp-kos.github.io/KOS_DOC/structures/vessels/vessel.html#method:VESSEL:PARTSDUBBED"
    },
    MODULESNAMED:{
      output: "list",
      parameter: null,
      tooltip: "match the given name. The matching is done case-insensitively. For more information\, see ship parts and modules.",
      help: "http://ksp-kos.github.io/KOS_DOC/structures/vessels/vessel.html#method:VESSEL:MODULESNAMED"
    },
    PARTSINGROUP:{
      output: "list",
      parameter: null,
      tooltip: "one action triggered by the given action group. For more information\, see ship parts and modules.",
      help: "http://ksp-kos.github.io/KOS_DOC/structures/vessels/vessel.html#method:VESSEL:PARTSINGROUP"
    },
    MODULESINGROUP:{
      output: "list",
      parameter: null,
      tooltip: "have at least one action triggered by the given action group. For more information\, see ship parts and modules.",
      help: "http://ksp-kos.github.io/KOS_DOC/structures/vessels/vessel.html#method:VESSEL:MODULESINGROUP"
    },
    ALLPARTSTAGGED:{
      output: "list",
      parameter: null,
      tooltip: "nametag on them of any sort that is nonblank. For more information\, see ship parts and modules.",
      help: "http://ksp-kos.github.io/KOS_DOC/structures/vessels/vessel.html#method:VESSEL:ALLPARTSTAGGED"
    },
    ALLPARTSTAGGED:{
      output: "list",
      parameter: null,
      tooltip: "nametag on them of any sort that is nonblank. For more information\, see ship parts and modules.",
      help: "http://ksp-kos.github.io/KOS_DOC/structures/vessels/vessel.html#method:VESSEL:ALLPARTSTAGGED"
    }
  },
  init: function() {
    this.setHelpUrl("http://ksp-kos.github.io/KOS_DOC/structures/vessels/vessel.html");
    this.setColour(120);

    this.setOutput(true, "Any");
    this.appendValueInput("PARENT")
        .setCheck("vessel")
        .appendField("Get Vessel Property")
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

/**
 * @fileoverview blocks for The Editor. This file is based on the docs at http://ksp-kos.github.io/KOS_DOC/structures/vessels/vesselsensors.html
 * @author kos-edit@eforen.tv (Ariel Lothlorien)
 */


Blockly.Blocks.flow.HUE = 300;

Blockly.Blocks['VesselSensors_properties'] = {
  dropdowns: [["Acc", "ACC"],["Pres", "PRES"],["Temp", "TEMP"],["Grav", "GRAV"],["Light", "LIGHT"]],


  DataMap: {
    ACC:{
      output: "vector",
      parameter: null,
      tooltip: "Accelleration the vessel is undergoing. A combination of both the gravitational pull and the engine thrust.",
      help: "http://ksp-kos.github.io/KOS_DOC/structures/vessels/vesselsensors.html#attribute:VESSELSENSORS:ACC"
    },
    PRES:{
      output: ["Number", "scalar"],
      parameter: null,
      tooltip: "The current pressure of this ship.",
      help: "http://ksp-kos.github.io/KOS_DOC/structures/vessels/vesselsensors.html#attribute:VESSELSENSORS:PRES"
    },
    TEMP:{
      output: ["Number", "scalar"],
      parameter: null,
      tooltip: "The current temperature.",
      help: "http://ksp-kos.github.io/KOS_DOC/structures/vessels/vesselsensors.html#attribute:VESSELSENSORS:TEMP"
    },
    GRAV:{
      output: "vector ",
      parameter: null,
      tooltip: "Magnitude and direction of gravity acceleration where the vessel currently is. Magnitude is expressed in Gs \(multiples of 9.802 m\/s\^2\).",
      help: "http://ksp-kos.github.io/KOS_DOC/structures/vessels/vesselsensors.html#attribute:VESSELSENSORS:GRAV"
    },
    LIGHT:{
      output: ["Number", "scalar"],
      parameter: null,
      tooltip: "The total amount of sun exposure that exists here - only readable if there are solar panels on the vessel.",
      help: "http://ksp-kos.github.io/KOS_DOC/structures/vessels/vesselsensors.html#attribute:VESSELSENSORS:LIGHT"
    },
    LIGHT:{
      output: ["Number", "scalar"],
      parameter: null,
      tooltip: "The total amount of sun exposure that exists here - only readable if there are solar panels on the vessel.",
      help: "http://ksp-kos.github.io/KOS_DOC/structures/vessels/vesselsensors.html#attribute:VESSELSENSORS:LIGHT"
    }
  },
  init: function() {
    this.setHelpUrl("http://ksp-kos.github.io/KOS_DOC/structures/vessels/vesselsensors.html");
    this.setColour(120);

    this.setOutput(true, "Any");
    this.appendValueInput("PARENT")
        .setCheck("vesselsensors")
        .appendField("Get VesselSensors Property")
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


'use strict';

goog.require('Blockly.Blocks');

goog.require('Blockly.Blocks.texts');

//http://ksp-kos.github.io/KOS_DOC/language/features.html?highlight=print#strings
Blockly.Blocks['lang_declare'] = {
  init: function() {
    this.setHelpUrl('http://ksp-kos.github.io/KOS_DOC/language/variables.html?highlight=declare#declare');
    this.setColour(330);
    this.appendValueInput("VAR")
        .appendField("Declare");
    this.appendValueInput("VALUE")
        .appendField("To");
    this.setInputsInline(true);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip('This allows you to define a var in a scope of your choice.');
  }
};

Blockly.Blocks['lang_declare_parameter'] = {
  init: function() {
    this.setHelpUrl('http://ksp-kos.github.io/KOS_DOC/language/variables.html?highlight=declare#declare-parameter');
    this.setColour(330);
    this.appendValueInput("VAR")
        .appendField("Declare");
    this.appendValueInput("VALUE")
        .appendField("To");
    this.setInputsInline(true);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip('This allows you to define variables to be used as a parameter that can be passed in using the RUN command.');
  }
};
/**
 * @fileoverview Vector blocks for The Editor.
 * @author kos-edit@eforen.tv (Ariel Lothlorien)
 */
'use strict';

goog.provide('Blockly.Blocks.vector');

goog.require('Blockly.Blocks');

Blockly.Blocks['vector_math'] = {
  init: function() {
    this.setColour(160);
    this.appendDummyInput()
        .appendField("Vector");
    this.appendValueInput("var1")
        .setCheck(["vector"]);
    this.appendDummyInput()
        .appendField(new Blockly.FieldDropdown([["+", "ADD"], ["-", "SUBTRACT"], ["*", "MULTIPLY"], ["Dot Product", "VECTORDOTPRODUCT"], ["Cross Product", "VECTORCROSSPRODUCT"], ["Angle To", "VECTORANGLE"], ["Exclude From", "VECTOREXCLUDE"]]), "OP");
    this.appendValueInput("var2")
        .setCheck(["Number", "vector"]);
    this.setInputsInline(true);
    this.setOutput(true, ["struct", "vector"]);
    // Assign 'this' to a variable for use in the tooltip and help closure below.
    var thisBlock = this;

    this.setHelpUrl(function() {
      var mode = thisBlock.getFieldValue('OP');
      var URLs = {
        'ADD': 'http://ksp-kos.github.io/KOS_DOC/math/vector.html#id1',
        'SUBTRACT': 'http://ksp-kos.github.io/KOS_DOC/math/vector.html#id1',
        'MULTIPLY': 'http://ksp-kos.github.io/KOS_DOC/math/vector.html#vector',
        'VECTORDOTPRODUCT': 'http://ksp-kos.github.io/KOS_DOC/math/vector.html#function:VECTORDOTPRODUCT',
        'VECTORCROSSPRODUCT': 'http://ksp-kos.github.io/KOS_DOC/math/vector.html#function:VECTORCROSSPRODUCT',
        'VECTORANGLE': 'http://ksp-kos.github.io/KOS_DOC/math/vector.html#function:VECTORANGLE',
        'VECTOREXCLUDE': 'http://ksp-kos.github.io/KOS_DOC/math/vector.html#function:VECTOREXCLUDE'
      };
      return URLs[mode];
    });

    this.setTooltip(function() {
      var mode = thisBlock.getFieldValue('OP');
      var TOOLTIPS = {
        'ADD': "Vector addition by a scalar or another Vector",
        'SUBTRACT': "Vector subtraction by a scalar or another Vector",
        'MULTIPLY': "Scalar multiplication or dot product of two Vectors",
        'VECTORDOTPRODUCT': "The vector cross product of two vectors in the order (v1,v2) returning a new Vector",
        'VECTORCROSSPRODUCT': "The vector cross product of two vectors in the order (v1,v2) returning a new Vector",
        'VECTORANGLE': "This returns the angle between v1 and v2",
        'VECTOREXCLUDE': "This is a vector, v2 with all of v1 excluded from it. In other words, the projection of v2 onto the plane that is normal to v1."
      };
      return TOOLTIPS[mode];
    });
  }
};

Blockly.Blocks['vector_construct'] = {
  init: function() {
    this.setHelpUrl('http://ksp-kos.github.io/KOS_DOC/math/vector.html#creation');
    this.setColour(160);
    this.appendDummyInput()
        .appendField("Vector (");
    this.appendValueInput("X")
        .setCheck("Number")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("X");
    this.appendValueInput("Y")
        .setCheck("Number")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("Y");
    this.appendValueInput("Z")
        .setCheck("Number")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("Z");
    this.appendDummyInput()
        .appendField(")");
    this.setInputsInline(true);
    this.setOutput(true, ["struct", "vector"]);
    this.setTooltip('This creates a new vector from 3 components in (x,y,z):');
  }
};

Blockly.Blocks['workaround_input'] = {
  init: function() {
    this.setHelpUrl("#");
    //this.setColour(Blockly.Blocks.texts.HUE);
    this.appendDummyInput()
        .appendField("Raw Code Output")
        .appendField(new Blockly.FieldTextInput(''), 'CODE');
    this.setOutput(true);
    this.setTooltip("Raw Code Input");
  }
};
Blockly.Blocks['workaround_input_flow'] = {
  init: function() {
    this.setHelpUrl("#");
    //this.setColour(Blockly.Blocks.texts.HUE);
    this.appendDummyInput()
        .appendField("Raw Code")
        .appendField(new Blockly.FieldTextInput(''), 'CODE');
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip("Raw Line of Code");
  }
};
/****************************
 ** KerboScript Generators **
 ****************************/

// Start of Base File
/**
 * Some of this file falls under the following license
 * @license
 * Visual Blocks Language
 *
 * Copyright 2012 Google Inc.
 * https://developers.google.com/blockly/
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * @fileoverview Helper functions for generating kOS for blocks.
 * @author fraser@google.com (Neil Fraser)
 */
//'use strict';

//goog.provide('Blockly.kOS');

//goog.require('Blockly.Generator');


/**
 * kOS code generator.
 * @type !Blockly.Generator
 */
Blockly.kOS = new Blockly.Generator('kOS');

/**
 * List of illegal variable names.
 * This is not intended to be a security feature.  Blockly is 100% client-side,
 * so bypassing this list is trivial.  This is intended to prevent users from
 * accidentally clobbering a built-in object or function.
 * @private
 */
Blockly.kOS.addReservedWords(
    'Blockly,' +  // In case JS is evaled in the current window.
    // https://developer.mozilla.org/en/kOS/Reference/Reserved_Words
    'break,case,catch,continue,debugger,default,delete,do,else,finally,for,function,if,in,instanceof,new,return,switch,this,throw,try,typeof,var,void,while,with,' +
    'class,enum,export,extends,import,super,implements,interface,let,package,private,protected,public,static,yield,' +
    'const,null,true,false,' +
    // https://developer.mozilla.org/en/kOS/Reference/Global_Objects
    'Array,ArrayBuffer,Boolean,Date,decodeURI,decodeURIComponent,encodeURI,encodeURIComponent,Error,eval,EvalError,Float32Array,Float64Array,Function,Infinity,Int16Array,Int32Array,Int8Array,isFinite,isNaN,Iterator,JSON,Math,NaN,Number,Object,parseFloat,parseInt,RangeError,ReferenceError,RegExp,StopIteration,String,SyntaxError,TypeError,Uint16Array,Uint32Array,Uint8Array,Uint8ClampedArray,undefined,uneval,URIError,' +
    // https://developer.mozilla.org/en/DOM/window
    'applicationCache,closed,Components,content,_content,controllers,crypto,defaultStatus,dialogArguments,directories,document,frameElement,frames,fullScreen,globalStorage,history,innerHeight,innerWidth,length,location,locationbar,localStorage,menubar,messageManager,mozAnimationStartTime,mozInnerScreenX,mozInnerScreenY,mozPaintCount,name,navigator,opener,outerHeight,outerWidth,pageXOffset,pageYOffset,parent,performance,personalbar,pkcs11,returnValue,screen,screenX,screenY,scrollbars,scrollMaxX,scrollMaxY,scrollX,scrollY,self,sessionStorage,sidebar,status,statusbar,toolbar,top,URL,window,' +
    'addEventListener,alert,atob,back,blur,btoa,captureEvents,clearImmediate,clearInterval,clearTimeout,close,confirm,disableExternalCapture,dispatchEvent,dump,enableExternalCapture,escape,find,focus,forward,GeckoActiveXObject,getAttention,getAttentionWithCycleCount,getComputedStyle,getSelection,home,matchMedia,maximize,minimize,moveBy,moveTo,mozRequestAnimationFrame,open,openDialog,postMessage,print,prompt,QueryInterface,releaseEvents,removeEventListener,resizeBy,resizeTo,restore,routeEvent,scroll,scrollBy,scrollByLines,scrollByPages,scrollTo,setCursor,setImmediate,setInterval,setResizable,setTimeout,showModalDialog,sizeToContent,stop,unescape,updateCommands,XPCNativeWrapper,XPCSafeJSObjectWrapper,' +
    'onabort,onbeforeunload,onblur,onchange,onclick,onclose,oncontextmenu,ondevicemotion,ondeviceorientation,ondragdrop,onerror,onfocus,onhashchange,onkeydown,onkeypress,onkeyup,onload,onmousedown,onmousemove,onmouseout,onmouseover,onmouseup,onmozbeforepaint,onpaint,onpopstate,onreset,onresize,onscroll,onselect,onsubmit,onunload,onpageshow,onpagehide,' +
    'Image,Option,Worker,' +
    // https://developer.mozilla.org/en/Gecko_DOM_Reference
    'Event,Range,File,FileReader,Blob,BlobBuilder,' +
    'Attr,CDATASection,CharacterData,Comment,console,DocumentFragment,DocumentType,DomConfiguration,DOMError,DOMErrorHandler,DOMException,DOMImplementation,DOMImplementationList,DOMImplementationRegistry,DOMImplementationSource,DOMLocator,DOMObject,DOMString,DOMStringList,DOMTimeStamp,DOMUserData,Entity,EntityReference,MediaQueryList,MediaQueryListListener,NameList,NamedNodeMap,Node,NodeFilter,NodeIterator,NodeList,Notation,Plugin,PluginArray,ProcessingInstruction,SharedWorker,Text,TimeRanges,Treewalker,TypeInfo,UserDataHandler,Worker,WorkerGlobalScope,' +
    'HTMLDocument,HTMLElement,HTMLAnchorElement,HTMLAppletElement,HTMLAudioElement,HTMLAreaElement,HTMLBaseElement,HTMLBaseFontElement,HTMLBodyElement,HTMLBRElement,HTMLButtonElement,HTMLCanvasElement,HTMLDirectoryElement,HTMLDivElement,HTMLDListElement,HTMLEmbedElement,HTMLFieldSetElement,HTMLFontElement,HTMLFormElement,HTMLFrameElement,HTMLFrameSetElement,HTMLHeadElement,HTMLHeadingElement,HTMLHtmlElement,HTMLHRElement,HTMLIFrameElement,HTMLImageElement,HTMLInputElement,HTMLKeygenElement,HTMLLabelElement,HTMLLIElement,HTMLLinkElement,HTMLMapElement,HTMLMenuElement,HTMLMetaElement,HTMLModElement,HTMLObjectElement,HTMLOListElement,HTMLOptGroupElement,HTMLOptionElement,HTMLOutputElement,HTMLParagraphElement,HTMLParamElement,HTMLPreElement,HTMLQuoteElement,HTMLScriptElement,HTMLSelectElement,HTMLSourceElement,HTMLSpanElement,HTMLStyleElement,HTMLTableElement,HTMLTableCaptionElement,HTMLTableCellElement,HTMLTableDataCellElement,HTMLTableHeaderCellElement,HTMLTableColElement,HTMLTableRowElement,HTMLTableSectionElement,HTMLTextAreaElement,HTMLTimeElement,HTMLTitleElement,HTMLTrackElement,HTMLUListElement,HTMLUnknownElement,HTMLVideoElement,' +
    'HTMLCanvasElement,CanvasRenderingContext2D,CanvasGradient,CanvasPattern,TextMetrics,ImageData,CanvasPixelArray,HTMLAudioElement,HTMLVideoElement,NotifyAudioAvailableEvent,HTMLCollection,HTMLAllCollection,HTMLFormControlsCollection,HTMLOptionsCollection,HTMLPropertiesCollection,DOMTokenList,DOMSettableTokenList,DOMStringMap,RadioNodeList,' +
    'SVGDocument,SVGElement,SVGAElement,SVGAltGlyphElement,SVGAltGlyphDefElement,SVGAltGlyphItemElement,SVGAnimationElement,SVGAnimateElement,SVGAnimateColorElement,SVGAnimateMotionElement,SVGAnimateTransformElement,SVGSetElement,SVGCircleElement,SVGClipPathElement,SVGColorProfileElement,SVGCursorElement,SVGDefsElement,SVGDescElement,SVGEllipseElement,SVGFilterElement,SVGFilterPrimitiveStandardAttributes,SVGFEBlendElement,SVGFEColorMatrixElement,SVGFEComponentTransferElement,SVGFECompositeElement,SVGFEConvolveMatrixElement,SVGFEDiffuseLightingElement,SVGFEDisplacementMapElement,SVGFEDistantLightElement,SVGFEFloodElement,SVGFEGaussianBlurElement,SVGFEImageElement,SVGFEMergeElement,SVGFEMergeNodeElement,SVGFEMorphologyElement,SVGFEOffsetElement,SVGFEPointLightElement,SVGFESpecularLightingElement,SVGFESpotLightElement,SVGFETileElement,SVGFETurbulenceElement,SVGComponentTransferFunctionElement,SVGFEFuncRElement,SVGFEFuncGElement,SVGFEFuncBElement,SVGFEFuncAElement,SVGFontElement,SVGFontFaceElement,SVGFontFaceFormatElement,SVGFontFaceNameElement,SVGFontFaceSrcElement,SVGFontFaceUriElement,SVGForeignObjectElement,SVGGElement,SVGGlyphElement,SVGGlyphRefElement,SVGGradientElement,SVGLinearGradientElement,SVGRadialGradientElement,SVGHKernElement,SVGImageElement,SVGLineElement,SVGMarkerElement,SVGMaskElement,SVGMetadataElement,SVGMissingGlyphElement,SVGMPathElement,SVGPathElement,SVGPatternElement,SVGPolylineElement,SVGPolygonElement,SVGRectElement,SVGScriptElement,SVGStopElement,SVGStyleElement,SVGSVGElement,SVGSwitchElement,SVGSymbolElement,SVGTextElement,SVGTextPathElement,SVGTitleElement,SVGTRefElement,SVGTSpanElement,SVGUseElement,SVGViewElement,SVGVKernElement,' +
    'SVGAngle,SVGColor,SVGICCColor,SVGElementInstance,SVGElementInstanceList,SVGLength,SVGLengthList,SVGMatrix,SVGNumber,SVGNumberList,SVGPaint,SVGPoint,SVGPointList,SVGPreserveAspectRatio,SVGRect,SVGStringList,SVGTransform,SVGTransformList,' +
    'SVGAnimatedAngle,SVGAnimatedBoolean,SVGAnimatedEnumeration,SVGAnimatedInteger,SVGAnimatedLength,SVGAnimatedLengthList,SVGAnimatedNumber,SVGAnimatedNumberList,SVGAnimatedPreserveAspectRatio,SVGAnimatedRect,SVGAnimatedString,SVGAnimatedTransformList,' +
    'SVGPathSegList,SVGPathSeg,SVGPathSegArcAbs,SVGPathSegArcRel,SVGPathSegClosePath,SVGPathSegCurvetoCubicAbs,SVGPathSegCurvetoCubicRel,SVGPathSegCurvetoCubicSmoothAbs,SVGPathSegCurvetoCubicSmoothRel,SVGPathSegCurvetoQuadraticAbs,SVGPathSegCurvetoQuadraticRel,SVGPathSegCurvetoQuadraticSmoothAbs,SVGPathSegCurvetoQuadraticSmoothRel,SVGPathSegLinetoAbs,SVGPathSegLinetoHorizontalAbs,SVGPathSegLinetoHorizontalRel,SVGPathSegLinetoRel,SVGPathSegLinetoVerticalAbs,SVGPathSegLinetoVerticalRel,SVGPathSegMovetoAbs,SVGPathSegMovetoRel,ElementTimeControl,TimeEvent,SVGAnimatedPathData,' +
    'SVGAnimatedPoints,SVGColorProfileRule,SVGCSSRule,SVGExternalResourcesRequired,SVGFitToViewBox,SVGLangSpace,SVGLocatable,SVGRenderingIntent,SVGStylable,SVGTests,SVGTextContentElement,SVGTextPositioningElement,SVGTransformable,SVGUnitTypes,SVGURIReference,SVGViewSpec,SVGZoomAndPan');

/**
 * Order of operation ENUMs.
 * https://developer.mozilla.org/en/kOS/Reference/Operators/Operator_Precedence
 */
Blockly.kOS.ORDER_ATOMIC = 0;         // 0 "" ...
Blockly.kOS.ORDER_MEMBER = 1;         // . []
Blockly.kOS.ORDER_NEW = 1;            // new
Blockly.kOS.ORDER_FUNCTION_CALL = 2;  // ()
Blockly.kOS.ORDER_INCREMENT = 3;      // ++
Blockly.kOS.ORDER_DECREMENT = 3;      // --
Blockly.kOS.ORDER_LOGICAL_NOT = 4;    // !
Blockly.kOS.ORDER_BITWISE_NOT = 4;    // ~
Blockly.kOS.ORDER_UNARY_PLUS = 4;     // +
Blockly.kOS.ORDER_UNARY_NEGATION = 4; // -
Blockly.kOS.ORDER_TYPEOF = 4;         // typeof
Blockly.kOS.ORDER_VOID = 4;           // void
Blockly.kOS.ORDER_DELETE = 4;         // delete
Blockly.kOS.ORDER_MULTIPLICATION = 5; // *
Blockly.kOS.ORDER_DIVISION = 5;       // /
Blockly.kOS.ORDER_MODULUS = 5;        // %
Blockly.kOS.ORDER_ADDITION = 6;       // +
Blockly.kOS.ORDER_SUBTRACTION = 6;    // -
Blockly.kOS.ORDER_BITWISE_SHIFT = 7;  // << >> >>>
Blockly.kOS.ORDER_RELATIONAL = 8;     // < <= > >=
Blockly.kOS.ORDER_IN = 8;             // in
Blockly.kOS.ORDER_INSTANCEOF = 8;     // instanceof
Blockly.kOS.ORDER_EQUALITY = 9;       // == != === !==
Blockly.kOS.ORDER_BITWISE_AND = 10;   // &
Blockly.kOS.ORDER_BITWISE_XOR = 11;   // ^
Blockly.kOS.ORDER_BITWISE_OR = 12;    // |
Blockly.kOS.ORDER_LOGICAL_AND = 13;   // &&
Blockly.kOS.ORDER_LOGICAL_OR = 14;    // ||
Blockly.kOS.ORDER_CONDITIONAL = 15;   // ?:
Blockly.kOS.ORDER_ASSIGNMENT = 16;    // = += -= *= /= %= <<= >>= ...
Blockly.kOS.ORDER_COMMA = 17;         // ,
Blockly.kOS.ORDER_NONE = 99;          // (...)

Blockly.kOS.LAZYGLOBALS = true;
/**
 * Initialise the database of variable names.
 * @param {!Blockly.Workspace} workspace Workspace to generate code from.
 */
Blockly.kOS.init = function(workspace) {
  // Create a dictionary of definitions to be printed before the code.
  Blockly.kOS.definitions_ = Object.create(null);
  // Create a dictionary mapping desired function names in definitions_
  // to actual function names (to avoid collisions with user functions).
  Blockly.kOS.functionNames_ = Object.create(null);

  if (!Blockly.kOS.variableDB_) {
    Blockly.kOS.variableDB_ =
        new Blockly.Names(Blockly.kOS.RESERVED_WORDS_);
  } else {
    Blockly.kOS.variableDB_.reset();
  }

  var defvars = [];
  var variables = Blockly.Variables.allVariables(workspace);
  for (var x = 0; x < variables.length; x++) {
    defvars[x] = 'declare ' +
        Blockly.kOS.variableDB_.getName(variables[x],
        Blockly.Variables.NAME_TYPE) + '.';
  }
  Blockly.kOS.definitions_['variables'] = defvars.join('\n');
};

/**
 * Prepend the generated code with the variable definitions.
 * @param {string} code Generated code.
 * @return {string} Completed code.
 */
Blockly.kOS.finish = function(code) {
  // Convert the definitions dictionary into a list.
  var definitions = [];

  definitions.push('// Code Generated by kOS IDE at koside.eforen.tv');

  if(Blockly.kOS.LAZYGLOBALS) definitions.push('//Set Variable Handelling Compiler Directive\n@LAZYGLOBALS on');
  else definitions.push('//Set Variable Handelling Compiler Directive\n@LAZYGLOBALS off');
  for (var name in Blockly.kOS.definitions_) {
    if(name == 'variables' && !Blockly.kOS.LAZYGLOBALS) continue;
    definitions.push(Blockly.kOS.definitions_[name]);
  }

  if(Blockly.kOS.FIXSAS){
    definitions.push('//Set Fix for SAS override of kOS control.\nSAS OFF');
  }

  return definitions.join('\n\n') + '\n' + code;
};

/**
 * Naked values are top-level blocks with outputs that aren't plugged into
 * anything.  A trailing semicolon is needed to make this legal.
 * @param {string} line Line of generated code.
 * @return {string} Legal line of code.
 */
Blockly.kOS.scrubNakedValue = function(line) {
  return line + '.\n';
};

/**
 * Encode a string as a properly escaped kOS string, complete with
 * quotes.
 * @param {string} string Text to encode.
 * @return {string} kOS string.
 * @private
 */
Blockly.kOS.quote_ = function(string) {
  // TODO: This is a quick hack.  Replace with goog.string.quote
  string = string.replace(/\\/g, '\\\\')
                 .replace(/\n/g, '\\\n')
                 .replace(/'/g, '\\\'');
  return '\'' + string + '\'';
};

/**
 * Common tasks for generating kOS from blocks.
 * Handles comments for the specified block and any connected value blocks.
 * Calls any statements following this block.
 * @param {!Blockly.Block} block The current block.
 * @param {string} code The kOS code created for this block.
 * @return {string} kOS code with comments and subsequent blocks added.
 * @private
 */
Blockly.kOS.scrub_ = function(block, code) {
  var commentCode = '';
  // Only collect comments for blocks that aren't inline.
  if (!block.outputConnection || !block.outputConnection.targetConnection) {
    // Collect comment for this block.
    var comment = block.getCommentText();
    if (comment) {
      commentCode += Blockly.kOS.prefixLines(comment, '// ') + '\n';
    }
    // Collect comments for all value arguments.
    // Don't collect comments for nested statements.
    for (var x = 0; x < block.inputList.length; x++) {
      if (block.inputList[x].type == Blockly.INPUT_VALUE) {
        var childBlock = block.inputList[x].connection.targetBlock();
        if (childBlock) {
          var comment = Blockly.kOS.allNestedComments(childBlock);
          if (comment) {
            commentCode += Blockly.kOS.prefixLines(comment, '// ');
          }
        }
      }
    }
  }
  var nextBlock = block.nextConnection && block.nextConnection.targetBlock();
  var nextCode = Blockly.kOS.blockToCode(nextBlock);
  return commentCode + code + nextCode;
};

// End of Base File

/**
 * @license
 * Visual Blocks Language
 *
 * Copyright 2012 Google Inc.
 * https://developers.google.com/blockly/
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * @fileoverview Generating kOS for colour blocks.
 * @author fraser@google.com (Neil Fraser)
 */
'use strict';

goog.provide('Blockly.kOS.colour');

goog.require('Blockly.kOS');


Blockly.kOS['colour_picker'] = function(block) {
  // Colour picker.
  var code = '\'' + block.getFieldValue('COLOUR') + '\'';
  return [code, Blockly.kOS.ORDER_ATOMIC];
};

Blockly.kOS['colour_random'] = function(block) {
  // Generate a random colour.
  var functionName = Blockly.kOS.provideFunction_(
      'colour_random',
      [ 'function ' + Blockly.kOS.FUNCTION_NAME_PLACEHOLDER_ + '() {',
        '  var num = Math.floor(Math.random() * Math.pow(2, 24));',
        '  return \'#\' + (\'00000\' + num.toString(16)).substr(-6);',
        '}']);
  var code = functionName + '()';
  return [code, Blockly.kOS.ORDER_FUNCTION_CALL];
};

Blockly.kOS['colour_rgb'] = function(block) {
  // Compose a colour from RGB components expressed as percentages.
  var red = Blockly.kOS.valueToCode(block, 'RED',
      Blockly.kOS.ORDER_COMMA) || 0;
  var green = Blockly.kOS.valueToCode(block, 'GREEN',
      Blockly.kOS.ORDER_COMMA) || 0;
  var blue = Blockly.kOS.valueToCode(block, 'BLUE',
      Blockly.kOS.ORDER_COMMA) || 0;
  var functionName = Blockly.kOS.provideFunction_(
      'colour_rgb',
      [ 'function ' + Blockly.kOS.FUNCTION_NAME_PLACEHOLDER_ +
          '(r, g, b) {',
        '  r = Math.max(Math.min(Number(r), 100), 0) * 2.55;',
        '  g = Math.max(Math.min(Number(g), 100), 0) * 2.55;',
        '  b = Math.max(Math.min(Number(b), 100), 0) * 2.55;',
        '  r = (\'0\' + (Math.round(r) || 0).toString(16)).slice(-2);',
        '  g = (\'0\' + (Math.round(g) || 0).toString(16)).slice(-2);',
        '  b = (\'0\' + (Math.round(b) || 0).toString(16)).slice(-2);',
        '  return \'#\' + r + g + b;',
        '}']);
  var code = functionName + '(' + red + ', ' + green + ', ' + blue + ')';
  return [code, Blockly.kOS.ORDER_FUNCTION_CALL];
};

Blockly.kOS['colour_blend'] = function(block) {
  // Blend two colours together.
  var c1 = Blockly.kOS.valueToCode(block, 'COLOUR1',
      Blockly.kOS.ORDER_COMMA) || '\'#000000\'';
  var c2 = Blockly.kOS.valueToCode(block, 'COLOUR2',
      Blockly.kOS.ORDER_COMMA) || '\'#000000\'';
  var ratio = Blockly.kOS.valueToCode(block, 'RATIO',
      Blockly.kOS.ORDER_COMMA) || 0.5;
  var functionName = Blockly.kOS.provideFunction_(
      'colour_blend',
      [ 'function ' + Blockly.kOS.FUNCTION_NAME_PLACEHOLDER_ +
          '(c1, c2, ratio) {',
        '  ratio = Math.max(Math.min(Number(ratio), 1), 0);',
        '  var r1 = parseInt(c1.substring(1, 3), 16);',
        '  var g1 = parseInt(c1.substring(3, 5), 16);',
        '  var b1 = parseInt(c1.substring(5, 7), 16);',
        '  var r2 = parseInt(c2.substring(1, 3), 16);',
        '  var g2 = parseInt(c2.substring(3, 5), 16);',
        '  var b2 = parseInt(c2.substring(5, 7), 16);',
        '  var r = Math.round(r1 * (1 - ratio) + r2 * ratio);',
        '  var g = Math.round(g1 * (1 - ratio) + g2 * ratio);',
        '  var b = Math.round(b1 * (1 - ratio) + b2 * ratio);',
        '  r = (\'0\' + (r || 0).toString(16)).slice(-2);',
        '  g = (\'0\' + (g || 0).toString(16)).slice(-2);',
        '  b = (\'0\' + (b || 0).toString(16)).slice(-2);',
        '  return \'#\' + r + g + b;',
        '}']);
  var code = functionName + '(' + c1 + ', ' + c2 + ', ' + ratio + ')';
  return [code, Blockly.kOS.ORDER_FUNCTION_CALL];
};

/**
 * @fileoverview Comment blocks for The Editor.
 * @author kos-edit@eforen.tv (Ariel Lothlorien)
 */
'use strict';

goog.provide('Blockly.kOS.Comments');

goog.require('Blockly.kOS');

Blockly.kOS['comment'] = function(block) {
  return '';
  //var text_data = block.getFieldValue('TEXT');
  //var code = '//'+text_data+'\n';
  //return code;
};
/**
 * @fileoverview blocks for The Editor. This file is based on the docs at http://ksp-kos.github.io/KOS_DOC/commands/flight/pilot.html
 * @author kos-edit@eforen.tv (Ariel Lothlorien)
 */

Blockly.kOS['RawControl_properties'] = function(block) {
  var parentcode = Blockly.kOS.valueToCode(block, 'PARENT', Blockly.kOS.ORDER_NONE);
  var thisname = block.getFieldValue('NAME');
  var code = parentcode+':'+thisname;
  if(code.charAt(0) == ':') code = thisname;
  return [code, Blockly.kOS.ORDER_NONE];
};

Blockly.kOS['PilotControl_properties'] = function(block) {
  var parentcode = Blockly.kOS.valueToCode(block, 'PARENT', Blockly.kOS.ORDER_NONE);
  var thisname = block.getFieldValue('NAME');
  if(code.charAt(0) == ':') code = thisname;
  return [code, Blockly.kOS.ORDER_NONE];
};
/**
 * @fileoverview Ship System blocks for The Editor.
 * @author kos-edit@eforen.tv (Ariel Lothlorien)
 */

Blockly.kOS['kos_shipsys_rcs'] = function(block) {
  var value = Blockly.kOS.valueToCode(block, 'STATE', Blockly.kOS.ORDER_NONE);
  if (value == "true") value = "ON"
  if (value == "false") value = "OFF"
  return ["RCS "+value+".", Blockly.kOS.ORDER_NONE];
};
Blockly.kOS['kos_shipsys_sas'] = function(block) {
  var value = Blockly.kOS.valueToCode(block, 'STATE', Blockly.kOS.ORDER_NONE);
  if (value == "true") value = "ON"
  if (value == "false") value = "OFF"
  return ["SAS "+value+".", Blockly.kOS.ORDER_NONE];
};
Blockly.kOS['kos_shipsys_lights'] = function(block) {
  var value = Blockly.kOS.valueToCode(block, 'STATE', Blockly.kOS.ORDER_NONE);
  if (value == "true") value = "ON"
  if (value == "false") value = "OFF"
  return ["LIGHTS "+value+".", Blockly.kOS.ORDER_NONE];
};
Blockly.kOS['kos_shipsys_brakes'] = function(block) {
  var value = Blockly.kOS.valueToCode(block, 'STATE', Blockly.kOS.ORDER_NONE);
  if (value == "true") value = "ON"
  if (value == "false") value = "OFF"
  return ["BRAKES "+value+".", Blockly.kOS.ORDER_NONE];
};

Blockly.Blocks['kos_shipsys_target']
Blockly.kOS['vessel_byname'] = function(block) {
  var value = Blockly.kOS.valueToCode(block, 'NAME', Blockly.kOS.ORDER_NONE);
  var code = 'SET TARGET TO '+value+".";
  return [code, Blockly.kOS.ORDER_NONE];
};

Blockly.kOS['kos_shipsys_rcs_key'] = function(block) {
  return ["RCS", Blockly.kOS.ORDER_NONE];
};
Blockly.kOS['kos_shipsys_sas_key'] = function(block) {
  return ["SAS", Blockly.kOS.ORDER_NONE];
};
Blockly.kOS['kos_shipsys_lights_key'] = function(block) {
  return ["LIGHTS", Blockly.kOS.ORDER_NONE];
};
Blockly.kOS['kos_shipsys_brakes_key'] = function(block) {
  return ["BRAKES", Blockly.kOS.ORDER_NONE];
};
/**
 * @fileoverview Flight Control blocks for The Editor.
 * @author kos-edit@eforen.tv (Ariel Lothlorien)
 */
'use strict';

'use strict';

goog.provide('Blockly.kOS.variables');

goog.require('Blockly.kOS');

Blockly.kOS['kos_stage'] = function(block) {
  var code = 'STAGE. \n';
  return code;
};

Blockly.kOS['kos_wait'] = function(block) {
  var value_time = Blockly.kOS.valueToCode(block, 'TIME', Blockly.kOS.ORDER_ASSIGNMENT) || '0';
  var code = 'WAIT ' + value_time + '. \n';
  return code;
};

Blockly.kOS['kos_wait_until'] = function(block) {
  var argument = Blockly.kOS.valueToCode(block, 'CONDITION', Blockly.kOS.ORDER_NONE) || 'true';
  var code = 'WAIT UNTIL ' + argument + '. \n';
  return code;
};

Blockly.kOS['kos_lock'] = function(block) {
  var value_target = Blockly.kOS.valueToCode(block, 'TARGET', Blockly.kOS.ORDER_ATOMIC);
  var value_value = Blockly.kOS.valueToCode(block, 'VALUE', Blockly.kOS.ORDER_ATOMIC);
  // TODO: Assemble kOS into code variable.
  var code = 'LOCK ' + value_target + ' TO '+value_value+'. \n';
  return code;
};

Blockly.kOS['kos_set'] = function(block) {
  var value_target = Blockly.kOS.valueToCode(block, 'TARGET', Blockly.kOS.ORDER_ATOMIC);
  var value_value = Blockly.kOS.valueToCode(block, 'VALUE', Blockly.kOS.ORDER_ATOMIC);
  // TODO: Assemble kOS into code variable.
  var code = 'SET ' + value_target + ' TO '+value_value+'. \n';
  return code;
};

Blockly.kOS['kos_toggle'] = function(block) {
  var value_target = Blockly.kOS.valueToCode(block, 'TARGET', Blockly.kOS.ORDER_ATOMIC);
  // TODO: Assemble kOS into code variable.
  var code = 'TOGGLE ' + value_target + '. \n';
  return code;
};

Blockly.kOS['kos_ontrigger'] = function(block) {
  var value_trigger = Blockly.kOS.valueToCode(block, 'TRIGGER', Blockly.kOS.ORDER_NONE) || 'false';
  var statements_code = Blockly.kOS.statementToCode(block, 'CODE');
  // TODO: Assemble kOS into code variable.
  var code = 'ON ' + value_trigger + ' {\n' +statements_code + '} \n';
  return code;
};
Blockly.kOS['kos_lazyglobal'] = function(block) {
  var checkbox_lazy = block.getFieldValue('lazy') == 'TRUE';
  var code = '// We set the compiler directive @LAZYGLOBAL';
  if (checkbox_lazy) code += 'off';
  else code += 'on';
  Blockly.kOS.LAZYGLOBALS = !checkbox_lazy;
  return code;
};

Blockly.kOS['kos_sas-correction'] = function(block) {
  var checkbox = block.getFieldValue('VALUE') == 'TRUE';
  var code = '//Applying fix for SAS overriding kOS controls';
  Blockly.kOS.FIXSAS = checkbox;
  return code;
};
/**
 * @license
 * Visual Blocks Language
 *
 * Copyright 2012 Google Inc.
 * https://developers.google.com/blockly/
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * @fileoverview Generating kOS for list blocks.
 * @author fraser@google.com (Neil Fraser)
 */
'use strict';

goog.provide('Blockly.kOS.lists');

goog.require('Blockly.kOS');


Blockly.kOS['lists_create_empty'] = function(block) {
  // Create an empty list.
  return ['[]', Blockly.kOS.ORDER_ATOMIC];
};

Blockly.kOS['lists_create_with'] = function(block) {
  // Create a list with any number of elements of any type.
  var code = new Array(block.itemCount_);
  for (var n = 0; n < block.itemCount_; n++) {
    code[n] = Blockly.kOS.valueToCode(block, 'ADD' + n,
        Blockly.kOS.ORDER_COMMA) || 'null';
  }
  code = '[' + code.join(', ') + ']';
  return [code, Blockly.kOS.ORDER_ATOMIC];
};

Blockly.kOS['lists_repeat'] = function(block) {
  // Create a list with one element repeated.
  var functionName = Blockly.kOS.provideFunction_(
      'lists_repeat',
      [ 'function ' + Blockly.kOS.FUNCTION_NAME_PLACEHOLDER_ +
          '(value, n) {',
        '  var array = [];',
        '  for (var i = 0; i < n; i++) {',
        '    array[i] = value;',
        '  }',
        '  return array;',
        '}']);
  var argument0 = Blockly.kOS.valueToCode(block, 'ITEM',
      Blockly.kOS.ORDER_COMMA) || 'null';
  var argument1 = Blockly.kOS.valueToCode(block, 'NUM',
      Blockly.kOS.ORDER_COMMA) || '0';
  var code = functionName + '(' + argument0 + ', ' + argument1 + ')';
  return [code, Blockly.kOS.ORDER_FUNCTION_CALL];
};

Blockly.kOS['lists_length'] = function(block) {
  // List length.
  var argument0 = Blockly.kOS.valueToCode(block, 'VALUE',
      Blockly.kOS.ORDER_FUNCTION_CALL) || '[]';
  return [argument0 + '.length', Blockly.kOS.ORDER_MEMBER];
};

Blockly.kOS['lists_isEmpty'] = function(block) {
  // Is the list empty?
  var argument0 = Blockly.kOS.valueToCode(block, 'VALUE',
      Blockly.kOS.ORDER_MEMBER) || '[]';
  return ['!' + argument0 + '.length', Blockly.kOS.ORDER_LOGICAL_NOT];
};

Blockly.kOS['lists_indexOf'] = function(block) {
  // Find an item in the list.
  var operator = block.getFieldValue('END') == 'FIRST' ?
      'indexOf' : 'lastIndexOf';
  var argument0 = Blockly.kOS.valueToCode(block, 'FIND',
      Blockly.kOS.ORDER_NONE) || '\'\'';
  var argument1 = Blockly.kOS.valueToCode(block, 'VALUE',
      Blockly.kOS.ORDER_MEMBER) || '[]';
  var code = argument1 + '.' + operator + '(' + argument0 + ') + 1';
  return [code, Blockly.kOS.ORDER_MEMBER];
};

Blockly.kOS['lists_getIndex'] = function(block) {
  // Get element at index.
  // Note: Until January 2013 this block did not have MODE or WHERE inputs.
  var mode = block.getFieldValue('MODE') || 'GET';
  var where = block.getFieldValue('WHERE') || 'FROM_START';
  var at = Blockly.kOS.valueToCode(block, 'AT',
      Blockly.kOS.ORDER_UNARY_NEGATION) || '1';
  var list = Blockly.kOS.valueToCode(block, 'VALUE',
      Blockly.kOS.ORDER_MEMBER) || '[]';

  if (where == 'FIRST') {
    if (mode == 'GET') {
      var code = list + '[0]';
      return [code, Blockly.kOS.ORDER_MEMBER];
    } else if (mode == 'GET_REMOVE') {
      var code = list + '.shift()';
      return [code, Blockly.kOS.ORDER_MEMBER];
    } else if (mode == 'REMOVE') {
      return list + '.shift();\n';
    }
  } else if (where == 'LAST') {
    if (mode == 'GET') {
      var code = list + '.slice(-1)[0]';
      return [code, Blockly.kOS.ORDER_MEMBER];
    } else if (mode == 'GET_REMOVE') {
      var code = list + '.pop()';
      return [code, Blockly.kOS.ORDER_MEMBER];
    } else if (mode == 'REMOVE') {
      return list + '.pop();\n';
    }
  } else if (where == 'FROM_START') {
    // Blockly uses one-based indicies.
    if (Blockly.isNumber(at)) {
      // If the index is a naked number, decrement it right now.
      at = parseFloat(at) - 1;
    } else {
      // If the index is dynamic, decrement it in code.
      at += ' - 1';
    }
    if (mode == 'GET') {
      var code = list + '[' + at + ']';
      return [code, Blockly.kOS.ORDER_MEMBER];
    } else if (mode == 'GET_REMOVE') {
      var code = list + '.splice(' + at + ', 1)[0]';
      return [code, Blockly.kOS.ORDER_FUNCTION_CALL];
    } else if (mode == 'REMOVE') {
      return list + '.splice(' + at + ', 1);\n';
    }
  } else if (where == 'FROM_END') {
    if (mode == 'GET') {
      var code = list + '.slice(-' + at + ')[0]';
      return [code, Blockly.kOS.ORDER_FUNCTION_CALL];
    } else if (mode == 'GET_REMOVE' || mode == 'REMOVE') {
      var functionName = Blockly.kOS.provideFunction_(
          'lists_remove_from_end',
          [ 'function ' + Blockly.kOS.FUNCTION_NAME_PLACEHOLDER_ +
              '(list, x) {',
            '  x = list.length - x;',
            '  return list.splice(x, 1)[0];',
            '}']);
      code = functionName + '(' + list + ', ' + at + ')';
      if (mode == 'GET_REMOVE') {
        return [code, Blockly.kOS.ORDER_FUNCTION_CALL];
      } else if (mode == 'REMOVE') {
        return code + ';\n';
      }
    }
  } else if (where == 'RANDOM') {
    var functionName = Blockly.kOS.provideFunction_(
        'lists_get_random_item',
        [ 'function ' + Blockly.kOS.FUNCTION_NAME_PLACEHOLDER_ +
            '(list, remove) {',
          '  var x = Math.floor(Math.random() * list.length);',
          '  if (remove) {',
          '    return list.splice(x, 1)[0];',
          '  } else {',
          '    return list[x];',
          '  }',
          '}']);
    code = functionName + '(' + list + ', ' + (mode != 'GET') + ')';
    if (mode == 'GET' || mode == 'GET_REMOVE') {
      return [code, Blockly.kOS.ORDER_FUNCTION_CALL];
    } else if (mode == 'REMOVE') {
      return code + ';\n';
    }
  }
  throw 'Unhandled combination (lists_getIndex).';
};

Blockly.kOS['lists_setIndex'] = function(block) {
  // Set element at index.
  // Note: Until February 2013 this block did not have MODE or WHERE inputs.
  var list = Blockly.kOS.valueToCode(block, 'LIST',
      Blockly.kOS.ORDER_MEMBER) || '[]';
  var mode = block.getFieldValue('MODE') || 'GET';
  var where = block.getFieldValue('WHERE') || 'FROM_START';
  var at = Blockly.kOS.valueToCode(block, 'AT',
      Blockly.kOS.ORDER_NONE) || '1';
  var value = Blockly.kOS.valueToCode(block, 'TO',
      Blockly.kOS.ORDER_ASSIGNMENT) || 'null';
  // Cache non-trivial values to variables to prevent repeated look-ups.
  // Closure, which accesses and modifies 'list'.
  function cacheList() {
    if (list.match(/^\w+$/)) {
      return '';
    }
    var listVar = Blockly.kOS.variableDB_.getDistinctName(
        'tmp_list', Blockly.Variables.NAME_TYPE);
    var code = 'var ' + listVar + ' = ' + list + ';\n';
    list = listVar;
    return code;
  }
  if (where == 'FIRST') {
    if (mode == 'SET') {
      return list + '[0] = ' + value + ';\n';
    } else if (mode == 'INSERT') {
      return list + '.unshift(' + value + ');\n';
    }
  } else if (where == 'LAST') {
    if (mode == 'SET') {
      var code = cacheList();
      code += list + '[' + list + '.length - 1] = ' + value + ';\n';
      return code;
    } else if (mode == 'INSERT') {
      return list + '.push(' + value + ');\n';
    }
  } else if (where == 'FROM_START') {
    // Blockly uses one-based indicies.
    if (Blockly.isNumber(at)) {
      // If the index is a naked number, decrement it right now.
      at = parseFloat(at) - 1;
    } else {
      // If the index is dynamic, decrement it in code.
      at += ' - 1';
    }
    if (mode == 'SET') {
      return list + '[' + at + '] = ' + value + ';\n';
    } else if (mode == 'INSERT') {
      return list + '.splice(' + at + ', 0, ' + value + ');\n';
    }
  } else if (where == 'FROM_END') {
    var code = cacheList();
    if (mode == 'SET') {
      code += list + '[' + list + '.length - ' + at + '] = ' + value + ';\n';
      return code;
    } else if (mode == 'INSERT') {
      code += list + '.splice(' + list + '.length - ' + at + ', 0, ' + value +
          ');\n';
      return code;
    }
  } else if (where == 'RANDOM') {
    var code = cacheList();
    var xVar = Blockly.kOS.variableDB_.getDistinctName(
        'tmp_x', Blockly.Variables.NAME_TYPE);
    code += 'var ' + xVar + ' = Math.floor(Math.random() * ' + list +
        '.length);\n';
    if (mode == 'SET') {
      code += list + '[' + xVar + '] = ' + value + ';\n';
      return code;
    } else if (mode == 'INSERT') {
      code += list + '.splice(' + xVar + ', 0, ' + value + ');\n';
      return code;
    }
  }
  throw 'Unhandled combination (lists_setIndex).';
};

Blockly.kOS['lists_getSublist'] = function(block) {
  // Get sublist.
  var list = Blockly.kOS.valueToCode(block, 'LIST',
      Blockly.kOS.ORDER_MEMBER) || '[]';
  var where1 = block.getFieldValue('WHERE1');
  var where2 = block.getFieldValue('WHERE2');
  var at1 = Blockly.kOS.valueToCode(block, 'AT1',
      Blockly.kOS.ORDER_NONE) || '1';
  var at2 = Blockly.kOS.valueToCode(block, 'AT2',
      Blockly.kOS.ORDER_NONE) || '1';
  if (where1 == 'FIRST' && where2 == 'LAST') {
    var code = list + '.concat()';
  } else {
    var functionName = Blockly.kOS.provideFunction_(
        'lists_get_sublist',
        [ 'function ' + Blockly.kOS.FUNCTION_NAME_PLACEHOLDER_ +
            '(list, where1, at1, where2, at2) {',
          '  function getAt(where, at) {',
          '    if (where == \'FROM_START\') {',
          '      at--;',
          '    } else if (where == \'FROM_END\') {',
          '      at = list.length - at;',
          '    } else if (where == \'FIRST\') {',
          '      at = 0;',
          '    } else if (where == \'LAST\') {',
          '      at = list.length - 1;',
          '    } else {',
          '      throw \'Unhandled option (lists_getSublist).\';',
          '    }',
          '    return at;',
          '  }',
          '  at1 = getAt(where1, at1);',
          '  at2 = getAt(where2, at2) + 1;',
          '  return list.slice(at1, at2);',
          '}']);
    var code = functionName + '(' + list + ', \'' +
        where1 + '\', ' + at1 + ', \'' + where2 + '\', ' + at2 + ')';
  }
  return [code, Blockly.kOS.ORDER_FUNCTION_CALL];
};

Blockly.kOS['lists_split'] = function(block) {
  // Block for splitting text into a list, or joining a list into text.
  var value_input = Blockly.kOS.valueToCode(block, 'INPUT',
      Blockly.kOS.ORDER_MEMBER);
  var value_delim = Blockly.kOS.valueToCode(block, 'DELIM',
      Blockly.kOS.ORDER_NONE) || '\'\'';
  var mode = block.getFieldValue('MODE');
  if (mode == 'SPLIT') {
    if (!value_input) {
      value_input = '\'\'';
    }
    var functionName = 'split';
  } else if (mode == 'JOIN') {
    if (!value_input) {
      value_input = '[]';
    }
    var functionName = 'join';
  } else {
    throw 'Unknown mode: ' + mode;
  }
  var code = value_input + '.' + functionName + '(' + value_delim + ')';
  return [code, Blockly.kOS.ORDER_FUNCTION_CALL];
};

/**
 * @license
 * Visual Blocks Language
 *
 * Copyright 2012 Google Inc.
 * https://developers.google.com/blockly/
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * @fileoverview Generating kOS for logic blocks.
 * @author q.neutron@gmail.com (Quynh Neutron)
 */
'use strict';

goog.provide('Blockly.kOS.logic');

goog.require('Blockly.kOS');


Blockly.kOS['controls_if'] = function(block) {
  // If/elseif/else condition.
  var n = 0;
  var argument = Blockly.kOS.valueToCode(block, 'IF' + n,
      Blockly.kOS.ORDER_NONE) || 'false';
  var branch = Blockly.kOS.statementToCode(block, 'DO' + n);
  var code = 'if (' + argument + ') {\n' + branch + '}';
  for (n = 1; n <= block.elseifCount_; n++) {
    argument = Blockly.kOS.valueToCode(block, 'IF' + n,
        Blockly.kOS.ORDER_NONE) || 'false';
    branch = Blockly.kOS.statementToCode(block, 'DO' + n);
    code += ' else if (' + argument + ') {\n' + branch + '}';
  }
  if (block.elseCount_) {
    branch = Blockly.kOS.statementToCode(block, 'ELSE');
    code += ' else {\n' + branch + '}';
  }
  return code + '.\n';
};

Blockly.kOS['logic_compare'] = function(block) {
  // Comparison operator.
  var OPERATORS = {
    'EQ': '==',
    'NEQ': '!=',
    'LT': '<',
    'LTE': '<=',
    'GT': '>',
    'GTE': '>='
  };
  var operator = OPERATORS[block.getFieldValue('OP')];
  var order = (operator == '==' || operator == '!=') ?
      Blockly.kOS.ORDER_EQUALITY : Blockly.kOS.ORDER_RELATIONAL;
  var argument0 = Blockly.kOS.valueToCode(block, 'A', order) || '0';
  var argument1 = Blockly.kOS.valueToCode(block, 'B', order) || '0';
  var code = argument0 + ' ' + operator + ' ' + argument1;
  return [code, order];
};

Blockly.kOS['logic_operation'] = function(block) {
  // Operations 'and', 'or'.
  var operator = (block.getFieldValue('OP') == 'AND') ? '&&' : '||';
  var order = (operator == '&&') ? Blockly.kOS.ORDER_LOGICAL_AND :
      Blockly.kOS.ORDER_LOGICAL_OR;
  var argument0 = Blockly.kOS.valueToCode(block, 'A', order);
  var argument1 = Blockly.kOS.valueToCode(block, 'B', order);
  if (!argument0 && !argument1) {
    // If there are no arguments, then the return value is false.
    argument0 = 'false';
    argument1 = 'false';
  } else {
    // Single missing arguments have no effect on the return value.
    var defaultArgument = (operator == '&&') ? 'true' : 'false';
    if (!argument0) {
      argument0 = defaultArgument;
    }
    if (!argument1) {
      argument1 = defaultArgument;
    }
  }
  var code = argument0 + ' ' + operator + ' ' + argument1;
  return [code, order];
};

Blockly.kOS['logic_negate'] = function(block) {
  // Negation.
  var order = Blockly.kOS.ORDER_LOGICAL_NOT;
  var argument0 = Blockly.kOS.valueToCode(block, 'BOOL', order) ||
      'true';
  var code = '!' + argument0;
  return [code, order];
};

Blockly.kOS['logic_boolean'] = function(block) {
  // Boolean values true and false.
  var code = (block.getFieldValue('BOOL') == 'TRUE') ? 'true' : 'false';
  return [code, Blockly.kOS.ORDER_ATOMIC];
};

Blockly.kOS['logic_null'] = function(block) {
  // Null data type.
  return ['null', Blockly.kOS.ORDER_ATOMIC];
};

Blockly.kOS['logic_ternary'] = function(block) {
  // Ternary operator.
  var value_if = Blockly.kOS.valueToCode(block, 'IF',
      Blockly.kOS.ORDER_CONDITIONAL) || 'false';
  var value_then = Blockly.kOS.valueToCode(block, 'THEN',
      Blockly.kOS.ORDER_CONDITIONAL) || 'null';
  var value_else = Blockly.kOS.valueToCode(block, 'ELSE',
      Blockly.kOS.ORDER_CONDITIONAL) || 'null';
  var code = value_if + ' ? ' + value_then + ' : ' + value_else;
  return [code, Blockly.kOS.ORDER_CONDITIONAL];
};

/**
 * @license
 * Visual Blocks Language
 *
 * Copyright 2012 Google Inc.
 * https://developers.google.com/blockly/
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * @fileoverview Generating kOS for loop blocks.
 * @author fraser@google.com (Neil Fraser)
 */
'use strict';

goog.provide('Blockly.kOS.loops');

goog.require('Blockly.kOS');


Blockly.kOS['controls_repeat'] = function(block) {
  // Repeat n times (internal number).
  var repeats = Number(block.getFieldValue('TIMES'));
  var branch = Blockly.kOS.statementToCode(block, 'DO');
  branch = Blockly.kOS.addLoopTrap(branch, block.id);
  var loopVar = Blockly.kOS.variableDB_.getDistinctName(
      'count', Blockly.Variables.NAME_TYPE);
  var code = 'for (var ' + loopVar + ' = 0; ' +
      loopVar + ' < ' + repeats + '; ' +
      loopVar + '++) {\n' +
      branch + '}\n';
  return code;
};

Blockly.kOS['controls_repeat_ext'] = function(block) {
  // Repeat n times (external number).
  var repeats = Blockly.kOS.valueToCode(block, 'TIMES',
      Blockly.kOS.ORDER_ASSIGNMENT) || '0';
  var branch = Blockly.kOS.statementToCode(block, 'DO');
  branch = Blockly.kOS.addLoopTrap(branch, block.id);
  var code = '';
  var loopVar = Blockly.kOS.variableDB_.getDistinctName(
      'count', Blockly.Variables.NAME_TYPE);
  var endVar = repeats;
  if (!repeats.match(/^\w+$/) && !Blockly.isNumber(repeats)) {
    var endVar = Blockly.kOS.variableDB_.getDistinctName(
        'repeat_end', Blockly.Variables.NAME_TYPE);
    code += 'var ' + endVar + ' = ' + repeats + ';\n';
  }
  code += 'for (var ' + loopVar + ' = 0; ' +
      loopVar + ' < ' + endVar + '; ' +
      loopVar + '++) {\n' +
      branch + '}\n';
  return code;
};

Blockly.kOS['controls_whileUntil'] = function(block) {
  // Do while/until loop.
  var until = block.getFieldValue('MODE') == 'UNTIL';
  var argument0 = Blockly.kOS.valueToCode(block, 'BOOL',
      until ? Blockly.kOS.ORDER_LOGICAL_NOT :
      Blockly.kOS.ORDER_NONE) || 'false';
  var branch = Blockly.kOS.statementToCode(block, 'DO');
  branch = Blockly.kOS.addLoopTrap(branch, block.id);
  if (until) return 'UNTIL ' + argument0 + ' {\n' + branch + '}\n';
  return 'WHILE ' + argument0 + ' {\n' + branch + '}\n';
};

Blockly.kOS['controls_for'] = function(block) {
  // For loop.
  var variable0 = Blockly.kOS.variableDB_.getName(
      block.getFieldValue('VAR'), Blockly.Variables.NAME_TYPE);
  var argument0 = Blockly.kOS.valueToCode(block, 'FROM',
      Blockly.kOS.ORDER_ASSIGNMENT) || '0';
  var argument1 = Blockly.kOS.valueToCode(block, 'TO',
      Blockly.kOS.ORDER_ASSIGNMENT) || '0';
  var increment = Blockly.kOS.valueToCode(block, 'BY',
      Blockly.kOS.ORDER_ASSIGNMENT) || '1';
  var branch = Blockly.kOS.statementToCode(block, 'DO');
  branch = Blockly.kOS.addLoopTrap(branch, block.id);
  var code;
  if (Blockly.isNumber(argument0) && Blockly.isNumber(argument1) &&
      Blockly.isNumber(increment)) {
    // All arguments are simple numbers.
    var up = parseFloat(argument0) <= parseFloat(argument1);
    code = 'for (' + variable0 + ' = ' + argument0 + '; ' +
        variable0 + (up ? ' <= ' : ' >= ') + argument1 + '; ' +
        variable0;
    var step = Math.abs(parseFloat(increment));
    if (step == 1) {
      code += up ? '++' : '--';
    } else {
      code += (up ? ' += ' : ' -= ') + step;
    }
    code += ') {\n' + branch + '}\n';
  } else {
    code = '';
    // Cache non-trivial values to variables to prevent repeated look-ups.
    var startVar = argument0;
    if (!argument0.match(/^\w+$/) && !Blockly.isNumber(argument0)) {
      startVar = Blockly.kOS.variableDB_.getDistinctName(
          variable0 + '_start', Blockly.Variables.NAME_TYPE);
      code += 'var ' + startVar + ' = ' + argument0 + ';\n';
    }
    var endVar = argument1;
    if (!argument1.match(/^\w+$/) && !Blockly.isNumber(argument1)) {
      var endVar = Blockly.kOS.variableDB_.getDistinctName(
          variable0 + '_end', Blockly.Variables.NAME_TYPE);
      code += 'var ' + endVar + ' = ' + argument1 + ';\n';
    }
    // Determine loop direction at start, in case one of the bounds
    // changes during loop execution.
    var incVar = Blockly.kOS.variableDB_.getDistinctName(
        variable0 + '_inc', Blockly.Variables.NAME_TYPE);
    code += 'var ' + incVar + ' = ';
    if (Blockly.isNumber(increment)) {
      code += Math.abs(increment) + ';\n';
    } else {
      code += 'Math.abs(' + increment + ');\n';
    }
    code += 'if (' + startVar + ' > ' + endVar + ') {\n';
    code += Blockly.kOS.INDENT + incVar + ' = -' + incVar + ';\n';
    code += '}\n';
    code += 'for (' + variable0 + ' = ' + startVar + ';\n' +
        '     ' + incVar + ' >= 0 ? ' +
        variable0 + ' <= ' + endVar + ' : ' +
        variable0 + ' >= ' + endVar + ';\n' +
        '     ' + variable0 + ' += ' + incVar + ') {\n' +
        branch + '}\n';
  }
  return code;
};

Blockly.kOS['controls_forEach'] = function(block) {
  // For each loop.
  var variable0 = Blockly.kOS.variableDB_.getName(
      block.getFieldValue('VAR'), Blockly.Variables.NAME_TYPE);
  var argument0 = Blockly.kOS.valueToCode(block, 'LIST',
      Blockly.kOS.ORDER_ASSIGNMENT) || '[]';
  var branch = Blockly.kOS.statementToCode(block, 'DO');
  branch = Blockly.kOS.addLoopTrap(branch, block.id);
  var code = '';
  // Cache non-trivial values to variables to prevent repeated look-ups.
  var listVar = argument0;
  if (!argument0.match(/^\w+$/)) {
    listVar = Blockly.kOS.variableDB_.getDistinctName(
        variable0 + '_list', Blockly.Variables.NAME_TYPE);
    code += 'var ' + listVar + ' = ' + argument0 + ';\n';
  }
  var indexVar = Blockly.kOS.variableDB_.getDistinctName(
      variable0 + '_index', Blockly.Variables.NAME_TYPE);
  branch = Blockly.kOS.INDENT + variable0 + ' = ' +
      listVar + '[' + indexVar + '];\n' + branch;
  code += 'for (var ' + indexVar + ' in ' + listVar + ') {\n' + branch + '}\n';
  return code;
};

Blockly.kOS['controls_flow_statements'] = function(block) {
  // Flow statements: continue, break.
  switch (block.getFieldValue('FLOW')) {
    case 'BREAK':
      return 'break;\n';
    case 'CONTINUE':
      return 'continue;\n';
  }
  throw 'Unknown flow statement.';
};

/**
 * @license
 * Visual Blocks Language
 *
 * Copyright 2012 Google Inc.
 * https://developers.google.com/blockly/
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * @fileoverview Generating kOS for math blocks.
 * @author q.neutron@gmail.com (Quynh Neutron)
 */
'use strict';

goog.provide('Blockly.kOS.math');

goog.require('Blockly.kOS');


Blockly.kOS['math_number'] = function(block) {
  // Numeric value.
  var code = parseFloat(block.getFieldValue('NUM'));
  return [code, Blockly.kOS.ORDER_ATOMIC];
};

Blockly.kOS['math_arithmetic'] = function(block) {
  // Basic arithmetic operators, and power.
  var OPERATORS = {
    'ADD': [' + ', Blockly.kOS.ORDER_ADDITION],
    'MINUS': [' - ', Blockly.kOS.ORDER_SUBTRACTION],
    'MULTIPLY': [' * ', Blockly.kOS.ORDER_MULTIPLICATION],
    'DIVIDE': [' / ', Blockly.kOS.ORDER_DIVISION],
    'POWER': [null, Blockly.kOS.ORDER_COMMA]  // Handle power separately.
  };
  var tuple = OPERATORS[block.getFieldValue('OP')];
  var operator = tuple[0];
  var order = tuple[1];
  var argument0 = Blockly.kOS.valueToCode(block, 'A', order) || '0';
  var argument1 = Blockly.kOS.valueToCode(block, 'B', order) || '0';
  var code;
  // Power in kOS requires a special case since it has no operator.
  if (!operator) {
    code = argument0 + ' ^ ' + argument1;
    return [code, Blockly.kOS.ORDER_COMMA];
  }
  code = argument0 + operator + argument1;
  return [code, order];
};

Blockly.kOS['math_single'] = function(block) {
  // Math operators with single operand.
  var operator = block.getFieldValue('OP');
  var code;
  var arg;
  if (operator == 'NEG') {
    // Negation is a special case given its different operator precedence.
    arg = Blockly.kOS.valueToCode(block, 'NUM',
        Blockly.kOS.ORDER_UNARY_NEGATION) || '0';
    if (arg[0] == '-') {
      // --3 is not legal in JS.
      arg = ' ' + arg;
    }
    code = '-' + arg;
    return [code, Blockly.kOS.ORDER_UNARY_NEGATION];
  }
  if (operator == 'SIN' || operator == 'COS' || operator == 'TAN') {
    arg = Blockly.kOS.valueToCode(block, 'NUM',
        Blockly.kOS.ORDER_DIVISION) || '0';
  } else {
    arg = Blockly.kOS.valueToCode(block, 'NUM',
        Blockly.kOS.ORDER_NONE) || '0';
  }
  // First, handle cases which generate values that don't need parentheses
  // wrapping the code.
  switch (operator) {
    case 'ABS':
      code = 'ABS(' + arg + ')';
      break;
    case 'ROOT':
      code = 'SQRT(' + arg + ')';
      break;
    case 'LN':
      code = 'LN(' + arg + ')';
      break;
    case 'EXP':
      code = 'constant():e ^ ' + arg;
      break;
    case 'POW10':
      code = '10^ ' + arg;
      break;
    case 'ROUND':
      code = 'ROUND(' + arg + ')';
      break;
    case 'ROUNDUP':
      code = 'CEILING(' + arg + ')';
      break;
    case 'ROUNDDOWN':
      code = 'CEILING(' + arg + ')';
      break;
    case 'SIN':
      code = 'SIN(' + arg + ')';
      break;
    case 'COS':
      code = 'COS(' + arg + ')';
      break;
    case 'TAN':
      code = 'TAN(' + arg + ')';
      break;
  }
  if (code) {
    return [code, Blockly.kOS.ORDER_FUNCTION_CALL];
  }
  // Second, handle cases which generate values that may need parentheses
  // wrapping the code.
  switch (operator) {
    case 'LOG10':
      code = 'LOG10(' + arg + ')';
      break;
    case 'ASIN':
      code = 'ARCSIN(' + arg + ')';
      break;
    case 'ACOS':
      code = 'ARCCOS(' + arg + ')';
      break;
    case 'ATAN':
      code = 'ARCTAN(' + arg + ')';
      break;
    default:
      throw 'Unknown math operator: ' + operator;
  }
  return [code, Blockly.kOS.ORDER_DIVISION];
};

Blockly.kOS['math_constant'] = function(block) {
  // Constants: PI, E, the Golden Ratio, sqrt(2), 1/sqrt(2), INFINITY.
  var CONSTANTS = {
    'PI': ['Constant():PI', Blockly.kOS.ORDER_MEMBER],
    'E': ['Constant():E', Blockly.kOS.ORDER_MEMBER],
    'GRAV':
        ['Constant():G', Blockly.kOS.ORDER_MEMBER],
    'SQRT2': ['1.4142135623730951', Blockly.kOS.ORDER_MEMBER],
    'SQRT1_2': ['0.7071067811865476', Blockly.kOS.ORDER_MEMBER],
    'INFINITY': ['Infinity', Blockly.kOS.ORDER_ATOMIC]
  };
  return CONSTANTS[block.getFieldValue('CONSTANT')];
};

Blockly.kOS['math_number_property'] = function(block) {
  // Check if a number is even, odd, prime, whole, positive, or negative
  // or if it is divisible by certain number. Returns true or false.
  var number_to_check = Blockly.kOS.valueToCode(block, 'NUMBER_TO_CHECK',
      Blockly.kOS.ORDER_MODULUS) || '0';
  var dropdown_property = block.getFieldValue('PROPERTY');
  var code;
  if (dropdown_property == 'PRIME') {
    // Prime is a special case as it is not a one-liner test.
    var functionName = Blockly.kOS.provideFunction_(
        'math_isPrime',
        [ 'function ' + Blockly.kOS.FUNCTION_NAME_PLACEHOLDER_ + '(n) {',
          '  // https://en.wikipedia.org/wiki/Primality_test#Naive_methods',
          '  if (n == 2 || n == 3) {',
          '    return true;',
          '  }',
          '  // False if n is NaN, negative, is 1, or not whole.',
          '  // And false if n is divisible by 2 or 3.',
          '  if (isNaN(n) || n <= 1 || n % 1 != 0 || n % 2 == 0 ||' +
            ' n % 3 == 0) {',
          '    return false;',
          '  }',
          '  // Check all the numbers of form 6k +/- 1, up to sqrt(n).',
          '  for (var x = 6; x <= Math.sqrt(n) + 1; x += 6) {',
          '    if (n % (x - 1) == 0 || n % (x + 1) == 0) {',
          '      return false;',
          '    }',
          '  }',
          '  return true;',
          '}']);
    code = functionName + '(' + number_to_check + ')';
    return [code, Blockly.kOS.ORDER_FUNCTION_CALL];
  }
  switch (dropdown_property) {
    case 'EVEN':
      code = number_to_check + ' % 2 == 0';
      break;
    case 'ODD':
      code = number_to_check + ' % 2 == 1';
      break;
    case 'WHOLE':
      code = number_to_check + ' % 1 == 0';
      break;
    case 'POSITIVE':
      code = number_to_check + ' > 0';
      break;
    case 'NEGATIVE':
      code = number_to_check + ' < 0';
      break;
    case 'DIVISIBLE_BY':
      var divisor = Blockly.kOS.valueToCode(block, 'DIVISOR',
          Blockly.kOS.ORDER_MODULUS) || '0';
      code = number_to_check + ' % ' + divisor + ' == 0';
      break;
  }
  return [code, Blockly.kOS.ORDER_EQUALITY];
};

Blockly.kOS['math_change'] = function(block) {
  // Add to a variable in place.
  var argument0 = Blockly.kOS.valueToCode(block, 'DELTA',
      Blockly.kOS.ORDER_ADDITION) || '0';
  var varName = Blockly.kOS.variableDB_.getName(
      block.getFieldValue('VAR'), Blockly.Variables.NAME_TYPE);
  return varName + ' = (typeof ' + varName + ' == \'number\' ? ' + varName +
      ' : 0) + ' + argument0 + ';\n';
};

// Rounding functions have a single operand.
Blockly.kOS['math_round'] = Blockly.kOS['math_single'];
// Trigonometry functions have a single operand.
Blockly.kOS['math_trig'] = Blockly.kOS['math_single'];

Blockly.kOS['math_on_list'] = function(block) {
  // Math functions for lists.
  var func = block.getFieldValue('OP');
  var list, code;
  switch (func) {
    case 'SUM':
      list = Blockly.kOS.valueToCode(block, 'LIST',
          Blockly.kOS.ORDER_MEMBER) || '[]';
      code = list + '.reduce(function(x, y) {return x + y;})';
      break;
    case 'MIN':
      list = Blockly.kOS.valueToCode(block, 'LIST',
          Blockly.kOS.ORDER_COMMA) || '[]';
      code = 'Math.min.apply(null, ' + list + ')';
      break;
    case 'MAX':
      list = Blockly.kOS.valueToCode(block, 'LIST',
          Blockly.kOS.ORDER_COMMA) || '[]';
      code = 'Math.max.apply(null, ' + list + ')';
      break;
    case 'AVERAGE':
      // math_median([null,null,1,3]) == 2.0.
      var functionName = Blockly.kOS.provideFunction_(
          'math_mean',
          [ 'function ' + Blockly.kOS.FUNCTION_NAME_PLACEHOLDER_ +
              '(myList) {',
            '  return myList.reduce(function(x, y) {return x + y;}) / ' +
                  'myList.length;',
            '}']);
      list = Blockly.kOS.valueToCode(block, 'LIST',
          Blockly.kOS.ORDER_NONE) || '[]';
      code = functionName + '(' + list + ')';
      break;
    case 'MEDIAN':
      // math_median([null,null,1,3]) == 2.0.
      var functionName = Blockly.kOS.provideFunction_(
          'math_median',
          [ 'function ' + Blockly.kOS.FUNCTION_NAME_PLACEHOLDER_ +
              '(myList) {',
            '  var localList = myList.filter(function (x) ' +
              '{return typeof x == \'number\';});',
            '  if (!localList.length) return null;',
            '  localList.sort(function(a, b) {return b - a;});',
            '  if (localList.length % 2 == 0) {',
            '    return (localList[localList.length / 2 - 1] + ' +
              'localList[localList.length / 2]) / 2;',
            '  } else {',
            '    return localList[(localList.length - 1) / 2];',
            '  }',
            '}']);
      list = Blockly.kOS.valueToCode(block, 'LIST',
          Blockly.kOS.ORDER_NONE) || '[]';
      code = functionName + '(' + list + ')';
      break;
    case 'MODE':
      // As a list of numbers can contain more than one mode,
      // the returned result is provided as an array.
      // Mode of [3, 'x', 'x', 1, 1, 2, '3'] -> ['x', 1].
      var functionName = Blockly.kOS.provideFunction_(
          'math_modes',
          [ 'function ' + Blockly.kOS.FUNCTION_NAME_PLACEHOLDER_ +
              '(values) {',
            '  var modes = [];',
            '  var counts = [];',
            '  var maxCount = 0;',
            '  for (var i = 0; i < values.length; i++) {',
            '    var value = values[i];',
            '    var found = false;',
            '    var thisCount;',
            '    for (var j = 0; j < counts.length; j++) {',
            '      if (counts[j][0] === value) {',
            '        thisCount = ++counts[j][1];',
            '        found = true;',
            '        break;',
            '      }',
            '    }',
            '    if (!found) {',
            '      counts.push([value, 1]);',
            '      thisCount = 1;',
            '    }',
            '    maxCount = Math.max(thisCount, maxCount);',
            '  }',
            '  for (var j = 0; j < counts.length; j++) {',
            '    if (counts[j][1] == maxCount) {',
            '        modes.push(counts[j][0]);',
            '    }',
            '  }',
            '  return modes;',
            '}']);
      list = Blockly.kOS.valueToCode(block, 'LIST',
          Blockly.kOS.ORDER_NONE) || '[]';
      code = functionName + '(' + list + ')';
      break;
    case 'STD_DEV':
      var functionName = Blockly.kOS.provideFunction_(
          'math_standard_deviation',
          [ 'function ' + Blockly.kOS.FUNCTION_NAME_PLACEHOLDER_ +
              '(numbers) {',
            '  var n = numbers.length;',
            '  if (!n) return null;',
            '  var mean = numbers.reduce(function(x, y) {return x + y;}) / n;',
            '  var variance = 0;',
            '  for (var j = 0; j < n; j++) {',
            '    variance += Math.pow(numbers[j] - mean, 2);',
            '  }',
            '  variance = variance / n;',
            '  return Math.sqrt(variance);',
            '}']);
      list = Blockly.kOS.valueToCode(block, 'LIST',
          Blockly.kOS.ORDER_NONE) || '[]';
      code = functionName + '(' + list + ')';
      break;
    case 'RANDOM':
      var functionName = Blockly.kOS.provideFunction_(
          'math_random_list',
          [ 'function ' + Blockly.kOS.FUNCTION_NAME_PLACEHOLDER_ +
              '(list) {',
            '  var x = Math.floor(Math.random() * list.length);',
            '  return list[x];',
            '}']);
      list = Blockly.kOS.valueToCode(block, 'LIST',
          Blockly.kOS.ORDER_NONE) || '[]';
      code = functionName + '(' + list + ')';
      break;
    default:
      throw 'Unknown operator: ' + func;
  }
  return [code, Blockly.kOS.ORDER_FUNCTION_CALL];
};

Blockly.kOS['math_modulo'] = function(block) {
  // Remainder computation.
  var argument0 = Blockly.kOS.valueToCode(block, 'DIVIDEND',
      Blockly.kOS.ORDER_MODULUS) || '0';
  var argument1 = Blockly.kOS.valueToCode(block, 'DIVISOR',
      Blockly.kOS.ORDER_MODULUS) || '0';
  var code = argument0 + ' % ' + argument1;
  return [code, Blockly.kOS.ORDER_MODULUS];
};

Blockly.kOS['math_constrain'] = function(block) {
  // Constrain a number between two limits.
  var argument0 = Blockly.kOS.valueToCode(block, 'VALUE',
      Blockly.kOS.ORDER_COMMA) || '0';
  var argument1 = Blockly.kOS.valueToCode(block, 'LOW',
      Blockly.kOS.ORDER_COMMA) || '0';
  var argument2 = Blockly.kOS.valueToCode(block, 'HIGH',
      Blockly.kOS.ORDER_COMMA) || 'Infinity';
  var code = 'Math.min(Math.max(' + argument0 + ', ' + argument1 + '), ' +
      argument2 + ')';
  return [code, Blockly.kOS.ORDER_FUNCTION_CALL];
};

Blockly.kOS['math_random_int'] = function(block) {
  // Random integer between [X] and [Y].
  var argument0 = Blockly.kOS.valueToCode(block, 'FROM',
      Blockly.kOS.ORDER_COMMA) || '0';
  var argument1 = Blockly.kOS.valueToCode(block, 'TO',
      Blockly.kOS.ORDER_COMMA) || '0';
  var functionName = Blockly.kOS.provideFunction_(
      'math_random_int',
      [ 'function ' + Blockly.kOS.FUNCTION_NAME_PLACEHOLDER_ +
          '(a, b) {',
        '  if (a > b) {',
        '    // Swap a and b to ensure a is smaller.',
        '    var c = a;',
        '    a = b;',
        '    b = c;',
        '  }',
        '  return Math.floor(Math.random() * (b - a + 1) + a);',
        '}']);
  var code = functionName + '(' + argument0 + ', ' + argument1 + ')';
  return [code, Blockly.kOS.ORDER_FUNCTION_CALL];
};

Blockly.kOS['math_random_float'] = function(block) {
  // Random fraction between 0 and 1.
  return ['Math.random()', Blockly.kOS.ORDER_FUNCTION_CALL];
};

Blockly.kOS['vessel_byname'] = function(block) {
  var thisname = block.getFieldValue('NAME');
  var code = 'VESSEL("'+thisname+'"")';
  return [code, Blockly.kOS.ORDER_NONE];
};

Blockly.kOS['kos_vessels_ship'] = function(block) {
  return ["SHIP", Blockly.kOS.ORDER_NONE];
};

Blockly.kOS['kos_vessels_ship_control'] = function(block) {
  return ["SHIP:CONTROL", Blockly.kOS.ORDER_NONE];
};

Blockly.kOS['kos_vessels_target'] = function(block) {
  return ["TARGET", Blockly.kOS.ORDER_NONE];
};

Blockly.kOS['kos_vessels_target_control'] = function(block) {
  return ["TARGET:CONTROL", Blockly.kOS.ORDER_NONE];
};
/**
 * @license
 * Visual Blocks Language
 *
 * Copyright 2012 Google Inc.
 * https://developers.google.com/blockly/
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * @fileoverview Generating kOS for procedure blocks.
 * @author fraser@google.com (Neil Fraser)
 */
'use strict';

goog.provide('Blockly.kOS.procedures');

goog.require('Blockly.kOS');


Blockly.kOS['procedures_defreturn'] = function(block) {
  // Define a procedure with a return value.
  var funcName = Blockly.kOS.variableDB_.getName(
      block.getFieldValue('NAME'), Blockly.Procedures.NAME_TYPE);
  var branch = Blockly.kOS.statementToCode(block, 'STACK');
  if (Blockly.kOS.STATEMENT_PREFIX) {
    branch = Blockly.kOS.prefixLines(
        Blockly.kOS.STATEMENT_PREFIX.replace(/%1/g,
        '\'' + block.id + '\''), Blockly.kOS.INDENT) + branch;
  }
  if (Blockly.kOS.INFINITE_LOOP_TRAP) {
    branch = Blockly.kOS.INFINITE_LOOP_TRAP.replace(/%1/g,
        '\'' + block.id + '\'') + branch;
  }
  var returnValue = Blockly.kOS.valueToCode(block, 'RETURN',
      Blockly.kOS.ORDER_NONE) || '';
  if (returnValue) {
    returnValue = '  return ' + returnValue + '.\n';
  }
  var args = [];
  for (var x = 0; x < block.arguments_.length; x++) {
    args[x] = Blockly.kOS.variableDB_.getName(block.arguments_[x],
        Blockly.Variables.NAME_TYPE);
  }
  var parameters = '';
  if (args.length>0){
    parameters = '  declare parameter ' + args.join(', ') + '.\n';
  }

  var code = 'declare function ' + funcName  + ' {\n' + 
      parameters+
      branch +
      returnValue + '}';
  code = Blockly.kOS.scrub_(block, code);
  Blockly.kOS.definitions_[funcName] = code;
  return null;
};

// Defining a procedure without a return value uses the same generator as
// a procedure with a return value.
Blockly.kOS['procedures_defnoreturn'] =
    Blockly.kOS['procedures_defreturn'];

Blockly.kOS['procedures_callreturn'] = function(block) {
  // Call a procedure with a return value.
  var funcName = Blockly.kOS.variableDB_.getName(
      block.getFieldValue('NAME'), Blockly.Procedures.NAME_TYPE);
  var args = [];
  for (var x = 0; x < block.arguments_.length; x++) {
    args[x] = Blockly.kOS.valueToCode(block, 'ARG' + x,
        Blockly.kOS.ORDER_COMMA) || 'null';
  }

  var code = funcName + '(' + args.join(', ') + ')';
  return [code, Blockly.kOS.ORDER_FUNCTION_CALL];
};

Blockly.kOS['procedures_callnoreturn'] = function(block) {
  // Call a procedure with no return value.
  var funcName = Blockly.kOS.variableDB_.getName(
      block.getFieldValue('NAME'), Blockly.Procedures.NAME_TYPE);
  var args = [];
  for (var x = 0; x < block.arguments_.length; x++) {
    args[x] = Blockly.kOS.valueToCode(block, 'ARG' + x,
        Blockly.kOS.ORDER_COMMA) || 'null';
  }

  var code = funcName + '(' + args.join(', ') + ').\n';
  return code;
};

Blockly.kOS['procedures_ifreturn'] = function(block) {
  // Conditionally return value from a procedure.
  var condition = Blockly.kOS.valueToCode(block, 'CONDITION',
      Blockly.kOS.ORDER_NONE) || 'false';
  var code = 'if (' + condition + ') {\n';
  if (block.hasReturnValue_) {
    var value = Blockly.kOS.valueToCode(block, 'VALUE',
        Blockly.kOS.ORDER_NONE) || 'null';
    code += '  return ' + value + '.\n';
  } else {
    code += '  return.\n';
  }
  code += '}\n';
  return code;
};

/**
 * @fileoverview Ship Systems blocks for The Editor.
 * @author kerboIDE@eforen.tv (Ariel Lothlorien)
 */
'use strict';

goog.provide('Blockly.kOS.screen');

goog.require('Blockly.kOS');

Blockly.kOS['kos_clearscreen'] = function(block) {
  var code = 'CLEARSCREEN. \n';
  return code;
};
/**
 * @fileoverview Special Vars blocks for The Editor.
 * @author kerboIDE@eforen.tv (Ariel Lothlorien)
 */

Blockly.kOS['kos_on'] = function(block) {
  return ["ON", Blockly.kOS.ORDER_NONE];
};

Blockly.kOS['kos_off'] = function(block) {
  return ["OFF", Blockly.kOS.ORDER_NONE];
};

Blockly.kOS['kos_onoff'] = function(block) {
  var checkbox_state = block.getFieldValue('STATE') == 'TRUE';
  if(checkbox_state) return ["ON", Blockly.kOS.ORDER_NONE];
  return ["OFF", Blockly.kOS.ORDER_NONE];
};
Blockly.kOS['AggregateResource_properties'] = function(block) {
  var parentcode = Blockly.kOS.valueToCode(block, 'PARENT', Blockly.kOS.ORDER_NONE);
  var thisname = block.getFieldValue('NAME');
  var code = parentcode+':'+thisname;
  return [code, Blockly.kOS.ORDER_NONE];
};
Blockly.kOS['Atmosphere_properties'] = function(block) {
  var parentcode = Blockly.kOS.valueToCode(block, 'PARENT', Blockly.kOS.ORDER_NONE);
  var thisname = block.getFieldValue('NAME');
  var code = parentcode+':'+thisname;
  return [code, Blockly.kOS.ORDER_NONE];
};
Blockly.kOS['Body_properties'] = function(block) {
  var parentcode = Blockly.kOS.valueToCode(block, 'PARENT', Blockly.kOS.ORDER_NONE);
  var thisname = block.getFieldValue('NAME');
  var code = parentcode+':'+thisname;
  return [code, Blockly.kOS.ORDER_NONE];
};
Blockly.kOS['Config_properties'] = function(block) {
  var parentcode = Blockly.kOS.valueToCode(block, 'PARENT', Blockly.kOS.ORDER_NONE);
  var thisname = block.getFieldValue('NAME');
  var code = parentcode+':'+thisname;
  return [code, Blockly.kOS.ORDER_NONE];
};
Blockly.kOS['Direction_properties'] = function(block) {
  var parentcode = Blockly.kOS.valueToCode(block, 'PARENT', Blockly.kOS.ORDER_NONE);
  var thisname = block.getFieldValue('NAME');
  var code = parentcode+':'+thisname;
  return [code, Blockly.kOS.ORDER_NONE];
};
Blockly.kOS['DockingPort_properties'] = function(block) {
  var parentcode = Blockly.kOS.valueToCode(block, 'PARENT', Blockly.kOS.ORDER_NONE);
  var thisname = block.getFieldValue('NAME');
  var code = parentcode+':'+thisname;
  return [code, Blockly.kOS.ORDER_NONE];
};
Blockly.kOS['Engine_properties'] = function(block) {
  var parentcode = Blockly.kOS.valueToCode(block, 'PARENT', Blockly.kOS.ORDER_NONE);
  var thisname = block.getFieldValue('NAME');
  var code = parentcode+':'+thisname;
  return [code, Blockly.kOS.ORDER_NONE];
};
Blockly.kOS['GeoCoordinates_properties'] = function(block) {
  var parentcode = Blockly.kOS.valueToCode(block, 'PARENT', Blockly.kOS.ORDER_NONE);
  var thisname = block.getFieldValue('NAME');
  var code = parentcode+':'+thisname;
  return [code, Blockly.kOS.ORDER_NONE];
};
Blockly.kOS['Gimbal_properties'] = function(block) {
  var parentcode = Blockly.kOS.valueToCode(block, 'PARENT', Blockly.kOS.ORDER_NONE);
  var thisname = block.getFieldValue('NAME');
  var code = parentcode+':'+thisname;
  return [code, Blockly.kOS.ORDER_NONE];
};
Blockly.kOS['Iterator_properties'] = function(block) {
  var parentcode = Blockly.kOS.valueToCode(block, 'PARENT', Blockly.kOS.ORDER_NONE);
  var thisname = block.getFieldValue('NAME');
  var code = parentcode+':'+thisname;
  return [code, Blockly.kOS.ORDER_NONE];
};
Blockly.kOS['ManeuverNode_properties'] = function(block) {
  var parentcode = Blockly.kOS.valueToCode(block, 'PARENT', Blockly.kOS.ORDER_NONE);
  var thisname = block.getFieldValue('NAME');
  var code = parentcode+':'+thisname;
  return [code, Blockly.kOS.ORDER_NONE];
};
Blockly.kOS['Orbit_properties'] = function(block) {
  var parentcode = Blockly.kOS.valueToCode(block, 'PARENT', Blockly.kOS.ORDER_NONE);
  var thisname = block.getFieldValue('NAME');
  var code = parentcode+':'+thisname;
  return [code, Blockly.kOS.ORDER_NONE];
};
Blockly.kOS['Orbitable_properties'] = function(block) {
  var parentcode = Blockly.kOS.valueToCode(block, 'PARENT', Blockly.kOS.ORDER_NONE);
  var thisname = block.getFieldValue('NAME');
  var code = parentcode+':'+thisname;
  return [code, Blockly.kOS.ORDER_NONE];
};
Blockly.kOS['OrbitableVelocity_properties'] = function(block) {
  var parentcode = Blockly.kOS.valueToCode(block, 'PARENT', Blockly.kOS.ORDER_NONE);
  var thisname = block.getFieldValue('NAME');
  var code = parentcode+':'+thisname;
  return [code, Blockly.kOS.ORDER_NONE];
};
Blockly.kOS['Part_properties'] = function(block) {
  var parentcode = Blockly.kOS.valueToCode(block, 'PARENT', Blockly.kOS.ORDER_NONE);
  var thisname = block.getFieldValue('NAME');
  var code = parentcode+':'+thisname;
  return [code, Blockly.kOS.ORDER_NONE];
};
Blockly.kOS['PartModule_properties'] = function(block) {
  var parentcode = Blockly.kOS.valueToCode(block, 'PARENT', Blockly.kOS.ORDER_NONE);
  var thisname = block.getFieldValue('NAME');
  var code = parentcode+':'+thisname;
  return [code, Blockly.kOS.ORDER_NONE];
};
Blockly.kOS['Resource_properties'] = function(block) {
  var parentcode = Blockly.kOS.valueToCode(block, 'PARENT', Blockly.kOS.ORDER_NONE);
  var thisname = block.getFieldValue('NAME');
  var code = parentcode+':'+thisname;
  return [code, Blockly.kOS.ORDER_NONE];
};
Blockly.kOS['Sensor_properties'] = function(block) {
  var parentcode = Blockly.kOS.valueToCode(block, 'PARENT', Blockly.kOS.ORDER_NONE);
  var thisname = block.getFieldValue('NAME');
  var code = parentcode+':'+thisname;
  return [code, Blockly.kOS.ORDER_NONE];
};
Blockly.kOS['Terminal_properties'] = function(block) {
  var parentcode = Blockly.kOS.valueToCode(block, 'PARENT', Blockly.kOS.ORDER_NONE);
  var thisname = block.getFieldValue('NAME');
  var code = parentcode+':'+thisname;
  return [code, Blockly.kOS.ORDER_NONE];
};
Blockly.kOS['TimeSpan_properties'] = function(block) {
  var parentcode = Blockly.kOS.valueToCode(block, 'PARENT', Blockly.kOS.ORDER_NONE);
  var thisname = block.getFieldValue('NAME');
  var code = parentcode+':'+thisname;
  return [code, Blockly.kOS.ORDER_NONE];
};
Blockly.kOS['VecDraw_properties'] = function(block) {
  var parentcode = Blockly.kOS.valueToCode(block, 'PARENT', Blockly.kOS.ORDER_NONE);
  var thisname = block.getFieldValue('NAME');
  var code = parentcode+':'+thisname;
  return [code, Blockly.kOS.ORDER_NONE];
};
Blockly.kOS['Vector_properties'] = function(block) {
  var parentcode = Blockly.kOS.valueToCode(block, 'PARENT', Blockly.kOS.ORDER_NONE);
  var thisname = block.getFieldValue('NAME');
  var code = parentcode+':'+thisname;
  return [code, Blockly.kOS.ORDER_NONE];
};
Blockly.kOS['Vessel_properties'] = function(block) {
  var parentcode = Blockly.kOS.valueToCode(block, 'PARENT', Blockly.kOS.ORDER_NONE);
  var thisname = block.getFieldValue('NAME');
  var code = parentcode+':'+thisname;
  return [code, Blockly.kOS.ORDER_NONE];
};
Blockly.kOS['VesselSensors_properties'] = function(block) {
  var parentcode = Blockly.kOS.valueToCode(block, 'PARENT', Blockly.kOS.ORDER_NONE);
  var thisname = block.getFieldValue('NAME');
  var code = parentcode+':'+thisname;
  return [code, Blockly.kOS.ORDER_NONE];
};
Blockly.kOS['Waypoint_properties'] = function(block) {
  var parentcode = Blockly.kOS.valueToCode(block, 'PARENT', Blockly.kOS.ORDER_NONE);
  var thisname = block.getFieldValue('NAME');
  var code = parentcode+':'+thisname;
  return [code, Blockly.kOS.ORDER_NONE];
};
/**
 * @license
 * Visual Blocks Language
 *
 * Copyright 2012 Google Inc.
 * https://developers.google.com/blockly/
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * @fileoverview Generating kOS for text blocks.
 * @author fraser@google.com (Neil Fraser)
 */
'use strict';

goog.provide('Blockly.kOS.texts');

goog.require('Blockly.kOS');


Blockly.kOS['text'] = function(block) {
  // Text value.
  var code = Blockly.kOS.quote_(block.getFieldValue('TEXT'));
  return [code, Blockly.kOS.ORDER_ATOMIC];
};

Blockly.kOS['text_join'] = function(block) {
  // Create a string made up of any number of elements of any type.
  var code;
  if (block.itemCount_ == 0) {
    return ['\'\'', Blockly.kOS.ORDER_ATOMIC];
  } else if (block.itemCount_ == 1) {
    var argument0 = Blockly.kOS.valueToCode(block, 'ADD0',
        Blockly.kOS.ORDER_NONE) || '\'\'';
    code = argument0;
    return [code, Blockly.kOS.ORDER_FUNCTION_CALL];
  } else if (block.itemCount_ == 2) {
    var argument0 = Blockly.kOS.valueToCode(block, 'ADD0',
        Blockly.kOS.ORDER_NONE) || '\'\'';
    var argument1 = Blockly.kOS.valueToCode(block, 'ADD1',
        Blockly.kOS.ORDER_NONE) || '\'\'';
    code = argument0 + ' + ' + argument1;
    return [code, Blockly.kOS.ORDER_ADDITION];
  } else {
    code = new Array(block.itemCount_);
    for (var n = 0; n < block.itemCount_; n++) {
      code[n] = Blockly.kOS.valueToCode(block, 'ADD' + n,
          Blockly.kOS.ORDER_COMMA) || '\'\'';
    }
    code = '[' + code.join(',') + '].join(\'\')';
    return [code, Blockly.kOS.ORDER_FUNCTION_CALL];
  }
};

Blockly.kOS['text_append'] = function(block) {
  // Append to a variable in place.
  var varName = Blockly.kOS.variableDB_.getName(
      block.getFieldValue('VAR'), Blockly.Variables.NAME_TYPE);
  var argument0 = Blockly.kOS.valueToCode(block, 'TEXT',
      Blockly.kOS.ORDER_NONE) || '\'\'';
  return varName + ' = String(' + varName + ') + String(' + argument0 + ');\n';
};

Blockly.kOS['text_length'] = function(block) {
  // String length.
  var argument0 = Blockly.kOS.valueToCode(block, 'VALUE',
      Blockly.kOS.ORDER_FUNCTION_CALL) || '\'\'';
  return [argument0 + '.length', Blockly.kOS.ORDER_MEMBER];
};

Blockly.kOS['text_isEmpty'] = function(block) {
  // Is the string null?
  var argument0 = Blockly.kOS.valueToCode(block, 'VALUE',
      Blockly.kOS.ORDER_MEMBER) || '\'\'';
  return ['!' + argument0, Blockly.kOS.ORDER_LOGICAL_NOT];
};

Blockly.kOS['text_indexOf'] = function(block) {
  // Search the text for a substring.
  var operator = block.getFieldValue('END') == 'FIRST' ?
      'indexOf' : 'lastIndexOf';
  var argument0 = Blockly.kOS.valueToCode(block, 'FIND',
      Blockly.kOS.ORDER_NONE) || '\'\'';
  var argument1 = Blockly.kOS.valueToCode(block, 'VALUE',
      Blockly.kOS.ORDER_MEMBER) || '\'\'';
  var code = argument1 + '.' + operator + '(' + argument0 + ') + 1';
  return [code, Blockly.kOS.ORDER_MEMBER];
};

Blockly.kOS['text_charAt'] = function(block) {
  // Get letter at index.
  // Note: Until January 2013 this block did not have the WHERE input.
  var where = block.getFieldValue('WHERE') || 'FROM_START';
  var at = Blockly.kOS.valueToCode(block, 'AT',
      Blockly.kOS.ORDER_UNARY_NEGATION) || '1';
  var text = Blockly.kOS.valueToCode(block, 'VALUE',
      Blockly.kOS.ORDER_MEMBER) || '\'\'';
  switch (where) {
    case 'FIRST':
      var code = text + '.charAt(0)';
      return [code, Blockly.kOS.ORDER_FUNCTION_CALL];
    case 'LAST':
      var code = text + '.slice(-1)';
      return [code, Blockly.kOS.ORDER_FUNCTION_CALL];
    case 'FROM_START':
      // Blockly uses one-based indicies.
      if (Blockly.isNumber(at)) {
        // If the index is a naked number, decrement it right now.
        at = parseFloat(at) - 1;
      } else {
        // If the index is dynamic, decrement it in code.
        at += ' - 1';
      }
      var code = text + '.charAt(' + at + ')';
      return [code, Blockly.kOS.ORDER_FUNCTION_CALL];
    case 'FROM_END':
      var code = text + '.slice(-' + at + ').charAt(0)';
      return [code, Blockly.kOS.ORDER_FUNCTION_CALL];
    case 'RANDOM':
      var functionName = Blockly.kOS.provideFunction_(
          'text_random_letter',
          [ 'function ' + Blockly.kOS.FUNCTION_NAME_PLACEHOLDER_ +
              '(text) {',
            '  var x = Math.floor(Math.random() * text.length);',
            '  return text[x];',
            '}']);
      code = functionName + '(' + text + ')';
      return [code, Blockly.kOS.ORDER_FUNCTION_CALL];
  }
  throw 'Unhandled option (text_charAt).';
};

Blockly.kOS['text_getSubstring'] = function(block) {
  // Get substring.
  var text = Blockly.kOS.valueToCode(block, 'STRING',
      Blockly.kOS.ORDER_MEMBER) || '\'\'';
  var where1 = block.getFieldValue('WHERE1');
  var where2 = block.getFieldValue('WHERE2');
  var at1 = Blockly.kOS.valueToCode(block, 'AT1',
      Blockly.kOS.ORDER_NONE) || '1';
  var at2 = Blockly.kOS.valueToCode(block, 'AT2',
      Blockly.kOS.ORDER_NONE) || '1';
  if (where1 == 'FIRST' && where2 == 'LAST') {
    var code = text;
  } else {
    var functionName = Blockly.kOS.provideFunction_(
        'text_get_substring',
        [ 'function ' + Blockly.kOS.FUNCTION_NAME_PLACEHOLDER_ +
            '(text, where1, at1, where2, at2) {',
          '  function getAt(where, at) {',
          '    if (where == \'FROM_START\') {',
          '      at--;',
          '    } else if (where == \'FROM_END\') {',
          '      at = text.length - at;',
          '    } else if (where == \'FIRST\') {',
          '      at = 0;',
          '    } else if (where == \'LAST\') {',
          '      at = text.length - 1;',
          '    } else {',
          '      throw \'Unhandled option (text_getSubstring).\';',
          '    }',
          '    return at;',
          '  }',
          '  at1 = getAt(where1, at1);',
          '  at2 = getAt(where2, at2) + 1;',
          '  return text.slice(at1, at2);',
          '}']);
    var code = functionName + '(' + text + ', \'' +
        where1 + '\', ' + at1 + ', \'' + where2 + '\', ' + at2 + ')';
  }
  return [code, Blockly.kOS.ORDER_FUNCTION_CALL];
};

Blockly.kOS['text_changeCase'] = function(block) {
  // Change capitalization.
  var OPERATORS = {
    'UPPERCASE': '.toUpperCase()',
    'LOWERCASE': '.toLowerCase()',
    'TITLECASE': null
  };
  var operator = OPERATORS[block.getFieldValue('CASE')];
  var code;
  if (operator) {
    // Upper and lower case are functions built into kOS.
    var argument0 = Blockly.kOS.valueToCode(block, 'TEXT',
        Blockly.kOS.ORDER_MEMBER) || '\'\'';
    code = argument0 + operator;
  } else {
    // Title case is not a native kOS function.  Define one.
    var functionName = Blockly.kOS.provideFunction_(
        'text_toTitleCase',
        [ 'function ' +
            Blockly.kOS.FUNCTION_NAME_PLACEHOLDER_ + '(str) {',
          '  return str.replace(/\\S+/g,',
          '      function(txt) {return txt[0].toUpperCase() + ' +
              'txt.substring(1).toLowerCase();});',
          '}']);
    var argument0 = Blockly.kOS.valueToCode(block, 'TEXT',
        Blockly.kOS.ORDER_NONE) || '\'\'';
    code = functionName + '(' + argument0 + ')';
  }
  return [code, Blockly.kOS.ORDER_FUNCTION_CALL];
};

Blockly.kOS['text_trim'] = function(block) {
  // Trim spaces.
  var OPERATORS = {
    'LEFT': ".replace(/^[\\s\\xa0]+/, '')",
    'RIGHT': ".replace(/[\\s\\xa0]+$/, '')",
    'BOTH': '.trim()'
  };
  var operator = OPERATORS[block.getFieldValue('MODE')];
  var argument0 = Blockly.kOS.valueToCode(block, 'TEXT',
      Blockly.kOS.ORDER_MEMBER) || '\'\'';
  return [argument0 + operator, Blockly.kOS.ORDER_FUNCTION_CALL];
};

Blockly.kOS['text_print'] = function(block) {
  // Print statement.
  var argument0 = Blockly.kOS.valueToCode(block, 'TEXT',
      Blockly.kOS.ORDER_NONE) || '\'\'';
  return 'PRINT ' + argument0 + '. \n';
};

Blockly.kOS['text_prompt'] = function(block) {
  // Prompt function (internal message).
  var msg = Blockly.kOS.quote_(block.getFieldValue('TEXT'));
  var code = 'window.prompt(' + msg + ')';
  var toNumber = block.getFieldValue('TYPE') == 'NUMBER';
  if (toNumber) {
    code = 'parseFloat(' + code + ')';
  }
  return [code, Blockly.kOS.ORDER_FUNCTION_CALL];
};

Blockly.kOS['text_prompt_ext'] = function(block) {
  // Prompt function (external message).
  var msg = Blockly.kOS.valueToCode(block, 'TEXT',
      Blockly.kOS.ORDER_NONE) || '\'\'';
  var code = 'window.prompt(' + msg + ')';
  var toNumber = block.getFieldValue('TYPE') == 'NUMBER';
  if (toNumber) {
    code = 'parseFloat(' + code + ')';
  }
  return [code, Blockly.kOS.ORDER_FUNCTION_CALL];
};

Blockly.kOS['lang_declare'] = function(block) {
  var value = Blockly.kOS.valueToCode(block, 'VALUE', Blockly.kOS.ORDER_ATOMIC);
   var variable = Blockly.kOS.variableDB_.getName(block.getFieldValue('VAR'), Blockly.Variables.NAME_TYPE);
  var code = 'declare '+variable+' to '+value+'.';
  return code;
};
/**
 * @license
 * Visual Blocks Language
 *
 * Copyright 2012 Google Inc.
 * https://developers.google.com/blockly/
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * @fileoverview Generating kOS for variable blocks.
 * @author fraser@google.com (Neil Fraser)
 */
'use strict';

goog.provide('Blockly.kOS.variables');

goog.require('Blockly.kOS');


Blockly.kOS['variables_get'] = function(block) {
  // Variable getter.
  var code = Blockly.kOS.variableDB_.getName(block.getFieldValue('VAR'),
      Blockly.Variables.NAME_TYPE);
  return [code, Blockly.kOS.ORDER_ATOMIC];
};

Blockly.kOS['variables_set'] = function(block) {
  // Variable setter.
  var argument0 = Blockly.kOS.valueToCode(block, 'VALUE',
      Blockly.kOS.ORDER_ASSIGNMENT) || '0';
  var varName = Blockly.kOS.variableDB_.getName(
      block.getFieldValue('VAR'), Blockly.Variables.NAME_TYPE);
  //console.log("Set "+ varName + ' TO ' + argument0);
  return 'SET ' + varName + ' TO ' + argument0 + '. \n';
};

/**
 * @fileoverview Ship Systems blocks for The Editor.
 * @author kerboIDE@eforen.tv (Ariel Lothlorien)
 */
'use strict';

goog.provide('Blockly.kOS.vector');

goog.require('Blockly.kOS');

Blockly.kOS['vector_math'] = function(block) {

  var OPERATORS = {
    'ADD': [' + ', Blockly.kOS.ORDER_ADDITION],
    'SUBTRACT': [' - ', Blockly.kOS.ORDER_SUBTRACTION],
    'MULTIPLY': [' * ', Blockly.kOS.ORDER_MULTIPLICATION]
  };

  var v1 = Blockly.kOS.valueToCode(block, 'var1', Blockly.kOS.ORDER_ATOMIC);
  var v2 = Blockly.kOS.valueToCode(block, 'var2', Blockly.kOS.ORDER_ATOMIC);
  var op = block.getFieldValue('OP');

  switch (op) {
  	case 'ADD':
  	case 'SUBTRACT':
  	case 'MULTIPLY':
  		return [v1+' '+OPERATORS[op][0]+' '+v2,OPERATORS[op][1]];
    case 'VECTORDOTPRODUCT':
    case 'VECTORCROSSPRODUCT':
    case 'VECTORANGLE':
    case 'VECTOREXCLUDE':
		return [op+'(' + v1 + ', ' + v1 + ')', Blockly.kOS.ORDER_FUNCTION_CALL];
  }
};

Blockly.kOS['vector_construct'] = function(block) {
  var x = Blockly.kOS.valueToCode(block, 'X', Blockly.kOS.ORDER_ATOMIC);
  var y = Blockly.kOS.valueToCode(block, 'Y', Blockly.kOS.ORDER_ATOMIC);
  var z = Blockly.kOS.valueToCode(block, 'Z', Blockly.kOS.ORDER_ATOMIC);
  // TODO: Assemble kOS into code variable.
  var code = 'V('+x+','+y+','+z+')';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.kOS.ORDER_FUNCTION_CALL];
};

Blockly.kOS['workaround_input'] = function(block) {
  var code = block.getFieldValue('CODE');
  if (code.trim().endsWith('.') == false) code = + '.'
  return [code, Blockly.kOS.ORDER_ATOMIC];
};
Blockly.kOS['workaround_input_flow'] = function(block) {
  var code = block.getFieldValue('CODE');
  if (code.trim().endsWith('.') == false) code =+ '.'
  return [code, Blockly.kOS.ORDER_ATOMIC];
};
