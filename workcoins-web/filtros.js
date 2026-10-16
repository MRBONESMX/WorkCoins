/* Buscar en las tres ofertas de ejemplo */
var buscar = document.getElementById('buscar');
var categoria = document.getElementById('filtro-categoria');
var ofertas = document.querySelectorAll('.oferta');
var resultado = document.getElementById('resultado');

function filtrarOfertas() {
  var texto = buscar.value.toLowerCase().trim();
  var visibles = 0;

  ofertas.forEach(function (oferta) {
    var titulo = oferta.querySelector('h2').textContent.toLowerCase();
    var coincideTexto = titulo.includes(texto);
    var coincideCategoria = categoria.value === 'todas' || oferta.dataset.categoria === categoria.value;

    oferta.hidden = !coincideTexto || !coincideCategoria;
    if (!oferta.hidden) {
      visibles = visibles + 1;
    }
  });

  resultado.textContent = visibles + ' de 3 ofertas de ejemplo. Borra la búsqueda o cambia la categoría para ver otras.';
}

buscar.addEventListener('input', filtrarOfertas);
categoria.addEventListener('change', filtrarOfertas);
