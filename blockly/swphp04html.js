Blockly.PHP['sw_title'] = function(block) {
    var text_text = block.getFieldValue('text');
    var code = 'title("'+text_text+'");\n';
    return code;
};

Blockly.PHP['sw_echo'] = function(block) {
    var value_attr = Blockly.PHP.valueToCode(block, 'attr', Blockly.PHP.ORDER_ATOMIC);
    var code = 'echo('+value_attr+');\n';
    return code;
};

Blockly.PHP['sw_heading'] = function(block) {
  var number_level = block.getFieldValue('level');
  var text_text = block.getFieldValue('text');
  var code = 'heading("'+text_text+'",'+number_level+');\n';
  return code;
};

Blockly.PHP['sw_br'] = function(block) {
  var number_level = block.getFieldValue('level');
  var code = 'br('+number_level+');\n';
  return code;
};

Blockly.PHP['sw_divspan'] = function(block) {
  var dropdown_divspan = block.getFieldValue('divspan');
  var value_attribute = Blockly.PHP.valueToCode(block, 'attribute', Blockly.PHP.ORDER_ATOMIC);
  //rewrite for HTML notation (ad-hoc!!)
  value_attribute = value_attribute.replace(/^ \["/," ");
  value_attribute = value_attribute.replace(/"=/,"=");
  value_attribute = value_attribute.replace(/>/,"");
  value_attribute = value_attribute.replace(/\]$/,"");
  var statements_content = Blockly.PHP.statementToCode(block, 'content');
  var code = 'echo \'<'+dropdown_divspan+''+value_attribute+'>\';\n'+statements_content+'echo \'</'+dropdown_divspan+'>\';\n';
  return code;
};

Blockly.PHP['sw_div'] = function(block) {
  var value_attribute = Blockly.PHP.valueToCode(block, 'attribute', Blockly.PHP.ORDER_ATOMIC);
  //rewrite for HTML notation (ad-hoc!!)
  value_attribute = value_attribute.replace(/^ \["/," ");
  value_attribute = value_attribute.replace(/"=/,"=");
  value_attribute = value_attribute.replace(/>/,"");
  value_attribute = value_attribute.replace(/\]$/,"");
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


