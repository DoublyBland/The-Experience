let begin = document.getElementById('begin');

begin.addEventListener('click', experience);

function experience() {
    begin.classList.add('fadeOut')
    console.log("starting...")
    setTimeout(heArrives, 1000)
    begin.style.display  = "none";
}

function heArrives() {
    console.log("begin");
    let audio = document.getElementById('audio');
    audio.play();
    let him = document.getElementById('him');
    him.classList.add('fadeIn')
    setTimeout(changeBG, 5000)
}

function changeBG() {
    let bg = document.getElementById('container');
    bg.classList.add('darken')
}