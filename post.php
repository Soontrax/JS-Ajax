<?php 
header("access-control-allow-origin: *");
$con = mysqli_connect("localhost","root","12345") or die(mysqli_error());
mysqli_select_db($con,"ajax") or die(mysqli_error());
$query = "INSERT INTO persona(Nombre,Email) VALUES(jose,pruba@gmail.com)";
mysqli_query($con,$query);
echo "Miquel";
echo "Taberner";

//$name=htmlspecialchars($_POST["name"]);
//$email=htmlspecialchars($_POST["email"]);
//////////////////////////////////////////////////////
?>