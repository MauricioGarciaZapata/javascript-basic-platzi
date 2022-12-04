const menuEmail = document.querySelector('.navbar-email');
const desktopmenu = document.querySelector('.desktop-menu');
const Hamburguer = document.querySelector('.menu');
const MobileMenu = document.querySelector('.mobile-menu');
const MenuCarritoIcon = document.querySelector('.navbar-shopping-cart');
const shoppingCartContainer = document.querySelector('#shoppingCartContainer');
const cardContain=document.querySelector('.cards-container');
const productDetailContainer=document.querySelector('#ProductDetail');
const productDetailClose=document.querySelector('.product-detail-close');

// product detail 
const productDetailImg = document.querySelector('.product-img');
const productDetailPrice = document.querySelector('.product-price');
const productDetailName = document.querySelector('.product-name');
const productDetailDescription = document.querySelector('.product-description');
const productDetailAddToCart = document.querySelector('.add-to-cart-button');

///Eventos
menuEmail.addEventListener('click', toggleDesktopMenu);
Hamburguer.addEventListener('click', toggleMobileMenu);
MenuCarritoIcon.addEventListener('click', toggleMenuCarritoIcon);
productDetailClose.addEventListener('click', closeProductDetail);

const DetailList=[];
DetailList.push({
    id:6,
    imgg: 'https://cosonyb2c.vtexassets.com/arquivos/ids/354989/ps5-god-of-war-ragnarok.jpg?v=637944361067100000',
    costo: 85,
    nombre: 'God of War RAGNAROK',
    parrafo:'With its practical position, this bike also fulfills a decorative function, add your hall or workspace.'

});

 DetailList.push({
    id:5,
   imgg: 'https://clonesyperifericos.com/wp-content/uploads/2019/08/1-5-1-600x600.jpg',
     costo: 1220,
    nombre: 'PC Gamer',
     parrafo:'With its practical position, this bike also fulfills a decorative function, add your hall or workspace.'
});

DetailList.push({
    id:4,
    imgg: 'https://exitocol.vtexassets.com/arquivos/ids/9154827/consola-sony-playstation-5-ps5-825gb-lector-de-disco.jpg?v=1753374415',
    costo: 300,
    nombre: 'Play 5',
    parrafo:'With its practical position, this bike also fulfills a decorative function, add your hall or workspace.'
 });

 DetailList.push({
    id:3,
    imgg: 'https://cosonyb2c.vtexassets.com/arquivos/ids/355071/14633744514_001.jpg?v=1750897815',
    costo: 79,
    nombre: 'FIFA 23',
     parrafo:'With its practical position, this bike also fulfills a decorative function, add your hall or workspace.'

 });

 DetailList.push({
    id:2,
    imgg: 'https://falabella.scene7.com/is/image/FalabellaCO/4940108_1?wid=800&hei=800&qlt=70',
    costo: 56,
     nombre: 'Controles',
     parrafo:'With its practical position, this bike also fulfills a decorative function, add your hall or workspace.'
});

 DetailList.push({
    id:1,
     imgg: 'https://articles-images.sftcdn.net/wp-content/uploads/sites/2/2019/11/Samsung_Smart_TV_2-.jpg',
     costo: 250,
     nombre: 'TV Gamer',
     parrafo:'With its practical position, this bike also fulfills a decorative function, add your hall or workspace.'
});

function toggleDesktopMenu () {
    //Si el aside está abierto hay que cerrarlo
    const isshoppingCartContainerClosed = shoppingCartContainer.classList.contains('inactive');

    if(!isshoppingCartContainerClosed){
        shoppingCartContainer.classList.add('inactive');
    }

    desktopmenu.classList.toggle('inactive');
}

function toggleMobileMenu() {

    const isshoppingCartContainerClosed = shoppingCartContainer.classList.contains('inactive');

         //Si el aside está abierto hay que cerrarlo

        if(!isshoppingCartContainerClosed){
            shoppingCartContainer.classList.add('inactive');
        }
        
    closeProductDetail();    
    MobileMenu.classList.toggle('inactive');
}

function toggleMenuCarritoIcon(){
    
    const isMobileMenuClosed = MobileMenu.classList.contains('inactive');
    const isDesktopMenuClosed= desktopmenu.classList.contains('inactive');

         //Si el Menu mobile está abierto hay que cerrarlo

        if(!isMobileMenuClosed){
            MobileMenu.classList.add('inactive');
        }
        if(!isDesktopMenuClosed){
            desktopmenu.classList.add('inactive');
        }
        const isDProductDeatilClosed= productDetailContainer.classList.contains('inactive');
        if(!isDProductDeatilClosed){
            productDetailContainer.classList.add('inactive');
        }   
        
        shoppingCartContainer.classList.toggle('inactive')
    }
