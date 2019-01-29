<?php
header("access-control-allow-origin: *");
$con = mysqli_connect("localhost","root","12345") or die(mysqli_error());
mysqli_select_db($con,"DAW") or die(mysqli_error());
$query = "SELECT NOM FROM ALUMNES ORDER BY NOM";
	
$result = mysqli_query($con,$query);
$numReg = mysqli_num_rows($result);
$strHTML = "";

for ($i=0; $i<$numReg; $i++) {
	$row = mysqli_fetch_array($result);
	$strHTML .=$row["NOM"].'<br>';
}
echo $strHTML;
?>