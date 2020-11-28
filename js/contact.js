document.addEventListener('DOMContentLoaded', () => {
    const name = document.getElementById('contactMeName');
    const email = document.getElementById('contactMeEmail');
    const message = document.getElementById('contactMeMessage');
    const charCounter = document.getElementById('charCounter');
    const submit = document.getElementById('submitForm');

    name.addEventListener('change', e => {
        validateName(e);
    });
    name.addEventListener('keyup', e => {
        validateName(e);
    });
    email.addEventListener('change', e => {
        validateEmail(e);
    });
    email.addEventListener('keyup', e => {
        validateEmail(e);
    });
    message.addEventListener('change', e => {
        validateMessage(e);
    });
    message.addEventListener('keyup', e => {
        validateMessage(e);
    });
    submit.addEventListener('click', e => {
        e.preventDefault();
        if (isContactFormValid()) {
            console.log('Send e-mail to me');
            bulmaToast.toast({
                message: 'Success!',
                type: 'is-success',
                position: 'center',
            });
            resetForm();
        } else {
            console.log('Oooops');
            bulmaToast.toast({
                message: 'Failed!',
                type: 'is-danger',
                position: 'center',
            });
        }
    });

    function validateName(event) {
        if (isName(name.value)) {
            name.classList.add('is-success');

        } else {
            name.classList.remove('is-success');
        }
    }

    function validateEmail(event) {
        if (isEmail(email.value)) {
            email.classList.add('is-success');
            email.classList.remove('is-danger');
        } else {
            email.classList.remove('is-success');
            email.classList.add('is-danger');
        }
    }

    function validateMessage(event) {
        charCounter.textContent = message.value.length;
        if (isMessage(message.value)) {
            message.classList.add('is-success');
            message.classList.remove('is-danger');
        } else {
            message.classList.add('is-danger');
            message.classList.remove('is-success');
        }
    }

    function isName(name) {
        return name.length >= 3;
    }

    function isEmail(email) {
        return email.length >= 3 && /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-]+$/.test(email);
    }

    function isMessage(message) {
        return message.length > 0 && message.length < 300;
    }

    function isContactFormValid(event) {
        return isName(name.value) && isEmail(email.value) && isMessage(message.value);
    }

    function resetForm() {
        name.value = '';
        name.classList.remove('is-success');
        name.classList.remove('is-danger');
        email.value = '';
        email.classList.remove('is-success');
        email.classList.remove('is-danger');
        message.value = '';
        message.classList.remove('is-success');
        message.classList.remove('is-danger');
    }
});