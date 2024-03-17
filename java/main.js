
// function testAlert(message) {
//   alert(message);
// }
// testAlert("test123");
// console.log(1+2);

// document.getElementById('greeting').innerHTML='Hello World!';
//document.querySelector('#open-nav-menu').addEventListener('click',function(){ alert("clicked on menu");});
 //Menu  Section

 const weatherAPIKey ="b26e4850e5ea8cae89d8ad76cedfed08";
 const weatherAPIURL=`https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={API key}`;


 function menuHandler(){
  document.querySelector('#open-nav-menu').addEventListener('click',function(){
      document.querySelector("header nav .wrapper").classList.add("nav-open");
  })
  document.querySelector('#close-nav-menu').addEventListener('click',function(){
      document.querySelector("header nav .wrapper").classList.remove("nav-open");
  });
}

//Greeting 
function greetingHandler(){
  let currentHour=new Date().getHours();
  let greetingText;
  if(currentHour<12){
    greetingText="Good morning";
  }
  else if(currentHour<17){
    greetingText="Good Afternoon";
  }
  else if(currentHour<24){
    const greetingText="Good Evening";
  }
  else {
    greetingText="Welome";
  }

  document.querySelector('#greeting').innerHTML=greetingText;
  document.querySelector('#weather').innerHTML=weatherText;
}

//temperature
function celsiusToFarh(temperature){
  let farh= (temperature * 9/5) + 32;
  return farh;
}


// alert("ther temprature outside is "+celsiusToFarh(25)+"F");
const weatherCondition="sunny";
  const userLocation ="New York";
  let temperature = 22.867;
  let weatherText = "The weather is "+ weatherCondition +" in " + userLocation+ " and it's " + temperature +"°C outside.";
  console.log(weatherText);

  document.querySelector('.weather-group').addEventListener('click',function(e){
      if(e.target.id=="celsius") {
          let weatherText = "The weather is "+ weatherCondition +" in " + userLocation+ " and it's " + temperature +"°C outside.";
          document.querySelector('#weather').innerHTML=weatherText;
      }
      else if(e.target.id=="fahr"){
          let weatherText = "The weather is "+ weatherCondition +" in " + userLocation+ " and it's " + celsiusToFarh(temperature) +"°F outside.";
          document.querySelector('#weather').innerHTML=weatherText;
      }
  });



//Time
//let localDate=new Date();
function clockHandler(){
  setInterval(function (){
    document.querySelector("span[data-time=hours]").textContent=new Date().getHours().toString().padStart(2,"0");
    document.querySelector("span[data-time=minutes]").textContent=new Date().getMinutes().toString().padStart(2,"0");
    document.querySelector("span[data-time=seconds]").textContent=new Date().getSeconds().toString().padStart(2,"0"); 
  },1000)
} 


//Thumbnail Image
function galleryHandler(){
  const imageGallery=[
  {src:"./assets/gallery/img1.png",alt:"Thumbnail Image 01"},
  {src:"./assets/gallery/image1.jpg",alt:"Thumbnail Image 1"},
  {src:"./assets/gallery/image2.jpg",alt:"Thumbnail Image 1"},
  {src:"./assets/gallery/image3.jpg",alt:"Thumbnail Image 3"}];

  let mainImage= document.querySelector(" #gallery > img ");
  let thumbnails=document.querySelector("#gallery .thumbnails");
  mainImage.src=imageGallery[0].src;
  mainImage.alt=imageGallery[0].alt;
  imageGallery.forEach(function(image,index){
      let thumb=document.createElement("img");
      thumb.src=image.src;
      thumb.alt=image.alt;
      thumb.dataset.arrayIndex=index;
      thumb.dataset.selected=index===0 ? true : false ;

      thumb.addEventListener("click",function(e){
          let selectIndex = e.target.dataset.arrayIndex;
          let selectImage= imageGallery[selectIndex];
          mainImage.src=imageGallery[selectIndex].src;
          mainImage.alt=imageGallery[selectIndex].alt;

          thumbnails.querySelectorAll("img").forEach(function(img){
              img.dataset.selected=false;
          });
          e.target.dataset.selected=true;

      });

      thumbnails.appendChild(thumb);
  })

  console.log(mainImage);   
}

