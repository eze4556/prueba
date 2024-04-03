
  document.addEventListener('DOMContentLoaded', function() {
    const productContainer = document.getElementById('productContainer');
    const prevButton = document.getElementById('prevButton');
    const nextButton = document.getElementById('nextButton');

    // Cantidad de productos por paso
    const stepSize = 5;

    // Función para mover el contenedor hacia la izquierda
    prevButton.addEventListener('click', function() {
      productContainer.scrollLeft -= 200; // Ajusta este valor según el ancho de tus productos
    });

    // Función para mover el contenedor hacia la derecha
    nextButton.addEventListener('click', function() {
      productContainer.scrollLeft += 200; // Ajusta este valor según el ancho de tus productos
    });

    // Ajusta la cantidad de productos mostrados
    const products = productContainer.children;
    const totalProducts = products.length;
    let visibleProducts = Math.min(totalProducts, stepSize);

    // Oculta los productos que no están en la vista inicialmente
    for (let i = visibleProducts; i < totalProducts; i++) {
      products[i].style.display = 'none';
    }

    // Muestra más productos al hacer clic en el botón siguiente
    nextButton.addEventListener('click', function() {
      for (let i = visibleProducts; i < Math.min(visibleProducts + stepSize, totalProducts); i++) {
        products[i].style.display = 'inline-block';
      }
      visibleProducts = Math.min(visibleProducts + stepSize, totalProducts);
    });
  });


 document.addEventListener('DOMContentLoaded', function() {
    const productContainer = document.getElementById('productContainer');
    const prevButton = document.getElementById('prevButton');
    const nextButton = document.getElementById('nextButton');

    // Establecer la cantidad de desplazamiento en píxeles
    const scrollStep = 200;

    // Evento para desplazar hacia la izquierda
    prevButton.addEventListener('click', function() {
      productContainer.scrollLeft -= scrollStep;
    });

    // Evento para desplazar hacia la derecha
    nextButton.addEventListener('click', function() {
      productContainer.scrollLeft += scrollStep;
    });
  });