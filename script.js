// CODE FOR DARK/LIGHT THEME
const toggler = document.querySelector("#theme-toggle");
toggler.addEventListener("change", function(){
    if(this.checked){
        document.body.classList.add("dark");
    }
    else{
        document.body.classList.remove("dark");
    }
})

// CODE FOR MENU TOGGLE
const menuOpen = document.getElementById("menu-open");
const menuClose = document.getElementById("menu-close");
const sidebar = document.querySelector("aside");
menuOpen.addEventListener("click", function(){
    sidebar.style.left="0";
})
menuClose.addEventListener("click", function(){
    sidebar.style.left="-100%";
})
