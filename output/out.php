<?php

require_once("_lib.php");

title("html01");
heading("Heading 1",1);
echo(date('Y-m-d H:i:s'));
heading("Heading 2",2);
echo(rand(1,100));
heading("Heading 3",3);
heading("Div is block element",2);
echo '<div style="background: #efc; padding: 10px;">';
  echo('Inside of div element');
  br(2);
  echo('after line break');
echo '</div>';
heading("Span is inline element",2);
echo '<span style="background: #fcc; padding: 10px;">';
  echo('Inside of span element');
  br(2);
  echo('after line break');
echo '</span>';