document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.sidenav');
    var instances = M.Sidenav.init(elems, {});
  });


  document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.carousel');
    var instances = M.Carousel.init(elems, {
        fullWidth: true,
    });
  });
  
  //SLIDE//
  let slideIndex = 0;

function showSlides() {
  const slides = document.querySelectorAll('.carousel-images img');
  slideIndex++;
  if (slideIndex >= slides.length) {
    slideIndex = 0;
  }
  const offset = -slideIndex * 100;
  document.querySelector('.carousel-images').style.transform = `translateX(${offset}%)`;
  setTimeout(showSlides, 3000); 
}

showSlides(); 
