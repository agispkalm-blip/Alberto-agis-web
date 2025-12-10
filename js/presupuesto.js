const producto = document.getElementById("producto");
const extras = document.querySelectorAll(".extra");
const presupuestoFinal = document.getElementById("presupuesto-final");
const formulario = document.getElementById("form-presupuesto");

const nombre = document.getElementById("nombre");
const apellidos = document.getElementById("apellidos");
const telefono = document.getElementById("telefono");
const email = document.getElementById("email");
const condiciones = document.getElementById("condiciones");

function calcularPresupuesto() {
  let total = 0;

  if (producto.value !== "") {
    total += parseInt(producto.value);
  }

  extras.forEach(extra => {
    if (extra.checked) {
      total += parseInt(extra.value);
    }
  });

  presupuestoFinal.value = total + " €";
}

producto.addEventListener("change", calcularPresupuesto);
extras.forEach(extra => extra.addEventListener("change", calcularPresupuesto));

formulario.addEventListener("submit", function (e) {
  e.preventDefault();

  if (
    nombre.value === "" ||
    apellidos.value === "" ||
    telefono.value === "" ||
    email.value === "" ||
    producto.value === ""
  ) {
    alert("Debes rellenar todos los campos y elegir un producto");
    return;
  }

  if (!condiciones.checked) {
    alert("Debes aceptar las condiciones");
    return;
  }

  alert("Formulario enviado correctamente");
  formulario.reset();
  presupuestoFinal.value = "";
});
