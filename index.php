<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8">
      <title>Block Sweetie</title>
      <script src="blockly/blockly_compressed.js"></script>
      <script src="blockly/blocks_compressed.js"></script>
      <script src="blockly/php_compressed.js"></script>
      <script src="blockly/msg/js/en.js"></script>

      <script src="blockly/jsaryutil.js"></script>
      <script src="blockly/swblk01db.js"></script> 
      <script src="blockly/swphp01db.js"></script> 
      <script src="blockly/swblk02vars.js"></script> 
      <script src="blockly/swphp02vars.js"></script> 
      <script src="blockly/swblk03table.js"></script> 
      <script src="blockly/swphp03table.js"></script> 
      <script src="blockly/swblk04html.js"></script> 
      <script src="blockly/swphp04html.js"></script> 
      <script src="blockly/swblk05form.js"></script> 
      <script src="blockly/swphp05form.js"></script> 
      <script src="blockly/swblk06assoc.js"></script> 
      <script src="blockly/swphp06assoc.js"></script> 
      <!--      <script
      src="https://code.jquery.com/jquery-1.12.4.min.js"
      integrity="sha256-ZosEbRLbNQzLpnKIkEdrPv7lOy9C27hHQ+Xp8a4MxAQ="
      crossorigin="anonymous"></script> -->
      <script src="jquery.ui.layout/js/jquery.js"></script>
      <script src="jquery.ui.layout/js/jquery-ui.js"></script>
      <script src="jquery.ui.layout/js/jquery.layout.js"></script>

      <style>
      body {
          background-color: #eef;
          font-family: sans-serif;
      }
      h1 {
          font-weight: normal;
          font-size: 140%;
      }
</style>
</head>
<body>

<div class="ui-layout-north">
          Block Sweetie
<?php
          function bswlist($dir){
              if (!is_dir($dir)) return [];
              $files = scandir($dir);
              $out = "<select name=\"bswload_{$dir}\"')\">\n";
              $out .= "<option value=\"\">Load from {$dir}</option>";
              foreach($files as $n=>$f){
                  if ($f=="." || $f=="..") continue;
                  if (preg_match("/.bsw/", $f)){
                      $out .= "<option value=\"{$f}\">{$f}</option>\n";
                  }
              }
              $out .= "</select>\n";
              return $out;
          }
echo bswlist("samples");
echo bswlist("output");

echo "<button onclick=\"blkxmlsavefile()\">Save as output/xxx.bsw</button> ";
?>
<button onclick="wsclear()">Clear</button>
    &nbsp; 
<a target="_blank" href="output/phpliteadmin.php">phpliteadmin</a>
    <button onclick="block2src()">Export(Block to Text)</button>
    <button onclick="srcsaveandrun()">Save &amp; Run</button>
<input type="checkbox" id="editandrun" checked="checked">
                                                     <label for="editandrun" style="font-size:small;">Auto Export &amp; Run</label>

</div>
<div id="blocklyDiv" class="ui-layout-center" style="position: absolute">
</div>
<textarea id="src" class="ui-layout-east" style="font-size: 15px;font-family: verdana; background:#fff; height: 790px; width: 400px;">
</text<?php echo "area>";?>

<?php
echo '<textarea id="blktxt" style="visible:false;">';
echo '</text'.'area>';
?>

