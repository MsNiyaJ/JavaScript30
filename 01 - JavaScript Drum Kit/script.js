//Add an event listener to the window to get the code
window.addEventListener('keypress', (e) => {
    let keyCharCode = e.key.toUpperCase().charCodeAt(0);    //Character code of the key that was pressed
    addPlayingClass(keyCharCode);
    playSound(keyCharCode);
});

//Gives a div a class of 'playing'
function addPlayingClass(keyCharCode){
    let keys = document.querySelectorAll('.key');     //node-list of every div with the class 'key'
    
    keys.forEach((key) => {
        let dataKey = key.getAttribute('data-key');

        //If the key pressed matches the data-key of the div, add the class 'playing' to the div
        if(keyCharCode == dataKey) 
            key.classList.add('playing');
            
        setTimeout(function(){ key.classList.remove('playing'); }, 300);    //removes the class after 0.3s
    });
}

//Plays sound that corresponds with the key pressed
function playSound(keyCharCode){
    let sounds = document.querySelectorAll('audio');     //node-list of every div with the tag 'audio'
    sounds.forEach((sound) => {
        let dataKey = sound.getAttribute('data-key');

        //If the key pressed matches the data-key of the audio, play the sound
        if(keyCharCode == dataKey)
           sound.play();
    });
}