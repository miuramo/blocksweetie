
Blockly.PHP['sw_form_start'] = function(block) {
    var dropdown_method = block.getFieldValue('method');
    var dropdown_enctype = block.getFieldValue('enctype');
    var checkbox_inhtml = block.getFieldValue('inhtml') == 'TRUE';
    var value_attr = Blockly.PHP.valueToCode(block, 'attr', Blockly.PHP.ORDER_ATOMIC);
    var ary = {"method" : dropdown_method};
    if (dropdown_enctype.length > 1) ary.enctype = dropdown_enctype;
    jsappend(ary, value_attr);

    if (checkbox_inhtml){
	return 'echo \'<form '+jsary2html(ary)+'>\';\n';
    } else {
	return 'form_start('+jsary2php(ary)+');\n'
    }
};

Blockly.PHP['sw_form_end'] = function(block) {
    var checkbox_inhtml = block.getFieldValue('inhtml') == 'TRUE';
    if (checkbox_inhtml){
	var code = 'echo \'</form>\';\n';
    } else {
	var code = 'form_end();\n';
    }
    return code;
};

Blockly.PHP['sw_form_input'] = function(block) {
    var text_name = block.getFieldValue('name');
    var dropdown_type = block.getFieldValue('type');
    var checkbox_inhtml = block.getFieldValue('inhtml') == 'TRUE';
    var value_attr = Blockly.PHP.valueToCode(block, 'attr', Blockly.PHP.ORDER_ATOMIC);
    var ary = {"name" : text_name, "type": dropdown_type };
    jsappend(ary, value_attr);
    
    if (checkbox_inhtml){
	var code = 'echo \'<input '+jsary2html(ary)+'>\';\n';
    } else {
	delete ary.name;
	var code = 'form_input("'+text_name+'", '+jsary2php(ary)+');\n';
    }
    return code;
};

Blockly.PHP['sw_form_submit'] = function(block) {
    var checkbox_inhtml = block.getFieldValue('inhtml') == 'TRUE';
    var value_attr = Blockly.PHP.valueToCode(block, 'attr', Blockly.PHP.ORDER_ATOMIC);
    var ary = {"type":"submit"};
    jsappend(ary, value_attr);
    
    if (checkbox_inhtml){
	var code = 'echo \'<input '+jsary2html(ary)+'>\';\n';
    } else {
	delete ary.type;
	var code = 'form_submit('+jsary2php(ary)+');\n';
    }
    return code;
};
