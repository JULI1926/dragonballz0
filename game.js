var backgroundImages = [
    "img/gohan.gif",    
    "img/freezer.gif",
    "img/batalla.gif",
    "img/vegueta.gif",
    "img/freezer2.gif"
    // Agrega más imágenes según sea necesario
  ];

 // Elemento del fondo de pantalla
 var backgroundElement = document.querySelector(".background");

 // Función para cambiar el fondo de pantalla
 function changeBackground() {
   // Selecciona una imagen aleatoria
   var randomIndex = Math.floor(Math.random() * backgroundImages.length);
   var randomImage = backgroundImages[randomIndex];

   // Aplica la imagen como fondo de pantalla
   backgroundElement.style.backgroundImage = "url('" + randomImage + "')";
 }

 // Cambia el fondo de pantalla inicialmente
 changeBackground();

 // Programa el cambio de fondo cada 2 segundos
 setInterval(changeBackground, 1000);


 





