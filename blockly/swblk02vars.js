Blockly.Blocks['sw_isset'] = {
    init: function() {
	this.appendValueInput("NAME")
            .setCheck(null)
            .appendField("isset");
	this.setInputsInline(true);
	this.setOutput(true, null);
	this.setColour(60);
	this.setTooltip("");
	this.setHelpUrl("");
    }
};


Blockly.Blocks['sw_isarray'] = {
    init: function() {
	this.appendValueInput("NAME")
            .setCheck(null)
            .appendField("is_array");
	this.setInputsInline(true);
	this.setOutput(true, null);
	this.setColour(60);
	this.setTooltip("");
	this.setHelpUrl("");
    }
};

Blockly.Blocks['sw_postgetfile'] = {
    init: function() {
	this.appendDummyInput()
            .appendField(new Blockly.FieldDropdown([["POST","$_POST"], ["GET","$_GET"], ["FILE","$_FILE"]]), "PGF");
	this.setInputsInline(true);
	this.setOutput(true, null);
	this.setColour(330);
	this.setTooltip("");
	this.setHelpUrl("");
    }
};

Blockly.Blocks['sw_postgetfile_idx'] = {
    init: function() {
	this.appendDummyInput()
            .appendField(new Blockly.FieldDropdown([["POST","$_POST"], ["GET","$_GET"], ["FILE","$_FILE"]]), "PGF");
	this.appendValueInput("index")
            .setCheck(null);
	this.setInputsInline(true);
	this.setOutput(true, null);
	this.setColour(330);
	this.setTooltip("");
	this.setHelpUrl("");
    }
};

