document.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector('.contact-form form');
    
    form.addEventListener('submit', (event) => {
        event.preventDefault();
        
        let valid = true;
        const inputs = form.querySelectorAll('input[required], select[required]');
        
        inputs.forEach(input => {
            if (!input.value.trim()) {
                valid = false;
                input.classList.add('invalid');
                alert(`El campo ${input.previousElementSibling.textContent} es obligatorio.`);
            } else {
                input.classList.remove('invalid');
            }

            // Validación específica para email
            if (input.type === 'email' && !validateEmail(input.value)) {
                valid = false;
                input.classList.add('invalid');
                alert('Por favor, introduce una dirección de correo electrónico válida.');
            }

            // Validación específica para el teléfono (números)
            if (input.type === 'tel' && !validatePhone(input.value)) {
                valid = false;
                input.classList.add('invalid');
                alert('Por favor, introduce un número de teléfono válido.');
            }
        });
        
        if (valid) {
            alert('Formulario enviado con éxito!');
            form.submit();
        }
    });

    function validateEmail(email) {
        const re = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
        return re.test(email);
    }

    function validatePhone(phone) {
        const re = /^[0-9]{10,15}$/;
        return re.test(phone);
    }
});
