<?php
 
require_once("../classes/espacios.php");

        $obj=new espacios();   
        $obj->setNombre($_GET['b']);         
        echo $obj->insertEspacios();       
?>
