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

function cateringAlert() {
  if (document.getElementById("field1").value > "" && document.getElementById("field2").value > "" && document.getElementById("field3").value > "") {
    alert("Thank you for submitting the form. We will email you within 3 hours about the availability and pricing.");
  }
}

function reservationAlert() {
  var dateInput = document.getElementsByClassName("datePicker");
  if (document.getElementById("field1").value > "" && document.getElementById("field2").value > "" && dateInput[0].value > "") {
    alert("Thank you for submitting the form. We will email you within 3 hours about your reservation.");
  }
}

function lettersAndNumbers(input) {
  var regex = /[^a-z 0-9 , . \s]/gi;
  input.value = input.value.replace(regex, "");
}

function onlyLetters(input) {
  var regex = /[^a-z]/gi;
  input.value = input.value.replace(regex, "");
}

function formEmail(input) {
  var regex = /[^a-z 0-9 . @ _ -]/gi;
  input.value = input.value.replace(regex, "");
}