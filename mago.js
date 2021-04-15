// tela do personagem.

function magoDaEducacao() {
    elem = document.querySelector('#pagFase');
    elem.style.backgroundImage = "url('img/mago/mago1.png')";
    setTimeout(function() {
        escolha1 = alert("Clique em ok para avançar.");
        magoFaseincial()
    }, 3000)
}
// Começo do jogo.
function magoFaseincial() {
    elem = document.querySelector('#pagFase');
    elem.style.backgroundImage = "url('img/mago/fase1.png')";
    setTimeout(function() {
        escolha1 = prompt("Escolha o seu caminho.");
        if (escolha1 == 1) {
            setTimeout(function() {
                magoFase0b()
            }, 3000)
        } else if (escolha1 == 2) {
            setTimeout(function() {
                magoFase2()
            }, 3000)
        }

    }, 3000)
}
///
///
///
///
///
// Inicio da Fase 1 
function magoFase0b() {
    elem = document.querySelector('#pagFase');
    elem.style.backgroundImage = "url('img/mago/fase1sul.png')";
    setTimeout(function() {
        escolha1 = prompt("Escolha uma das opções.");
        if (escolha1 == 1) {
            setTimeout(function() {
                magogameover1()
            }, 3000)
        } else if (escolha1 == 2) {
            setTimeout(function() {
                magofase1b()
            }, 3000)
        }

    }, 3000)
}
// Caminho vitoria / fase 1
function magofase1b() {
    elem = document.querySelector('#pagFase');
    elem.style.backgroundImage = "url('img/mago/fase4.png')";
    setTimeout(function() {
        setTimeout(function() {
            escolha1 = alert("Avançar");
            magofase1c()
        }, 3000)


    }, 1500)
}

function magofase1c() {
    elem = document.querySelector('#pagFase');
    elem.style.backgroundImage = "url('img/mago/fase4.0.png')";
    setTimeout(function() {
        setTimeout(function() {
            escolha1 = alert("Você precisa derrotar os Reptilianos para poder desativar a bomba, Clique em Ok 20 vezes para derrotá-los.");
            magofase1d()
        }, 3000)


    }, 3000)
}

function magofase1d() {
    elem = document.querySelector('#pagFase');
    elem.style.backgroundImage = "url('img/mago/fase4.1.png')";
    setTimeout(function() {
        setTimeout(function() {
            combateeducar()
        }, 3000)


    }, 3000)
}

function combateeducar() {
    elem = document.querySelector('#pagFase');
    elem.style.backgroundImage = "url('img/mago/fase4.1.png')";
    setTimeout(function() {
        setTimeout(function() {
            while (luta < 20) {
                alert("Continuar atacando.");
                luta = luta + 1;
                alert(luta);
            }
            alert("Você derrotou os Reptlianos com sucesso.");
            magofase1vitoria()
        }, 3000)
    }, 3000)
}

function magofase1vitoria() {
    elem = document.querySelector('#pagFase');
    elem.style.backgroundImage = "url('img/mago/vitoriafase4.png')";
    setTimeout(function() {
        setTimeout(function() {
            escolha1 = alert("Parabéns, você conseguiu salvar o mundo!!");
            location.reload();
        }, 3000)


    }, 3000)
}
// Final vitoria / fase 1

// Caminho gamer over. / fase 1
function magogameover1() {
    document.write('<html><html lang="pt-br"><head><meta charset="UTF-8"><link rel="stylesheet" href="styles.css"><meta http-equiv="X-UA-Compatible" content="IE=edge"><meta name="viewport" content="width=device-width, initial-scale=1.0"><title>Document</title></head><body><div id="pagFase2"></div><button id="Start" onclick="escolhaDePersona()"></button><script src="index.js"></script><script src="mago.js"></script><script src="fada.js"></script><script src="lord.js"></script></body></body></html>')
    setTimeout(function() {
        escolha1 = alert("Você morreu, aperte ok para tentar novamente.");
        location.reload();
    }, 3000)
}
// Final gamer over. / fase 1
///
///
///
///
///
// Inicio da Fase 2 ////////
function magoFase2() {
    elem = document.querySelector('#pagFase');
    elem.style.backgroundImage = "url('img/mago/fase1norte.png')";
    setTimeout(function() {
        escolha1 = prompt("Escolha uma das opções.");
        if (escolha1 == 1) {
            setTimeout(function() {
                magofase2b()
            }, 3000)
        } else if (escolha1 == 2) {
            setTimeout(function() {
                magofase2a()
            }, 3000)
        }

    }, 3000)
}
// Caminho vitoria / fase 2
function magofase2b() {
    elem = document.querySelector('#pagFase');
    elem.style.backgroundImage = "url('img/mago/fase4.png')";
    setTimeout(function() {
        setTimeout(function() {
            escolha1 = alert("Avançar");
            magofase2c()
        }, 3000)


    }, 3000)
}

function magofase2c() {
    elem = document.querySelector('#pagFase');
    elem.style.backgroundImage = "url('img/mago/fase4.0.png')";
    setTimeout(function() {
        setTimeout(function() {
            escolha1 = alert("Você precisa derrotar os Reptilianos para poder desativar a bomba, Clique em Ok 20 vezes para derrotá-los.");
            magofase2d()
        }, 3000)


    }, 3000)
}

function magofase2d() {
    elem = document.querySelector('#pagFase');
    elem.style.backgroundImage = "url('img/mago/fase4.1.png')";
    setTimeout(function() {
        setTimeout(function() {
            combate()
        }, 3000)


    }, 3000)
}

function combate() {
    elem = document.querySelector('#pagFase');
    elem.style.backgroundImage = "url('img/mago/fase4.1.png')";
    setTimeout(function() {
        setTimeout(function() {
            while (luta < 20) {
                alert("Continue atacando");
                luta = luta + 1;
                alert(luta);
            }
            alert("Você derrotou os Reptlianos com sucesso.");
            magofase2vitoria()
        }, 3000)
    }, 3000)
}

function magofase2vitoria() {
    elem = document.querySelector('#pagFase');
    elem.style.backgroundImage = "url('img/mago/vitoriafase4.png')";
    setTimeout(function() {
        setTimeout(function() {
            alert("Você salvou o mundo.");
            location.reload();
        }, 3000)
    }, 3000)
}
// Final vitoria / fase 2

// Caminho gamer over. / fase 2
function magofase2a() {
    elem = document.querySelector('#pagFase');
    elem.style.backgroundImage = "url('img/mago/fase3.0.png')";
    setTimeout(function() {
        setTimeout(function() {
            combate2a()
        }, 3000)


    }, 3000)
}

function combate2a() {
    elem = document.querySelector('#pagFase');
    elem.style.backgroundImage = "url('img/mago/fase3.0.png')";
    setTimeout(function() {
        setTimeout(function() {
            while (luta < 100) {
                alert("Continue batendo até ele morrer.");
                luta = luta + 1;
                alert(luta);
            }
            magogameover2a()
        }, 3000)
    }, 3000)
}

function magogameover2a() {
    elem = document.querySelector('#pagFase');
    elem.style.backgroundImage = "url('img/mago/gameover2.png')";
    setTimeout(function() {
        escolha1 = alert("Você morreu, aperte ok para tentar novamente.");
        location.reload();
    }, 2000)
}
// Final gamer over. / fase 2