const header = document.getElementById("link-div");
const btns = header.getElementsByClassName("about-link");
for (let i = 0; i < btns.length; i++) {
    btns[i].addEventListener("click", function () {
        let current = document.getElementsByClassName("link-active");
        current[0].className = current[0].className.replace("link-active", "");
        this.className += " link-active";
    });
}

// const custom = document.getElementById("custom-ul");
const custom_btns = getElementsByClassName("about-links");
for (let i = 0; i < btns.length; i++) {
    btns[i].addEventListener("click", function () {
        let current = document.getElementsByClassName("applications-active");
        current[0].className = current[0].className.replace("applications-active", "");
        this.className += "applications-active";
        console.log("I am cliked")
    });
}

