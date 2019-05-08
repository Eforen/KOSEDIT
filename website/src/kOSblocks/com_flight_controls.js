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
