Blockly.Blocks['sw_title'] = {
    init: function() {
	this.appendDummyInput()
            .appendField("title")
            .appendField(new Blockly.FieldTextInput("text"), "text");
	this.appendDummyInput()
            .appendField("(html)")
            .appendField(new Blockly.FieldCheckbox("FALSE"), "inhtml");
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
	this.appendDummyInput()
            .appendField("(html)")
            .appendField(new Blockly.FieldCheckbox("FALSE"), "inhtml");
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
	this.appendDummyInput()
            .appendField("(html)")
            .appendField(new Blockly.FieldCheckbox("FALSE"), "inhtml");
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

Blockly.Blocks['sw_tabletr'] = {
  init: function() {
    this.appendValueInput("attribute")
        .setCheck(null)
        .appendField(new Blockly.FieldDropdown([["table","table"], ["tr","tr"], ["ul","ul"], ["ol","ol"]]), "tabletr");
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

Blockly.Blocks['sw_tdth'] = {
  init: function() {
    this.appendValueInput("attribute")
        .setCheck(null)
        .appendField(new Blockly.FieldDropdown([["td","td"], ["th","th"], ["li","li"]]), "tdth");
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


