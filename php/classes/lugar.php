<?php  
    require_once("php/../mysql/connection.php");
    require_once("tipoLugar.php");
    require_once("direccion.php");
    require_once("espacios.php");

    


     class lugar {
        private $num;        
	    private $nombre;
        private $desc;
        private $costo;
        private $capacidad;


        private $espacio;
        private $tipoLugar; 
        private $direccion; 

	   //Getters and Setters
       public function getNum(){return $this->num;}
       public function setNum($var){$this->num=$var;}

       public function getNombre(){return $this->nombre;}
       public function setNombre($var){$this->nombre=$var;}

       public function getDesc(){return $this->desc;}
       public function setDesc($var){$this->desc=$var;}

       public function getCosto(){return $this->costo;}
       public function setCosto($var){$this->costo=$var;}

       public function getCapacidad(){return $this->capacidad;}
       public function setCapacidad($var){$this->capacidad=$var;}

       //Tipo lugar
       public function getTL(){return $this->tipoLugar;}
       public function setTL($var){$this->tipoLugar=$var;}

       //Direcci�n
       public function getDir(){return $this->direccion;}
       public function setDir($var){$this->direccion=$var;}                    


       public function getEsp(){return $this->espacio;}
       public function setEsp($var){$this->espacio=$var;}                    

       public function __construct() {

               $args=func_get_args();//Te devulve par�metros

               if (func_num_args()==0){
                    $this->num=0;
                    $this->nombre='';
                    $this->desc='';
                    $this->costo=0.00;
                    $this->capacidad='';

                    $this->espacio=new espacios();
                    $this->tipoLugar= new tipoLugar();//Creo una nueva instancia.
                    $this->direccion=new direccion();
              }

              //Constructor con un �nico par�metro. 
              //Usado para buscar y extraer datos en una �nica instancia.
              
               if (func_num_args()==1){   
                 
                  $sql="select * from VW_lugar_admin where numero=?;";

                  $conn=mysqlConnection::getConnection();

                  $command=$conn->prepare($sql);

                  $command->bind_param('i',$args[0]);

                  $command->bind_result(
                        $numero,
                        $nombre, 
                        $desc, 
                        $costo,
                        $capacidad,                        
                        $tipoLugar,
                        $tipoLugarNumero,
                        $calle,
                        $numInterior,
                        $numExterior,
                        $CP,
                        $municipioCod,
                        $municipioNombre
                       );

                       $command->execute();

                       if ($command->fetch()){
                            $this->num=$numero;
                            $this->nombre=$nombre;
                            $this->desc=$desc;
                            $this->costo=$costo;
                            $this->capacidad=$capacidad;

                            $this->espacio=new espacios();
                            $this->espacio->getAllEspaciosByLugar($numero);
                            $this->tipoLugar= new tipoLugar($tipoLugarNumero,$tipoLugar);
                            $this->direccion=new direccion($numero,$calle,$numInterior,$numExterior,$CP,$municipioCod,$municipioNombre);
                        }           

                mysqli_stmt_close($command);
                $conn->close();         
              } 
        }


        public function getJsonObject(){
                    return json_encode(
                        array("num"=>$this->num,
                              "nombre"=>$this->nombre,
                              "desc" =>$this->desc,
                              "costo"=>$this->costo,
                              "capacidad"=>$this->capacidad,
                              "tipoLugar"=> json_decode($this->tipoLugar->getJsonObject()),
                              "direccion"=> json_decode($this->direccion->getJsonObject()),
                              "espacios"=> json_decode($this->espacio->getAllEspaciosByLugar($this->num))
                            )
                    );                
              }
        
        public function getAllLugares($args){
            $sql="select * from VW_lugar_admin where nombre like ?;";
            $var =$args.'%';

            
            
                  $conn=mysqlConnection::getConnection();
                  $command=$conn->prepare($sql);
                  $command->bind_param('s',$var);

                    //lugNum numero,
                    //lugNombre nombre,
                    //lugDescripcion _desc,
                    //lugCosto costo,
                    //lugCapacidad capacidad,
                    //tlNombre tipoLugar,
                    //tlNum tipoLugar_numero,
                    //dlCalle calle,
                    //dlNumInterior numInterior, 
                    //dlNumExterior numExterior,
                    //dlCP CP,
                    //mun_cod municipio_codigo,
                    //mun_nombre municipio

                  $command->bind_result(
                        $numero,
                        $nombre, 
                        $desc, 
                        $costo,
                        $capacidad,                        
                        $tipoLugar,
                        $tipoLugarNumero,
                        $calle,
                        $numInterior,
                        $numExterior,
                        $CP,
                        $municipioCod,
                        $municipioNombre
                       );

                       $command->execute();

                       $list=array();

                       while ($command->fetch()){

                                $this->num=$numero;
                                $this->nombre=$nombre;
                                $this->desc=$desc;
                                $this->costo=$costo;
                                $this->capacidad=$capacidad;
                                $this->espacio=new espacios();                                
                                $this->tipoLugar= new tipoLugar($tipoLugarNumero,$tipoLugar);
                                $this->direccion=new direccion($numero,$calle,$numInterior,$numExterior,$CP,$municipioCod,$municipioNombre);     

                                array_push($list,json_decode(self::getJsonObject()));                                               
                        }           

                mysqli_stmt_close($command);
                $conn->close();         
                 return json_encode($list);
              } 
                

              
            
        
        }




    

 
    
?>