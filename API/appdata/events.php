<?php

include('template.php');

$requestMethod = $_SERVER["REQUEST_METHOD"];


switch($requestMethod)
  {
    case 'GET':
        if(!empty($_GET["id_event"]))
		{
			$id = intval($_GET["id_event"]);
			getEvent($id);
		}
		else{
			getEvent(0);
        }
        break;
        
    case 'POST':
		
        $id_user = $_GET["id_user"];
        $titre = $_GET["titre"];
        $desc = $_GET["desc"];
        $debut = $_GET["debut"];
        $fin = $_GET["fin"];
        $allDay = $_GET["allDay"];
        $type = $_GET["type"];
        postEvent($id_user, $titre, $desc, $debut, $fin, $allDay, $type);
        break;
    case 'PUT' :
        $id_event = $_GET["id_event"];
        $id_user = $_GET["id_user"];
        $titre = $_GET["titre"];
        $desc = $_GET["desc"];
        $debut = $_GET["debut"];
        $fin = $_GET["fin"];
        $allDay = $_GET["allDay"];
        putEvent($id_event, $id_user, $titre, $desc, $debut, $fin, $allDay);
        break; 
    case 'DELETE' :
        $id_event = $_GET["id_event"];
        $id_user = $_GET["id_user"];
        deleteEvent($id_event, $id_user);
    
    default:
        // Requête invalide
        header("HTTP/1.0 405 Method Not Allowed");
        break;

   
  }
    function deleteEvent($id_event, $id_user)
    {
        $pdo = getPDO();
        $requete = $pdo->prepare("DELETE FROM `events` WHERE `events`.`id_event` = :id_event AND `events`.`id_user` = :id_user;");
        $requete->bindParam(':id_user', $id_user);
        $requete->bindParam(':id_event', $id_event);

        if( $requete->execute() ){
            $success = true;

            $msg = 'Event bien supprimé';
        } else {
            $success = false;

            $msg = "Une erreur s'est produite";
        }

        reponse_json($success, $msg);
    }
    function putEvent($id_event, $id_user, $titre, $desc, $debut, $fin, $allDay)
    {
        $pdo = getPDO();
        $requete = $pdo->prepare("UPDATE `events` SET `titre` = :titre, `description` = :desc, `debut` = :debut, `fin` = :fin, `allDay` = :allDay WHERE `events`.`id_event` = :id_event AND `events`.`id_user` = :id_user");
        $requete->bindParam(':id_user', $id_user);
        $requete->bindParam(':id_event', $id_event);
        $requete->bindParam(':titre', $titre);
        $requete->bindParam(':desc', $desc);
        $requete->bindParam(':debut', $debut);
        $requete->bindParam(':fin', $fin);
        $requete->bindParam(':allDay', $allDay);
        
        if( $requete->execute() ){
            $success = true;

            $msg = 'Event bien modifié';
        } else {
            $success = false;

            $msg = "Une erreur s'est produite";
        }

        reponse_json($success, $msg);
        
    }

  function postEvent($id_user, $titre, $desc, $debut, $fin, $allDay, $type)
  {
      
      $pdo = getPDO();
      $requete = $pdo->prepare("INSERT INTO `events` (`id_event`, `id_user`, `titre`, `description`, `debut`, `fin`, `allDay`, `type`) VALUES (NULL, :id_user, :titre, :desc, :debut, :fin, :allDay, :type);");
      $requete->bindParam(':id_user', $id_user);
      $requete->bindParam(':titre', $titre);
      $requete->bindParam(':desc', $desc);
      $requete->bindParam(':debut', $debut);
      $requete->bindParam(':fin', $fin);
      $requete->bindParam(':allDay', $allDay);
      $requete->bindParam(':type', $type);
  
      if( $requete->execute() ){
          $success = true;
          $data = $pdo->lastInsertId();
          $msg = 'Event bien été ajouté';
      } else {
          $success = false;
          $data=null;
          $msg = "Une erreur s'est produite";
      }
  
  reponse_json($success,$data, $msg);
  }
  

  function getEvent($id=0)
  {
    $pdo = getPDO();
    if($id !=0){
		$requete = $pdo->prepare("SELECT * FROM `events` WHERE `id_event` LIKE :id_event");
		$requete->bindParam(':id_event', $id);
	} else {
		$requete = $pdo->prepare("SELECT * FROM `events`");
	}

	if( $requete->execute() ){
		$resultats = $requete->fetchAll();
		
		$success = true;
		$data['nombre'] = count($resultats);
		$data['events'] = $resultats;
	} else {
		$msg = "Une erreur s'est produite";
	}
	
	reponse_json($success, $data);
  }