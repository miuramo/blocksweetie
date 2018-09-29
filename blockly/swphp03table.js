Blockly.PHP['sw_showtable'] = function(block) {
    var text_table = block.getFieldValue('table');
    var variable_db = Blockly.PHP.variableDB_.getName(block.getFieldValue('db'), Blockly.Variables.NAME_TYPE);
    var checkbox_deledit = block.getFieldValue('deledit') == 'TRUE';
    var code = 'showtable';
    if (checkbox_deledit) code += '_withdeledit';
    code += "("+variable_db+", '"+text_table+"');\n"
    return code;
};

Blockly.PHP['sw_tbl'] = function(block) {
    var text_table = block.getFieldValue('table');
    var variable_db = Blockly.PHP.variableDB_.getName(block.getFieldValue('db'), Blockly.Variables.NAME_TYPE);
    var code = 'tbl('+variable_db+', "'+text_table+'")';
    return [code, Blockly.PHP.ORDER_ATOMIC];
};

Blockly.PHP['sw_table'] = function(block) {
    var value_name = Blockly.PHP.valueToCode(block, 'NAME', Blockly.PHP.ORDER_ATOMIC);
    var dropdown_format = block.getFieldValue('format');
    if (dropdown_format=='table'){
      var code = 'table('+value_name+');\n';
    } else {
      var code = 'echo "<pre>";\nprint_r('+value_name+');\necho "</pre>";\n';
    }
    return code;
};

Blockly.PHP['sw_jqaddform'] = function(block) {
    var text_table = block.getFieldValue('table');
    var variable_db = Blockly.PHP.variableDB_.getName(block.getFieldValue('db'), Blockly.Variables.NAME_TYPE);
    var code = 'modtable('+variable_db+', \''+text_table+'\');\n';
    //  var code = 'modtable("'+text_table+'", '+variable_db+');\n';
    return code;
};
