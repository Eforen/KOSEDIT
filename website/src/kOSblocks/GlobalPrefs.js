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