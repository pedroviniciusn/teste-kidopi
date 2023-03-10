<?php
ini_set('display_errors',1);
error_reporting(E_ALL);

include 'connect.php';

function data($country)
{
  $conn = OpenCon();

  $id = uniqid();

  if ($country != "") {
    $sql = "INSERT INTO accesses (id, country, created_at) VALUES ('$id', '$country', NOW())";
  
    if (mysqli_query($conn, $sql)) {
      echo "";
    } else {
      echo "Error: " . $sql . "<br>" . mysqli_error($mysqli);
    }
  }

  $getData = "SELECT * FROM accesses ORDER BY id DESC LIMIT 1";

  $result = $conn->query($getData);

  if ($result->num_rows > 0) {
    while($row = $result->fetch_assoc()) {
      $countryData = $row["country"];
      $dateFormated = date("d-m-Y", strtotime($row["created_at"]));
    }
  } else {
    echo "0 results";
  }

  CloseCon($conn);
  return [$countryData, $dateFormated];
}
