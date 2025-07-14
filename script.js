const objetivo = new Date("2025-07-14T00:00:00").getTime();
const inicio = new Date().getTime();
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

setInterval(actualizarMensaje, 10000);

function actualizarCuenta() {
  const ahora = new Date().getTime();
  const restante = objetivo - ahora;
  const transcurrido = ahora - inicio;

  if (restante <= 0) {
    contador.innerText = "¡Llegó el día! 💖";
    barra.style.width = "100%";
    mensaje.innerText = "¡Puedes descubrir todo ahora! 💌";

    setTimeout(() => {
      document.querySelector('.fase-titulo').style.display = "none";
      mensaje.style.display = "none";
      document.querySelector('.barra-contenedor').style.display = "none";
      contador.style.display = "none";

      // Mostrar menú
      document.getElementById("menu").style.display = "block";
    }, 3000);

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

function mostrarSeccion(id) {
  // Ocultar todas las secciones
  document.querySelectorAll('.seccion').forEach(seccion => {
    seccion.style.display = "none";
  });
  
  // Mostrar la seleccionada
  document.getElementById(id).style.display = "block";
}
