Blockly.Blocks['sw_title'] = {
    init: function() {
	this.appendDummyInput()
            .appendField("title")
            .appendField(new Blockly.FieldTextInput("text"), "text");
	this.setInputsInline(true);
	this.setPreviousStatement(true, null);
	this.setNextStatement(true, null);
	this.setColour(150);
	this.setTooltip("");
	this.setHelpUrl("");
    }
};

Blockly.Blocks['sw_echo'] = {
    init: function() {
	this.appendDummyInput()
            .appendField("echo");
	this.appendValueInput("attr")
            .setCheck(null);
	this.setInputsInline(true);
	this.setPreviousStatement(true, null);
	this.setNextStatement(true, null);
	this.setColour(150);
	this.setTooltip("");
	this.setHelpUrl("");
    }
};

Blockly.Blocks['sw_heading'] = {
    init: function() {
	this.appendDummyInput()
            .appendField("heading")
            .appendField(new Blockly.FieldNumber(1, 1, 6), "level")
            .appendField(new Blockly.FieldTextInput("text"), "text");
	this.setInputsInline(true);
	this.setPreviousStatement(true, null);
	this.setNextStatement(true, null);
	this.setColour(150);
	this.setTooltip("");
	this.setHelpUrl("");
    }
};

Blockly.Blocks['sw_br'] = {
    init: function() {
	this.appendDummyInput()
            .appendField("br")
            .appendField(new Blockly.FieldNumber(1, 1, 30), "level");
	this.setInputsInline(true);
	this.setPreviousStatement(true, null);
	this.setNextStatement(true, null);
	this.setColour(150);
	this.setTooltip("");
	this.setHelpUrl("");
    }
};

Blockly.Blocks['sw_divspan'] = {
  init: function() {
    this.appendValueInput("attribute")
        .setCheck(null)
        .appendField(new Blockly.FieldDropdown([["div","div"], ["span","span"]]), "divspan");
    this.appendStatementInput("content")
        .setCheck(null);
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(150);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['sw_div'] = {
  init: function() {
    this.appendValueInput("attribute")
        .setCheck(null)
        .appendField("div");
    this.appendStatementInput("content")
        .setCheck(null);
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(150);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['sw_span'] = {
  init: function() {
    this.appendValueInput("attribute")
        .setCheck(null)
        .appendField("span");
    this.appendStatementInput("content")
        .setCheck(null);
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(150);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

