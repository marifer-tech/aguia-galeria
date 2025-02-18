document.addEventListener("DOMContentLoaded", function () {
    loadImages();
});

// Array de imagens locais
const images = [
    "imagens/aguia1.jpg",
    "imagens/aguia2.jpg",
    "imagens/aguia3.jpg",
    "imagens/aguia4.jpg",
    "imagens/aguia5.jpg",
    "imagens/aguia6.jpg"
];

// Função para carregar as imagens na galeria
function loadImages() {
    const gallery = document.getElementById("gallery");

    images.forEach(imgSrc => {
        const img = document.createElement("img");
        img.src = imgSrc;
        img.alt = "Imagem de uma águia"; // Adiciona um texto alternativo para acessibilidade
        gallery.appendChild(img);
    });
}