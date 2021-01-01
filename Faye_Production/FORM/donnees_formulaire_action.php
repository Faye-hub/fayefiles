<?php 
			//Connexion de la BD(MySQL) et de PDO
                    try
                    {
                        $bdd = new PDO('mysql:host=localhost;dbname=webmapping;charset=utf8', 'root', '',array(PDO::ATTR_ERRMODE=>PDO::ERRMODE_EXCEPTION));
                    }
                    catch (Exception $e)
                    {
                            die('Erreur : ' . $e->getMessage()); 
                    }




if (isset($_POST['nom_route']) AND isset($_POST['categorie_route']) AND isset($_POST['longueur_route']) AND isset($_POST['cout_route']) AND isset($_POST['cout_entretien']) AND isset($_POST['mise_en_service_route']) AND isset($_POST['type_entretien']) AND isset($_POST['fin_travaux_entretien']) AND isset($_POST['statut_entretien']) AND isset($_POST['maitre_ouvrage']) AND isset($_POST['maitre_ouvrage_de']) AND isset($_POST['maitre_oeuvre']) AND isset($_POST['entreprise_executante']) ) {




$req = $bdd->prepare('INSERT INTO voirie VALUES(NULL, :nom_route, :categorie_route, :longueur_route, :cout_route, :cout_entretien, :mise_en_service_route, :type_entretien, :fin_trvx_entretien, :statut_entretien, :maitre_ouvrage, :maitre_ouvrage_de, :maitre_oeuvre, :entreprise_executante)');


// On lie maintenant chaque marqueur nominatif à une valeur


$req->bindValue(':nom_route', $_POST['nom_route'], PDO::PARAM_STR);

$req->bindValue(':categorie_route', $_POST['categorie_route'], PDO::PARAM_STR);

$req->bindValue(':longueur_route', $_POST['longueur_route'], PDO::PARAM_STR);

$req->bindValue(':cout_route', $_POST['cout_route'], PDO::PARAM_STR);

$req->bindValue(':cout_entretien', $_POST['cout_entretien'], PDO::PARAM_STR);

$req->bindValue(':mise_en_service_route', $_POST['mise_en_service_route'], PDO::PARAM_STR);

$req->bindValue(':type_entretien', $_POST['type_entretien'], PDO::PARAM_STR);

$req->bindValue(':fin_trvx_entretien', $_POST['fin_travaux_entretien'], PDO::PARAM_STR);

$req->bindValue(':statut_entretien', $_POST['statut_entretien'], PDO::PARAM_STR);

$req->bindValue(':maitre_ouvrage', $_POST['maitre_ouvrage'], PDO::PARAM_STR);

$req->bindValue(':maitre_ouvrage_de', $_POST['maitre_ouvrage_de'], PDO::PARAM_STR);

$req->bindValue(':maitre_oeuvre', $_POST['maitre_oeuvre'], PDO::PARAM_STR);

$req->bindValue(':entreprise_executante', $_POST['entreprise_executante'], PDO::PARAM_STR);


$req->execute();


}


?>