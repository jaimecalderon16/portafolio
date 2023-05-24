
let backgroundDark = document.querySelector(".background-dark");
let containerNav = document.querySelector("#header")
let hello = document.querySelector(".div-hello");
let iAm = document.querySelector(".div-iam");
let jaime = document.querySelector(".div-jaime");
let gitSplash = document.querySelector("#steam-splash");
let gitCircle = document.querySelector("#steam-circle")
let githud = document.querySelector(".si-st");
let igSplash = document.querySelector("#instagram-splash");
let igCircle = document.querySelector("#instagram-circle");
let instagram = document.querySelector(".si-in");
let fkCircle = document.querySelector("#facebook-circle");
let fkSplash = document.querySelector("#facebook-splash");
let facebook = document.querySelector(".si-fb");



body.style.overflowY = "hidden";
containerNav.style.visibility = "hidden"

setTimeout(() => {
    iAm.style.display = "block";
    iAm.classList.add("text-iam");
}, 6000);

setTimeout(() => {
    jaime.style.display = "block";
    jaime.classList.add("text-jaime");
    
}, 7500);

setTimeout(()=>{
  backgroundDark.style.display = "none";
  body.style.overflowY = "visible";
  containerNav.style.visibility = "visible"
},12000)

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

for (var i = 0; i < styleSheets.length; i++) {
  console.log('Hoja de estilo #' + i + ': ' + styleSheets[i].href);
}