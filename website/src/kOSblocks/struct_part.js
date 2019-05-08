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
