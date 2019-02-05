<?php
$servername = "localhost";
$username = "root";
$password = "12345";
$db = "ajax";

// Create connection
$conn = mysqli_connect($servername, $username, $password,$db);

// Check connection
if ($conn) {
    echo "Connected successfully";
}else{
    die("Connection failed: " . mysqli_connect_error());
}

?>