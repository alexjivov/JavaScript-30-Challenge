// global variable for countdown
let countdown;
const timerDisplay = document.querySelector('.display__time-left');
const endTime = document.querySelector('.display__end-time');
const buttons = document.querySelectorAll('[data-time]');


function timer(seconds) {
    clearInterval(countdown); // clear any existing timers
    const now = Date.now(); // figures out when timer started
    const then = now + seconds * 1000;
    displayTimeLeft(seconds);
    displayEndTime(then);
    countdown = setInterval(() => {
        const secondsLeft = Math.round((then - Date.now()) / 1000); // divide by 1000 to get seconds not milliseconds
        if(secondsLeft <= 0) {
            clearInterval(countdown);
            return;
        }

        displayTimeLeft(secondsLeft);

    }, 1000);

}


function displayTimeLeft(seconds) {
    const minutes = Math.floor(seconds / 60); // only whole minutes - rounds the decimals
    const remainderSeconds = seconds % 60;
    // use the ? ternary operator to make it show how many seconds (0;04) if below 10 seconds
    const display = `${minutes}:${remainderSeconds < 10 ? '0' : ''}${remainderSeconds}`;
    // makes the tab in browser update with the timer
    document.title = display;
    timerDisplay.textContent = display;
 
}

function displayEndTime(timestamp) {
    const end = new Date(timestamp);
    // timeStamp, getHours/Minutes are all native to timeStamp
    const hour = end.getHours();
    const minutes = end.getMinutes()
    endTime.textContent = `Be Back at ${hour > 12 ? hour - 12 : hour}:${minutes < 10 ? '0' : ''}${minutes}`;
}

function startTimer() {
    const seconds = parseInt(this.dataset.time); // parseInt turns the time into real numbers
    timer(seconds);
}

buttons.forEach(button => button.addEventListener('click', startTimer));
document.customForm.addEventListener('submit', function(e) {
    e.preventDefault();
    const mins = this.minutes.value;
    timer(mins * 60); 

    this.reset();
});