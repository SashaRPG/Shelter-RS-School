'use strict'

function activateMenu() {
    const button = document.querySelector('.burger-menu');
    const overlay = document.querySelector('.overlay');

    function toggleActiveClass(classNameBlock,toggleClassName) {
        const block = document.querySelector(classNameBlock);
        if(block.classList.contains(toggleClassName)){
            block.classList.remove(toggleClassName);
        } else{
            block.classList.add(toggleClassName);
        } 
    }
    button.addEventListener('click', () => {
        toggleActiveClass('.navigation', 'navigation-active');
        toggleActiveClass('.burger-menu', 'burger-menu-active');
        toggleActiveClass('.overlay', 'active');
        toggleActiveClass('.shelter-logo', 'active');
    })
    overlay.addEventListener('click', (e) => {
        toggleActiveClass('.navigation', 'navigation-active');
        toggleActiveClass('.burger-menu', 'burger-menu-active');
        toggleActiveClass('.overlay', 'active');
    })
}
activateMenu()

