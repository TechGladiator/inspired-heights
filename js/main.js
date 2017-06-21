// slide show

var slideIndex = 0; // sets initial slide index

// create slideshow
function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides"); // gets the images
  var dots = document.getElementsByClassName("dot"); // gets the dot divs

  // cycles through images and changes class to hide
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++; // updates the slide index

  // cycles through dot divs and changes class to deselect
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" selected", "");
  }
  // sets index to show selected slide
  if (slideIndex > slides.length) {
    slideIndex = 1;
  }
  // shows selected image
  slides[slideIndex - 1].style.display = "block";
  // changes dot div class to match image
  dots[slideIndex - 1].className += " selected";
  setTimeout(showSlides, 3000); // waits 3 seconds to transistion to next slide
}

// call the slideshow function and gets initial slide index
showSlides(slideIndex);

// toggle hamburger menu animation
function hamburger(x) {
  x.classList.toggle("change");
}
