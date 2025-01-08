# S3.01-ValidationDesCompetences

## Objectif  

L’objectif de ce travail est de développer un formulaire web permettant à des candidats de postuler à une offre d’emploi. Le but est d’évaluer la capacité à concevoir une interface utilisateur à la fois responsive et ergonomique, tout en mettant en œuvre des validations des données saisies. Ces validations doivent fournir des retours clairs à l’utilisateur en cas d’erreur et garantir, dans la mesure du possible, l’intégrité des données saisies.  

## Description du formulaire

Ce formulaire est conçu pour recueillir les informations essentielles d’un candidat à une
offre d’emploi. Chaque champ a une utilité spécifique dans le processus de candidature :  

- Nom et Prénom : Ces informations permettent d’identifier le candidat et de le différencier des autres postulants.  
- Adresse email : Ce champ est utilisé pour contacter le candidat et lui transmettre des informations liées à sa candidature.  
- Poste souhaité : Ce champ indique le poste pour lequel le candidat postule, facilitant ainsi le tri des candidatures par rôle.  
- Numéro de candidat interne : Ce numéro unique est attribué par l’entreprise pour assurer un suivi précis de chaque candidature.  
- Nombre de projets réalisés : Ce champ donne une idée de l’expérience pratique du candidat et de son implication dans des projets pertinents.  
- Lien LinkedIn : Ce champ permet de consulter le profil professionnel en ligne du candidat pour mieux évaluer son parcours.  
- CV (fichier) : Ce fichier contient le détail du parcours académique et professionnel du candidat, ainsi que ses compétences clés.

## Contraintes de mise en page et ergonomiques

Sur un écran de PC, le formulaire devra respecter les règles de mise en page suivantes :  

- Les champs Nom et Prénom doivent être affichés côte à côte sur une même ligne.  
- Les champs Adresse email et Lien LinkedIn doivent être affichés côte à côte sur une même ligne.  
- Les champs Nombre de projets réalisés et Numéro de candidat interne doivent être affichés côte à côte sur une même ligne.  
- Le champ Poste souhaité (liste déroulante) doit être affiché sur une ligne entière.  
- Le champ permettant de télécharger le CV (fichier) doit être affiché sur une ligne entière.  

Sur un écran de téléphone, tous les champs du formulaire devront être présentés les uns en dessous des autres.  

Guidage de l’utilisateur :  

- Chaque champ devra avoir un placeholder pour faciliter la saisie de l’utilisateur.  
- En cas de nécessité, l’utilisateur devra pouvoir survoler chaque champ pour faire apparaître une infobulle signalant les contraintes de saisie à respecter pour valider le champ.

## Contraintes pour chaque champ

- Nom : Le champ doit permettre la saisie du nom du candidat. Il doit être obligatoire et n’accepter que des caractères alphabétiques, des espaces et des tirets. La longueur doit être comprise entre 2 et 50 caractères.  
- Prénom : Similaire au champ du nom, le prénom doit être obligatoire et accepter uniquement des caractères alphabétiques, des espaces et des tirets, avec une longueur comprise entre 2 et 50 caractères.  
- Adresse email : Le champ email doit être obligatoire et permettre uniquement des adresses valides. La validation doit garantir qu’un format correct est respecté (par exemple : batman@gotham.com).  
- Poste souhaité : Le candidat doit sélectionner un poste parmi une liste prédéfinie : Développeur Web, Designer, Chef de projet. Ce champ est obligatoire.  
- Numéro de candidat interne : Ce champ doit recueillir un numéro unique fourni par l’entreprise pour suivre les candidatures. Le numéro doit respecter le format suivant :  
    - Commence par le préfixe CAND-.  
    - Est suivi de six chiffres (0-9).  
    - Termine par une lettre majuscule (A-Z).  
    - Longueur totale fixe : 12 caractères.  
    Exemples valides : CAND-123456A, CAND-987654Z
- Nombre de projets réalisés : Ce champ doit permettre au candidat d’indiquer combien de projets significatifs (professionnels ou académiques) il a réalisés. La valeur doit être un entier positif compris entre 0 et 40.  
- Lien LinkedIn : Le champ doit permettre de renseigner un lien vers le profil LinkedIn du candidat. Le lien doit être valide et respecter le format d’une URL.  
- CV (fichier) Le candidat doit pouvoir télécharger son CV. Le fichier doit être obligatoire et accepté uniquement aux formats PDF ou DOCX, avec une taille maximale de 5 Mo.

## Contraintes techniques

- Le code élaboré devra être mis à disposition sur un dépôt Github.
- La mise en page du formulaire devra être réalisée avec Bootstrap.
- Tous les champs du formulaire devront faire l’objet d’une validation côté client afin de garantir une saisie conforme et interactive avant soumission.
- Dans le cas du champ permettant le téléchargement du CV, une double validation devra être mise en œuvre. La validation côté client devra vérifier la taille et le format du fichier avant son envoi. Ensuite, une validation côté serveur devra s’assurer que le fichier respecte bien les contraintes définies (formats PDF ou DOCX et taille maximale de 5 Mo).
- La validation côté serveur des autres champs du formulaire est un plus mais reste facultative. Les données recueillies n’ont pas besoin d’être enregistrées dans une base de données, l’objectif étant de travailler sur l’interface du formulaire et la validation de ses données.
