Blockly.PHP['sw_init'] = function(block) {
  // TODO: Assemble PHP into code variable.
  var code = 'require_once("_lib.php");\n\n';
  return code;
};

Blockly.PHP['sw_dbopen'] = function(block) {
  var text_dbfilename = block.getFieldValue('dbfilename');
  // TODO: Assemble PHP into code variable.
  var code = 'dbopen("'+text_dbfilename+'")';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.PHP.ORDER_ATOMIC];
};

Blockly.PHP['sw_create_table'] = function(block) {
  var checkbox_ifnotexists = block.getFieldValue('ifnotexists') == 'TRUE';
  var text_table = block.getFieldValue('table');
  var statements_schema = Blockly.PHP.statementToCode(block, 'schema');
  // TODO: Assemble PHP into code variable.
  var code = "";
  if (!checkbox_ifnotexists) {
      code += "$db->exec( \"drop table ";
      code += "'"+text_table+"'\" );\n";
  }
  code += "$db->exec( \"create table ";
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
  // TODO: Assemble PHP into code variable.
  var code = "'"+text_fname+"' "+dropdown_fields;
  if (checkbox_primarykey) code += " primary key";
  if (checkbox_autoincrement) code += " autoincrement";
  if (checkbox_notnull) code += " not null";
  return code+", ";
};

Blockly.PHP['sw_isset'] = function(block) {
  var value_name = Blockly.PHP.valueToCode(block, 'NAME', Blockly.PHP.ORDER_ATOMIC);
//console.log(value_name);
  // TODO: Assemble PHP into code variable.
  var code = 'isset'+value_name;
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.PHP.ATOMIC];
};

Blockly.PHP['sw_postgetfile'] = function(block) {
  var dropdown_pgf = block.getFieldValue('PGF');
  // TODO: Assemble PHP into code variable.
  var code = dropdown_pgf;
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.PHP.ATOMIC];
};

Blockly.PHP['sw_insert'] = function(block) {
  var value_data = Blockly.PHP.valueToCode(block, 'data', Blockly.PHP.ORDER_ATOMIC);
  var text_table = block.getFieldValue('table');
  var variable_db = Blockly.PHP.variableDB_.getName(block.getFieldValue('db'), Blockly.Variables.NAME_TYPE);
  // TODO: Assemble PHP into code variable.
  var code = 'insert('+variable_db+', "'+text_table+'", '+value_data+');\n';
  return code;
};

Blockly.PHP['sw_showtable'] = function(block) {
  var text_table = block.getFieldValue('table');
  var variable_db = Blockly.PHP.variableDB_.getName(block.getFieldValue('db'), Blockly.Variables.NAME_TYPE);
  var checkbox_deledit = block.getFieldValue('deledit') == 'TRUE';
  // TODO: Assemble PHP into code variable.
  var code = 'showtable';
  if (checkbox_deledit) code += '_withdeledit';
  code += "("+variable_db+", '"+text_table+"');\n"
  return code;
};

Blockly.PHP['sw_tbl'] = function(block) {
  var text_table = block.getFieldValue('table');
  var variable_db = Blockly.PHP.variableDB_.getName(block.getFieldValue('db'), Blockly.Variables.NAME_TYPE);
  // TODO: Assemble PHP into code variable.
  var code = 'tbl('+variable_db+', "'+text_table+'")';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.PHP.ORDER_ATOMIC];
};

Blockly.PHP['sw_table'] = function(block) {
  var value_name = Blockly.PHP.valueToCode(block, 'NAME', Blockly.PHP.ORDER_ATOMIC);
  var dropdown_format = block.getFieldValue('format');
  // TODO: Assemble PHP into code variable.
  var code = 'table();\n';
  return code;
};

Blockly.PHP['sw_jqaddform'] = function(block) {
  var text_table = block.getFieldValue('table');
  var variable_db = Blockly.PHP.variableDB_.getName(block.getFieldValue('db'), Blockly.Variables.NAME_TYPE);
  // TODO: Assemble PHP into code variable.
  var code = 'modtable('+variable_db+', \''+text_table+'\');\n';
//  var code = 'modtable("'+text_table+'", '+variable_db+');\n';
  return code;
};

Blockly.PHP['sw_postgetfile_idx'] = function(block) {
  var dropdown_pgf = block.getFieldValue('PGF');
  var value_index = Blockly.PHP.valueToCode(block, 'index', Blockly.PHP.ORDER_ATOMIC);
  // TODO: Assemble PHP into code variable.
  var code = dropdown_pgf+"["+value_index+"]";
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.PHP.ORDER_NONE];
};

