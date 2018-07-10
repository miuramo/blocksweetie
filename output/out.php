<?php

require_once("_lib.php");

title("form");
if (isset($_GET['name']) || isset($_POST['name'])) {
  heading("GET data",2);
  echo "<pre>";
  print_r($_GET);
  echo "</pre>";
  heading("POST data",2);
  echo "<pre>";
  print_r($_POST);
  echo "</pre>";
}
heading("HTML Form",2);
form_start(["method"=>"POST"]);
form_input("name", ["type"=>"text","placeholder"=>"input text"]);
form_input("chk", ["type"=>"checkbox","placeholder"=>"input text"]);
form_input("rdo", ["type"=>"radio","placeholder"=>"input text"]);
form_input("slider", ["type"=>"range","placeholder"=>"input text"]);
form_submit(["value"=>"Submit!"]);
form_end();