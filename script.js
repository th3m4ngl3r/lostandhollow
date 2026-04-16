//Desactivar clic derecho en toda la página
document.addEventListener('contextmenu', function(e) {
  e.preventDefault();
});


//TAP / CLICK PARA MOSTRAR ICONOS EN LA IMAGEN

const containers = document.querySelectorAll('.cover-container');

containers.forEach(container => {
  container.addEventListener('click', function (e) {

    //Si el click fue en un botón (icono), NO hacer toggle
    if (e.target.closest('.icon-btn')) return;

    //Cerrar otros contenedores abiertos (opcional pero pro)
    containers.forEach(c => {
      if (c !== container) {
        c.classList.remove('active');
      }
    });

    // Activar / desactivar el actual
    container.classList.toggle('active');
  });
});


//Cerrar si haces click fuera de la imagen
document.addEventListener('click', function (e) {
  if (!e.target.closest('.cover-container')) {
    containers.forEach(c => c.classList.remove('active'));
  }
});

const overlay = document.getElementById('warningOverlay');
const mainContent = document.getElementById('mainContent');
const acceptBtn = document.getElementById('acceptBtn');
const exitBtn = document.getElementById('exitBtn');

//AL CARGAR LA PÁGINA
window.addEventListener('DOMContentLoaded', () => {
  const accepted = localStorage.getItem('acceptedWarning');

  if (accepted === 'true') {
    // Ya aceptó → NO mostrar nada
    overlay.style.display = 'none';
    mainContent.classList.remove('blur');
  } else {
    // No ha aceptado → mostrar blur
    overlay.style.display = 'flex';
    mainContent.classList.add('blur');
  }
});

//BOTÓN ACEPTAR
acceptBtn.addEventListener('click', () => {
  localStorage.setItem('acceptedWarning', 'true');

  overlay.style.display = 'none';
  mainContent.classList.remove('blur');
});

// BOTÓN SALIR
exitBtn.addEventListener('click', () => {
  window.open('', '_self');
  window.close();

  // fallback
  window.location.href = 'https://www.google.com';
});
