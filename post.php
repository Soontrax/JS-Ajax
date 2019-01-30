<?php 
header("access-control-allow-origin: *");
$name=htmlspecialchars($_POST["name"]);
$email=htmlspecialchars($_POST["email"]);
$phone=htmlspecialchars($_POST["phone"]);

$con = mysqli_connect("localhost","root","12345") or die(mysqli_error());
mysqli_select_db($con,"ajax") or die(mysqli_error());

$query = "INSERT INTO persona(Nombre,Email,Telefono) VALUES('$name','$email','$phone')";
mysqli_query($con,$query);
?>