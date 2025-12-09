document.addEventListener("DOMContentLoaded", function () {

  // Coordenadas reales de tu empresa
  const empresa = [36.7642, -2.6148];

  //  Crear el mapa
  const map = L.map("map").setView(empresa, 13);

  // Capa del mapa
  L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
    attribution: "&copy; OpenStreetMap"
  }).addTo(map);

  // Marcador de tu empresa
  const markerEmpresa = L.marker(empresa)
    .addTo(map)
    .bindPopup("Alberto Agis Web<br>Avenida Unión Europea 86")
    .openPopup();

  //  Localizar al usuario y calcular RUTA REAL
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(function (pos) {
      const cliente = [pos.coords.latitude, pos.coords.longitude];

      //  Marcador del usuario
      L.marker(cliente)
        .addTo(map)
        .bindPopup("Tu ubicación")
        .openPopup();

      //  RUTA REAL POR CARRETERA
      L.Routing.control({
        waypoints: [
          L.latLng(cliente[0], cliente[1]),
          L.latLng(empresa[0], empresa[1])
        ],
        routeWhileDragging: false,
        show: false,
        addWaypoints: false
      }).addTo(map);

    });
  }

});