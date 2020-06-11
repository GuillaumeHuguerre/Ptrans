<?php
include('template.php');



$requestMethod = $_SERVER["REQUEST_METHOD"];



switch($requestMethod)
  {
	case 'GET':
		if(!empty($_GET["id_item"]))
		{
			$id = intval($_GET["id_item"]);
			getItem($id);
		}
		else{
			getItem(0);
		}
        
       
	  break;
	  
	case 'POST':
		print_r($_GET);
		$id_user = $_GET["id_user"];
		$titre = $_GET["titre"];
		$desc = $_GET["desc"];
		$etat = $_GET["etat"];
		postItem($id_user, $titre, $desc, $etat);
		break;
	case 'PUT' :
		$id_item = $_GET["id_item"];
		$id_user = $_GET["id_user"];
		$titre = $_GET["titre"];
		$desc = $_GET["desc"];
		$etat = $_GET["etat"];
		putItem($id_item, $id_user, $titre, $desc, $etat);
		break;

	case 'DELETE' :
		$id_item = $_GET["id_item"];
		$id_user = $_GET["id_user"];
		deleteItem($id_item, $id_user);
		 

    default:
      // Requête invalide
      header("HTTP/1.0 405 Method Not Allowed");
	  break;
	}


function deleteItem($id_item, $id_user)
{
	$pdo = getPDO();
	$requete = $pdo->prepare("DELETE FROM `todolist` WHERE `todolist`.`id_item` = :id_item AND `todolist`.`id_user` = :id_user;");
	$requete->bindParam(':id_user', $id_user);
	$requete->bindParam(':id_item', $id_item);

	if( $requete->execute() ){
		$success = true;

		$msg = 'Item bien supprimé';
	} else {
		$success = false;

		$msg = "Une erreur s'est produite";
	}

	reponse_json($success, $msg);
}

function putItem($id_item, $id_user, $titre, $desc, $etat)
{
	$pdo = getPDO();
	$requete = $pdo->prepare("UPDATE `todolist` SET `titre` = :titre, `description` = :desc, `etat` = :etat WHERE `todolist`.`id_item` = :id_item AND `todolist`.`id_user` = :id_user");
	$requete->bindParam(':id_user', $id_user);
	$requete->bindParam(':id_item', $id_item);
	$requete->bindParam(':titre', $titre);
	$requete->bindParam(':desc', $desc);
	$requete->bindParam(':etat', $etat);

	
	if( $requete->execute() ){
		$success = true;

		$msg = 'Item bien modifié';
	} else {
		$success = false;

		$msg = "Une erreur s'est produite";
	}

	reponse_json($success, $msg);
}

function postItem($id_user, $titre, $desc, $etat)
{
	
	

	$pdo = getPDO();
	$requete = $pdo->prepare("INSERT INTO `todolist` (`id_item`, `id_user`, `titre`, `description`, `etat`) VALUES (NULL, :id_user, :titre, :desc, :etat);");
	$requete->bindParam(':id_user', $id_user);
	$requete->bindParam(':titre', $titre);
	$requete->bindParam(':desc', $desc);
	$requete->bindParam(':etat', $etat);

	if( $requete->execute() ){
		$success = true;
		$data = $pdo->lastInsertId();
		$msg = 'Item bien été ajouté';
	} else {
		$success = false;
		$data = null;
		$msg = "Une erreur s'est produite";
	}

	 

reponse_json($success,$data, $msg);
}

function getItem($id=0)
{
	$pdo = getPDO();
	if($id !=0){
		//Si le client a saisi une ville de depart, on filtre les données via MySQL
		$requete = $pdo->prepare("SELECT * FROM `todolist` WHERE `id_item` LIKE :id_item");
		$requete->bindParam(':id_item', $id);
	} else {
		//Sinon on affiche tous les vols
		$requete = $pdo->prepare("SELECT * FROM `todolist`");
	}

	if( $requete->execute() ){
		$resultats = $requete->fetchAll();
		//var_dump($resultats);
		
		$success = true;
		$data['nombre'] = count($resultats);
		$data['items'] = $resultats;
	} else {
		$msg = "Une erreur s'est produite";
	}
	
	reponse_json($success, $data);
}





?>