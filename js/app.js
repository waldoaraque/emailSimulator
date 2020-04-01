//VARS
const email = document.getElementById('email');
const issue = document.getElementById('asunto');
const message = document.getElementById('mensaje');
const sendBtn = document.getElementById('enviar');

//EVENT LISTENERS

function eventListeners() {
    document.addEventListener('DOMContentLoaded', getApp);
}




//FUNCTIONS
function getApp() {
    sendBtn.disabled = true;
}
