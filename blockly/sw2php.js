Blockly.PHP['php_assoc_pair'] = function(block) {
  var text_keyname = block.getFieldValue('keyname');
  var text_valname = block.getFieldValue('valname');
  // TODO: Assemble PHP into code variable.
//  var code = '["'+text_keyname+'"] = "'+text_valname+'";\n';
  var code = ' "'+text_keyname+'"=>"'+text_valname+'"';
  return [code, Blockly.PHP.ORDER_ATOMIC];
};

Blockly.PHP['php_assoc_pair_string'] = function(block) {
  var text_keyname = block.getFieldValue('keyname');
  var value_name = Blockly.PHP.valueToCode(block, 'NAME', Blockly.PHP.ORDER_ATOMIC);
//  var code = '["'+text_keyname+'"] = "'+value_name+'";\n';
//  var code = ' \''+text_keyname+'\'=\''+text_valname+'\'';
  var code = ' "'+text_keyname+'"=>"'+text_valname+'"';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.PHP.ATOMIC];
};

Blockly.PHP['php_assoc_addpair'] = function(block) {
  var variable_db = Blockly.PHP.variableDB_.getName(block.getFieldValue('db'), Blockly.Variables.NAME_TYPE);
  var text_keyname = block.getFieldValue('keyname');
  var text_valname = block.getFieldValue('valname');
  // TODO: Assemble PHP into code variable.
  if (!text_keyname.match(/^[0-9]+$/)) text_keyname = '"'+text_keyname+'"';
  if (!text_valname.match(/^[0-9]+$/)) text_valname = '"'+text_valname+'"';
  var code = variable_db+'['+text_keyname+'] = '+text_valname+';\n';
  return code;
};

Blockly.PHP['php_print_recursive'] = function(block) {
  var variable_db = Blockly.PHP.variableDB_.getName(block.getFieldValue('db'), Blockly.Variables.NAME_TYPE);
  // TODO: Assemble PHP into code variable.
  var code = 'echo "<pre>";\nprint_r('+variable_db+');\necho "</pre>";\n';
  return code;
};

Blockly.PHP['php_print_recursive_array'] = function(block) {
  var value_name = Blockly.PHP.valueToCode(block, 'NAME', Blockly.PHP.ORDER_ATOMIC);
  // TODO: Assemble PHP into code variable.
  var code = 'echo "<pre>";\nprint_r('+value_name+');\necho "</pre>";\n';
  return code;
};

