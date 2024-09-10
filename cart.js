//carrito
function toggleCart() {
    const cartDropdown = document.getElementById('cart-dropdown');
    cartDropdown.style.display = cartDropdown.style.display === 'block' ? 'none' : 'block';
}

function hideCart() {
    const cartDropdown = document.getElementById('cart-dropdown');
    cartDropdown.style.display = cartDropdown.style.display === 'none' ? 'block' : 'none'; 
}

const cartInfo = document.querySelector('.cart-product')
const rowProduct = document.querySelector('.cart-row')
const productList = document.querySelector('.products-container')

//Varible de arreglos de productos
let allProducts = []
const valorTotal = document.querySelector('.total-pagar')
const countProducts = document.querySelector('#contador-productos')
const cartEmpty = document.querySelector('.cart-empty');
const cartTotal = document.querySelector('.cart-total');
const inputs = document.querySelectorAll('.product-quantity-form-input')

productList.addEventListener('click', (e) => {
    
    if (e.target.classList.contains('button-product-add')){
        const product = e.target.parentElement;
        const infoProduct = {
            cantidad: product.querySelector('.product-quantity-form-input').value,
            nombre: product.querySelector('.product-name-row').textContent,
            precio: product.querySelector('.product-price-row').textContent,
        };
        
        console.log(infoProduct);
        //Validación para número cero o negativos
        if (infoProduct.cantidad > 0) {
            const exist = allProducts.some(product => product.nombre === infoProduct.nombre);
            if (exist) {
                const products = allProducts.map(product => {
                if(product.nombre === infoProduct.nombre){
                    product.cantidad = Number(product.cantidad) + Number(infoProduct.cantidad);
                
                return product
                } else {
                return product
                };
            });
            allProducts = [...products]
            } else {
                allProducts = [...allProducts, infoProduct]
            };    
        } else {
            //Esto genera una alerta "[Violation]'click' handler took 1433ms"
            alert("Ingresé nro válido")
        }     
    };
    showCartHTML();  
    //Limpiar el input cada vez que se agrega un producto
    inputs.forEach((input)=>{
        input.value = ""; 
    })
})

//Funcion eliminar producto de carrito
rowProduct.addEventListener('click', (e)=> {
    if(e.target.classList.contains('icon-close')){
      const product = e.target.parentElement;
      const nombre = product.querySelector('.cart-items-name').textContent;
  
      allProducts = allProducts.filter(product => product.nombre !== nombre)
      showCartHTML();
    }
  })

//Función para mostrar html
const showCartHTML = () => {

    if(!allProducts.length){
            cartEmpty.classList.remove('hidden');
            rowProduct.classList.add('hidden');
            cartTotal.classList.add('hidden');
      } else {
            cartEmpty.classList.add('hidden');
            rowProduct.classList.remove('hidden');
            cartTotal.classList.remove('hidden');
        };
    
    //Limpiar HTML 
    rowProduct.innerHTML = ``;
  
    let total = 0;
    let totalProducts = 0;
    let subtotal = 0;
    
    allProducts.forEach(product => {
      
      total = total + parseFloat(product.cantidad) * parseFloat(product.precio);
      totalProducts = totalProducts + product.cantidad;
      subtotal = parseFloat(product.cantidad) * parseFloat(product.precio);
      const cartContainerProduct = document.createElement('div');
      cartContainerProduct.classList.add('cart-product');
      cartContainerProduct.innerHTML = `
          <div class="cart-items-child">
              <p class="cart-items-name">${product.nombre}</p>
              <p class="cart-items-cant">${product.cantidad}</p>
              <p class="cart-items-price">$${product.precio}</p>
              <p class="cart-items-sub">$${subtotal}</p>
              <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="icon-close cart-items-delete"
          >
              <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M6 18L18 6M6 6l12 12"
              />
          </svg>
              
          </div>
          
        `;
      rowProduct.append(cartContainerProduct);
      
      
    });
    valorTotal.innerText = `Total: $${total}`;
    //countProducts.innerText = totalProducts;
};



//Función para el pago
function checkout() {
    alert('Procediendo al pago...');
};

