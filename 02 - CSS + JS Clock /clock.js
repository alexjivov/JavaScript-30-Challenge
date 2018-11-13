
function setDate() {
    const now = new Date();
    // Sets seconds interval to be counting up
    const seconds = now.getSeconds();
    // Select the seconds hands
const secondHand = document.querySelector('.second-hand');
    // Divides seconds by 60 and times it by 360 degrees for the full clock
    const secondsDegrees = ((seconds / 60) * 360) + 90;
    // Use template literals to link the second rotation to the actual second-hand div
    secondHand.style.transform =`rotate(${secondsDegrees}deg)`;
    
    // Minute hand function
    const mins = now.getMinutes();
    const minsHand = document.querySelector('.min-hand');
    const minsDegrees = ((mins / 60 ) * 360) + 90;
    minsHand.style.transform =`rotate(${minsDegrees}deg)`;

    // Hour Hand function
    const hours = now.getHours();
    const hourHand = document.querySelector('.min-hand');
    const hoursDegrees = ((hours / 12 ) * 360) + 90;
    hourHand.style.transform =`rotate(${hoursDegrees}deg)`;

}

// Runs every second through setInterval

setInterval(setDate, 1000);