window.onload = function() {
    const music = document.getElementById('music');
    const musicControl = document.getElementById('musicControl');
    const musicStart = document.getElementById('musicStart');
    const musicCancel = document.getElementById('musicCancel');
    const musicModal = document.getElementById('musicModal');

    musicStart.addEventListener("click", function() {
        musicToggle();
        musicModal.style.display = "none";
    })

    musicCancel.addEventListener("click", function() {
        musicToggle();
        musicModal.style.display = "none";
    })



    musicControl.addEventListener("click", musicToggle());

    function musicToggle() {
        if(music.paused) {
            music.onplay();
            musicControl.classList.add("play");
        } else {
            music.pause();
            musicControl.classList.remove("play");
        }


    }
}