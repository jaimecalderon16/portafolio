
var body = document.querySelector("#body");
let backgraundMenu = document.querySelector(".menu-full-page");
let navFullPage = document.querySelector(".fullPage-nav");
let contactButtonNav = document.querySelector(".ButtomNavContac");
let contactButtonFullNav = document.querySelector(".ButtomNavFullContac");
let contactContainer = document.querySelector("#contact")
let svgContainer = document.querySelector(".svg-menu");
let svgMenu = document.querySelector("#svg-menu-elemt");
let backgraundTopMenu = document.querySelector(".backgraund-top")
let catHand = document.querySelector(".gatoMano")

//eliminar el linkedin y correo en el fullHeader
console.log(window.innerWidth)
if (window.innerWidth <= 480) {
   var elements = document.querySelectorAll(".inactive-nav-fullpage");
  for (var i = 0; i < elements.length; i++) {
    elements[i].classList.add("inactive-full-nav");
  }
}

let click = false;
let pause = true;
//efecto hover con gsap y javascript

svgContainer.addEventListener("mouseover", function () {
  //    TweenLite.to(svgMenu, 1, {stroke: "#ffff"});
  gsap.to(".bar-2", 0.5, {
    attr: { d: "M7,4.5 L2,4.5" },
    ease: "power2.inOut",
  });
});
svgContainer.addEventListener("mouseout", function () {
  //    TweenLite.to(svgMenu, 1, {stroke: "#000B38"});
  gsap.to(".bar-2", 0.5, {
    attr: { d: "M2,4.5 L10,4.5" },
    ease: "power2.inOut",
  });
});

//-------------cambio de forma en X icono svg menu con gsap-----------------
var tl = gsap.timeline();

tl.to(
  ".bar-1",
  0.8,
  {
    attr: { d: "M8,2 L2,7" },
    x: 1,
    ease: "power2.inOut",
  },"start");

tl.to(
  ".bar-2",
  0.8,
  {
    autoAlpha: 0,
  },"start");

tl.to(
  ".bar-3",
  0.8,
  {
    attr: { d: "M8,7 L2,2" },
    x: 1,
    ease: "power2.inOut",
  });

tl.reverse();

//--------evento funcion click reversed con gsap----------

svgContainer.addEventListener("click", svgActive);

let fullPage = gsap.timeline();

function svgActive() {
  //   backgraundMenu.style.visibility = "visible"

  click = !click;

  console.log(click);

  //-----------condicional click activar menu------------

  if (click == true) {

    fullPage.to(svgContainer, {
      pointerEvents: "none",
    });

    body.style.overflowY = "hidden";
    //backgraundTopMenu.style.visibility = "visible";
    fullPage.to(backgraundMenu, {
      duration: 0.2,
      visibility: "visible",
      ease: "Expo.easeInOut",
    });

    fullPage.from(backgraundMenu, {
      duration: 2,
      stagger: 0.1,
      y: "-123%",
      ease: "Expo.easeInOut",
    });

    fullPage.from(
      ".ul-full-page li a",
      {
        duration: 2,
        y: "100%",
        stagger: 0.2,
        ease: "Expo.easeInOut",
      },
      "-=0.5"
    );

//    fullPage.from(navFullPage,{visibility: "visible"},"-=0.9");
    navFullPage.style.visibility = "visible";

    fullPage.from(
      ".fullPage-nav ul li ",
      {
        duration: 2,
        opacity: 0,
        y: "-113%",
        stagger: 0.1,
        ease: "Expo.easeInOut",
      },"-=0.5");

    fullPage.to(svgContainer, {
      pointerEvents: "auto",
    });

    
  }

  

  //----------cambiar color menu y salir del menu

  if (click === false) {
    //fullPage.reverse();
    svgMenu.classList.remove("lihg-color");


    let tl = gsap.timeline();

    tl.to(svgContainer, {
      pointerEvents: "none",
    });

    
    tl.to(backgraundMenu, {
      duration: 1.8,
      y: "100%",
      ease: "Power0.easeOut",
    });

    tl.to(backgraundMenu, {
      duration: 1.8,
      visibility: "hidden",
      ease: "Expo.easeInOut",
    },"-=0.8");

    tl.to(navFullPage, {
      visibility: "hidden",
    },"-=4");

    tl.to(backgraundMenu,{
      duration: 0,
      y: "0px",
      ease:"none",
    },"-=0.5")

    tl.to(svgContainer, {
      pointerEvents: "auto",
    });
    
    //backgraundTopMenu.style.visibility = "hidden";
    body.style.overflowY = "visible";
  } else {
    svgMenu.classList.add("lihg-color");
  }

  tl.reversed(!tl.reversed());
}



//------------------------------foter Codigo and nav-----------------------
let buttonNavFull;
contactButtonFullNav.addEventListener("click", function() {
  contact("1");
});
contactButtonNav.addEventListener("click", function() {
  contact("0");
});

function contact(buttonNavFull) {
  catHand.style.display = "block";
  contactContainer.scrollIntoView({ behavior: 'smooth' });

  if (buttonNavFull == "1") {
    svgActive();
  }
}


//---------------------------Foter Icons Hover Effects------------------
let backgroundDark = document.querySelector(".background-dark");
let containerNav = document.querySelector("#header");
let gitSplash = document.querySelector("#steam-splash");
let gitCircle = document.querySelector("#steam-circle");
let githud = document.querySelector(".si-st");
let igSplash = document.querySelector("#instagram-splash");
let igCircle = document.querySelector("#instagram-circle");
let instagram = document.querySelector(".si-in");
let fkCircle = document.querySelector("#facebook-circle");
let fkSplash = document.querySelector("#facebook-splash");
let facebook = document.querySelector(".si-fb");


//Timeline icon Gsap

let tlGit = gsap.timeline({paused: true});
let tlIg = gsap.timeline({paused: true});
let tlFk = gsap.timeline({paused: true});

//Effect gsap icon intagram

tlIg.to(igCircle, {
    duration: 0.1,
    visibility: "hidden",
    display: "none",
    ease: "Expo.easeInOut",
  });

tlIg.to(igSplash, {
    duration: 0.5,
    visibility: "visible",
    display: "block",
    ease: "Expo.easeInOut",
  });

//Effect gsap icon githud

  tlGit.to(gitCircle, {
    duration: 0.1,
    visibility: "hidden",
    display: "none",
    ease: "Expo.easeInOut",
  });

tlGit.to(gitSplash, {
    duration: 0.5,
    visibility: "visible",
    display: "block",
    ease: "Expo.easeInOut",
  });

  tlFk.to(fkCircle, {
    duration: 0.1,
    visibility: "hidden",
    display: "none",
    ease: "Expo.easeInOut",
  });

tlFk.to(fkSplash, {
    duration: 0.5,
    visibility: "visible",
    display: "block",
    ease: "Expo.easeInOut",
  });

githud.addEventListener("mouseover", () => tlGit.play())
githud.addEventListener("mouseout", () => tlGit.reverse())

facebook.addEventListener("mouseover", () => tlFk.play())
facebook.addEventListener("mouseout", () => tlFk.reverse())

instagram.addEventListener("mouseover", () => tlIg.play())
instagram.addEventListener("mouseout", () => tlIg.reverse())

var styleSheets = document.styleSheets;

