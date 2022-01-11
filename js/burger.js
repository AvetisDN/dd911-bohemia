(function() {

    const burgerBtn = document.querySelector('#menu-burger')
    const overlay = document.querySelector('#navigation-overlay')
    const drawer = document.querySelector('#navigation-drawer')

    burgerBtn.addEventListener('click', () => {
        overlay.classList.toggle('show')
        drawer.classList.toggle('show')
    })

    overlay.addEventListener('click', () => {
        overlay.classList.remove('show')
        drawer.classList.remove('show')
    })

})();