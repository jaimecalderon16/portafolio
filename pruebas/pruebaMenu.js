let backgraundMenu = document.querySelector(".overlay");
let navFullPage = document.querySelector(".fullPage-nav");
let inctiveFullpageNav = document.querySelector(".inactive-nav-fullpage")
let svgContainer = document.querySelector(".svg-menu");
let buttonSound = document.querySelector(".container-sound");
let iconSoundMute = document.querySelector(".Sound-mute");
let audioFondo = document.querySelector(".audioMelody");
let iconSoundBars = document.querySelector("#Sound-bars");
let svgMenu = document.querySelector("#svg-menu-elemt");

let button = document.querySelector(".menu-icon-trigger")
console.log(window.innerWidth)

//eliminar el linkedin y correo en el fullHeader
if (window.innerWidth <= 480) {
    inctiveFullpageNav.classList.add("inactive-full-nav");
    
}

let click = false;
let pause = true;

svgMenu.addEventListener("click", svgActive);

let fullPage = gsap.timeline();


function svgActive() {
  //   backgraundMenu.style.visibility = "visible"
  backgraundMenu.classList.add("open")
  click = !click;

  console.log(click);


  //-----------condicional click activar menu------------

  if (click == true) {

 
    fullPage.from(backgraundMenu, {
      duration: 2,
      stagger: 0.1,
      y: "-159%",
      ease: "Expo.easeInOut",
    });

    fullPage.from(
      ".ul-full-page li a",
      {
        duration: 2,
        y: "109%",
        stagger: 0.2,
        ease: "Expo.easeInOut",
      },
      "-=0.5"
    );

    navFullPage.style.visibility = "visible";

    fullPage.from(
      ".fullPage-nav ul li ",
      {
        duration: 2,
        opacity: 0,
        y: "-102%",
        stagger: 0.1,
        ease: "Expo.easeInOut",
      },
      "-=0.5"
    );

    
  }

  

  //----------cambiar color menu y salir del menu

  if (click === false) {
    //fullPage.reverse();
    svgMenu.classList.remove("lihg-color");
    
    let tl = gsap.timeline();

    tl.to(backgraundMenu, {
      duration: 2,
      y: "155%",
      ease: "Power1.easeOut",
    });

    tl.to(backgraundMenu, {
      duration: 2,
      visibility: "hidden",
      ease: "Expo.easeInOut",
    },"-=0.5");

    tl.to(navFullPage, {
      visibility: "hidden",
    },"-=4");

    tl.to(backgraundMenu,{
      duration: 0,
      y:0,
      ease:"none",
    },"-=0.5")


  } else {
    svgMenu.classList.add("lihg-color");
  }

  tl.reversed(!tl.reversed());
  
}