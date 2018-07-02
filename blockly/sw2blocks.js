Blockly.Blocks['php_assoc_pair'] = {
    init: function() {
	this.appendDummyInput()
            .appendField(new Blockly.FieldTextInput("key"), "keyname")
	    .appendField("=>")
            .appendField(new Blockly.FieldTextInput("value"), "valname");
	this.setInputsInline(true);
	this.setOutput(true, null);
	this.setColour(230);
	this.setTooltip("");
	this.setHelpUrl("");
    }
};

Blockly.Blocks['php_assoc_pair_string'] = {
    init: function() {
	this.appendDummyInput()
            .appendField(new Blockly.FieldTextInput("key"), "keyname")
	    .appendField("=>");
	this.appendValueInput("NAME").setCheck(null);
	this.setInputsInline(true);
	this.setOutput(true, null);
        this.setPreviousStatement(false, null);
        this.setNextStatement(false, null);
	this.setColour(230);
	this.setTooltip("");
	this.setHelpUrl("");
    }
};

Blockly.Blocks['php_assoc_addpair'] = {
    init: function() {
	this.appendDummyInput()
	    .appendField("add")
            .appendField(new Blockly.FieldVariable("db"), "db")

	    .appendField(" [")
            .appendField(new Blockly.FieldTextInput("key"), "keyname")
	    .appendField("=>")
            .appendField(new Blockly.FieldTextInput("value"), "valname")
	    .appendField("]");
	this.setInputsInline(false);
	this.setOutput(false, null);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
	this.setColour(230);
	this.setTooltip("");
	this.setHelpUrl("");
    }
};

Blockly.Blocks['php_print_recursive'] = {
    init: function() {
	this.appendDummyInput()
	    .appendField("print recursive")
            .appendField(new Blockly.FieldVariable("db"), "db")
	this.setInputsInline(false);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
	this.setColour(150);
	this.setTooltip("");
	this.setHelpUrl("");
    }
};

Blockly.Blocks['php_print_recursive_array'] = {
    init: function() {
	this.appendDummyInput()
	    .appendField("print recursive");
	this.appendValueInput("NAME").setCheck(null);
//            .appendField(new Blockly.FieldVariable("db"), "db")
	this.setInputsInline(true);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
	this.setColour(150);
	this.setTooltip("");
	this.setHelpUrl("");
    }
};
