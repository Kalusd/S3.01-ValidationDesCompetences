// Création d'une fonction qui sera exécutée lorsque l'utilisateur envoie les données du formulaire
document.getElementById("formulaireCandidat").addEventListener("submit", function (event) {
    event.preventDefault(); // Évite le rechargement automatique de la page
    supprimerErreurs(); // Enleve les erreurs précédemment affichées
    
    // Récupération des données du formulaire
    const nom = document.getElementById("champNom").value.trim(); // trim() supprime les espaces avant et après la valeur
    const prenom = document.getElementById("champPrenom").value.trim();
    const email = document.getElementById("champEmail").value.trim();
    const posteSouhaite = document.getElementsById("champPoste").value.trim();
    const numeroCandidat = document.getElementById("champNumeroCand").value.trim();
    const nombreProjets = document.getElementById("champProjets").value.trim();
    const lienLinkedin = document.getElementById("champLienLinkedin").value.trim();
    const CV = document.getElementById("champCV").value.trim();

    let estValide = true; // On suppose que les données sont valides

    // VALIDATIONS
    // Validation du nom
    const regexNomPrenom = /[A-Za-z]+-\s+/i
    if (nom.length < 2 || nom.length > 50 || !regexNomPrenom.test(nom)) {
        afficherErreur("erreurNom", "Le nom ne doit contenir que des lettres, des espaces et des tirets. 2 à 50 caractères maximum.");
        estValide = false;
    }

    // Validation du prénom
    if (prenom.length < 2 || prenom.length > 50 || !regexNomPrenom.test(prenom)) {
        afficherErreur("erreurPrenom", "Le prénom ne doit contenir que des lettres, des espaces et des tirets. 2 à 50 caractères maximum.");
        estValide = false;
    }

    // Validation de l'email
    const regexEmail = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!regexEmail.test(email)) {
        afficherErreur("erreurEmail", "L'adresse mail n'est pas valide.");
        estValide = false;
    }

    // Validation du poste souhaité
    if (posteSouhaite == "Poste souhaité") {
        afficherErreur("erreurPoste", "Veuillez choisir une option.");
        estValide = false;
    }

    // Validation du numéro de candidat
    const regexNumCand = /CAND-[0-9]{6}+[A-Z]/;
    if (!regexNumCand.test(numeroCandidat)) {
        afficherErreur("erreurNumeroCand", "Veuillez entrer un numéro de candidat correct.");
        estValide = false;
    }

    // Validation du nombre de projets
    if (nombreProjets.length < 0 || nombreProjets.length > 40) {
        afficherErreur("erreurNombreProjets", "Le nombre de projets doit être compris entre 0 et 40");
        estValide = false;
    }

    // Validation du lien LinkedIn
    const regexLinkedIn = /(https:\/\/)?www\.linkedin\.com\/in\/[A-Za-z0-9\-\_\.]+[\/]?/;
    if (!regexLinkedIn.test(lienLinkedin)) {
        afficherErreur("erreurLienLinkedin", "Le lien vers le profil LinkedIn est invalide.");
        estValide = false;
    }

    // Validation du CV
    const tailleCV = CV.size() / 1024 / 1024; // Taille Mo
    if (tailleCV > 5) {
        afficherErreur("erreurCV", "Le fichier est trop lourd, la taille maximale est de 5 Mo");
        estValide = false;
    }

    // Message de succès
    if (estValide) {
        alert("Formulaire envoye !");
    }
})

function supprimerErreurs() {
    document.querySelectorAll(".text-danger").forEach(erreur => {
        erreur.style.display = "none";
        erreur.innerText = "";
    });
}

function afficherErreur(idSection, message) {
    const sectionTexteErreur = document.getElementById(idSection);
    sectionTexteErreur.innerText = message;
    sectionTexteErreur.style.display = "block";
}