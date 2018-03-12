<?php
require_once("_lib.php"); // load library functions
//require_sweetielogin(); // require sweetie login for the user

//$dbfn = filter_input(INPUT_GET, 'dbfn');
//$dbfn is defined at top of lib.php
$table = filter_input(INPUT_GET, 'table');
$dbfn = filter_input(INPUT_GET, 'dbfn');
$id = filter_input(INPUT_GET, 'id');
if (is_numeric($id)){
  $db = dbopen($dbfn);
  delete($db,$table,$id);
  header('Location: '.$_SERVER["HTTP_REFERER"]); //redirect 
  exit();
}
