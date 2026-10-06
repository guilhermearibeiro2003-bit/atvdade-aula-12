document.getElementById("loginForm").addEventListener("submit", function(event) {

    event.preventDefault();

    let email = document.getElementById("email").value;
    let senha = document.getElementById("senha").value;
    let mensagem = document.getElementById("mensagem");

    if (email == "" || senha == "") {
        mensagem.innerHTML = "Preencha todos os campos!";
    } else {
        mensagem.innerHTML = "Login realizado!";
    }

});