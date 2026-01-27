function abrirDetalle(nombre, precio, talla, color, imagen) {
  document.getElementById("modal").style.display = "flex";
  document.getElementById("modal-nombre").innerText = nombre;
  document.getElementById("modal-precio").innerText = precio;
  document.getElementById("modal-talla").innerText = talla;
  document.getElementById("modal-color").innerText = color;
  document.getElementById("modal-img").src = imagen;
}

function cerrarDetalle() {
  document.getElementById("modal").style.display = "none";
}
