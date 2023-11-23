// window.addEventListener('load', () => {

    
    // const header = document.getElementById("myTab");
    // const btns = document.getElementsByClassName("about-link");
    // for (let i = 0; i < btns.length; i++) {
    //     btns[i].addEventListener("click", () => {
    //         let current = document.getElementsByClassName("link-active");
    //         current[0].className = current[0].className.replace(" link-active", "");
    //         this.className += " link-active";
    //     });
    // }
    
    const app_btns = document.getElementsByClassName("app-link");
    for (let i = 0; i < app_btns.length; i++) {
            app_btns[i].addEventListener("click", () => {
                    let current = document.getElementsByClassName("apps-active");
                    // current[0].className = current[0].className.replace(" apps-active", " ");
                    this.className += " apps-active";
                });
            }
            
            
        // });