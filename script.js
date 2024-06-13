// Ejemplo: Agregar producto al carrito
const botonesCarrito = document.querySelectorAll(".btn-agregar-carrito");

botonesCarrito.forEach(boton => {
    boton.addEventListener("click", () => {
        // Agregar el producto al carrito (logica del carrito aquí)
        alert("Producto añadido al carrito");
    });
});
