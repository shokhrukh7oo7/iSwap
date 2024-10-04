const CONTENT_TOGGLER = document.querySelector('#main-body-content-toggler')
const MAIN_BODY_CONTENT = document.querySelector('#main-body-content')
const leftMenu = document.querySelector('.left-menu')
const mainContent = document.querySelector('.main-content')


console.log(CONTENT_TOGGLER)

CONTENT_TOGGLER.addEventListener('click', (e) => {
    console.log("clicked")
    leftMenu.classList.toggle('show-left-menu')
    mainContent.classList.toggle('show-left-menu')
})

// 
