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