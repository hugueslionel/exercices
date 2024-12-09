document.addEventListener("DOMContentLoaded", () => {
    const nomEleve = new URLSearchParams(window.location.search).get("nom");
    document.getElementById("nomEleve").textContent = `Bienvenue, ${nomEleve}`;

    const exercicesContainer = document.getElementById("exercices");

    // Liste des exercices
    const exercices = [
        { id: 1, question: "Quelle est la capitale de la France ?", reponse: "Paris" },
        { id: 2, question: "Combien font 2 + 2 ?", reponse: "4" },
        { id: 3, question: "Quelle est la couleur du ciel ?", reponse: "bleu" },
        { id: 4, question: "Quel est le premier mois de l'année ?", reponse: "janvier" },
        { id: 5, question: "Combien y a-t-il de continents ?", reponse: "7" },
        { id: 6, question: "Qui a écrit 'Les Misérables' ?", reponse: "Victor Hugo" },
        { id: 7, question: "Quelle est la formule chimique de l'eau ?", reponse: "H2O" },
    ];

    // Générer les exercices
    exercices.forEach((exercice) => {
        const div = document.createElement("div");
        div.classList.add("exercice");

        div.innerHTML = `
            <p>${exercice.id}. ${exercice.question}</p>
            <input type="text" id="reponse-${exercice.id}" placeholder="Votre réponse">
            <button onclick="verifierReponse(${exercice.id}, '${exercice.reponse}')">Vérifier</button>
            <p id="resultat-${exercice.id}" class="resultat"></p>
        `;
        exercicesContainer.appendChild(div);
    });
});

// Fonction pour vérifier les réponses
window.verifierReponse = (id, bonneReponse) => {
    const reponseUtilisateur = document.getElementById(`reponse-${id}`).value.trim().toLowerCase();
    const resultat = document.getElementById(`resultat-${id}`);

    if (reponseUtilisateur === bonneReponse.toLowerCase()) {
        resultat.textContent = "Bonne réponse !";
        resultat.style.color = "green";
    } else {
        resultat.textContent = `Mauvaise réponse. La bonne réponse était : ${bonneReponse}`;
        resultat.style.color = "red";
    }
};
