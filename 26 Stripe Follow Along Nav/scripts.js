const triggers = document.querySelectorAll('.cool > li');
const background = document.querySelector('.dropdownBackground');
const nav = document.querySelector('.top');

function handleEnter() {
    this.classList.add('trigger-enter');
    // also need to enter a trigger enter active as AN ARROW function
    // otherwise this wont inherit
    setTimeout(() => {
        // if statement prevents from remove function being run before the add
        if(this.classList.contains('trigger-enter')) {
            // also need to enter a trigger enter active as AN ARROW function
             // otherwise this wont inherit
  this.classList.add('trigger-enter-active')
        }
         
    },150);

    // need to get background on links
    background.classList.add('open');
    
    const dropdown = this.querySelector('.dropdown'); // can't do it with the nav - has to be within the thing that got selected
    // find width/height of dropdown/navs
    const dropdownCoords = dropdown.getBoundingClientRect();
    const navCoords = nav.getBoundingClientRect();

    const coords = {
        height: dropdownCoords.height,
        width: dropdownCoords.width,
        // make sure you subtract the two to make sure it lines up the top of the divs properly
        top: dropdownCoords.top - navCoords.top,
        left: dropdownCoords.left - navCoords.left,

    };

    // make the white background set to the width and height of the div coords
    background.style.setProperty('width', `${coords.width}px`);
    background.style.setProperty('height',`${coords.height}px`);
    background.style.setProperty('transform', `translate(${coords.left}px, ${coords.top}.px)
    `);
}

function handleLeave() {
    // animation disapears when you leave
    this.classList.remove('trigger-enter', 'trigger-enter-active');
    background.classList.remove('open');
}



triggers.forEach(trigger => trigger.addEventListener('mouseenter', handleEnter));
triggers.forEach(trigger => trigger.addEventListener('mouseleave', handleLeave));