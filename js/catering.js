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
  
