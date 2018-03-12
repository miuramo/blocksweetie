<?php

require_once("_lib.php");

$db = dbopen("tweet.db");
$db->exec( "create table if not exists 'tweets' ('id' INTEGER primary key autoincrement not null, 'mes' TEXT not null, 'dt' DATETIME not null)" );

if (isset($_POST['mes'])) {
  insert($db, "tweets", $_POST);
  heading("Tweet posted",3);
}
heading("Your Tweets",2);
showtable_withdeledit($db, 'tweets');
modtable($db, 'tweets');
heading("Add New Tweet",6);
echo "<div>";
  form_start();
  form_input("mes", [ "type"=>"text" ]);
  form_submit();
  form_end();
echo "</div>";