document.addEventListener("DOMContentLoaded", function () {
    loadImages();
});

// Array de imagens locais
const images = [
    "imagens/aguias/aguia3.png",
    "imagens/aguias/aguia2.png",
    "imagens/aguias/aguia1.jpg",
];

// Função para carregar as imagens na galeria
function loadImages() {
    const gallery = document.getElementById("gallery");

    // Limpa a galeria antes de adicionar as imagens
    gallery.innerHTML = "";

    // Adiciona as imagens na ordem do array
    images.forEach(imgSrc => {
        const img = document.createElement("img");
        img.src = imgSrc;
        img.alt = "Imagem de uma águia"; // Adiciona um texto alternativo para acessibilidade
        gallery.appendChild(img); // Adiciona a imagem ao final da galeria
    });
}

// Função para adicionar uma nova imagem ao final da galeria
function addImage(newImageSrc) {
    const gallery = document.getElementById("gallery");

    const img = document.createElement("img");
    img.src = newImageSrc;
    img.alt = "Imagem de uma águia";
    gallery.appendChild(img); // Adiciona a nova imagem ao final da galeria
}