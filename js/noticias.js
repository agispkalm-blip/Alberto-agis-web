document.addEventListener("DOMContentLoaded", function () {
  fetch("data/noticias.json")
    .then(response => {
      if (!response.ok) {
        throw new Error("No se pudo cargar el archivo noticias.json");
      }
      return response.json();
    })
    .then(data => {
      const contenedor = document.getElementById("contenedor-noticias");

      // Limpiamos por si acaso
      contenedor.innerHTML = "";

      data.forEach(noticia => {
        const div = document.createElement("div");
        div.innerHTML = `
          <h3>${noticia.titulo}</h3>
          <p>${noticia.texto}</p>
          <small>${noticia.fecha}</small>
        `;
        contenedor.appendChild(div);
      });
    })
    .catch(error => {
      console.error("ERROR NOTICIAS:", error);
    });
});
