document.addEventListener("DOMContentLoaded", () => {
  fetch("datos/noticias.json")
    .then(r => r.json())
    .then(data => {
      const cont = document.getElementById("contenedor-noticias");
      data.forEach(noticia => {
        cont.innerHTML += `
          <article>
            <h3>${noticia.titulo}</h3>
            <small>${noticia.fecha}</small>
            <p>${noticia.descripcion}</p>
          </article>
        `;
      });
    })
    .catch(err => {
      console.error("Error cargando noticias", err);
    });
});