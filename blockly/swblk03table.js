Blockly.Blocks['sw_showtable'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("show table")
        .appendField(new Blockly.FieldTextInput("table_name"), "table");
    this.appendDummyInput()
        .appendField("of ")
        .appendField(new Blockly.FieldVariable("db"), "db")
        .appendField(new Blockly.FieldCheckbox("TRUE"), "deledit")
        .appendField("with delete and edit links");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(270);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['sw_tbl'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("get table ")
        .appendField(new Blockly.FieldTextInput("table_name"), "table");
    this.appendDummyInput()
        .appendField("of ")
        .appendField(new Blockly.FieldVariable("db"), "db")
        .appendField("as array");
    this.setInputsInline(true);
    this.setOutput(true, null);
    this.setColour(225);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['sw_table'] = {
  init: function() {
    this.appendValueInput("NAME")
        .setCheck(null)
        .appendField("show data");
    this.appendDummyInput()
        .appendField("as ")
        .appendField(new Blockly.FieldDropdown([["table","table"], ["array","array"]]), "format")
        .appendField("format");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(270);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['sw_jqaddform'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("mod table form for table")
        .appendField(new Blockly.FieldTextInput("table"), "table")
        .appendField("of")
        .appendField(new Blockly.FieldVariable("db"), "db");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(270);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};


Blockly.Blocks['sw_postgetfile'] = {
    init: function() {
	this.appendDummyInput()
            .appendField(new Blockly.FieldDropdown([["POST","$_POST"], ["GET","$_GET"], ["FILE","$_FILE"], ["SERVER","$_SERVER"]]), "PGF");
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
            .appendField(new Blockly.FieldDropdown([["POST","$_POST"], ["GET","$_GET"], ["FILE","$_FILE"], ["SERVER","$_SERVER"]]), "PGF");
	this.appendValueInput("index")
            .setCheck(null);
	this.setInputsInline(true);
	this.setOutput(true, null);
	this.setColour(330);
	this.setTooltip("");
	this.setHelpUrl("");
    }
};

Blockly.Blocks['sw_dropdowntext'] = {
    init: function() {
	this.appendDummyInput()
            .appendField("‘‘")
            .appendField(new Blockly.FieldDropdown([["REMOTE_ADDR","REMOTE_ADDR"], ["HTTP_HOST","HTTP_HOST"], ["SERVER_NAME","SERVER_NAME"]]), "TXT")
        .appendField("’’");
	this.setOutput(true, null);
	this.setColour(150);
	this.setTooltip("");
	this.setHelpUrl("");
    }
};

