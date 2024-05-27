document.addEventListener('DOMContentLoaded', function() {
    const submitButton = document.getElementById('submitButton');

    // Función para mostrar mensajes de error
    function showError(message, element) {
        element.textContent = message;
        element.style.display = 'block';
    }

    // Función para ocultar mensajes de error
    function hideError(element) {
        element.style.display = 'none';
    }

    // Validación del formulario
    submitButton.addEventListener('click', function(event) {
        event.preventDefault();
        let valid = true;

        // Datos Personales
        const fullnameInput = document.querySelector('input[name="fullname"]');
        const lastnameInput = document.querySelector('input[name="lastname"]');
        const emailInput = document.querySelector('input[name="email"]');
        const phoneInput = document.querySelector('input[name="phone"]');
        const DNIInput = document.querySelector('input[name="DNI"]');
        const fechaInput = document.querySelector('input[name="fecha"]');
        const affairInput = document.querySelector('input[name="affair"]');

        // Domicilio
        const ciudadInput = document.querySelector('input[name="ciudad"]');
        const calleInput = document.querySelector('input[name="calle"]');
        const NroInput = document.querySelector('input[name="Nro"]');
        const DptoInput = document.querySelector('input[name="Dpto"]');
        const cpInput = document.querySelector('input[name="c.p"]');
        const cvInput = document.querySelector('input[name="c.v"]');

        // Disponibilidad Horaria
        const turnoInput = document.querySelector('select[class="custom"]');

        // Ocultar todos los errores al inicio
        document.querySelectorAll('.error').forEach(error => hideError(error));

        // Validaciones de Datos Personales
        if (fullnameInput.value.trim() === '') {
            valid = false;
            showError('Por favor, ingrese su nombre.', document.getElementById('fullnameError'));
        }

        if (lastnameInput.value.trim() === '') {
            valid = false;
            showError('Por favor, ingrese su apellido.', document.getElementById('lastnameError'));
        }

        if (emailInput.value.trim() === '' || !isValidEmail(emailInput.value)) {
            valid = false;
            showError('Por favor, ingrese un email válido.', document.getElementById('emailError'));
        }

        if (phoneInput.value.trim() === '') {
            valid = false;
            showError('Por favor, ingrese su número de celular.', document.getElementById('phoneError'));
        }

        if (isNaN(phoneInput.value.trim())) { // Comprueba si el número de teléfono contiene solo dígitos
            valid = false;
            showError('Por favor, ingrese solo números en el campo celular.', document.getElementById('phoneError'));
        }

        if (DNIInput.value.trim() === '') {
            valid = false;
            showError('Por favor, ingrese su D.N.I.', document.getElementById('DNIError'));
        }

        if (isNaN(DNIInput.value.trim())) { // Comprueba si el DNI contiene solo dígitos
            valid = false;
            showError('Por favor, ingrese solo números en el campo D.N.I.', document.getElementById('DNIError'));
        }

        if (fechaInput.value.trim() === '') {
            valid = false;
            showError('Por favor, ingrese su fecha de nacimiento.', document.getElementById('fechaError'));
        }

        if (affairInput.value.trim() === '') {
            valid = false;
            showError('Por favor, ingrese su nivel de estudios.', document.getElementById('affairError'));
        }

        // Validaciones de Domicilio
        if (ciudadInput.value.trim() === '') {
            valid = false;
            showError('Por favor, ingrese su ciudad.', document.getElementById('ciudadError'));
        }

        if (calleInput.value.trim() === '') {
            valid = false;
            showError('Por favor, ingrese su calle.', document.getElementById('calleError'));
        }

        if (isNaN(NroInput.value.trim())) { // Comprueba si el número de domicilio contiene solo dígitos
            valid = false;
            showError('Por favor, ingrese solo números en el campo número.', document.getElementById('NroError'));
        }

        if (DptoInput.value.trim() === '') {
            valid = false;
            showError('Por favor, ingrese su departamento o piso.', document.getElementById('DptoError'));
        }

        if (cpInput.value.trim() === '') {
            valid = false;
            showError('Por favor, ingrese su código postal.', document.getElementById('cpError'));
        }

        if (isNaN(cpInput.value.trim())) { // Comprueba si el código postal contiene solo dígitos
            valid = false;
            showError('Por favor, ingrese solo números en el campo código postal.', document.getElementById('cpError'));
        }

        if (cvInput.value.trim() === '') {
            valid = false;
            showError('Por favor, adjunte su C.V.', document.getElementById('cvError'));
        }

        // Validación de Disponibilidad Horaria
        if (turnoInput.value === '') {
            valid = false;
            showError('Por favor, seleccione un turno.', document.getElementById('turnoError'));
        }

        if (valid) {
            alert('Formulario enviado con éxito!');
            // Aquí puedes enviar el formulario o realizar otras acciones necesarias
        }
    });

    // Función para validar el formato de correo electrónico
    function isValidEmail(email) {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    }
});
