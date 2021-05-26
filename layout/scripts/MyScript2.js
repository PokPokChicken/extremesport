const menu = document.querySelector(".burger");
const navbar = document.querySelector(".navbar");

menu.addEventListener("click", function() {
    if(navbar === document.querySelector(".navbar.selected")) {
        navbar.classList.remove('selected');
    } else {
        navbar.classList.add('selected');
    }
     
});

menu.addEventListener("click", function() {
    if(menu === document.querySelector(".burger.selected")) {
        menu.classList.remove('selected');
    } else {
        menu.classList.add('selected');
    }
});


