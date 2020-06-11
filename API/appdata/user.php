<?php

include('template.php');


$requestMethod = $_SERVER["REQUEST_METHOD"];

switch($requestMethod)
  {
	case 'TOTO':
      if(!empty($_GET["mail"]))
      {
        $mail = $_GET["mail"];
        getUserByMail($mail);
      }

      else {
          getUsers();
      }
	  break;
	  
	case 'POST':
        $nom = $_GET["nom"];
        $prenom = $_GET["prenom"];
        $mail = $_GET["mail"];
        $mdp = $_GET["mdp"];
        postUser($nom, $prenom, $mail, $mdp);
	
		break;
    case 'PUT' :
        $id_user= $_GET["id_user"];
        $nom = $_GET["nom"];
        $prenom = $_GET["prenom"];
        $mail = $_GET["mail"];
        putUser($id_user, $nom, $prenom, $mail);
		break;

    case 'DELETE' :
        $id_user = $_GET["id_user"];
        deleteUser($id_user);
		

    default:
      // Requête invalide
      header("HTTP/1.0 405 Method Not Allowed");
	  break;
    }

function deleteUser($id_user)
{
    $pdo = getPDO();
	$requete = $pdo->prepare("DELETE FROM `user` WHERE `user`.`id_user` = :id_user");
	$requete->bindParam(':id_user', $id_user);


	if( $requete->execute() ){
		$success = true;

		$msg = 'User bien supprimé';
	} else {
		$success = false;

		$msg = "Une erreur s'est produite";
	}

	reponse_json($success, $msg);
}
function putUser($id_user, $nom, $prenom, $mail)
{
    $pdo = getPDO();
	$requete = $pdo->prepare("UPDATE `user` SET `nom` = :nom, `prenom` = :prenom, `mail` = :mail WHERE `user`.`id_user` = :id_user");
	$requete->bindParam(':id_user', $id_user);
	$requete->bindParam(':nom', $nom);
	$requete->bindParam(':prenom', $prenom);
	$requete->bindParam(':mail', $mail);


	
	if( $requete->execute() ){
		$success = true;

		$msg = 'User bien modifié';
	} else {
		$success = false;

		$msg = "Une erreur s'est produite";
	}

	reponse_json($success, $msg);
}


function getUsers()
{
    $pdo = getPDO();
    $requete = $pdo->prepare("SELECT `nom`, `prenom`, `id_user` FROM `user`");
    if( $requete->execute() ){
		$resultats = $requete->fetchAll();
		$success = true;
		$data['user'] = $resultats;
	} else {
		$msg = "Une erreur s'est produite";
	}
	
	reponse_json($success, $data);
}

function getUserByMail($mail)
{
    $pdo = getPDO();
    $requete = $pdo->prepare("SELECT `nom`, `prenom`, `mdp` FROM `user` WHERE `mail` LIKE :mail");
    $requete->bindParam(':mail', $mail);
    if( $requete->execute() ){
		$resultats = $requete->fetchAll();
		$success = true;
		$data['user'] = $resultats;
	} else {
		$msg = "Une erreur s'est produite";
	}
	
	reponse_json($success, $data);
}

function postUser($nom, $prenom, $mail, $mdp)
{
    $password = hash('sha512', $mdp);
    $pdo = getPDO();
    $requete = $pdo->prepare("INSERT INTO `user` (`id_user`, `nom`, `prenom`, `mail`, `mdp`) VALUES (NULL, :nom, :prenom, :mail, :mdp);");
    $requete->bindParam(':nom', $nom);
	$requete->bindParam(':prenom', $prenom);
	$requete->bindParam(':mail', $mail);
    $requete->bindParam(':mdp', $password);
    
    if( $requete->execute() ){
		$success = true;
		$data = $pdo->lastInsertId();
		$msg = 'User bien été ajouté';
	} else {
		$success = false;
		$data = null;
		$msg = "Une erreur s'est produite";
    }
    
    reponse_json($success,$data, $msg);


    /* POUR CHECK LES MDP
    $verify = hash('sha512', $_password_tapé_par_le_mec);
    $verify = password_verify($verify, $password);
    */
}


?>