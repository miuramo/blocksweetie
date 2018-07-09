Blockly.PHP['sw_title'] = function(block) {
    var checkbox_inhtml = block.getFieldValue('inhtml') == 'TRUE';
    var text_text = block.getFieldValue('text');
    if (checkbox_inhtml){
	var code = 'echo \'<title>'+text_text+'</title>\';\n';
    } else {
	var code = 'title("'+text_text+'");\n';
    }
    return code;
};

Blockly.PHP['sw_echo'] = function(block) {
    var value_attr = Blockly.PHP.valueToCode(block, 'attr', Blockly.PHP.ORDER_ATOMIC);
    var code = 'echo('+value_attr+');\n';
    return code;
};

Blockly.PHP['sw_heading'] = function(block) {
    var checkbox_inhtml = block.getFieldValue('inhtml') == 'TRUE';
    var number_level = block.getFieldValue('level');
    var text_text = block.getFieldValue('text');
    if (checkbox_inhtml){
	var code = 'echo \'<h'+number_level+'>'+text_text+'</h'+number_level+'>\';\n';
    } else {
	var code = 'heading("'+text_text+'",'+number_level+');\n';
    }
    return code;
};

Blockly.PHP['sw_br'] = function(block) {
    var checkbox_inhtml = block.getFieldValue('inhtml') == 'TRUE';
    var number_level = block.getFieldValue('level');
    if (checkbox_inhtml){
	var code = '';
	for(var i=0 ; i< number_level ; i++){
	    code += 'echo \'<br>\';\n';
	}
    } else {
	var code = 'br('+number_level+');\n';
    }
    return code;
};

Blockly.PHP['sw_divspan'] = function(block) {
    var dropdown_divspan = block.getFieldValue('divspan');
    var value_attr = Blockly.PHP.valueToCode(block, 'attribute', Blockly.PHP.ORDER_ATOMIC);
    var ary = {};
    if (value_attr !== void 0) jsappend(ary, value_attr);
    var statements_content = Blockly.PHP.statementToCode(block, 'content');
    var attr = jsary2html(ary);
    if (attr.length < 1) attr = ''; else attr = " "+attr;
    var code = 'echo \'<'+dropdown_divspan+''+attr+'>\';\n'+statements_content+'echo \'</'+dropdown_divspan+'>\';\n';
    return code;
};

Blockly.PHP['sw_tabletr'] = function(block) {
    var dropdown_tabletr = block.getFieldValue('tabletr');
    var value_attr = Blockly.PHP.valueToCode(block, 'attribute', Blockly.PHP.ORDER_ATOMIC);
    var ary = {};
    if (value_attr !== void 0) jsappend(ary, value_attr);
    var statements_content = Blockly.PHP.statementToCode(block, 'content');
    var attr = jsary2html(ary);
    if (attr.length < 1) attr = ''; else attr = " "+attr;
    var code = 'echo \'<'+dropdown_tabletr+''+attr+'>\';\n'+statements_content+'echo \'</'+dropdown_tabletr+'>\';\n';
    return code;
};

Blockly.PHP['sw_tdth'] = function(block) {
    var dropdown_tdth = block.getFieldValue('tdth');
    var value_attr = Blockly.PHP.valueToCode(block, 'attribute', Blockly.PHP.ORDER_ATOMIC);
    var ary = {};
    if (value_attr != void 0) jsappend(ary, value_attr);
    var statements_content = Blockly.PHP.statementToCode(block, 'content');
    var attr = jsary2html(ary);
    if (attr.length < 1) attr = ''; else attr = " "+attr;
    var code = 'echo \'<'+dropdown_tdth+''+attr+'>\';\n'+statements_content+'echo \'</'+dropdown_tdth+'>\';\n';
    return code;
};


