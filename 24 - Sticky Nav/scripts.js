const nav = document.querySelector('#main');
let topOfNav = nav.offsetTop;

function fixNav() {
    // fix the nav when the X and Y scroll equal
    if(window.ScrollY >= topOfNav) {
        // need to add the padding for when the header gets fixed so it doesnt try to fill the space on the browser
        document.body.style.paddingTop = nav.offsetHeight + 'px';
        document.body.classList.add('fixed-nav');
      
    } else {
        document.body.classList.remove('fixed-nav');
        document.body.style.paddingTop = 0;
    }

    console.log(fixNav);

}

window.addEventListener('scroll', fixNav);