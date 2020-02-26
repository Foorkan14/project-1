document.addEventListener('DOMContentLoaded', event=>{
    const app = firebase.app()
})

function createAccount(email, password){
    firebase.auth().createUserWithEmailAndPassword(email, password).catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        // ...
      });
}

let createAccountBtn = document.querySelector('#submit')


createAccountBtn.addEventListener('click', (e)=>{
    e.preventDefault()
    let emailInput = document.querySelector('#email')
    let email = emailInput.value
    let passwordInput = document.querySelector('#password')
    let password = passwordInput.value
    createAccount(email, password);

    firebase.auth().onAuthStateChanged(function(user) {
        if (user) {
            window.location.href='index.html'
        } else {
            pass;
        }
    });

})