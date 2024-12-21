const btn_menu = document.querySelector(".btn_menu")
const __topnavbar__menu = document.querySelector(".__topnavbar__menu")
const topnav__links = document.querySelector(".topnav__links")
const btn_close = document.querySelector(".btn_close")
const icon = document.querySelector("#icon")
const body = document.querySelector("body")



btn_menu.addEventListener(('click'),()=>{
    __topnavbar__menu.classList.toggle("active")
    topnav__links.classList.toggle("active")
    btn_menu.classList.toggle("active")
    icon.classList.toggle("fa-xmark")
    body.classList.toggle("locked")
    
    
})
