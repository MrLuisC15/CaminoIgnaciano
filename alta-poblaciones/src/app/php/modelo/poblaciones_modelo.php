<?php
	require_once '../conexion.php';

	class Poblaciones_modelo{

		private $conexion;

        /* Función constructor */

		function __construct() {

			$this->conexion = new Conexion;

		}


		/* Metodo que realiza el alta una población */

		function altaPoblaciones($nombre, $imagen, $descripcion){
			$consulta = "INSERT INTO poblaciones (nombrePoblacion, imagenPoblacion, descripcion) VALUES
				('".$nombre."', '".$imagen."' ,'".$descripcion."');";

			return $this->conexion->realizarConsulta($consulta);
		}

    function listadoPoblaciones(){
      $consulta = "SELECT * FROM poblaciones;";


      $resultado = $this->conexion->realizarConsulta($consulta);
		  $numfila = $resultado->num_rows;

      $poblaciones = array();

      if($numfila == 0){
        echo 'Filas no encontradas';
      }
      else{
        while($fila = $resultado->fetch_array(MYSQLI_ASSOC)){
          array_push($poblaciones, [
              "nombrePoblacion" => $fila["nombre"],
              "descripcion" => $fila["descripcion"]
          ]);
        }
        echo json_encode($poblaciones);
      }
	  }
  }
