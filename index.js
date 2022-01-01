const menuBtn = document.querySelector(".menu-btn")  ;
const lines = document.querySelectorAll(".lines")
const menu = document.querySelector(".menu") 
const menuUl = document.querySelector(".menuul") 
const pics = document.querySelector(".pics")
const menuList = document.querySelectorAll(".list") 


let showMe = false;


menuBtn.addEventListener("click", toggleUl);

function toggleUl(){
    if(!showMe){
        let showMe = true;
        menuBtn.classList.toggle("close");
        lines.forEach(line => {
            line.classList.toggle("close")
        });
        menu.classList.toggle("show");
        menuUl.classList.toggle("show");
        pics.classList.toggle("show")
        menuList.forEach(list => {
            list.classList.toggle("show")
        });

    } else if(showMe){
        let showMe = false;
        menuBtn.classList.remove("close");
        lines.forEach(line => {
            line.classList.toggle("close")
        });
        menuPics.classList.remove("show");
        menuUl.classList.remove("show");
        menuList.forEach(list => {
            list.classList.remove("show")
        });

    }
}