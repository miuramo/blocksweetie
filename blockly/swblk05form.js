Blockly.Blocks['sw_form_start'] = {
    init: function() {
	this.appendDummyInput()
            .appendField("form_start method=")
            .appendField(new Blockly.FieldDropdown([["POST","POST"], ["GET","GET"]]), "PG")
//	    .appendField(" enctype=")
	    .appendField(new Blockly.FieldDropdown([["(default)","enctype='application/x-www-form-urlencoded'"], ["enctype='multipart/form-data'","enctype='multipart/form-data'"]]), "ENC");
	this.appendValueInput("attr");
	this.appendDummyInput()
            .appendField("(in html)")
            .appendField(new Blockly.FieldCheckbox("FALSE"), "inhtml");

	this.setInputsInline(true);
	this.setPreviousStatement(true, null);
	this.setNextStatement(true, null);
	this.setColour(180);
	this.setTooltip("");
	this.setHelpUrl("");
    }
};

Blockly.Blocks['sw_form_end'] = {
    init: function() {
	this.appendDummyInput()
            .appendField("form_end");
	this.appendDummyInput()
            .appendField("(in html)")
            .appendField(new Blockly.FieldCheckbox("FALSE"), "inhtml");
	this.setInputsInline(true);
	this.setPreviousStatement(true, null);
	this.setNextStatement(true, null);
	this.setColour(180);
	this.setTooltip("");
	this.setHelpUrl("");
    }
};

Blockly.Blocks['sw_form_input'] = {
    init: function() {
	this.appendDummyInput()
            .appendField("form_input")
            .appendField(new Blockly.FieldTextInput("name"), "name")
            .appendField(new Blockly.FieldDropdown([["text","text"], ["password","password"], ["file","file"], ["checkbox","checkbox"], ["radio","radio"], ["hidden","hidden"], ["range","range"]]), "type");
	this.appendValueInput("attr")
            .setCheck(null);
	this.appendDummyInput()
            .appendField("(in html)")
            .appendField(new Blockly.FieldCheckbox("FALSE"), "inhtml");
	this.setInputsInline(true);
	this.setPreviousStatement(true, null);
	this.setNextStatement(true, null);
	this.setColour(180);
	this.setTooltip("");
	this.setHelpUrl("");
    }
};

Blockly.Blocks['sw_form_submit'] = {
    init: function() {
	this.appendDummyInput()
            .appendField("form_submit");
	this.appendValueInput("attr")
            .setCheck(null);
	this.appendDummyInput()
            .appendField("(in html)")
            .appendField(new Blockly.FieldCheckbox("FALSE"), "inhtml");
	this.setInputsInline(true);
	this.setPreviousStatement(true, null);
	this.setNextStatement(true, null);
	this.setColour(180);
	this.setTooltip("");
	this.setHelpUrl("");
    }
};

