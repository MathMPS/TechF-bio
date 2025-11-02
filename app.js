document.querySelectorAll('.comprar-btn').forEach(btn => {
    btn.addEventListener('click', () => {
        alert('Produto adicionado ao carrinho! 🛒');
    });
});

document.querySelector('.cta-btn').addEventListener('click', () => {
    window.scrollTo({
        top: document.querySelector('#produtos').offsetTop,
        behavior: 'smooth'
    });
});
