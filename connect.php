<?php

function OpenCon() 
{
$hostname = "localhost";
$database = "test";
$user = "root";
$password = "";

$mysqli = new mysqli($hostname, $user, $password, $database);

return $mysqli;
}

function CloseCon( $mysqli)
{
  $mysqli -> close();
}