Blockly.PHP['sw_heading'] = function(block) {
  var number_level = block.getFieldValue('level');
  var text_text = block.getFieldValue('text');
  // TODO: Assemble PHP into code variable.
  var code = 'heading("'+text_text+'",'+number_level+');\n';
  return code;
};

Blockly.PHP['sw_br'] = function(block) {
  var number_level = block.getFieldValue('level');
  // TODO: Assemble PHP into code variable.
  var code = 'br('+number_level+');\n';
  return code;
};

Blockly.PHP['sw_form_start'] = function(block) {
  // TODO: Assemble PHP into code variable.
  var code = 'form_start();\n';
  return code;
};

Blockly.PHP['sw_form_end'] = function(block) {
  // TODO: Assemble PHP into code variable.
  var code = 'form_end();\n';
  return code;
};

Blockly.PHP['sw_form_input'] = function(block) {
  var text_name = block.getFieldValue('name');
  var dropdown_type = block.getFieldValue('type');
  var value_attr = Blockly.PHP.valueToCode(block, 'attr', Blockly.PHP.ORDER_ATOMIC);
  // TODO: Assemble PHP into code variable.
  if (value_attr.length > 0) value_attr = ", "+value_attr;
  value_attr = value_attr.replace(/\[/,"");
  value_attr = value_attr.replace(/\]/,"");
  var code = 'form_input("'+text_name+'", [ "type"=>"'+dropdown_type+'"'+value_attr+' ]);\n';
  return code;
};

Blockly.PHP['sw_form_submit'] = function(block) {
  var value_attr = Blockly.PHP.valueToCode(block, 'attr', Blockly.PHP.ORDER_ATOMIC);
  // TODO: Assemble PHP into code variable.
  var code = 'form_submit();\n';
  return code;
};

Blockly.PHP['sw_div'] = function(block) {
  var value_attribute = Blockly.PHP.valueToCode(block, 'attribute', Blockly.PHP.ORDER_ATOMIC);
  //rewrite for HTML notation (ad-hoc!!)
  value_attribute = value_attribute.replace(/^ "/," ");
  value_attribute = value_attribute.replace(/"=/,"=");
  value_attribute = value_attribute.replace(/>/,"");
  var statements_content = Blockly.PHP.statementToCode(block, 'content');
  // TODO: Assemble PHP into code variable.
  var code = 'echo \'<div'+value_attribute+'>\';\n'+statements_content+'echo \'</div>\'\n';
  return code;
};

Blockly.PHP['sw_span'] = function(block) {
  var value_attribute = Blockly.PHP.valueToCode(block, 'attribute', Blockly.PHP.ORDER_ATOMIC);
  //rewrite for HTML notation (ad-hoc!!)
  value_attribute = value_attribute.replace(/^ "/," ");
  value_attribute = value_attribute.replace(/"=/,"=");
  value_attribute = value_attribute.replace(/>/,"");
  var statements_content = Blockly.PHP.statementToCode(block, 'content');
  // TODO: Assemble PHP into code variable.
  var code = 'echo \'<span'+value_attribute+'>\';\n'+statements_content+'echo \'</span>\'\n';
  return code;
};

Blockly.PHP['sw_divspan'] = function(block) {
  var dropdown_divspan = block.getFieldValue('divspan');
  var value_attribute = Blockly.PHP.valueToCode(block, 'attribute', Blockly.PHP.ORDER_ATOMIC);
  //rewrite for HTML notation (ad-hoc!!)
  value_attribute = value_attribute.replace(/^ "/," ");
  value_attribute = value_attribute.replace(/"=/,"=");
  value_attribute = value_attribute.replace(/>/,"");
  var statements_content = Blockly.PHP.statementToCode(block, 'content');
  // TODO: Assemble PHP into code variable.
  var code = 'echo \'<'+dropdown_divspan+''+value_attribute+'>\';\n'+statements_content+'echo \'</'+dropdown_divspan+'>\';\n';
  return code;
};

Blockly.PHP['sw_title'] = function(block) {
  var text_text = block.getFieldValue('text');
  // TODO: Assemble PHP into code variable.
  var code = 'title("'+text_text+'");\n';
  return code;
};

Blockly.PHP['sw_echo'] = function(block) {
  var value_attribute = Blockly.PHP.valueToCode(block, 'attribute', Blockly.PHP.ORDER_ATOMIC);
  // TODO: Assemble PHP into code variable.
  var code = 'echo '+value_attribute+';\n';
  return code;
};
