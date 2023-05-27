//let layer = document.querySelector(".layer");
var width = document.querySelector("#wrapper");
var height = document.querySelector("#wrapper");
var body = document.querySelector("#body");
var divLayers = document.querySelector("#DivMauseMove");
let backgraundMenu = document.querySelector(".menu-full-page");
let navFullPage = document.querySelector(".fullPage-nav");
let svgContainer = document.querySelector(".svg-menu");
let svgMenu = document.querySelector("#svg-menu-elemt");
let jungleFg = document.querySelector(".jungle.fg");
let jungleBg = document.querySelector(".jungle.bg");
let jungleMg = document.querySelector(".jungle.mg");

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

    body.style.overflowY = "hidden";

    fullPage.to(backgraundMenu, {
      duration: 0.2,
      visibility: "visible",
      ease: "Expo.easeInOut",
    });

    fullPage.from(backgraundMenu, {
      duration: 2,
      stagger: 0.1,
      y: "-100%",
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
        y: "-100%",
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
      duration: 2.7,
      y: "105%",
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

    body.style.overflowY = "visible";
  } else {
    svgMenu.classList.add("lihg-color");
  }

  tl.reversed(!tl.reversed());
}
//------funcion espera 3s. trasladar los layers al mover mause con gsap

setTimeout(() => {
  document.addEventListener("mousemove", move);
  function move(e) {
    this.querySelectorAll(".layer").forEach((layer) => {
      const speed = layer.getAttribute("data-depth");

      const x = (e.pageX * speed) / 80;
      const y = (e.pageY * speed) / 120;

      gsap.to(layer, { duration: 1, x: x, y: y, z: 0, ease: "power1.out" });
      //layer.style.transform = `translateX(${x}px) translateY(${y}px)`
    });
  }
}, 15000);
