
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