document.addEventListener('DOMContentLoaded', event=>{
    const app = firebase.app()
    firebase.auth().onAuthStateChanged(function(user) {
        if (user) {
            window.history.back();
        } else {
            let loginButton = document.querySelector('#submit')
            loginButton.addEventListener('click', (e)=>{
                alert('not an authorized account')
            })
        }
    });
})

function googleLogin(){
    var provider = new firebase.auth.GoogleAuthProvider();
    firebase.auth().signInWithPopup(provider).then(function(result) {
        var token = result.credential.accessToken;
        var user = result.user;
    }).catch(function(error) {
        var errorCode = error.code;
        var errorMessage = error.message;
        var email = error.email;
        var credential = error.credential;
    });
}

function create_email_password(email, password){
    firebase.auth().createUserWithEmailAndPassword(email, password).catch(function(error) {
        var errorCode = error.code;
        var errorMessage = error.message;
    });
}

function signIn_email_password(email, password){
    firebase.auth().signInWithEmailAndPassword(email, password).catch(function(error) {
        var errorCode = error.code;
        var errorMessage = error.message;
    });
}

let googleButton = document.querySelector('#google');
let createButton = document.querySelector('#create')

googleButton.addEventListener('click', (e)=>{
    googleLogin();
})

createButton.addEventListener('click', (e)=>{
    e.preventDefault();
    window.location.href='createlogin.html';
})

//adding stuff