window.addEventListener('load', () => {



    let navLinks = document.getElementsByClassName("nav-link");

    for (let i = 0; i < navLinks.length; i++) {
        navLinks[i].addEventListener("click", function () {
            let current = document.getElementsByClassName("nav-link active");
            current[0].className = current[0].className.replace(" nav-link active", "");
            this.className += " nav-link active";
            console.log("clicked")
        });
    }


    let btns = document.getElementsByClassName("about-link");

    for (let i = 0; i < btns.length; i++) {
        btns[i].addEventListener("click", function () {
            let current = document.getElementsByClassName("link-active");
            current[0].className = current[0].className.replace(" link-active", "");
            this.className += " link-active";
        });
    }


    let appbtn = document.getElementsByClassName("app-link");

    for (let i = 0; i < appbtn.length; i++) {
        appbtn[i].addEventListener("click", function () {
            let current = document.getElementsByClassName("app-active");
            current[0].className = current[0].className.replace(" app-active", "");
            this.className += " app-active";
        });
    }

});