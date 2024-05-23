let navbar = document.querySelector('.navbar');

document.querySelector('#menu-btn').onclick = () => {
    navbar.classList.toggle('active');
    searchForm.classList.remove('active');
    cartitem.classList.remove('active');
    register.classList.remove('active');
}


let searchForm = document.querySelector('.search-form');

document.querySelector('#search-btn').onclick = () => {
    searchForm.classList.toggle('active');
    navbar.classList.remove('active');
    cartitem.classList.remove('active');
    register.classList.remove('active');
}

let cartitem = document.querySelector('.cart-items-container');

document.querySelector('#shopping-cart-btn').onclick = () => {
    cartitem.classList.toggle('active');
    navbar.classList.remove('active');
    searchForm.classList.remove('active');
    register.classList.remove('active');
    
}

let register = document.querySelector('.register-form');

document.querySelector('#register-btn').onclick = () => {
    cartitem.classList.remove('active');
    navbar.classList.remove('active');
    searchForm.classList.remove('active');
    register.classList.toggle('active');
    
}


window.onscroll = () => {
    navbar.classList.remove('active');
    searchForm.classList.remove('active');
    cartitem.classList.remove('active');
    register.classList.remove('active');
}
