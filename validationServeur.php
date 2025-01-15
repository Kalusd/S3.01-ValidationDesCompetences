<?php

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    // VALIDATIONS
    $estValide = false;

    // Validation du fichier du CV
    // Critères de validation
    $typeOK = false;
    $tailleOK = false;
    if (isset($_FILES['champCV'])) {
        // Récupération du fichier depuis les données de la requête POST
        $fichierCV = $_FILES['champCV'];

        // Validation du type de fichier
        $typeMimePdf = 'application/pdf';
        $typeMimeDocx = 'application/vnd.openxmlformats-officedocument.wordprocessingml.document';
        if ($fichierCV['type'] === $typeMimePdf or $fichierCV['type'] === $typeMimeDocx) {
            $typeOK = true;
        }

        // Validation de la taille du fichier (doit être < 5Mo)
        if (($fichierCV['size'] / 1024 / 1024 ) < 5) {
            $tailleOK = true;
        }

        if ($typeOK and $tailleOK) {
            $estValide = true;
        }
    }

    // Affichage de la page en fonction de la validité du formulaire
    if ($estValide) {
        echo "<!DOCTYPE html>
        <html lang='fr'>
            <head>
                <meta charset='UTF-8'>
                <meta name='viewport' content='width=device-width, initial-scale=1.0'>
                <link rel='stylesheet' type='text/css' href='node_modules/bootstrap/dist/css/bootstrap.min.css'>
                <script src='node_modules/bootstrap/dist/js/bootstrap.bundle.js'></script>
                <title>Lukas DIZY TP3 (Alt) - S3.01</title>
            </head>
            <body class='bg-dark text-white'>
                <div class='mt-3 text-center'>
                    <h1 class='display-1'>Formulaire envoyé !</h1>
                </div>
                <footer class='bg-black text-center text-lg-start fixed-bottom'>
                    <div class='text-white-50 text-center p-3' data-bs-theme='dark'>
                        Lukas DIZY TP3 (Alt), Validation des compétences C1-C2
                    </div>
                </footer>
            </body>
        </html>";
    } else {
        echo "<!DOCTYPE html>
        <html lang='fr'>
            <head>
                <meta charset='UTF-8'>
                <meta name='viewport' content='width=device-width, initial-scale=1.0'>
                <link rel='stylesheet' type='text/css' href='node_modules/bootstrap/dist/css/bootstrap.min.css'>
                <script src='node_modules/bootstrap/dist/js/bootstrap.bundle.js'></script>
                <title>Lukas DIZY TP3 (Alt) - S3.01</title>
            </head>
            <body class='bg-dark text-white'>
                <div class='mt-3 text-center'>
                    <h1 class='display-4 text-danger'>Le fichier de CV est invalide.</h1>
                    <h1 class='display-6 text-danger'>Formats acceptés : PDF, DOCX.</h1>
                    <h1 class='display-6 text-danger'>Taille maximale 5 Mo.</h1>
                </div>
                <footer class='bg-black text-center text-lg-start fixed-bottom'>
                    <div class='text-white-50 text-center p-3' data-bs-theme='dark'>
                        Lukas DIZY TP3 (Alt), Validation des compétences C1-C2
                    </div>
                </footer>
            </body>
        </html>";
    }
    
}
else {
    echo "Accès non autorisé";
}