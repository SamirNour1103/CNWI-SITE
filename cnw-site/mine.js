function irPara(id) {
    const elemento = document.getElementById(id);

    if (elemento) {
        elemento.scrollIntoView({
            behavior: "smooth",
            block: "start"
        });
    }
}

function pesquisar() {
    const input = document.getElementById("pesquisa");

    const texto = input.value
        .toLowerCase()
        .trim();

    const cards = document.querySelectorAll(".card");

    if (texto === "") {
        cards.forEach(card => {
            card.style.display = "";
        });

        return;
    }

    let encontrou = false;

    cards.forEach(card => {
        const nome = card.dataset.nome.toLowerCase();
        const conteudo = card.innerText.toLowerCase();

        if (
            nome.includes(texto) ||
            conteudo.includes(texto)
        ) {
            card.style.display = "";
            encontrou = true;
        } else {
            card.style.display = "none";
        }
    });

    if (encontrou) {
        const primeiro = [...cards].find(
            card => card.style.display !== "none"
        );

        if (primeiro) {
            primeiro.scrollIntoView({
                behavior: "smooth",
                block: "center"
            });
        }
    }
}

document
    .getElementById("pesquisa")
    .addEventListener("keydown", function(event) {

        if (event.key === "Enter") {
            pesquisar();
        }

    });