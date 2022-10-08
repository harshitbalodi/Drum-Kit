
//selection all the classes of drum
const arr = document.querySelectorAll(".drum");

//Running loop for all the class drum and If we click the button then event listener will be triggered
for (var i = 0; i < arr.length; i++) {
    arr[i].addEventListener("click", function () {
        var buttonInnerHTML = this.innerHTML;
        makesound(buttonInnerHTML);
        Animation(buttonInnerHTML);
    });
}

//function will call makesound and only if the key w,a,s,d,j,k,l are pressed the audios will be played  
document.addEventListener("keydown", (event) => {
    makesound(event.key);
    Animation(event.key);
})

//function to play sound associated with different key and clicks
function makesound(key) {
    switch (key) {
        case 'w':
            Play("sounds/crash.mp3");
            break;
        case 'a':
            Play("sounds/kick-bass.mp3");
            break;
        case 's':
            Play("sounds/snare.mp3");
            break;
        case 'd':
            Play("sounds/tom-1.mp3");
            break;
        case 'j':
            Play("sounds/tom-2.mp3");
            break;
        case 'k':
            Play("sounds/tom-3.mp3");
            break;
        case 'l':
            Play("sounds/tom-3.mp3");
            break;

        default:
            console.log("")
    }
}
//This function will inject animation to button called 
function Animation(key) {
    var activeButton = document.querySelector("." + key);
    activeButton.classList.add("pressed");
    setTimeout(() => {
        activeButton.classList.remove("pressed");
    }, 100);
}
//function to play the sound
function Play(locationOfAudio) {
    var sound = new Audio(locationOfAudio);
    sound.play();
}