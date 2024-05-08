function getJson() {
  fetch('./plants.json')
    .then((response) => response.json())
    .then((json) => console.log(json));
}
getJson();
console.log(test);
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
//   let slideIndex = 0;

// function showSlides() {
//   const slides = document.querySelectorAll('.carousel-images img');
//   slideIndex++;
//   if (slideIndex >= slides.length) {
//     slideIndex = 0;
//   }
//   const offset = -slideIndex * 100;
//   document.querySelector('.carousel-images').style.transform = `translateX(${offset}%)`;
//   setTimeout(showSlides, 3000); 
// }

// showSlides(); 
document.addEventListener("DOMContentLoaded", function() {
  const carouselInner = document.querySelector('.carousel-inner');
  const carouselItems = document.querySelectorAll('.carousel-item');
  const totalItems = carouselItems.length;
  let currentIndex = 0;

  setInterval(() => {
      currentIndex = (currentIndex + 1) % totalItems;
      carouselInner.style.transform = `translateX(-${currentIndex * 100}%)`;
  }, 3000); // Change slide every 3 seconds (adjust as needed)
});