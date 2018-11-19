
// Makes sure the elements don't bounce repeatedly when you scroll 
// IF YOU DON'T DEBOUNCE THIS THEN IT WILL RUN HUNDREDS OF TIMES AND BREAK EVERYTHING
function debounce(func, wait = 20, immediate = true) { // only runs checkSlide every 20 miliseconds
    var timeout;
    return function() {
      var context = this, args = arguments;
      var later = function() {
        timeout = null;
        if (!immediate) func.apply(context, args);
      };
      var callNow = immediate && !timeout;
      clearTimeout(timeout);
      timeout = setTimeout(later, wait);
      if (callNow) func.apply(context, args);
    };
  }

const sliderImages = document.querySelectorAll('.slide-in');

function checkSlide(e) {
    console.log(e);
    // need to figure out where the image should be generated
    sliderImages.forEach(slideImage => {
        // how far is image being scrolled down?
        const slideInAt = (window.scrollY + window.innerHeight);
        slideImage.height / 2;
        // if you scroll back up it should come back in
        const imageBottom = slideImage.offsetTop + slideImage.height;
        // makes sure slide in value is greater than where the top of the image is
        const isHalfShown = slideInAt > slideImage.offsetTop;

        
        const isNotScrolledPast = window.scrollY < imageBottom;
        if(isHalfShown && isNotScrolledPast) {
            slideImage.classList.add('active');
        } else {
            slideImage.classList.remove('active')
        }
    });
}

//links debounce function from checkSlide
window.addEventListener('scroll', debounce(checkSlide));