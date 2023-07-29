$(document).ready(function() {

    $('#phone').mask('(00) 00000-0000')

    $('#cpf').mask('000.000.000-00', {reverse: true});

    $('#cep').mask('00000-000');

    $('#registrationForm').submit(function(e) {
        e.preventDefault();
        console.log('Formulário enviado!');
    });
});