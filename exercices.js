
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
document.addEventListener("DOMContentLoaded", () => {
    // Exercice 6 : Dénombrement des objets
    const objetsImages = [
        "image/objets1.jpeg",
        "image/objets2.jpeg",
        "image/objets3.jpeg",
        "image/objets4.jpeg",
        "image/objets5.jpeg"
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
        "image/carre.jpeg",
        "image/rectangle.jpeg",
        "image/triangle.jpeg",
        "image/ovale.jpeg",
        "image/losange.jpeg",
        "image/rond.jpeg"
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
