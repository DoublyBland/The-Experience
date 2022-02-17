let red = document.getElementById('red');
let blue = document.getElementById('blue')

red.addEventListener('click', experience);
blue.addEventListener('click', experience2)

function experience() {
    red.classList.add('fadeOut')
    blue.classList.add('fadeOut')
    console.log("starting...")
    setTimeout(heArrives("jer"), 1000)
    red.style.display  = "none";
    blue.style.display = "none";
}

function experience2() {
    red.classList.add('fadeOut')
    blue.classList.add('fadeOut')
    console.log("starting...")
    setTimeout(heArrives("riley"), 1000)
    red.style.display  = "none";
    blue.style.display = "none";
}

function heArrives(person) {
    console.log(person)
    console.log("begin");
    if(person === "jer"){
        let audio = document.getElementById('audio');
        audio.play();
        console.log("test")
        let him = document.getElementById('jer');
        him.classList.add('fadeIn')
        setTimeout(changeBG, 5000)
    }
    else if(person === "riley") {
        let audio = document.getElementById('audio2');
        audio.play();
        let him = document.getElementById('riley');
        him.classList.add('fadeIn')
        setTimeout(changeBG2, 5000)
    }
}

function changeBG() {
    let bg = document.getElementById('container');
    bg.classList.add('darken')
}

function changeBG2() {
    let bg = document.getElementById('container');
    bg.classList.add('darken2')
}