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
    // const CV = document.getElementById("champCV").value.trim();

    let estValide = true; // On suppose que les données sont valides

    // Validation du nom
    const regexNomPrenom = /[A-Za-z]+-\s+/i
    if (nom.length < 2 || nom.length > 50 || !regexNomPrenom.test(nom)) {
        afficherErreur("erreurNom", "Le nom ne doit contenir que des lettres, des espaces et des tirets. 2 à 50 caractères maximum.");
        estValide = false;
    }

    // Validation du prénom
})