function openProductDetailAside(e){

    shoppingCartContainer.classList.add('inactive');
    productDetailContainer.classList.remove('inactive');
    const product = DetailList.filter(product => product.id == e.target.id); //Product detail elegido

    //Información correspondiente a cada Product-Deatil
    productDetailImg.setAttribute('src', product[0].imgg);
    productDetailPrice.textContent = `$ ${product[0].costo}`;
    productDetailName.textContent = product[0].nombre;
    productDetailDescription.textContent = product[0].parrafo;
    productDetailAddToCart.setAttribute('id', e.target.id);
    productDetailContainer.classList.remove('inactive') //mostrar el product detail con los datos pertinentes.
    
}   function closeProductDetail(){
    productDetailContainer.classList.add('inactive'); }

    const productList=[];
    productList.push({
        id:6,
        name: 'God of War RAGNAROK',
        precio: 85,
        img: 'https://cosonyb2c.vtexassets.com/arquivos/ids/354989/ps5-god-of-war-ragnarok.jpg?v=637944361067100000',

    });
    productList.push({
        id:5,
        name: 'PC Gamer',
        precio: 1220,
        img: 'https://clonesyperifericos.com/wp-content/uploads/2019/08/1-5-1-600x600.jpg',
    });
    productList.push({
        id:4,
        name: 'Play 5',
        precio: 300,
        img: 'https://exitocol.vtexassets.com/arquivos/ids/9154827/consola-sony-playstation-5-ps5-825gb-lector-de-disco.jpg?v=1753374415',
    });
    productList.push({
        id:3,
        name: 'FIFA 23',
        precio: 79,
        img: 'https://cosonyb2c.vtexassets.com/arquivos/ids/355071/14633744514_001.jpg?v=1750897815',

    });
    productList.push({
        id:2,
        name: 'Controles',
        precio: 56,
        img: 'https://falabella.scene7.com/is/image/FalabellaCO/4940108_1?wid=800&hei=800&qlt=70',
    });
    productList.push({
        id:1,
        name: 'TV Gamer',
        precio: 250,
        img: 'https://articles-images.sftcdn.net/wp-content/uploads/sites/2/2019/11/Samsung_Smart_TV_2-.jpg',
    });
   
    
    

  function renderProduct(arr){
      
      for(product of arr){
          const productcard= document.createElement('div');
          productcard.classList.add('product-card');
          // product =(name, precio, img)
          const image=document.createElement('img');
          image.setAttribute('src', product.img);
          image.addEventListener('click', openProductDetailAside);
          image.setAttribute('id', product.id); //para saber que datos de producto mostrar en los detalles
          image.addEventListener('click', openProductDetailAside);
      
          const productInfo=document.createElement('div');
          productInfo.classList.add('product-info');
          // Const by div empty
          const productInfoDiv=document.createElement('div');
          // Const by paragraph
          const productPrecio=document.createElement('p');
          productPrecio.innerText ='$' + product.precio;
          const productName=document.createElement('p');
          productName.innerText = product.name;
      
          productInfoDiv.append(productPrecio,productName);
          // Figure
          const figure=document.createElement('figure');
          const carritoLog=document.createElement('img');
          carritoLog.setAttribute('src','./icons/bt_add_to_cart.svg');
      
          figure.appendChild(carritoLog);
          //Insertar productinfodiv y figure a product info
          productInfo.append(productInfoDiv,figure);
          //Insertar productInfo e imagen a ProductCard
          productcard.append(image,productInfo);
      
          //Insertar product card a cards-contain
          cardContain.appendChild(productcard);
      
      
      }
  }
  renderProduct(productList);


    
// function renderDetail(arr){
//     for(Detail of arr){
//         //Div con el icono
//         const productClose=document.createElement('div');
//         productClose.classList.add('.product-detail-close');
//         const imgCerrar=document.createElement('img');
//         imgCerrar.setAttribute('src','./icons/icon_close.png');
//         //Imagen principal
//         const immagen=document.createElement('img');
//         immagen.setAttribute('src',Detail.imgg);
//         //Div con la clase product info
//         const InfoProduct=document.createElement('div');
//         InfoProduct.classList.add('.product-info');
//         ///Precio,nombre y parrafo
//         const productoPrecio=document.createElement('p');
//         productoPrecio.innerText='$'+ Detail.costo;
//         const productoNombre=document.createElement('p');
//         productoNombre.innerText='$'+ Detail.nombre;
//         const productoParrafo=document.createElement('p');
//         productoParrafo.innerText=Detail.parrafo;
//         //Boton
//         const Boton=document.createElement('button');
//         Boton.type='button';
//         const carritoLog=document.createElement('img');
//         carritoLog.setAttribute('src','./icons/bt_add_to_cart.svg');
//         /// Insertar a las clases
//         productClose.appendChild(imgCerrar);
//         InfoProduct.append(productoPrecio,productoNombre,productoParrafo,Boton);
//         productDetailContainer.append(productClose,immagen,InfoProduct);
//         Boton.appendChild(carritoLog);
//     }
// }

// renderDetail(DetailList);




  