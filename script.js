// scripts.js
let cart = [];

function toggleCart() {
    const cartDropdown = document.getElementById('cart-dropdown');
    cartDropdown.style.display = cartDropdown.style.display === 'block' ? 'none' : 'block';
}

function hideCart() {
    const cartDropdown = document.getElementById('cart-dropdown');
    cartDropdown.style.display = cartDropdown.style.display === 'none' ? 'block' : 'none';
}

function checkout() {
    alert('Procediendo al pago...');
    // Aquí puedes agregar la lógica para el proceso de pago
}