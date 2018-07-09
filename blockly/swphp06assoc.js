Blockly.PHP['php_assoc_pair'] = function(block) {
    var text_keyname = block.getFieldValue('keyname');
    var text_valname = block.getFieldValue('valname');
    //  var code = '["'+text_keyname+'"] = "'+text_valname+'";\n';
    var code = ' ["'+text_keyname+'"=>"'+text_valname+'"]';
    return [code, Blockly.PHP.ORDER_ATOMIC];
};

Blockly.PHP['php_assoc_pair_string'] = function(block) {
    var text_keyname = block.getFieldValue('keyname');
    var value_name = Blockly.PHP.valueToCode(block, 'NAME', Blockly.PHP.ORDER_ATOMIC);
    //  var code = '["'+text_keyname+'"] = "'+value_name+'";\n';
    //  var code = ' \''+text_keyname+'\'=\''+text_valname+'\'';
    //    if (text_keyname === void 0) text_keyname = "undef";
    var ary = {};
    jsappend(ary, value_name);
    console.log(value_name);
    if (value_name.match(/=>/)){
	var code = ' ["'+text_keyname+'"=>'+jsary2php(ary)+']';
    } else {
	var code = ' ["'+text_keyname+'"=>"'+value_name+'"]';
    }
    return [code, Blockly.PHP.ATOMIC];
};

Blockly.PHP['php_assoc_addpair'] = function(block) {
    var variable_db = Blockly.PHP.variableDB_.getName(block.getFieldValue('ary'), Blockly.Variables.NAME_TYPE);
    var text_keyname = block.getFieldValue('keyname');
    var text_valname = block.getFieldValue('valname');
    if (!text_keyname.match(/^[0-9]+$/)) text_keyname = '"'+text_keyname+'"';
    if (!text_valname.match(/^[0-9]+$/)) text_valname = '"'+text_valname+'"';
    var code = variable_db+'['+text_keyname+'] = '+text_valname+';\n';
    return code;
};

Blockly.PHP['php_print_recursive'] = function(block) {
    var variable_db = Blockly.PHP.variableDB_.getName(block.getFieldValue('ary'), Blockly.Variables.NAME_TYPE);
    var code = 'echo "<pre>";\nprint_r('+variable_db+');\necho "</pre>";\n';
    return code;
};

Blockly.PHP['php_print_recursive_array'] = function(block) {
    var value_name = Blockly.PHP.valueToCode(block, 'NAME', Blockly.PHP.ORDER_ATOMIC);
    var code = 'echo "<pre>";\nprint_r('+value_name+');\necho "</pre>";\n';
    return code;
};

Blockly.PHP['php_foreach_var'] = function(block) {
    var variable_ary = Blockly.PHP.variableDB_.getName(block.getFieldValue('ary'), Blockly.Variables.NAME_TYPE);
    var variable_key = Blockly.PHP.variableDB_.getName(block.getFieldValue('keyvar'), Blockly.Variables.NAME_TYPE);
    var variable_val = Blockly.PHP.variableDB_.getName(block.getFieldValue('valvar'), Blockly.Variables.NAME_TYPE);
    var statements_content = Blockly.PHP.statementToCode(block, 'content');
    var code = 'foreach ('+variable_ary+' as '+variable_key+' => '+variable_val+'){\n'+statements_content+'}\n';
    return code;
};

Blockly.PHP['php_foreach_array'] = function(block) {
    var variable_ary = Blockly.PHP.valueToCode(block, 'ary', Blockly.PHP.ORDER_ATOMIC);
    var variable_key = Blockly.PHP.variableDB_.getName(block.getFieldValue('keyvar'), Blockly.Variables.NAME_TYPE);
    var variable_val = Blockly.PHP.variableDB_.getName(block.getFieldValue('valvar'), Blockly.Variables.NAME_TYPE);
    var statements_content = Blockly.PHP.statementToCode(block, 'content');
    var code = 'foreach ('+variable_ary+' as '+variable_key+' => '+variable_val+'){\n'+statements_content+'}\n';
    return code;
};
