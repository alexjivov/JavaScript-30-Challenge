// Youtube usually has a data-time attribute
// How do you pull these times out of the DOM and figure out the total hours of all videos?

const timeNodes = Array.from(document.querySelectorAll('[data-time'));

//timeNodes is a NODE LIST not an ARRAY so has to be converted
const seconds = timeNodes  
    .map(node => node.dataset.time)
    .map(timeCode => {
        // ES6 destructuring
        const [mins, secs] = timeCode.split(':').map(parseFloat); //creates an array of seconds and minutes
        return (mins * 60) + secs;
        // return takes an array and returns anything you want (number, string, etc)
        // reduce the numbers into one big number
    })
    .reduce((total, vidSeconds) => total + vidSeconds);

    let secondsLeft = seconds;
    const hours = Math.floor(secondsLeft / 3600); // 3600 secs in an hour
    secondsLeft = secondsLeft % 3600; // use MOD - gives you the seconds remainder after the Math floor
    console.log(secondsLeft);

    const mins = Math.floor(secondsLeft / 60);
    secondsLeft = secondsLeft % 40;
    console.log(hours, mins, secondsLeft);