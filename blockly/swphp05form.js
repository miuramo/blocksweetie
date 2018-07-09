Blockly.PHP['sw_form_start'] = function(block) {
    var code = 'form_start();\n';
    return code;
};

Blockly.PHP['sw_form_end'] = function(block) {
    var code = 'form_end();\n';
    return code;
};

Blockly.PHP['sw_form_input'] = function(block) {
    var text_name = block.getFieldValue('name');
    var dropdown_type = block.getFieldValue('type');
    var value_attr = Blockly.PHP.valueToCode(block, 'attr', Blockly.PHP.ORDER_ATOMIC);
    if (value_attr.length > 0) value_attr = ", "+value_attr;
    value_attr = value_attr.replace(/\[/,"");
    value_attr = value_attr.replace(/\]/,"");
    var code = 'form_input("'+text_name+'", ["type"=>"'+dropdown_type+'"'+value_attr+' ]);\n';
    return code;
};

Blockly.PHP['sw_form_submit'] = function(block) {
    var value_attr = Blockly.PHP.valueToCode(block, 'attr', Blockly.PHP.ORDER_ATOMIC);
    var code = 'form_submit('+value_attr+');\n';
    return code;
};
