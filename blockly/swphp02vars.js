Blockly.PHP['sw_isset'] = function(block) {
  var value_name = Blockly.PHP.valueToCode(block, 'NAME', Blockly.PHP.ORDER_ATOMIC);
  var code = 'isset('+value_name+')';
  return [code, Blockly.PHP.ATOMIC];
};

Blockly.PHP['sw_isarray'] = function(block) {
  var value_name = Blockly.PHP.valueToCode(block, 'NAME', Blockly.PHP.ORDER_ATOMIC);
  var code = 'is_array('+value_name+')';
  return [code, Blockly.PHP.ATOMIC];
};

Blockly.PHP['sw_postgetfile'] = function(block) {
  var dropdown_pgf = block.getFieldValue('PGF');
  var code = dropdown_pgf;
  return [code, Blockly.PHP.ATOMIC];
};

Blockly.PHP['sw_postgetfile_idx'] = function(block) {
  var dropdown_pgf = block.getFieldValue('PGF');
  var value_index = Blockly.PHP.valueToCode(block, 'index', Blockly.PHP.ORDER_ATOMIC);
  var code = dropdown_pgf+"["+value_index+"]";
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.PHP.ORDER_ATOMIC];
};

