var personagem
var escolha1
var escolha2
var luta = 1;

function escolhaDePersona() {
    elem = document.querySelector('#Start')
    elem.style.display = ("none")
    elem = document.querySelector('#pagFase');
    elem.style.backgroundImage = "url('img/inicio/escolhadeps.png')";
    setTimeout(function() {
        while (true) {
            personagem = prompt("Escolha seu personagem digitando o numero correspondente.");
            if (personagem == 1) {
                magoDaEducacao()
                break;
            } else if (personagem == 2) {
                fadaDaVerdade()
                break;
            } else if (personagem == 3) {
                lordNey()
                break;
            } else {
                alert("Personsagem inválido");

            }
        }
    }, 1500)

}