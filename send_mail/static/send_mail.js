const form = document.getElementById('form');
const subjectInput = document.getElementById('subject');
const emailInput = document.getElementById('email');
const messageInput = document.getElementById('message');
const regexGmail = /^[a-zA-Z0-9._%+-]+@(gmail|icloud)\.(com|fr)$/;

form.addEventListener('submit', function (e) {
    e.preventDefault();

    validateInput(subjectInput, 'Champ vide !', 255);
    validateInput(emailInput, 'Champ vide !', 254, regexGmail);
    validateInput(messageInput, 'Champ vide !', 100000);
});

function validateInput(input, errorMessage, maxLength, regex) {
    const validElement = document.getElementById(`valid-${input.id}`);
    const value = input.value.trim();

    if (value === '') {
        showErrorMessage(validElement, errorMessage);
    } else if (value.length > maxLength) {
        showErrorMessage(validElement, `Trop long, maximum ${maxLength} caractères`);
    } else if (regex && !value.match(regex)) {
        showErrorMessage(validElement, 'Format invalide !');
    } else {
        validElement.style.display = 'none';
    }
}

function showErrorMessage(element, message) {
    element.style.display = 'block';
    element.innerHTML = message;
    element.style.color = 'red';
}