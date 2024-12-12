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
document.addEventListener("DOMContentLoaded", () => {
    // Exercice 6 : Dénombrement des objets
    const objetsImages = [
        "images/objets1.jpg",
        "images/objets2.jpg",
        "images/objets3.jpg",
        "images/objets4.jpg",
        "images/objets5.jpg"
    ];

    const exercice6Container = document.getElementById("exercice6");
    objetsImages.forEach((imageSrc, index) => {
        const caseDiv = document.createElement("div");
        caseDiv.classList.add("case-image");

        const img = document.createElement("img");
        img.src = imageSrc;
        img.alt = `Image de dénombrement ${index + 1}`;
        img.classList.add("image-objet");

        const clickZone = document.createElement("div");
        clickZone.classList.add("click-zone");
        clickZone.textContent = "✔";

        clickZone.addEventListener("click", () => {
            clickZone.style.backgroundColor = "green";
        });

        caseDiv.appendChild(img);
        caseDiv.appendChild(clickZone);
        exercice6Container.appendChild(caseDiv);
    });

    // Exercice 7 : Formes géométriques
    const formesImages = [
        "images/carre.jpg",
        "images/rectangle.jpg",
        "images/triangle.jpg",
        "images/ovale.jpg",
        "images/losange.jpg",
        "images/rond.jpg"
    ];

    const exercice7Container = document.getElementById("exercice7");
    formesImages.forEach((imageSrc, index) => {
        const caseDiv = document.createElement("div");
        caseDiv.classList.add("case-image");

        const img = document.createElement("img");
        img.src = imageSrc;
        img.alt = `Forme géométrique ${index + 1}`;
        img.classList.add("image-objet");

        const clickZone = document.createElement("div");
        clickZone.classList.add("click-zone");
        clickZone.textContent = "✔";

        clickZone.addEventListener("click", () => {
            clickZone.style.backgroundColor = "green";
        });

        caseDiv.appendChild(img);
        caseDiv.appendChild(clickZone);
        exercice7Container.appendChild(caseDiv);
    });
});


