<?php

require_once("_lib.php");

title("html01");
heading("Heading 1",1);
heading("Heading 2",2);
heading("Heading 3",3);
heading("Div is block element",2);
echo '<div style="background: #efc; padding: 10px;">';
  echo 'inside of div';
  br(2);
  echo 'inside of div';
echo '</div>';
heading("Span is inline element",2);
echo '<span style="background: #fcc; padding: 10px;">';
  echo 'inside of span';
  br(2);
  echo 'inside of span';
echo '</span>';