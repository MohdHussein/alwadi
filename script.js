// Smooth Scrolling 

window.smoothScroll = function(target) {
    var scrollContainer = target;
    do { //find scroll container
        scrollContainer = scrollContainer.parentNode;
        if (!scrollContainer) return;
        scrollContainer.scrollTop += 1;
    } while (scrollContainer.scrollTop == 0);

    var targetY = 0;
    do { //find the top of target relatively to the container
        if (target == scrollContainer) break;
        targetY += target.offsetTop;
    } while (target = target.offsetParent);

    scroll = function(c, a, b, i) {
        i++; if (i > 30) return;
        c.scrollTop = a + (b - a) / 30 * i;
        setTimeout(function(){ scroll(c, a, b, i); }, 20);
    }
    // start scrolling
    scroll(scrollContainer, scrollContainer.scrollTop, targetY, 0);
}



// Slide Menu

    function openSlideMenu() {
        document.getElementById('sideMenu').style.width = '250px';

}

    function closeSlideMenu(){
        document.getElementById('sideMenu').style.width = '0';
                document.getElementById('sideMenu').onclick = function(e) {
            e.preventDefault();
            return false;
        };

    }


    function breakfastList() {

      document.getElementById('bfLink').style.backgroundColor = "#87CEEB";
      document.getElementById('mcLink').style.backgroundColor = "gold";
      document.getElementById('cdLink').style.backgroundColor = "gold";
      document.getElementById('hdLink').style.backgroundColor = "gold";
      document.getElementById('dLink').style.backgroundColor = "gold";

      document.getElementById('breakfast').style.display = "block";
      document.getElementById('mainCourse').style.display = "none";
      document.getElementById('coldDrinks').style.display = "none";
      document.getElementById('hotDrinks').style.display = "none";
      document.getElementById('deserts').style.display = "none";
    }
    
    function mainCourseList() {
      document.getElementById('bfLink').style.backgroundColor = "gold";
      document.getElementById('mcLink').style.backgroundColor = "#87CEEB";
      document.getElementById('cdLink').style.backgroundColor = "gold";
      document.getElementById('hdLink').style.backgroundColor = "gold";
      document.getElementById('dLink').style.backgroundColor = "gold";

      document.getElementById('breakfast').style.display = "none";
      document.getElementById('mainCourse').style.display = "block";
      document.getElementById('coldDrinks').style.display = "none";
      document.getElementById('hotDrinks').style.display = "none";
      document.getElementById('deserts').style.display = "none";
    }
    
    function coldDrinksList() {
      document.getElementById('bfLink').style.backgroundColor = "gold";
      document.getElementById('mcLink').style.backgroundColor = "gold";
      document.getElementById('cdLink').style.backgroundColor = "#87CEEB";
      document.getElementById('hdLink').style.backgroundColor = "gold";
      document.getElementById('dLink').style.backgroundColor = "gold";

      document.getElementById('breakfast').style.display = "none";
      document.getElementById('mainCourse').style.display = "none";
      document.getElementById('coldDrinks').style.display = "block";
      document.getElementById('hotDrinks').style.display = "none";
      document.getElementById('deserts').style.display = "none";
    }
    
    function hotDrinksList() {
      document.getElementById('bfLink').style.backgroundColor = "gold";
      document.getElementById('mcLink').style.backgroundColor = "gold";
      document.getElementById('cdLink').style.backgroundColor = "gold";
      document.getElementById('hdLink').style.backgroundColor = "#87CEEB";
      document.getElementById('dLink').style.backgroundColor = "gold";

      document.getElementById('breakfast').style.display = "none";
      document.getElementById('mainCourse').style.display = "none";
      document.getElementById('coldDrinks').style.display = "none";
      document.getElementById('hotDrinks').style.display = "block";
      document.getElementById('deserts').style.display = "none";
    }

    function desertsList() {
      document.getElementById('bfLink').style.backgroundColor = "gold";
      document.getElementById('mcLink').style.backgroundColor = "gold";
      document.getElementById('cdLink').style.backgroundColor = "gold";
      document.getElementById('hdLink').style.backgroundColor = "gold";
      document.getElementById('dLink').style.backgroundColor = "#87CEEB";
      document.getElementById('breakfast').style.display = "none";
      document.getElementById('mainCourse').style.display = "none";
      document.getElementById('coldDrinks').style.display = "none";
      document.getElementById('hotDrinks').style.display = "none";
      document.getElementById('deserts').style.display = "block";
    }

    function cateringAlert() {
      if (document.getElementById('field1').value > "" && document.getElementById('field2').value > "" 
        && document.getElementById('field3').value > "") {
        alert('Thank you for submitting the form. We will email you within 3 hours about the availability and pricing.')

      }
    }

    function reservationAlert() {
      var dateInput = document.getElementsByClassName('datePicker');
      if (document.getElementById('field1').value > "" && document.getElementById('field2').value > "" && dateInput[0].value > "") {
        alert('Thank you for submitting the form. We will email you within 3 hours about your reservation.')

      }
    }