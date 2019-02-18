<?php
header("access-control-allow-origin: *");
$departamento=htmlspecialchars($_POST["departamento"]);
$con = mysqli_connect("localhost","root","12345") or die(mysqli_error());
mysqli_select_db($con,"ajax") or die(mysqli_error());
$query = "SELECT id FROM departamento WHERE Nom_Dpmt = '$departamento'";

$result_id = mysqli_query($con,$query);

$query_pst = "SELECT Nom_Pst FROM puesto WHERE ID_Dprt = '$result_id'";

$result_dprt = mysqli_query($con,$query_pst);

$numReg = mysqli_num_rows($result_dprt);

$strHTML = "";

for ($i=0; $i < $numReg; $i++) {
    $row = mysqli_fetch_array($result_dprt);
    $strHTML .=$row["Nom_Pst"];
	echo '<option value=' + $row["Nom_Pst"] + '>' + $row["Nom_Pst"] + '</option>';
}


?>