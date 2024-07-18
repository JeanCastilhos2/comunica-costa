document.getElementById('contact-form').addEventListener('submit', async function(event) {
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

/* function scrollLeft() {
    const carousel = document.querySelector('.carousel');
    carousel.scrollBy({ left: -150, behavior: 'smooth' });
}

function scrollRight() {
    const carousel = document.querySelector('.carousel');
    carousel.scrollBy({ left: 0, behavior: 'smooth' });
}
 */