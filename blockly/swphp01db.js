Blockly.PHP['sw_init'] = function(block) {
  var code = 'require_once("_lib.php");\n\n';
  return code;
};

Blockly.PHP['sw_dbopen'] = function(block) {
  var text_dbfilename = block.getFieldValue('dbfilename');
  var code = 'dbopen("'+text_dbfilename+'")';
  return [code, Blockly.PHP.ORDER_ATOMIC];
};

Blockly.PHP['sw_create_table'] = function(block) {
  var checkbox_ifnotexists = block.getFieldValue('ifnotexists') == 'TRUE';
  var text_table = block.getFieldValue('table');
  var statements_schema = Blockly.PHP.statementToCode(block, 'schema');
  var variable_db = Blockly.PHP.variableDB_.getName(block.getFieldValue('db'), Blockly.Variables.NAME_TYPE);
  var code = "";
  if (!checkbox_ifnotexists) {
      code += variable_db+"->exec( \"drop table ";
      code += "'"+text_table+"'\" );\n";
  }
  code += variable_db+"->exec( \"create table ";
  if (checkbox_ifnotexists) code += "if not exists ";
  code += "'"+text_table+"' (";
  var stmt = statements_schema.replace(/, +$/,"");
  stmt = stmt.replace(/^ +/,"");
  code += stmt;
  code += ")\" );"+'\n\n';
  return code;
};

Blockly.PHP['sw_field'] = function(block) {
  var text_fname = block.getFieldValue('fname');
  var dropdown_fields = block.getFieldValue('fields');
  var checkbox_primarykey = block.getFieldValue('primarykey') == 'TRUE';
  var checkbox_autoincrement = block.getFieldValue('autoincrement') == 'TRUE';
  var checkbox_notnull = block.getFieldValue('notnull') == 'TRUE';
  var code = "'"+text_fname+"' "+dropdown_fields;
  if (checkbox_primarykey) code += " primary key";
  if (checkbox_autoincrement) code += " autoincrement";
  if (checkbox_notnull) code += " not null";
  return code+", ";
};

Blockly.PHP['sw_insert'] = function(block) {
  var value_data = Blockly.PHP.valueToCode(block, 'data', Blockly.PHP.ORDER_ATOMIC);
  var text_table = block.getFieldValue('table');
  var variable_db = Blockly.PHP.variableDB_.getName(block.getFieldValue('db'), Blockly.Variables.NAME_TYPE);
  var code = 'insert('+variable_db+', "'+text_table+'", '+value_data+');\n';
  return code;
};
