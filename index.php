<?php
ini_set('display_errors',1);
error_reporting(E_ALL);

include 'connect.php';

$conn = OpenCon();

$id = uniqid();
$country = 'Brazil';

$sql = "INSERT INTO accesses (id, country, created_at) VALUES ('$id', '$country', NOW())";

if (mysqli_query($conn, $sql)) {
  echo "New record created successfully";
} else {
  echo "Error: " . $sql . "<br>" . mysqli_error($mysqli);
}

$tes = "SELECT * FROM accesses ORDER BY id DESC LIMIT 1";

$result = $conn->query($tes);

if ($result->num_rows > 0) {
  while($row = $result->fetch_assoc()) {
    echo $row["country"], $row["created_at"];
  }
} else {
  echo "0 results";
}

// echo "Connected Successfully";
// CloseCon($conn);
