// carrito
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
//pop up//
var popup = document.getElementById('popup');
var closePopupButton = document.getElementById('closePopup');

panQuantity.addEventListener('click', function(event) {
  event.preventDefault();
  popup.style.display = 'flex'; // Mostrar el popup al cambiar la propiedad 'display' a 'flex'
});

closePopupButton.addEventListener('click', function() {
  popup.style.display = 'none'; // Ocultar el popup al cambiar la propiedad 'display' a 'none'
});