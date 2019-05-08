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
