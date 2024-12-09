document.addEventListener("DOMContentLoaded", () => {
    const lettresMajuscules = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
    const lettresScript = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
    const lettresCursif = ["𝓪", "𝓫", "𝓬", "𝓭", "𝓮", "𝓯", "𝓰", "𝓱", "𝓲", "𝓳", "𝓴", "𝓵", "𝓶", "𝓷", "𝓸", "𝓹", "𝓺", "𝓻", "𝓼", "𝓽", "𝓾", "𝓿", "𝔀", "𝔁", "𝔂", "𝔃"];
    const nombres = Array.from({ length: 20 }, (_, i) => i + 1);

    // Fonction pour mélanger un tableau
    const shuffle = (array) => array.sort(() => Math.random() - 0.5);

    // Fonction pour créer un tableau cliquable
    const createClickableTable = (containerId, items, columns) => {
        const container = document.getElementById(containerId);
        container.innerHTML = "";
        const table = document.createElement("table");
        let row;
        items.forEach((item, index) => {
            if (index % columns === 0) {
                row = document.createElement("tr");
                table.appendChild(row);
            }
            const cell = document.createElement("td");
            cell.textContent = item;
            cell.addEventListener("click", () => {
                cell.style.backgroundColor = "green";
            });
            row.appendChild(cell);
        });
        container.appendChild(table);
    };

    // Exercice 1 : Alphabet en désordre (majuscules)
    createClickableTable("exercice1", shuffle([...lettresMajuscules]), 13);

    // Exercice 2 : Alphabet en désordre (script)
    createClickableTable("exercice2", shuffle([...lettresScript]), 13);

    // Exercice 3 : Alphabet en désordre (cursif)
    createClickableTable("exercice3", shuffle([...lettresCursif]), 13);

    // Exercice 4 : Compter jusqu'à
    document.getElementById("verifierNombre").addEventListener("click", () => {
        const input = document.getElementById("nombreInput").value;
        const resultat = document.getElementById("resultatNombre");
        resultat.textContent = `Vous avez écrit : ${input}`;
        resultat.style.color = input ? "green" : "red";
    });

    // Exercice 5 : Nombres désordonnés
    createClickableTable("exercice5", shuffle([...nombres]), 20);

    // Exercice 6 : Objets non alignés
    const exercice6Container = document.getElementById("exercice6");
    for (let i = 0; i < 5; i++) {
        const caseDiv = document.createElement("div");
        caseDiv.classList.add("case");
        const objetsCount = Math.floor(Math.random() * 7) + 4;
        for (let j = 0; j < objetsCount; j++) {
            const objet = document.createElement("span");
            objet.textContent = "⚫";
            caseDiv.appendChild(objet);
        }
        caseDiv.addEventListener("click", () => {
            caseDiv.style.backgroundColor = "green";
        });
        exercice6Container.appendChild(caseDiv);
    }

    // Exercice 7 : Formes géométriques
    const formes = ["⬛", "🔺", "⚪", "⬜"];
    const exercice7Container = document.getElementById("exercice7");
    formes.forEach((forme) => {
        const caseDiv = document.createElement("div");
        caseDiv.classList.add("case");
        caseDiv.textContent = forme;
        caseDiv.addEventListener("click", () => {
            caseDiv.style.backgroundColor = "green";
        });
        exercice7Container.appendChild(caseDiv);
    });
});
