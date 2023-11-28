const btnCart = document.querySelector('.container-cart-icon')
const containercartproducts = document.querySelector('.container-cart-products')

btnCart.addEventListener('click', () =>{
    containercartproducts.classList.toggle('hidden-cart')
    
})
// tao/

const cartInfo = document.querySelector('.cart-product')
const rowproduct = document.querySelector ('.row-product')

// lista de  todos los contenedores del productos //
const productslist = document.querySelector('.container-items')


// variables de arreglos del productos//
let allproducts = []





productslist.addEventListener('click',e =>{
      if( e.target.classList.contains('.Script')){
        const product = e.target.parantElement


       const infoProduct = {
        quantity: 1,
        title: product.querySelector('h3') .textContent,
        price:  product.querySelector('p') .textContent,
       }

       allproducts = [...allproducts,infoProduct]

       showHTML();


      }
} )

// funcion para mostrar //
const showHTML = () => {


  allproducts.forEach(product => {
    const containerproducts =document.createElement('section')
    containerproducts.classList.add('cart-product')

    containerProducts.innerHTML = ' '

          



  rowproduct.append(containerProduct)



              
              
   

   
  



  })
}











