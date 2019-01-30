<?php
header("access-control-allow-origin: *");
$con = mysqli_connect("localhost","root","12345") or die(mysqli_error());
mysqli_select_db($con,"ajax") or die(mysqli_error());
$query = "SELECT Nombre FROM persona ORDER BY Nombre";
	
$result = mysqli_query($con,$query);
$numReg = mysqli_num_rows($result);
$strHTML = "";

for ($i=0; $i<$numReg; $i++) {
	$row = mysqli_fetch_array($result);
	$strHTML .=$row["Nombre"].'<br>';
}
echo $strHTML;
?>