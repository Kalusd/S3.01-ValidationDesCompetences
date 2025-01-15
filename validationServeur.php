<?php

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    // DEBOGAGE
    // var_dump($_POST);
    // var_dump($_FILES);


    // VALIDATIONS
    $estValide = true;

    // Validation du fichier du CV
    // Critères de validation
    $typeOK = true;
    $tailleOK = true;
    if (isset($_FILES['champCV'])) {
        // Récupération du fichier depuis les données de la requête POST
        $fichierCV = $_FILES['champCV'];

        // Validation du type de fichier
        $typeMimePdf = 'application/pdf';
        $typeMimeDocx = 'application/vnd.openxmlformats-officedocument.wordprocessingml.document';
        if ($fichierCV['type'] !== $typeMimePdf or $fichierCV['type'] !== $typeMimeDocx) {
            $typeOK = false;
        }

        // Validation de la taille du fichier (doit être < 5Mo)
        if (($fichierCV['size'] / 1024 / 1024 ) > 5) {
            $tailleOK = false;
        }

        if (!$typeOK or !$tailleOK) {
            $estValide = false;
        }
    }




}
else {
    echo "Accès non autorisé";
}