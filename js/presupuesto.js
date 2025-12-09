document.addEventListener("DOMContentLoaded", () => {
  const producto = document.getElementById("producto");
  const plazo = document.getElementById("plazo");
  const extras = document.querySelectorAll(".extra");
  const total = document.getElementById("presupuesto-final");
  const form = document.getElementById("form-presupuesto");

  const nombre = document.getElementById("nombre");
  const apellidos = document.getElementById("apellidos");
  const telefono = document.getElementById("telefono");
  const email = document.getElementById("email");
  const condiciones = document.getElementById("condiciones");

  const errorNombre = document.getElementById("error-nombre");
  const errorApellidos = document.getElementById("error-apellidos");
  const errorTelefono = document.getElementById("error-telefono");
  const errorEmail = document.getElementById("error-email");

  function calcular() {
    let precio = parseFloat(producto.value);

    extras.forEach(e => {
      if (e.checked) precio += parseFloat(e.value);
    });

    const meses = parseInt(plazo.value, 10);

    if (meses > 12) precio *= 0.9; // 10% descuento
    if (meses < 6) precio *= 1.1; // 10% recargo

    total.value = precio.toFixed(2) + " €";
  }

  function validarFormulario() {
    let valido = true;

    // Limpiar errores
    errorNombre.textContent = "";
    errorApellidos.textContent = "";
    errorTelefono.textContent = "";
    errorEmail.textContent = "";

    // Nombre: solo letras, max 15
    const reNombre = /^[A-Za-zÁÉÍÓÚÜÑáéíóúüñ\s]{1,15}$/;
    if (!reNombre.test(nombre.value.trim())) {
      errorNombre.textContent = "El nombre solo puede contener letras (máx. 15).";
      valido = false;
    }

    // Apellidos: solo letras, max 40
    const reApellidos = /^[A-Za-zÁÉÍÓÚÜÑáéíóúüñ\s]{1,40}$/;
    if (!reApellidos.test(apellidos.value.trim())) {
      errorApellidos.textContent = "Los apellidos solo pueden contener letras (máx. 40).";
      valido = false;
    }

    // Teléfono: solo números, 9 dígitos
    const reTelefono = /^\d{9}$/;
    if (!reTelefono.test(telefono.value.trim())) {
      errorTelefono.textContent = "El teléfono debe tener 9 dígitos numéricos.";
      valido = false;
    }

    // Email estándar
    const reEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!reEmail.test(email.value.trim())) {
      errorEmail.textContent = "Introduce un correo electrónico válido.";
      valido = false;
    }

    // Condiciones
    if (!condiciones.checked) {
      alert("Debes aceptar las condiciones para enviar el presupuesto.");
      valido = false;
    }

    return valido;
  }

  // Eventos para recalcular automáticamente
  producto.addEventListener("change", calcular);
  plazo.addEventListener("input", calcular);
  extras.forEach(e => e.addEventListener("change", calcular));

  // Calcular al inicio
  calcular();

  // Validación al enviar
  form.addEventListener("submit", (e) => {
    if (!validarFormulario()) {
      e.preventDefault();
    }
  });
});