const menuSelect = document.querySelector(".selectHolder");

function menuSelector(e) {
  const el = e.target;
  const active = document.querySelector(".active");
  if (active) {
    active.classList.remove("active");
  }
  el.classList.add("active");
  menuDishes();
}

function menuDishes() {
  const breakfast = document.getElementById("breakfast");
  const mainCourse = document.getElementById("mainCourse");
  const coldDrinks = document.getElementById("coldDrinks");
  const hotDrinks = document.getElementById("hotDrinks");
  const deserts = document.getElementById("deserts");

  if (document.getElementById("bfLink").classList.contains("active")) {
    breakfast.style.display = "block";
    mainCourse.style.display = "none";
    coldDrinks.style.display = "none";
    hotDrinks.style.display = "none";
    deserts.style.display = "none";
  } else if (document.getElementById("mcLink").classList.contains("active")) {
    breakfast.style.display = "none";
    mainCourse.style.display = "block";
    coldDrinks.style.display = "none";
    hotDrinks.style.display = "none";
    deserts.style.display = "none";
  } else if (document.getElementById("cdLink").classList.contains("active")) {
    breakfast.style.display = "none";
    mainCourse.style.display = "none";
    coldDrinks.style.display = "block";
    hotDrinks.style.display = "none";
    deserts.style.display = "none";
  } else if (document.getElementById("hdLink").classList.contains("active")) {
    breakfast.style.display = "none";
    mainCourse.style.display = "none";
    coldDrinks.style.display = "none";
    hotDrinks.style.display = "block";
    deserts.style.display = "none";
  } else if (document.getElementById("dLink").classList.contains("active")) {
    breakfast.style.display = "none";
    mainCourse.style.display = "none";
    coldDrinks.style.display = "none";
    hotDrinks.style.display = "none";
    deserts.style.display = "block";
  }
}

menuSelect.addEventListener("click", menuSelector);
// Smooth Scrolling

window.smoothScroll = function (target) {
  var scrollContainer = target;
  do {
    //find scroll container
    scrollContainer = scrollContainer.parentNode;
    if (!scrollContainer) 
      return;
    scrollContainer.scrollTop += 1;
  } while (scrollContainer.scrollTop == 0);

  var targetY = 0;
  do {
    //find the top of target relatively to the container
    if (target == scrollContainer) 
      break;
    targetY += target.offsetTop;
  } while ((target = target.offsetParent));

  scroll = function (c, a, b, i) {
    i++;
    if (i > 30) 
      return;
    c.scrollTop = a + (b - a) / 30 * i;
    setTimeout(function () {
      scroll(c, a, b, i);
    }, 20);
  };
  // start scrolling
  scroll(scrollContainer, scrollContainer.scrollTop, targetY, 0);
};

// Slide Menu

function openSlideMenu() {
  document.getElementById("sideMenu").style.width = "250px";
}

function closeSlideMenu() {
  document.getElementById("sideMenu").style.width = "0";
  document.getElementById("sideMenu").onclick = function (e) {
    e.preventDefault();
    return false;
  };
}

