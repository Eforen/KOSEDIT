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
