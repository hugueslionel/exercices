
document.addEventListener("DOMContentLoaded", () => {
    const lettresMajuscules = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
    const lettresScript = ["𝒜", "ℬ", "𝒞", "𝒟", "ℰ", "ℱ", "𝒢", "ℋ", "ℐ", "𝒥", "𝒦", "ℒ", "ℳ", "𝒩", "𝒪", "𝒫", "𝒬", "ℛ", "𝒮", "𝒯", "𝒰", "𝒱", "𝒲", "𝒳", "𝒴", "𝒵"];
    const lettresCursif = ["𝓪", "𝓫", "𝓬", "𝓭", "𝓮", "𝓯", "𝓰", "𝓱", "𝓲", "𝓳", "𝓴", "𝓵", "𝓶", "𝓷", "𝓸", "𝓹", "𝓺", "𝓻", "𝓼", "𝓽", "𝓾", "𝓿", "𝔀", "𝔁", "𝔂", "𝔃"];
    const nombres = Array.from({ length: 20 }, (_, i) => i + 1);

    // Mélange les éléments d'un tableau
    const shuffle = (array) => array.sort(() => Math.random() - 0.5);

    // Fonction pour créer un tableau cliquable
    const createClickableTable = (containerId, items, columns) => {
        const container = document.getElementById(containerId);
        container.innerHTML = ""; // Efface tout contenu existant
        const table = document.createElement("table");
        table.classList.add("interactive-table");
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

    // Exercice 5 : Nombres désordonnés (1 à 20)
    createClickableTable("exercice5", shuffle([...nombres]), 20);
});
