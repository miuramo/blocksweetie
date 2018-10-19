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

