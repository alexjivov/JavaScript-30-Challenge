// Speech Synthesis API comes built into most modern browsers
const msg = new SpeechSynthesisUtterance();
// empty array for voices to be dumped into
  let voices = [];
  // all the selectors tie into the utterance
  const voicesDropdown = document.querySelector('[name="voice"]');
  const options = document.querySelectorAll('[type="range"], [name="text"]');
  const speakButton = document.querySelector('#speak');
  const stopButton = document.querySelector('#stop');

msg.text = document.querySelector('[name="text"]').value;

function populateVoices() {
    // override the voices array
    voices = this.getVoices();
    // provides the voice options in the dropdown
    voicesDropdown.innerHTML = voices
        .filter(voice => voice.lang.includes('en'))     // filters for only english voices
        .map(voice => `<option value="${voice.name}">${voice.name} (${voice.lang})</option>`)
        .join('');
}

//function to change voices when you select different voices
function setVoice() {
    // loop over each voice option until they find the one with the name it is looking for
    msg.voice = voices.find(voice => voice.name === this.value);
    
}

//restart function

function toggle(startOver = true) {
    speechSynthesis.cancel();
    if(startOver) {
        speechSynthesis.speak(msg);
    }
    
}

function setOption() {
    msg[this.name] = this.value;
    toggle();
}

// Event Listeners
speechSynthesis.addEventListener('voiceschanged', populateVoices);
voicesDropdown.addEventListener('change', setVoice);

//Take all pitch/rate options and bind them to the voiceschanged function
options.forEach(option => option.addEventListener('change', setOption));

// run toggle function when you hit the speak button
speakButton.addEventListener('click', toggle);
// bind - takes a function and call it in the context of first argument, and then passes it a second
stopButton.addEventListener('click', toggle.bind(null, false));