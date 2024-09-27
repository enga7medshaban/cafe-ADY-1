// script.js

function toggleMenu() {
    const sidebar = document.querySelector('.sidebar');
    const main = document.querySelector('main');
    sidebar.classList.toggle('active');
    main.classList.toggle('sidebar-active');
}

function nextImage(imgElement) {
    const current = imgElement.parentElement;
    const index = parseInt(current.getAttribute('data-index'));
    const items = document.querySelectorAll('.drink-item');

    items.forEach((item, i) => {
        item.style.display = (i === (index + 1) % items.length) ? 'block' : 'none';
    });
}