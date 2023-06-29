var vidaEnemigo=100;
var vidaJugador=100;
   


function calculardano(ataque,defensa,estado){                 // La Variable Estado se utiliza para saber si el Jugador se encuentra en estado de ataque(0) o defensa(1)       
    var mensaje=  document.querySelector('.atadef');            // Utiliza el Método querySelector para seleccionar el primer elemento del documento HTML y lo asigna a la variable mensaje.  
    var menDiv=   document.querySelector('.mensaje');            // Muestra los Tipos de Ataque y Defensa y la Vida que Quita
    var Kamehameha=     document.querySelector('.Kamehameha');
    var genkidama=    document.querySelector('.genkidama');
    var kaioken=   document.querySelector('.kaioken');
    //var vidaene = document.querySelector('.vidaEnemigo');
    //var vidajug = document.querySelector('.vidaJugador');
    

    

    vidajug = vidaJugador;
    vidaene = vidaEnemigo; 

    //vidajug.style.width = vidaJugador + "%";
    //vidaene.style.width = vidaEnemigo + "%";
    
    
    const combinaciones = {
      "0-0": 10, // Kamehameha vs Kamehameha
      "0-1": 20, // Kamehameha vs genkidama
      "0-2": 0, // Kamehameha vs kaioken
      "1-0": 0, // genkidama vs Kamehameha
      "1-1": 10, // genkidama vs genkidama
      "1-2": 20, // genkidama vs kaioken
      "2-0": 10, // kaioken vs Kamehameha
      "2-1": 0, // kaioken vs genkidama
      "2-2": 20 // kaioken vs kaioken
    };
    cal=ataque.toString()+"-"+defensa.toString();    
    var dan=combinaciones[cal]
    if(estado==0){                     // Estado de Ataque del Jugador 
        if(defensa==0){
            defensa="KAMEHA";
        }else if(defensa==1){
            defensa="GEMKIDAMA";
        }else if(defensa==2){
            defensa="KAIO-KEN";
        }
        if(ataque==0){
            ataque="KAMEHA";
        }else if(ataque==1){
            ataque="GENKIDAMA";
        }else if(ataque==2){
            ataque="KAIO-KEN";
        }
        vidaEnemigo-=dan;
        if (vidaEnemigo<1){
            vidaEnemigo=0;
        }
        document.getElementById("vida-jugador").textContent = vidaJugador;
        document.getElementById("vida-enemigo").textContent = vidaEnemigo;
        mensaje.textContent="DEFIÉNDETE";    
        menDiv.textContent="USTED Atacó con "+ataque+" la vida de enemigo es: "+vidaEnemigo+" el se DEFENDIO con "+defensa+" El daño que ocasiono fue de: "+dan;   
        Kamehameha.setAttribute("onclick", "calculardano(Math.floor(Math.random() * 3),0,1)");   // Cambia El estado ataque(0) a estado de defensa(1)
        genkidama.setAttribute("onclick", "calculardano(Math.floor(Math.random() * 3),1,1)");   
        kaioken.setAttribute("onclick", "calculardano(Math.floor(Math.random() * 3),2,1)");      
    }else if(estado==1){    // Estado de Defensa del Jugador 
        if(ataque==0){
            ataque="KAME-HA";
        }else if(ataque==1){
            ataque="GENKIDAMA";
        }else if(ataque==2){
            ataque="KAIO-KEN";
        }
        if(defensa==0){
            defensa="KAMEHA";
        }else if(defensa==1){
            defensa="GENKIDAMA";
        }else if(defensa==2){
            defensa="KAIO-KEN";
        }
        vidaJugador-=dan;
        if (vidaJugador<1){
            vidaJugador=0;
        }
        document.getElementById("vida-jugador").textContent = vidaJugador;
        document.getElementById("vida-enemigo").textContent = vidaEnemigo;
        mensaje.textContent="ATACAR";    
        //menDiv.textContent="USTED SE DEFENDIO CON "+defensa+" la vida suya es: "+vidaJugador+" el lo ataco con "+ataque+" El daño que ocasiono fue de: "+dan;   
        menDiv.textContent="El ENEMIGO te Ha ATACADO con " + ataque + " te has DEFENDIDO con escudo de " + defensa + " te ha quitado " + dan + " de Vida";         
        Kamehameha.setAttribute("onclick", "calculardano(0,Math.floor(Math.random() * 3),0)");  // El método setAttribute Modifica el onclick del Boton se Usa Aquí para cambiar El estado Defensa(0) a estado de Ataque(1)
        genkidama.setAttribute("onclick", "calculardano(1,Math.floor(Math.random() * 3),0)");   
        kaioken.setAttribute("onclick", "calculardano(2,Math.floor(Math.random() * 3),0)");             
    }
    if(vidaJugador<1){
        mensaje.textContent="USTED PERDIO"; 
        Kamehameha.setAttribute("onclick", "");  
        genkidama.setAttribute("onclick", "");   
        kaioken.setAttribute("onclick", "");
        setTimeout(function() {
            window.location.href = "index.html";
          }, 5000);   
    }
    if(vidaEnemigo<1){
        mensaje.textContent="USTED GANO"; 
        Kamehameha.setAttribute("onclick", "");  
        genkidama.setAttribute("onclick", "");   
        kaioken.setAttribute("onclick", "");  
        setTimeout(function() {
            window.location.href = "index.html";
          }, 5000);  
    }
    
  }