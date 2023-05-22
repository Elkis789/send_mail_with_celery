const form = document.getElementById('form')
const subjectInput = document.getElementById('subject')
const valid_subject = document.getElementById('valid-subject')
const emailInput = document.getElementById('email')
const valid_email = document.getElementById('valid-email')
const messageInput = document.getElementById('message')
const valid_message = document.getElementById('valid-message')
const regexGmail = /^[a-zA-Z0-9._%+-]+@(gmail|icloud)\.(com|fr)$/

form.addEventListener('submit', function (e) {
    if(subjectInput.value === ''){
        e.preventDefault()
        showErrorMessage(valid_subject, 'Champs vide !')
    }
    else if (subjectInput.value.length > 255){
        e.preventDefault()
        showErrorMessage(valid_subject, 'Trop long, maximum 255 caractères !')
    }
    else{
        valid_subject.style.display = 'none'
    }

    if(emailInput.value === ''){
        e.preventDefault()
        showErrorMessage(valid_email, 'Champs vide !')
    }
    else if (emailInput.value.length > 255){
        e.preventDefault()
        showErrorMessage(valid_email, 'Trop long, maximum 255 caractères !')
    }
    else if(!(emailInput.value.match(regexGmail))){
        e.preventDefault()
        showErrorMessage(valid_email, 'Format invalide !')
    }
    else {
        valid_email.style.display = 'none'
    }
    if(messageInput.value === ''){
        e.preventDefault()
        showErrorMessage(valid_message, 'Champs vide !')
    }
    else if(messageInput.value.length > 100000){
        e.preventDefault()
        showErrorMessage(valid_message, 'Trop long !')
    }
    else{
        valid_message.style.display = 'none'
    }
});

function showErrorMessage(element, message) {
    element.style.display = 'block'
    element.innerHTML = message
    element.style.color = 'red'
}