<xml id="toolbox" style="display: none">
             <category name="Logic">
             <block type="controls_if"></block>
             <block type="logic_compare"></block>
             <block type="logic_operation"></block>
             <block type="logic_negate"></block>
             <block type="logic_boolean"></block>
             </category>
             <category name="Loops">
             <block type="controls_repeat_ext">
             <value name="TIMES">
             <block type="math_number">
             <field name="NUM">10</field>
             </block>
             </value>
             </block>
             <block type="controls_whileUntil"></block>
             </category>
             <category name="Math">
             <block type="math_number"></block>
             <block type="math_arithmetic"></block>
             <block type="math_single"></block>
             <block type="php_rand"></block>
             <block type="php_date">
             </block>
             </category>
             <category name="Lists">
             <block type="lists_create_empty"></block>
             <block type="lists_create_with"></block>
             <block type="lists_repeat">
             <value name="NUM">
             <block type="math_number">
             <field name="NUM">5</field>
             </block>
             </value>
             </block>
             <block type="lists_length"></block>
             <block type="lists_isEmpty"></block>
             <block type="lists_indexOf"></block>
             <block type="lists_getIndex"></block>
             <block type="lists_setIndex"></block>
             </category>
             <category name="Variables" custom="VARIABLE"></category>
             <category name="Text">
             <block type="text"></block>
             <block type="text_length"></block>
             <block type="text_print"></block>
             </category>

             <category name="Sw DB" colour="#5b5ba5">
             <block type="sw_init"></block>
             <block type="sw_create_table">
             <field name="ifnotexists">TRUE</field>
             <field name="table">table_name</field>
             </block>
             <block type="sw_dbopen">
             <field name="dbfilename">db_filename</field>
             </block>
             <block type="sw_field">
             <field name="fname">id</field>
             <field name="fields">INTEGER</field>
             <field name="primarykey">TRUE</field>
             <field name="autoincrement">TRUE</field>
             <field name="notnull">TRUE</field>
             </block>
             <block type="sw_insert">
             <field name="table">table_name</field>
             <field name="db" id="~t62Y3_YY5|vs)R,q22E" variabletype="">db</field>
             </block>
             </category>

             <category name="Sw Vars" colour="#A65C81" custom="VARIABLE">
             </category>

             <category name="Sw Table" colour="#a55b5b">
             <block type="sw_showtable">
             <field name="table">table_name</field>
             <field name="db" id="HPzA33AeX+H)?T^TF;_5" variabletype="">db</field>
             <field name="deledit">TRUE</field>
             </block>
             <block type="sw_tbl">
             <field name="table">table_name</field>
             <field name="db" id="HPzA33AeX+H)?T^TF;_5" variabletype="">db</field>
             </block>
             <block type="sw_table">
             <field name="format">table</field>
             </block>
             <block type="sw_jqaddform">
             <field name="table">table</field>
             <field name="db" id="HPzA33AeX+H)?T^TF;_5" variabletype="">db</field>
             </block>
             <block type="sw_postgetfile">
             <field name="PGF">POST</field>
             </block>
             <block type="sw_postgetfile_idx">
             <field name="PGF">POST</field>
             <value name="index">
             <block type="text">
             <field name="TEXT">name</field>
             </block>
             </value>
             </block>

             <block type="sw_postgetfile_idx">
             <field name="PGF">SERVER</field>
             <value name="index">
             <block type="sw_dropdowntext">
             <field name="TXT">REMOTE_ADDR</field>
             </block>
             </value>
             </block>

             <block type="sw_dropdowntext">
             <field name="TXT">HTTP_HOST</field>
             </block>

             <block type="sw_dropdowntext">
             <field name="TXT">SERVER_NAME</field>
             </block>

             <block type="sw_isset"></block>
             <block type="sw_isarray"></block>
             </category>

             <category name="Sw HTML" colour="#80a55b">
             <block type="sw_title">
             <field name="text">text</field>
             </block>
             <block type="sw_heading">
             <field name="level">1</field>
             <field name="text">text</field>
             </block>
             <block type="sw_echo"></block>
             <block type="sw_br">
             <field name="level">1</field>
             </block>
             <block type="sw_divspan">
             <field name="divspan">div</field>
             </block>
             <block type="sw_tabletr">
             <field name="tabletr">table</field>
             </block>
             <block type="sw_tdth"></block>
             </category>
             <category name="Sw Form" colour="#5ba593">
             <block type="sw_form_start"></block>
             <block type="sw_form_input">
             <field name="name">name</field>
             <field name="type">text</field>
             </block>
             <block type="sw_form_submit"></block>
             <block type="sw_form_end"></block>
             </category>
             <category name="PHP Assoc" colour="#5b5ba5">
             <block type="php_assoc_pair"></block>
             <block type="php_assoc_pair_string">
             <field name="name">name</field>
             </block>
             <block type="php_assoc_addpair"></block>
             <block type="lists_create_with"></block>
             <block type="php_print_recursive"></block>
             <block type="php_print_recursive_array"></block>
             <block type="php_foreach_var"></block>
             <block type="php_foreach_array"></block>
             </category>


             </xml>

             <xml id="startBlocks" style="display: none">
             </xml> <!-- end of workspace -->

             <script>

             function changeEvent(primaryEvent) {
                 if (primaryEvent.type == Blockly.Events.UI) {
                     return;  // Don't mirror UI events.
                 }

                 var current_blkxml = blktext();
                 if (loaded_blkxml != current_blkxml) modified = 1; else modified = 0;
                 var editandrun = $('#editandrun').prop('checked');
                 if (editandrun) {
                     var newSrc = block2src();
                     if (previousSrc != newSrc) srcsaveandrun();
                     previousSrc = newSrc;
                 }
             }

var previousSrc = ""; 

function block2src() {
    // Generate PHP code and display it.
    //       Blockly.Javascript.INFINITE_LOOP_TRAP = null;
    var code = Blockly.PHP.workspaceToCode(workspace);
    //    code = code.replace(/\$db;/,"");
    code = code.replace(/\$[\w]+;/g,""); // remove variable definitions on top
    code = code.trim();
    $("#src").val(code);
    return code;
}

function wsclear(){
    workspace.clear();
    var xml = Blockly.Xml.textToDom('<xml xmlns="http://www.w3.org/1999/xhtml"><variables><variable type="" id="x1nd?ef7%+u^ji%$)*U@">db</variable></variables></xml>');
    Blockly.Xml.domToWorkspace(xml, workspace);
}

