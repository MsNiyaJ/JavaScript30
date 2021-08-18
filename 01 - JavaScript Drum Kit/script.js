//A key press event listener, e.key tells us whch key was pressed
window.addEventListener('keypress', (e) => {
    let keyCharCode = e.key.toUpperCase().charCodeAt(0);    //Character code of the key that was pressed
    
    if(keyExists(keyCharCode)){
        let attribute = `[data-key="${keyCharCode}"]`;     //this attribute is found in each element we want to use
        addPlayingClass(attribute);
        playSound(attribute);
    }
});

//Checks if there is an existing div with a data-key that matches the char code of the pressed key
function keyExists(keyCharCode){
    let keyExists = false;
    const keys = document.querySelectorAll('.key');     //node-list of every div with the class 'key'
    
    keys.forEach((key) => {
        let dataKey = key.getAttribute('data-key');   //data-key value of the div

        //If the key pressed matches the data-key of a div, return true
        if(keyCharCode == dataKey) {
            keyExists = true;
            return;
        }
    });
    return keyExists;
}

//Gives a div a class of 'playing'
function addPlayingClass(attribute){
    let key = document.querySelectorAll(attribute)[0];  //Selects the div that has a data-key that matches the key pressed key
    key.classList.add('playing');
    setTimeout(function(){ key.classList.remove('playing'); }, 300);    //removes the class after 0.3s
}

//Plays sound that corresponds with the key pressed
function playSound(attribute){
    let audio = document.querySelectorAll(attribute)[1]; //Selects the audio that has a data-key that matches the pressed key
    audio.play();
    // console.dir(audio);
}