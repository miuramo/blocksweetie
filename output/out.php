<?php

require_once("_lib.php");

title("phpassoc");
$ary = ["Japan"=>"Tokyo",
"Thailand"=>"Bangkok",
"Malaysia"=>"Kuala Lumpur"];
echo '<div style="background: #efc; padding: 10px;">';
  echo "<pre>";
  print_r($ary);
  echo "</pre>";
echo '</div>';
$ary["France"] = "Paris";
echo '<div style="background: #ecf; padding: 10px;">';
  echo "<pre>";
  print_r($ary);
  echo "</pre>";
echo '</div>';
foreach ($ary as $key => $val){
  echo($key);
  echo(' => ');
  echo($val);
  br(1);
}