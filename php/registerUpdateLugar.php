<?php

$servername="localhost";
$username="root";
$password="losseisbastardos12";
$dbname="paradise";
// Credentials


$conn= new mysqli($servername	,$username	,$password	,$dbname);

if ($conn->connect_error){
	die("Conexión Fallida: ".$conn->connect_error);
    exit();
}
$ob_lugar=json_decode($_GET['b']);

$sql=null;

if (($ob_lugar->type)===true){
    $sql="call SP_insert_lugar('".$ob_lugar->nombre."','".$ob_lugar->desc."',".$ob_lugar->costo.",".$ob_lugar->capacidad.");";//SQL Sentence

} else {
    $sql="call SP_update_lugar(".$ob_lugar->numero.",'".$ob_lugar->nombre."','".$ob_lugar->desc."',".$ob_lugar->costo.",".$ob_lugar->capacidad.");";//SQL Sentence

}


if ($conn->query($sql)===TRUE){

    echo "Registrado!";

} else {
    echo "Error al momento de registrar: ".$sql." ---> ".$conn->error;
}




?>