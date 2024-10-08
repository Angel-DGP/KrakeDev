mostrarImagen = function (idComponente, rutaImagen) {
  let componente;
  componente = document.getElementById(idComponente);
  componente.src = rutaImagen;
};
mostrarTexto = function (idComponente, mensaje) {
  let componente;
  componente = document.getElementById(idComponente);
  componente.innerText = mensaje;
};
mostrarTextoEnCaja = function (idComponente, mensaje) {
  let componente;
  componente = document.getElementById(idComponente);
  componente.value = mensaje;
};

recuperarTexto = function (idComponente) {
  let componente;
  let valorIngresado;
  componente = document.getElementById(idComponente);
  valorIngresado = componente.value;
  return valorIngresado;
};

recuperarInt = function (idComponente) {
  let valorCaja = recuperarTexto(idComponente);
  let valorEntero = parseInt(valorCaja);
  return valorEntero;
};

recuperarFloat = function (idComponente) {
  let valorCaja = recuperarTexto(idComponente);
  let valorFlotante = parseFloat(valorCaja);
  return valorFlotante;
};

mostrarComponente = function (idComponente) {
  document.getElementById(idComponente).style.display = "block";
};

ocultarComponente = function (idComponente) {
  document.getElementById(idComponente).style.display = "none";
};

deshabilitarComponente = function (idComponente) {
  document.getElementById(idComponente).disabled = true;
};

habilitarComponente = function (idComponente) {
  document.getElementById(idComponente).disabled = false;
};

recuperarTextoDiv = function (idComponente) {
  let cmp = document.getElementById(idComponente);
  return (valorIngresado = cmp.textContent);
};

recuperarFloatDiv = function (idComponente) {
  let valorStr = recuperarTextoDiv(idComponente);
  return (valorFloat = parseFloat(valorStr));
};

recuperarIntDiv = function (idComponente) {
  let valorStr = recuperarTextoDiv(idComponente);
  return (valorInt = parseInt(valorStr));
};
