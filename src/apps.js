var sidebar_button = document.querySelector(".side-bar-menu>svg");
var sidebar = document.querySelector(".side-bar-menu");
isEnable = false;
sidebar_button.addEventListener('click',
    function(){
        if  (isEnable == false){
            isEnable = true;
            sidebar.style.right='-300px';
        }else{
            sidebar.style.right='0px';
            isEnable = false;
        }
    }
)

var buttons = document.querySelectorAll('.side-bar-menu>button');

for(let i = 0; i<buttons.length; i++){
    buttons[i].addEventListener('click', function(){
        for(let index = 0; index < buttons.length; index++){
            // alert(buttons[index])
            buttons[index].removeAttribute("active");
        }
        buttons[i].setAttribute("active", true);
    })
}