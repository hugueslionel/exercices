document.addEventListener("DOMContentLoaded", () => {
    const eleves = JSON.parse(localStorage.getItem("eleves")) || [];
    const eleveList = document.getElementById("eleves");
    const ajouterEleveBtn = document.getElementById("ajouter-eleve");
    const nouvelEleveInput = document.getElementById("nouvel-eleve");

    function afficherEleves() {
        eleveList.innerHTML = "";
        eleves.forEach((nom, index) => {
            const li = document.createElement("li");
            li.textContent = nom;
            li.addEventListener("click", () => {
                window.location.href = `eleve.html?nom=${encodeURIComponent(nom)}`;
            });

            const supprimerBtn = document.createElement("button");
            supprimerBtn.textContent = "Supprimer";
            supprimerBtn.addEventListener("click", (e) => {
                e.stopPropagation();
                eleves.splice(index, 1);
                sauvegarderEleves();
                afficherEleves();
            });

            li.appendChild(supprimerBtn);
            eleveList.appendChild(li);
        });
    }

    function sauvegarderEleves() {
        localStorage.setItem("eleves", JSON.stringify(eleves));
    }

    ajouterEleveBtn.addEventListener("click", () => {
        const nom = nouvelEleveInput.value.trim();
        if (nom && !eleves.includes(nom)) {
            eleves.push(nom);
            sauvegarderEleves();
            afficherEleves();
            nouvelEleveInput.value = "";
        }
    });

    afficherEleves();
});
