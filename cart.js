//carrito
const cartInfo = document.querySelector('.cart-product')
const rowProduct = document.querySelector('.cart-produt')
const producList = document.querySelector('.popup-content')

let cart = [];

function toggleCart() {
    const cartDropdown = document.getElementById('cart-dropdown');
    cartDropdown.style.display = cartDropdown.style.display === 'block' ? 'none' : 'block';
}

function hideCart() {
    const cartDropdown = document.getElementById('cart-dropdown');
    cartDropdown.style.display = cartDropdown.style.display === 'none' ? 'block' : 'none';
}

//Función para el pago
function checkout() {
    alert('Procediendo al pago...');
    // Aquí puedes agregar la lógica para el proceso de pago
}

