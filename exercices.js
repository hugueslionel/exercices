document.addEventListener("DOMContentLoaded", () => {
    const urlParams = new URLSearchParams(window.location.search);
    const nomEleve = urlParams.get("nom");
    document.getElementById("nom-eleve").textContent = `Exercices de ${nomEleve}`;
    const retourListeBtn = document.getElementById("retour-liste");

    retourListeBtn.addEventListener("click", () => {
        window.location.href = "index.html";
    });

    const sauvegarderProgression = (key, data) => {
        const progression = JSON.parse(localStorage.getItem(nomEleve)) || {};
        progression[key] = data;
        localStorage.setItem(nomEleve, JSON.stringify(progression));
    };

    const progression = JSON.parse(localStorage.getItem(nomEleve)) || {};

    // **Exercice 1 à 4** inclus
    // (Code précédent pour les exercices 1 à 4, inchangé ici)
 // **Exercice 1** : Alphabet en majuscules
    const exercice1 = document.getElementById("exercice1");
    const lettresMajuscules = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("").sort(() => Math.random() - 0.5);
    const tableau1 = document.createElement("table");
    const ligne1 = document.createElement("tr");
    const ligne2 = document.createElement("tr");

    lettresMajuscules.forEach((lettre, index) => {
        const caseLettre = document.createElement("td");
        caseLettre.textContent = lettre;
        caseLettre.style.backgroundColor = progression.exercice1?.[index] ? "#D0F0C0" : "transparent";

        caseLettre.addEventListener("click", () => {
            progression.exercice1 = progression.exercice1 || [];
            progression.exercice1[index] = !progression.exercice1[index];
            sauvegarderProgression("exercice1", progression.exercice1);
            caseLettre.style.backgroundColor = progression.exercice1[index] ? "#D0F0C0" : "transparent";
        });

        (index < 13 ? ligne1 : ligne2).appendChild(caseLettre);
    });

    tableau1.appendChild(ligne1);
    tableau1.appendChild(ligne2);
    exercice1.appendChild(tableau1);

    // **Exercice 2** : Alphabet en minuscules
    const exercice2 = document.getElementById("exercice2");
    const lettresMinuscules = "abcdefghijklmnopqrstuvwxyz".split("").sort(() => Math.random() - 0.5);
    const tableau2 = document.createElement("table");
    const ligne3 = document.createElement("tr");
    const ligne4 = document.createElement("tr");

    lettresMinuscules.forEach((lettre, index) => {
        const caseLettre = document.createElement("td");
        caseLettre.textContent = lettre;
        caseLettre.style.backgroundColor = progression.exercice2?.[index] ? "#D0F0C0" : "transparent";

        caseLettre.addEventListener("click", () => {
            progression.exercice2 = progression.exercice2 || [];
            progression.exercice2[index] = !progression.exercice2[index];
            sauvegarderProgression("exercice2", progression.exercice2);
            caseLettre.style.backgroundColor = progression.exercice2[index] ? "#D0F0C0" : "transparent";
        });

        (index < 13 ? ligne3 : ligne4).appendChild(caseLettre);
    });

    tableau2.appendChild(ligne3);
    tableau2.appendChild(ligne4);
    exercice2.appendChild(tableau2);

    // **Exercice 3** : Alphabet en cursives
    const exercice3 = document.getElementById("exercice3");
    const lettresCursives = "abcdefghijklmnopqrstuvwxyz".split("").sort(() => Math.random() - 0.5);
    const tableau3 = document.createElement("table");
    const ligne5 = document.createElement("tr");
    const ligne6 = document.createElement("tr");

    lettresCursives.forEach((lettre, index) => {
        const caseLettre = document.createElement("td");
        caseLettre.textContent = lettre;
        caseLettre.style.fontFamily = "cursive";
        caseLettre.style.backgroundColor = progression.exercice3?.[index] ? "#D0F0C0" : "transparent";

        caseLettre.addEventListener("click", () => {
            progression.exercice3 = progression.exercice3 || [];
            progression.exercice3[index] = !progression.exercice3[index];
            sauvegarderProgression("exercice3", progression.exercice3);
            caseLettre.style.backgroundColor = progression.exercice3[index] ? "#D0F0C0" : "transparent";
        });

        (index < 13 ? ligne5 : ligne6).appendChild(caseLettre);
    });

    tableau3.appendChild(ligne5);
    tableau3.appendChild(ligne6);
    exercice3.appendChild(tableau3);

    // Exercice 4 (Écrire un nombre dans une case)
    const exercice4 = document.getElementById("exercice4");
    const inputNombre = document.createElement("input");
    inputNombre.type = "number";
    inputNombre.value = progression.exercice4 || "";
    inputNombre.placeholder = "Écrivez un nombre";

    inputNombre.addEventListener("input", () => {
        sauvegarderProgression("exercice4", inputNombre.value);
    });

    exercice4.appendChild(inputNombre);

    // **Exercice 5 à 7 : Complétez avec un schéma similaire en utilisant des images**.
});
    // **Exercice 5** : 20 premiers nombres désordonnés
    const exercice5 = document.getElementById("exercice5");
    const nombres = Array.from({ length: 20 }, (_, i) => i + 1).sort(() => Math.random() - 0.5);
    const tableau5 = document.createElement("table");
    const ligne5 = document.createElement("tr");

    nombres.forEach((nombre, index) => {
        const caseNombre = document.createElement("td");
        caseNombre.textContent = nombre;
        caseNombre.style.backgroundColor = progression.exercice5?.[index] ? "#D0F0C0" : "transparent";

        caseNombre.addEventListener("click", () => {
            progression.exercice5 = progression.exercice5 || [];
            progression.exercice5[index] = !progression.exercice5[index];
            sauvegarderProgression("exercice5", progression.exercice5);
            caseNombre.style.backgroundColor = progression.exercice5[index] ? "#D0F0C0" : "transparent";
        });

        ligne5.appendChild(caseNombre);
    });

    tableau5.appendChild(ligne5);
    exercice5.appendChild(tableau5);

    // **Exercice 6** : Formes géométriques
    const exercice6 = document.getElementById("exercice6");
    const formes = ["carre", "rectangle", "triangle", "ovale", "losange", "rond"];
    const containerFormes = document.createElement("div");

    formes.forEach((forme, index) => {
        const divForme = document.createElement("div");
        divForme.classList.add("forme-container");

        const img = document.createElement("img");
        img.src = `images/${forme}.jpg`;
        img.alt = forme;
        img.classList.add("image-forme");

        const caseForme = document.createElement("div");
        caseForme.classList.add("case");
        caseForme.style.backgroundColor = progression.exercice6?.[index] ? "#D0F0C0" : "transparent";

        caseForme.addEventListener("click", () => {
            progression.exercice6 = progression.exercice6 || [];
            progression.exercice6[index] = !progression.exercice6[index];
            sauvegarderProgression("exercice6", progression.exercice6);
            caseForme.style.backgroundColor = progression.exercice6[index] ? "#D0F0C0" : "transparent";
        });

        divForme.appendChild(img);
        divForme.appendChild(caseForme);
        containerFormes.appendChild(divForme);
    });

    exercice6.appendChild(containerFormes);

    // **Exercice 7** : Dénombrement des objets
    const exercice7 = document.getElementById("exercice7");
    const objets = ["objets1", "objets2", "objets3", "objets4", "objets5"];
    const containerObjets = document.createElement("div");

    objets.forEach((objet, index) => {
        const divObjet = document.createElement("div");
        divObjet.classList.add("objet-container");

        const img = document.createElement("img");
        img.src = `images/${objet}.jpg`;
        img.alt = `Image de ${objet}`;
        img.classList.add("image-objet");

        const caseObjet = document.createElement("div");
        caseObjet.classList.add("case");
        caseObjet.style.backgroundColor = progression.exercice7?.[index] ? "#D0F0C0" : "transparent";

        caseObjet.addEventListener("click", () => {
            progression.exercice7 = progression.exercice7 || [];
            progression.exercice7[index] = !progression.exercice7[index];
            sauvegarderProgression("exercice7", progression.exercice7);
            caseObjet.style.backgroundColor = progression.exercice7[index] ? "#D0F0C0" : "transparent";
        });

        divObjet.appendChild(img);
        divObjet.appendChild(caseObjet);
        containerObjets.appendChild(divObjet);
    });

    exercice7.appendChild(containerObjets);
});


