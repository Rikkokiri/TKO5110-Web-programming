<?php

  // Array which maps letters to their morse code equivalents
  $morse_letters = array(
    "a" => ".-",
    "b" => "-...",
    "c" => "-.-.",
    "d" => "-..",
    "e" => ".",
    "f" => "..-.",
    "g" => "--.",
    "h" => "....",
    "i" => "..",
    "j" => ".---",
    "k" => "-.-",
    "l" => ".-..",
    "m" => "--",
    "n" => "-.",
    "o" => "---",
    "p" => ".--.",
    "q" => "--.-",
    "r" => ".-.",
    "s" => "...",
    "t" => "-",
    "u" => "..-",
    "v" => "...-",
    "w" => ".--",
    "x" => "-..-",
    "y" => "-.--",
    "z" => "--..",
    "å" => ".--.-",
    "ä" => ".-.-",
    "ö" => "---.",
    "0" => "-----",
    "1" => ".----",
    "2" => "..---",
    "3" => "...--",
    "4" => "....-",
    "5" => ".....",
    "6" => "-....",
    "7" => "--...",
    "8" => "---..",
    "9" => "----.",
    "." => ".-.-.-",
    "," => "--..--",
    "?" => "..--..",
    "/" => "-..-.",
    " " => " "
  );

  $message = "";

  // Get the message from the request
  if(isset($_POST['message'])){
    // Convert the message to lower
    $message = mb_strtolower( $_POST['message'] );
  }

  // Iterate over the characters in the message and map them to their morse code equivalents
  for( $index = 0; $index < strlen($message); $index++ ){
    $letter = $message[$index];

    if( isset($morse_letters[$letter]) ){
      echo $morse_letters[$letter] . ' ';
    }
    // If there isn't morse code match for a character, print the character as it is
    else {
      echo $letter . ' ';
    }
  }

?>
