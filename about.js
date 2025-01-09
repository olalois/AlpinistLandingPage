let hambugerNav = document.querySelector('.hambuger')
let navBar = document.querySelector('.nav-elements')
let close = document.querySelector(".close")


hambugerNav.addEventListener('click', function(){
    hambugerNav.style.display = "none"
    navBar.style.display = "flex"
});

close.addEventListener('click', function(){
    hambugerNav.style.display = "flex"
    navBar.style.display = "none"
})