Blockly.Blocks['sw_init'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("load Sweetie Framework");
    this.setNextStatement(true, null);
    this.setColour(230);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['sw_create_table'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("create table ")
        .appendField(new Blockly.FieldCheckbox("TRUE"), "ifnotexists")
        .appendField("if not exists")
        .appendField(new Blockly.FieldTextInput("table_name"), "table");
    this.appendStatementInput("schema")
        .setCheck(null);
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(135);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['sw_dbopen'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("dbopen")
        .appendField(new Blockly.FieldTextInput("db_filename"), "dbfilename");
    this.setInputsInline(true);
    this.setOutput(true, null);
    this.setColour(330);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['sw_field'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("field")
        .appendField(new Blockly.FieldTextInput("id"), "fname");
    this.appendDummyInput()
        .appendField(new Blockly.FieldDropdown([["INTEGER","INTEGER"], ["TEXT","TEXT"], ["DATETIME","DATETIME"], ["REAL","REAL"], ["BLOB","BLOB"], ["IMAGE","IMAGE"]]), "fields")
        .appendField(new Blockly.FieldCheckbox("FALSE"), "primarykey")
        .appendField("primary key")
        .appendField(new Blockly.FieldCheckbox("FALSE"), "autoincrement")
        .appendField("autoincrement")
        .appendField(new Blockly.FieldCheckbox("TRUE"), "notnull")
        .appendField("not null");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(135);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

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

Blockly.Blocks['sw_postgetfile'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(new Blockly.FieldDropdown([["POST","$_POST"], ["GET","$_GET"], ["FILE","$_FILE"]]), "PGF");
    this.setInputsInline(true);
    this.setOutput(true, null);
    this.setColour(230);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['sw_insert'] = {
  init: function() {
    this.appendValueInput("data")
        .setCheck(null)
        .appendField("insert");
    this.appendDummyInput()
        .appendField("into table")
        .appendField(new Blockly.FieldTextInput("table_name"), "table")
        .appendField("of")
        .appendField(new Blockly.FieldVariable("db"), "db");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(0);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

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

Blockly.Blocks['sw_postgetfile_idx'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(new Blockly.FieldDropdown([["POST","$_POST"], ["GET","$_GET"], ["FILE","$_FILE"]]), "PGF");
    this.appendValueInput("index")
        .setCheck(null);
    this.setInputsInline(true);
    this.setOutput(true, null);
    this.setColour(230);
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

Blockly.Blocks['sw_form_start'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("form_start");
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
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(180);
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
    this.appendValueInput("attribute")
        .setCheck(null)
        .appendField("echo")
    this.setInputsInline(false);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(150);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

