let usuarioC = 'Bruno';
let senhaC = '12345';

let botaoEntrar = document.querySelector('#btn-entrar');

botaoEntrar.addEventListener("click", function (event) {

    event.preventDefault();

    let usuarioD = document.querySelector('#usuario').value;
    let senhaD = document.querySelector('#senha').value;

    if (usuarioD === usuarioC && senhaD === senhaC) {

        window.location.href = "curriculo.html";

    } else {

        alert('Acesso negado. Por favor, verifique os seus dados.');
        document.querySelector('#usuario').value = "";
        document.querySelector('#senha').value = "";
    }
});