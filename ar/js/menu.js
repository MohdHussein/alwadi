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


// change active class, and hide other elements onclick

let selectLis = document.querySelectorAll(".selectSection button");

for (let li of selectLis) {
  li.addEventListener('click', (e) => {
    const el = e.target;
    const active = document.querySelector(".active");
    let sections = document.querySelectorAll('.menuSection');
    if (active) {
      active.classList.remove("active");
    }
    el.classList.add("active");     
      for (let section of sections) {
        if(section.getAttribute('data-menu') === li.getAttribute('data-menu')) {
          section.style.display = "block";
        }
        else {
          section.style.display = "none";
        }
      }
  });
}