//Products section
const product=[
{
  title: "AstroFiction",
  author: "John Doe",
  price: 49.9,
  image: "./assets/products/img6.png"
},
{
  title: "Space Odissey",
  author: "Marie Anne",
  price: 35,
  image: "./assets/products/img1.png"
},
{
  title: "Doomed City",
  author: "Jason Cobert",
  price: 0,
  image: "./assets/products/img2.png"
},
{
  title: "Black Dog",
  author: "John Doe",
  price: 85.35,
  image: "./assets/products/img3.png"
},
{
  title: "My Little Robot",
  author: "Pedro Paulo",
  price: 0,
  image: "./assets/products/img5.png"
},
{
  title: "Garden Girl",
  author: "Ankit Patel",
  price: 45,
  image: "./assets/products/img4.png"
}
];

function populateProduct(productList){

  let productSection =document.querySelector(".products-area");

  productSection.textContent="";

  productList.forEach(function(product,index){

    //create the HTML element for the individual product
    let productElement=document.createElement("div");
    productElement.classList.add("product-item");

    //create product image
    let productImage=document.createElement("img");
    productImage.src=product.image;
    productImage.alt=product.title;

    //create the HTML element for individual product details
    let productDetails=document.createElement("div");
    productDetails.classList.add("product-details");

    //create product title, author, price-title, price
    let productDet=document.createElement("h3");
    productDet.classList.add("product-title");
    productDet.textContent=product.title;
    let productAuthor=document.createElement("p");
    productAuthor.classList.add("product-author");
    productAuthor.textContent=product.author;
    let productPriceTitle=document.createElement("p");
    productPriceTitle.classList.add("price-title");
    productPriceTitle.textContent="Price";
    let productPrice=document.createElement("p");
    productPrice.classList.add("product-price");
    productPrice.textContent=product.price > 0 ? "$"+ product.price.toFixed(2) : "Free";
    
    
    //create product details
    productDetails.append(productDet);
    productDetails.append(productAuthor);
    productDetails.append(productPriceTitle);
    productDetails.append(productPrice);

    //add all child HTML elements of the project 
    productElement.append(productImage);

    //add all child HTML elements product details
    productElement.append(productDetails);

   //add complete individual product to product-area
    productSection.append(productElement);
  });

}

function productHandler(){
    
    let freeProduct = product.filter(item => item.price <=0);
    //array created
    let paidProduct = product.filter(item => item.price >0);

    //Run a loop through the products and create an HTML element("product-item") for each of them
    populateProduct(product);
    document.querySelector(".products-filter  label[for=all]  span.product-amount").textContent = product.length;
    document.querySelector(".products-filter label[for=free]  span.product-amount").textContent=freeProduct.length;
    document.querySelector(".products-filter label[for=paid]  span.product-amount").textContent=paidProduct.length;
    let productFilter =document.querySelector(".products-filter");
    
    productFilter.addEventListener("click",function(e){
      if(e.target.id==="all"){
        populateProduct(product);
      }
      else if(e.target.id==="free"){
        populateProduct(freeProduct);
      }
      else if(e.target.id==="paid"){
        populateProduct(paidProduct);
      }
    });

  }

  navigator.geolocation.getCurrentPosition(function(position){
    console.log(position);
    let latitude =position.coords.latitude;
    let longitude=position.coords.longitude;
    //console.log(latitude);
   // console.log(longitude);
   let url =weatherAPIURL.replace("{lat}",latitude).replace("{lat}",longitude)
   .replace("API key",weatherAPIKey);

     fetch("https://api.openweathermap.org/data/3.0/onecall?lat={lat}&lon={lon}&exclude={part}&appid={API key}")
     .then(response => response.json())
     .then(data => console.log(data));
     let temperature=30;
  });

menuHandler();
greetingHandler();
clockHandler();
galleryHandler();
productHandler();