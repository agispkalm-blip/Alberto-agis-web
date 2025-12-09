const imagenes = [
  "../assets/images/img1.jpg",
  "../assets/images/img2.jpg",
  "../assets/images/img3.jpg"
];

let indiceActual = 0;

const imagen = document.getElementById("imagen-carrusel");
const btnAnterior = document.getElementById("anterior");
const btnSiguiente = document.getElementById("siguiente");

btnSiguiente.addEventListener("click", () => {
  indiceActual++;
  if (indiceActual >= imagenes.length) {
    indiceActual = 0;
  }
  imagen.src = imagenes[indiceActual];
});

btnAnterior.addEventListener("click", () => {
  indiceActual--;
  if (indiceActual < 0) {
    indiceActual = imagenes.length - 1;
  }
  imagen.src = imagenes[indiceActual];
});