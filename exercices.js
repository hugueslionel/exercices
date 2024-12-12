document.addEventListener("DOMContentLoaded", () => {
    const urlParams = new URLSearchParams(window.location.search);
    const nomEleve = urlParams.get("nom");
    document.getElementById("nom-eleve").textContent = `Page de ${nomEleve}`;

    const retourListeBtn = document.getElementById("retour-liste");
    retourListeBtn.addEventListener("click", () => {
        window.location.href = "index.html";
    });

    const exercices = JSON.parse(localStorage.getItem(nomEleve)) || {
        exercice4: ""
    };

    // Exercice 4 : Compter jusqu'à
    const exercice4Container = document.getElementById("exercice4");
    const inputNombre = document.createElement("input");
    inputNombre.type = "number";
    inputNombre.placeholder = "Entrez un nombre";
    inputNombre.value = exercices.exercice4;

    inputNombre.addEventListener("input", () => {
        exercices.exercice4 = inputNombre.value;
        sauvegarderExercices();
    });

    exercice4Container.appendChild(inputNombre);

    function sauvegarderExercices() {
        localStorage.setItem(nomEleve, JSON.stringify(exercices));
    }
});


