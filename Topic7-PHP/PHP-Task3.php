<?php
  $cookie_name = "username";
  $cookie_value = "Pilvi";
  setcookie($cookie_name, $cookie_value, time() + (86400 * 14), "/"); // 60 * 60 * 24 = 86400 seconds = 1 day
?>
<html>
<head>
  <title>PHP - Task 3</title>
  <meta charset="utf-8" />
  <meta name="author" content="Pilvi Rajala" />

  <meta name="viewport" content="width=device-width, initial-scale=1.0">

  <!--
  THE TASK
  - - - - - - -
  3. What are cookies and how does PHP support them? Develope example code.
  - - - - - - - -->

  <style>

  </style>

</head>
<body>

  <?php

    if(!isset($_COOKIE[$cookie_name])) {
      echo "Cookie named ". $cookie_name . " is not set!";
    }
    else {
      echo "Cookie named ". $cookie_name . " is set!<br />";
      echo "Value is: " . $_COOKIE[$cookie_name];
    }

  ?>

</body>
</html>