function runCode() {
    // Generate PHP code and run it.
    window.LoopTrap = 1000;
    Blockly.Javascript.INFINITE_LOOP_TRAP =
           'if (--window.LoopTrap == 0) throw "Infinite loop.";\n';
    var code = Blockly.PHP.workspaceToCode(workspace);
    Blockly.JavaScript.INFINITE_LOOP_TRAP = null;
    try {
        eval(code);
    } catch (e) {
        alert(e);
    }
}

/*function wsclear(){
  workspace.clear();
  }*/

function blktext(){
	var xml = Blockly.Xml.workspaceToDom(workspace);
	var text = Blockly.Xml.domToText(xml);
    return text;
}
function blkexport(){
    $("#blktxt").val( blktext() );
}
function blkimport(){
    workspace.clear();
    var text = $("#blktxt").val();
    text = text.replace(/&lt;/g, '<');
    text = text.replace(/&gt;/g, '>');
    var xml = Blockly.Xml.textToDom(text);
    Blockly.Xml.domToWorkspace(xml, workspace);
}
function blkclear(){
    $("#blktxt").val('');
}
function blkxmlload(num){
    var txt = localStorage.getItem("bsw"+num);
    $("#blktxt").val(txt);
    blkimport();
}
function blkxmlloadfile(fn = null, dir = null){
    if (fn == null){
        fn = prompt("input file name (.bsw)");
        if (fn=="" || fn == null) return;
    } else {
        if (fn=="") return;
        blkexport();
        var oldsrc = $("#blktxt").val();
        if (oldsrc.length > 71 && modified){
            if (!confirm("really load from file "+fn+" ? (Save blocks before load!!)")) return;
        }
    }
    // save current block code
    if (dir ==null) dir = "output";
    $.get(dir+"/"+fn).done(function(txt){
        $("#blktxt").val(txt);  loaded_blkxml = txt;
            blkimport();
            modified = 0;
    });
}
function blkxmlsavefile(fn = null){
    if (fn == null){
        fn = prompt("input base file name of [output/*.bsw]\n (ex. enter 'myapp' for file 'output/myapp.bsw')");
        if (!fn.match(/.bsw$/)){
            fn = fn+".bsw";
        }
    }
    blkexport();
    var xml = $("#blktxt").val();
    xml = xml.replace(/&lt;/g, '<');
    xml = xml.replace(/&gt;/g, '>');
    if (xml.length < 73) {
        if (!window.confirm('保存データが空になりますが、よろしいですか？')) return;
    }
    $.ajax({
            type:"POST",
     url: "save.php",
     data: {"fn": fn,
     "src": xml},
     success: function(a){
         console.log("Saved as output/"+fn);
     }
     });
}
function blkxmlsave(num){
    blkexport();
    var text = $("#blktxt").val();
    text = text.replace(/&lt;/g, '<');
    text = text.replace(/&gt;/g, '>');
    if (text.length < 73) {
        if (!window.confirm('保存データが空になりますが、よろしいですか？')) return;
    }
    localStorage.setItem("bsw"+num, text);
}
var win;
var modified = 0;
var loaded_blkxml;
function srcsaveandrun(){
    //    var code = $("#src").text();
    var code = $("#src").val();
    code = "<"+"?php\n\n" + code;
    $.ajax({
            type:"POST",
     url: "save.php",
     data: {"fn": "out.php",
     "src": code},
     success: function(a){
         if (win == null) {
             win = window.open("output/out.php","out","left: 100, top:100, width=500, height=500");
         } else {
             win.location.href = "output/out.php";
         }
     }
     });
    
}

var myLayout, workspace;
var onresizeSoon = function(){
    setTimeout("onresize()", 300);
}
var onresize = function(e) {
    Blockly.svgResize(workspace);
};

$(document).ready(function(){
    //Layout Border
    myLayout = $('body').layout({ 
            east__size: 380,
            applyDefaultStyles: true });
    
    workspace = Blockly.inject('blocklyDiv',
                               {media: 'blockly/media/',
                                toolbox: document.getElementById('toolbox'),
                                zoom: {controls: true, 
                                       wheel: true,
                                       startScale:1.0,
                                       maxScale:3,
                                       minScale:0.3,
                                       scaleSpeed:1.2}
                               });
    Blockly.Xml.domToWorkspace(document.getElementById('startBlocks'),
                               workspace);
    
    workspace.addChangeListener(changeEvent);

    $('[name=bswload_output]').change(function(){
        var val = $('[name=bswload_output]').val();
        blkxmlloadfile(val,"output");
    });
    $('[name=bswload_samples]').change(function(){
        var val = $('[name=bswload_samples').val();
        blkxmlloadfile(val,"samples");
    });

    block2src();
    onresizeSoon();

});

window.addEventListener('resize', onresizeSoon, false);

</script>

</body>
</html>
