// scripts.js

// Escucha el evento 'DOMContentLoaded' para asegurarse de que el DOM esté completamente cargado
document.addEventListener('DOMContentLoaded', () => {
    // Selecciona todos los elementos con la clase 'service-item'
    const serviceItems = document.querySelectorAll('.service-item');
    // Selecciona todos los elementos con la clase 'product'
    const productItems = document.querySelectorAll('.product');

    // Añade eventos de 'mouseover' y 'mouseout' a cada elemento de servicio
    serviceItems.forEach(item => {
        item.addEventListener('mouseover', () => {
            item.classList.add('hovered'); // Añade la clase 'hovered' al pasar el ratón
        });

        item.addEventListener('mouseout', () => {
            item.classList.remove('hovered'); // Remueve la clase 'hovered' al quitar el ratón
        });
    });

    // Añade eventos de 'mouseover' y 'mouseout' a cada elemento de producto
    productItems.forEach(item => {
        item.addEventListener('mouseover', () => {
            item.classList.add('hovered'); // Añade la clase 'hovered' al pasar el ratón
        });

        item.addEventListener('mouseout', () => {
            item.classList.remove('hovered'); // Remueve la clase 'hovered' al quitar el ratón
        });
    });
});
