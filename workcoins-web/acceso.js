/* Abrir el panel elegido, también al presionar Enter */
var formulario = document.querySelector('.acceso form');

formulario.addEventListener('submit', function (evento) {
  evento.preventDefault();
  if (document.getElementById('rol-freelancer').checked) {
    window.location.href = 'dashboard-freelancer.html';
  } else {
    window.location.href = 'dashboard-cliente.html';
  }
});
