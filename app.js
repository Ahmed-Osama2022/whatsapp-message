/** 
 * Tasks To-Do here:
 * prevemt the recording message from appearing when 'send' is in viewport. 
 */


/**
 * Global variables
 */
const recording = document.getElementsByClassName('speaking')[0];
const cancelBtn = document.getElementById('cancelBtn');
const messageBox = document.getElementById('message');
// All of Mic elements
const mic = document.getElementsByClassName('mic')[0];
const send = document.getElementById('send');
const micIcon = document.getElementById('mic-icon');

/**
 * End of Global variables
 */
/**
 * Start Event Listeners
 */
mic.addEventListener('click', (e) => {
    recording.style.display = 'flex';
});
cancelBtn.addEventListener('click', (e) => {
    recording.style.display = 'none';
});

messageBox.addEventListener('input', (e) => {

    if (messageBox.value !== "") {
        micIcon.style.display = 'none';
        send.style.display = 'block';
        
        send.style.marginTop = '21%';
        mic.style.fontSize = '1.15em';
        mic.style.padding = '0 3px';
        
        // Prevent recording 
        recording.style.display = 'none ';
        recording.classList.add('force-display');


        // console.log("messege here");
    } else {
        micIcon.style.display = 'block';
        mic.style.padding = '0 .73em';
        mic.style.fontSize = '1.3em';
        send.style.display = 'none';

        recording.classList.remove('force-display');
        recording.style.display = 'none';

        // console.log("no message ");
    };
})

// if ()