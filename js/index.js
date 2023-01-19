window.onload = function() {
    const music = document.getElementById('music');
    const musicControl = document.getElementById('musicControl');
    const musicStart = document.getElementById('musicStart');
    const musicCancel = document.getElementById('musicCancel');
    const musicModal = document.getElementById('musicModal');

    let toggle = true; 

    // musicStart.addEventListener("click", function() {
    //     toggle = false;
    //     musicToggle();
    //     musicModal.style.display = "none";
    // })

    // musicCancel.addEventListener("click", function() {
    //     toggle = true;
    //     musicToggle();
    //     musicModal.style.display = "none";
    // })

    musicControl.addEventListener("click", function() {
        this.style.transform = "scale(0.8)";
        setTimeout(() => {
            this.style.transform = "scale(1)";
        }, 300)
        musicToggle();
    });

    function musicToggle() {
        toggle = !toggle;
        if(toggle) {
            music.play();
            musicControl.classList.add("play");
        } else {
            music.pause();
            musicControl.classList.remove("play");
        }
    }

    
    const menu = document.querySelectorAll(".menu");
    const menu1 = document.getElementById("menu1");
    const menuCon1 = document.getElementById("menuCon1");
    
    // menu1.getAttribute

    let img;
    let src;
    let val;

    for(let i = 1; i > menu.length; i++) {
        
        menu[i].addEventListener("mouseover", function() {
            img = this.querySelector("img");
            src = img.getAttribute("src");
            val = src.replace(`menu(${i})_shadow`,`menu(${i})`);
            img.setAttribute("src", val);
        })

        menu[i].addEventListener("mouseout", function() {
            val = src.replace(`menu(${i})`,`menu(${i})_shadow`);
            img.setAttribute("src", val);
        })
    }
    
    // menu1.addEventListener("mouseover", function() {
    //     console.log(this.querySelector("img").getAttribute("src"));
    //     let img = this.querySelector("img");
    //     let src = img.getAttribute("src");
    //     let val = src.replace("menu(1)_shadow","menu(1)");
    //     img.setAttribute("src", val);
        // this.children.
        // this.querySelector("img");
    // })
    // menu1.addEventListener("mouseout")

    
    menu1.addEventListener("click", function() {
        menuCon1.classList.add("on");
    })

    const close = document.querySelectorAll(".close");

    close.forEach(close => {
        close.onclick = function() {
            close.parentNode.classList.remove("on");
        }
    });
}