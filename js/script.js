// Select landing page div 
let landingPage = document.querySelector(".landingPage");

// images array
let imgsArray  = ["1.jpg", "2.jpg", "3.jpg", "4.jpg", "5.jpg"];

let index = 0;
let iterations = 0;

// Change bg image every 15 seconds 
const updateBgImage = function() {
  
  /* reset index to zero if current index is greater than number of images.
  increment iterations variable since it means we've done one whole loop.
   */
  if (index >= imgsArray.length) {
    index = 0;
    iterations++;
  }

  // set the background image
  landingPage.style.backgroundImage = 'url("images/' + imgsArray[index] +'")';

  /* clear interval (stop timer) when we've reached
   * the number of iterations allowed.
   */
  if (iterations >= 3) {
    iterations = 0;
  } else {
    /* increment current index in order to get next image
     * when this function gets called again.
     */
    index++;
  }
}

// update first image
updateBgImage();

// initiate timer
const interval = setInterval(updateBgImage, 10000);




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
  
