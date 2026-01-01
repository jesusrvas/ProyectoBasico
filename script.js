document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('contactForm');
    const feedback = document.getElementById('formFeedback');

    form.addEventListener('submit', (e) => {
        e.preventDefault(); // Evita que la página se recargue

        // Simulación de envío
        const btn = document.getElementById('btnEnviar');
        btn.textContent = 'Enviando...';
        btn.style.opacity = '0.7';

        setTimeout(() => {
            form.classList.add('hidden');
            feedback.classList.remove('hidden');
            feedback.innerHTML = `
                <h3>¡Gracias por escribir, Jesús te contactará pronto!</h3>
                <p>Tu mensaje ha sido recibido con éxito.</p>
                <button onclick="location.reload()" style="width: auto; margin-top:10px;">Enviar otro</button>
            `;
        }, 1500);
    });

    // Efecto simple al hacer scroll en la navegación
    window.addEventListener('scroll', () => {
        const nav = document.querySelector('nav');
        if (window.scrollY > 50) {
            nav.style.padding = '10px 50px';
            nav.style.borderBottom = '1px solid #333';
        } else {
            nav.style.padding = '20px 50px';
            nav.style.borderBottom = 'none';
        }
    });
});