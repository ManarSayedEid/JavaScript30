// function debounce(func, wait = 20, immediate = true) {
//     var timeout;
//     return function() {
//       var context = this, args = arguments;
//       var later = function() {
//         timeout = null;
//         if (!immediate) func.apply(context, args);
//       };
//       var callNow = immediate && !timeout;
//       clearTimeout(timeout);
//       timeout = setTimeout(later, wait);
//       if (callNow) func.apply(context, args);
//     };
//   }
let images = document.querySelectorAll('.slide-in');
function animateImage(e) {
    images.forEach(image => {

        let imageStartToshow = window.scrollY + window.innerHeight - image.height/4;
        let imageBottom = image.offsetTop + image.height;

        let isShown = imageStartToshow > image.offsetTop;
        let isNotScrollPast = window.scrollY < imageBottom;
        console.log(isShown,isNotScrollPast)

        if (isShown && isNotScrollPast) {
            image.classList.add('active');
        }else{
            image.classList.remove('active');
        }
    });
}

window.addEventListener('scroll', animateImage);
