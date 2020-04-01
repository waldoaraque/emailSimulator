//VARS
const email = document.getElementById('email');
const issue = document.getElementById('asunto');
const message = document.getElementById('mensaje');
const sendBtn = document.getElementById('enviar');

//EVENT LISTENERS
eventListeners();

function eventListeners() {
    document.addEventListener('DOMContentLoaded', getApp);

    email.addEventListener('blur', validate);
    issue.addEventListener('blur', validate);
    message.addEventListener('blur', validate);
}



//FUNCTIONS
function getApp() {
    sendBtn.disabled = true;
}

function validate() {

    validateLong(this);

    if (this.type === 'email') {
        validateEmail(this);
    }

    let errors = document.querySelectorAll('.error');

    if (email.value !== '' && issue.value !== '' && message.value !== '') {
        if (errors.length === 0) {
            sendBtn.disabled = false;
        }
    } 
}

function validateLong(data) {
    if (data.value.length > 0) {
        data.style.borderBottomColor = 'green';
        data.classList.remove('error');
    } else {
        data.style.borderBottomColor = 'red';
        data.classList.add('error');
    }
}

function validateEmail(data) {
    let m = data.value;
    
    if (m.indexOf('@') !== -1) {
        data.style.borderBottomColor = 'green';
        data.classList.remove('error');
    } else {
        data.style.borderBottomColor = 'red';
        data.classList.add('error');
    }
}
