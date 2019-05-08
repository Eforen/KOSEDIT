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