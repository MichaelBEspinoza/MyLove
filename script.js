const objetivo = new Date("2025-07-14T00:00:00").getTime();
const inicio = new Date("2024-07-07T00:00:00").getTime();
const totalDuracion = objetivo - inicio;

const contador = document.getElementById("cuenta-regresiva");
const barra = document.getElementById("barra-progreso");
const mensaje = document.getElementById("mensaje-arriba");

const mensajes = [
  "Preparando el destino...",
  "Cargando secretos...",
  "Descifrando coordenadas...",
  "A punto de revelarse...",
  "Algo grande se aproxima...",
  "¿Estás lista para descubrirlo?",
  "Las estrellas están alineándose..."
];

let indiceMensaje = 0;
mensaje.innerText = mensajes[indiceMensaje];

function actualizarMensaje() {
  indiceMensaje = (indiceMensaje + 1) % mensajes.length;
  mensaje.innerText = mensajes[indiceMensaje];
}

// Cambiar cada 10 segundos
setInterval(actualizarMensaje, 10000);

function actualizarCuenta() {
  const ahora = new Date().getTime();
  const restante = objetivo - ahora;
  const transcurrido = ahora - inicio;

  if (restante <= 0) {
    contador.innerText = "¡Llegó el día! 💖";
    barra.style.width = "100%";
    mensaje.innerText = "Bienvenida a la siguiente fase... ✨";
    return;
  }

  const dias = Math.floor(restante / (1000 * 60 * 60 * 24));
  const horas = Math.floor((restante % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutos = Math.floor((restante % (1000 * 60 * 60)) / (1000 * 60));
  const segundos = Math.floor((restante % (1000 * 60)) / 1000);

  contador.innerText = `${dias}d ${horas}h ${minutos}m ${segundos}s`;

  const porcentaje = Math.min(100, (transcurrido / totalDuracion) * 100);
  barra.style.width = `${porcentaje}%`;
}

setInterval(actualizarCuenta, 1000);
actualizarCuenta();
