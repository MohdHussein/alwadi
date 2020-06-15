// Select landing page div 
let landingPage = document.querySelector(".landingPage");

// images array

let imgsArray  = ["1.jpg", "2.jpg", "3.jpg", "4.jpg", "5.jpg"];

setInterval(() => {

  // get random number 

  let randomNumber = Math.floor(Math.random() * imgsArray.length);
  // Change background img url

landingPage.style.backgroundImage = 'url("../images/' + imgsArray[randomNumber] +'")';
}, 15000);

// Slide Menu

function openSlideMenu() {
  document.getElementById("sideMenu").style.width = "250px";
  document.querySelector('.menuIcon').style.transform = 'rotate(90deg)';
}

function closeSlideMenu() {
  document.getElementById("sideMenu").style.width = "0";
  document.querySelector('.menuIcon').style.transform = '';
}

// fixed header on scroll 
window.onscroll = function () {
  const nav = document.querySelector('.navBar');
  
    if(window.pageYOffset > 43){  
    nav.style.position = "fixed";
    nav.style.backgroundColor = "black";
  
    } else{
      nav.style.position = "absolute";
      nav.style.backgroundColor = "";
    }
  }
  
