<?php
header("access-control-allow-origin: *");
$con = mysqli_connect("localhost","root","12345") or die(mysqli_error());
mysqli_select_db($con,"ajax") or die(mysqli_error());
$query = "SELECT ID,Nombre,Email,Telefono FROM persona ORDER BY Nombre ASC";
	
$result = mysqli_query($con,$query);
$numReg = mysqli_num_rows($result);
$strHTML = "";


echo "<h3>Tabla usuarios</h3>";
echo "<table class='table'>";
echo "<thead class='thead-dark'>";
echo "<tr>";
    echo "<th scope='col'>ID</th>
    <th scope='col'>Nombre</th>
	<th scope='col'>Email</th>
	<th scope='col'>Telefono</th>";
echo "</tr>";
echo "</thead>";
echo "<tbody>";
for ($i=0; $i<$numReg; $i++) {
	echo "<tr>";
	$row = mysqli_fetch_array($result);
	$strHTML .=$row["ID"];
	$strHTML .=$row["Nombre"];
	$strHTML .=$row["Email"];
	$strHTML .=$row["Telefono"];
	echo "<th scope='row'>";
	echo $row["ID"];
	echo "</th>";
	echo "<th scope='row'>";
	echo $row["Nombre"];
	echo "</th>";
	echo "<th scope='row'>";
	echo $row["Email"];
	echo "</th>";
	echo "<th scope='row'>";
	echo $row["Telefono"];
	echo "</th>";
	echo "</tr>";
}
?>