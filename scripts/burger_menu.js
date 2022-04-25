'use strict'

function toggleActiveClass(classNameBlock,toggleClassName) {
    const block = document.querySelector(classNameBlock);
    if (block.classList.contains(toggleClassName)){
        block.classList.remove(toggleClassName);
    } else block.classList.add(toggleClassName)
}

function deleteActiveClass(classNameBlock,toggleClassName) {
    const block = document.querySelector(classNameBlock);
    if (block.classList.contains(toggleClassName)){
        block.classList.remove(toggleClassName);
    }
} 

function addActiveClass(classNameBlock,toggleClassName) {
    const block = document.querySelector(classNameBlock);
    if (!block.classList.contains(toggleClassName)){
        block.classList.add(toggleClassName);
    } 
}

function activateMenu() {
    const button = document.querySelector('.burger-menu');
    const overlay = document.querySelector('.overlay');
    const nav_items = document.querySelectorAll('.nav-list a');
    button.addEventListener('click', () => {
        toggleActiveClass('.navigation', 'navigation-active');
        toggleActiveClass('.burger-menu', 'burger-menu-active');
        toggleActiveClass('.overlay', 'active');
        toggleActiveClass('body', 'active');
    })
    overlay.addEventListener('click', (e) => {
        deleteActiveClass('.navigation', 'navigation-active');
        deleteActiveClass('.burger-menu', 'burger-menu-active');
        deleteActiveClass('.overlay', 'active');  
        deleteActiveClass('body', 'active'); 
        closeModal();     
    })
    nav_items.forEach(item => item.addEventListener('click', () => {
        deleteActiveClass('.navigation', 'navigation-active');
        deleteActiveClass('.burger-menu', 'burger-menu-active');
        deleteActiveClass('.overlay', 'active');  
        deleteActiveClass('body', 'active'); 
    }))
}
activateMenu();