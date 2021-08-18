//A key press event listener, e.key tells us whch key was pressed
window.addEventListener('keypress', (e) => {
    let keyCharCode = e.key.toUpperCase().charCodeAt(0);    //Character code of the key that was pressed
    let key = document.querySelector(`div[data-key="${keyCharCode}"]`);
    let audio = document.querySelector(`audio[data-key="${keyCharCode}"]`);
    
    //if there is a div with that key code, add a new class and play a sound
    if(key !== null){
        addPlayingClass(key);
        playSound(audio);
    }
});

//Gives a div a class of 'playing'
function addPlayingClass(key){
    key.classList.add('playing');
 
    //event listener keeps track of when the 'playing' transition ends 
    key.addEventListener('transitionend', (e) => {
        if(e.propertyName === 'transform') 
            key.classList.remove('playing');     //removes the class after the transition ends
    });
}

//Plays sound that corresponds with the key pressed
function playSound(audio){
    audio.play();
}