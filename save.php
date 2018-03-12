<?php

$src = "<?php\n\n".$_POST['src'];
$fn = $_POST['fn'];

$h = fopen("output/{$fn}", "w");
if ($h !== null){
    fwrite($h, stripslashes($src));
}
fclose($h);

header("text/plain");
echo "success";
