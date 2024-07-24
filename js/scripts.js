/* Carousel */

let currentIndex = 0;

function updateCarousel() {
    const carousel = document.querySelector('.carousel');
    const items = document.querySelectorAll('.carousel-item');
    const itemWidth = items[0].offsetWidth;
    const totalItems = items.length;
    const visibleItems = Math.floor(carousel.offsetWidth / itemWidth);
    const maxIndex = totalItems - visibleItems;
    const offset = currentIndex * -itemWidth;
    carousel.style.transform = `translateX(${offset}px)`;

    // Desabilitar botões conforme a posição do índice atual
    document.querySelector('.carousel-button.prev').disabled = currentIndex === 0;
    document.querySelector('.carousel-button.next').disabled = currentIndex >= maxIndex;
}

function prevSlide() {
    currentIndex = Math.max(currentIndex - 1, 0);
    updateCarousel();
}

function nextSlide() {
    const items = document.querySelectorAll('.carousel-item');
    const itemWidth = items[0].offsetWidth;
    const carousel = document.querySelector('.carousel');
    const visibleItems = Math.floor(carousel.offsetWidth / itemWidth);
    const maxIndex = items.length - visibleItems;

    currentIndex = Math.min(currentIndex + 1, maxIndex);
    updateCarousel();
}

document.addEventListener('DOMContentLoaded', updateCarousel);
window.addEventListener('resize', updateCarousel);


/* Contato */

document.getElementById('contact-form').addEventListener('submit', async function (event) {
    event.preventDefault();
    const form = event.target;
    const data = new FormData(form);
    const action = form.action;
    const responseElement = document.getElementById('response');

    try {
        const response = await fetch(action, {
            method: 'POST',
            body: data,
            headers: {
                'Accept': 'application/json'
            }
        });
        if (response.ok) {
            responseElement.innerHTML = 'Mensagem enviada com sucesso!';
            form.reset();
        } else {
            responseElement.innerHTML = 'Falha ao enviar a mensagem.';
        }
    } catch (error) {
        responseElement.innerHTML = 'Ocorreu um erro ao enviar a mensagem.';
    }
});

