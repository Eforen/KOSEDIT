/**
 * This file contains a modified function from field_dropdown
 * orriginal content Copyright 2011 Google Inc.  Apache License 2.0
 * Modifications by Ariel Lothlorien (Eforen)
 */
Blockly.FieldDropdown.prototype.setValue = function(newValue) {
  if(this.value_!= newValue && this.changeHandler_) this.changeHandler_(newValue); //Added line
  this.value_ = newValue;
  // Look up and display the human-readable text.
  var options = this.getOptions_();
  for (var x = 0; x < options.length; x++) {
    // Options are tuples of human-readable text and language-neutral values.
    if (options[x][1] == newValue) {
      this.setText(options[x][0]);
      return;
    }
  }
  // Value not found.  Add it, maybe it will become valid once set
  // (like variable names).
  this.setText(newValue);
};