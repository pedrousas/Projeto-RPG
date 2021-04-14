// tela do personagem.

function fadaDaVerdade() {
    elem = document.querySelector('#pagFase');
    elem.style.backgroundImage = "url('img/fada/fada1.png')";
    setTimeout(function() {
        escolha1 = alert("Clique em ok para avançar.");
        fadaFaseincial()
    }, 1500)
}
// Começo do jogo.
function fadaFaseincial() {
    elem = document.querySelector('#pagFase');
    elem.style.backgroundImage = "url('img/fada/fase1.png')";
    setTimeout(function() {
        escolha1 = prompt("Escolha o seu caminho.");
        if (escolha1 == 1) {
            setTimeout(function() {
                fadaFase0b()
            }, 1500)
        } else if (escolha1 == 2) {
            setTimeout(function() {
                fadaFase2()
            }, 1500)
        }

    }, 1500)
}
///
///
///
///
///
// Inicio da Fase 1 
function fadaFase0b() {
    elem = document.querySelector('#pagFase');
    elem.style.backgroundImage = "url('img/fada/fase1.0.png')";
    setTimeout(function() {
        escolha1 = prompt("Escolha uma das opções.");
        if (escolha1 == 1) {
            setTimeout(function() {
                fadagameover1()
            }, 1500)
        } else if (escolha1 == 2) {
            setTimeout(function() {
                fadafase1b()
            }, 1500)
        }

    }, 1500)
}
// Caminho vitoria / fase 1
function fadafase1b() {
    elem = document.querySelector('#pagFase');
    elem.style.backgroundImage = "url('img/fada/fase4.png')";
    setTimeout(function() {
        setTimeout(function() {
            escolha1 = alert("Avançar");
            fadafase1c()
        }, 1500)


    }, 1500)
}

function fadafase1c() {
    elem = document.querySelector('#pagFase');
    elem.style.backgroundImage = "url('img/fada/fase4.0.png')";
    setTimeout(function() {
        setTimeout(function() {
            escolha1 = alert("Você precisa derrotar os Reptilianos para poder desativar a bomba, Clique em Ok 20 vezes para derrotá-los.");
            magofase1d()
        }, 1500)


    }, 1500)
}

function fadafase1d() {
    elem = document.querySelector('#pagFase');
    elem.style.backgroundImage = "url('img/fada/fase4.0.png')";
    setTimeout(function() {
        setTimeout(function() {
            combatemagia()
        }, 1500)


    }, 1500)
}

function combatemagia() {
    elem = document.querySelector('#pagFase');
    elem.style.backgroundImage = "url('img/fada/fase4.1.png')";
    setTimeout(function() {
        setTimeout(function() {
            while (luta < 20) {
                alert("Continuar atacando.");
                luta = luta + 1;
                alert(luta);
            }
            alert("Você derrotou os Reptlianos com sucesso.");
            fadafase1vitoria()
        }, 1500)
    }, 1500)
}

function fadafase1vitoria() {
    elem = document.querySelector('#pagFase');
    elem.style.backgroundImage = "url('img/fada/vitoriafase4.png')";
    setTimeout(function() {
        setTimeout(function() {
            escolha1 = alert("Parabéns, você conseguiu salvar o mundo!!");
            location.reload();
        }, 1500)


    }, 1500)
}
// Final vitoria / fase 1

// Caminho gamer over. / fase 1
function fadagameover1() {
    elem = document.querySelector('#pagFase');
    elem.style.backgroundImage = "url('img/fada/gameoverfada.png')";
    setTimeout(function() {
        escolha1 = alert("Você morreu, aperte ok para tentar novamente.");
        location.reload();
    }, 1500)
}
// Final gamer over. / fase 1
///
///
///
///
///
// Inicio da Fase 2 ////////
function fadaFase2() {
    elem = document.querySelector('#pagFase');
    elem.style.backgroundImage = "url('img/fada/fase2.png')";
    setTimeout(function() {
        escolha1 = prompt("Escolha uma das opções.");
        if (escolha1 == 1) {
            setTimeout(function() {
                fadafase2b()
            }, 1500)
        } else if (escolha1 == 2) {
            setTimeout(function() {
                fadafase2a()
            }, 1500)
        }

    }, 1500)
}
// Caminho vitoria / fase 2
function fadafase2b() {
    elem = document.querySelector('#pagFase');
    elem.style.backgroundImage = "url('img/fada/fase4.png')";
    setTimeout(function() {
        setTimeout(function() {
            escolha1 = alert("Avançar");
            fadafase2c()
        }, 1500)


    }, 1500)
}

function fadafase2c() {
    elem = document.querySelector('#pagFase');
    elem.style.backgroundImage = "url('img/fada/fase4.0.png')";
    setTimeout(function() {
        setTimeout(function() {
            escolha1 = alert("Você precisa derrotar os Reptilianos para poder desativar a bomba, Clique em Ok 20 vezes para derrotá-los.");
            fadafase2d()
        }, 1500)


    }, 1500)
}

function fadafase2d() {
    elem = document.querySelector('#pagFase');
    elem.style.backgroundImage = "url('img/fada/fase4.0.png')";
    setTimeout(function() {
        setTimeout(function() {
            fadacombate()
        }, 1500)


    }, 1500)
}

function fadacombate() {
    elem = document.querySelector('#pagFase');
    elem.style.backgroundImage = "url('img/fada/fase4.1.png')";
    setTimeout(function() {
        setTimeout(function() {
            while (luta < 20) {
                alert("Continuar atacando.");
                luta = luta + 1;
                alert(luta);
            }
            alert("Você derrotou os Reptlianos com sucesso.");
            fadafase2vitoria()
        }, 1500)
    }, 1500)
}

function fadafase2vitoria() {
    elem = document.querySelector('#pagFase');
    elem.style.backgroundImage = "url('img/fada/vitoriafase4.png')";
    setTimeout(function() {
        setTimeout(function() {
            alert("Você salvou o mundo.");
            location.reload();
        }, 1500)
    }, 1500)
}
// Final vitoria / fase 2

// Caminho gamer over. / fase 2 - pronto
function fadafase2a() {
    elem = document.querySelector('#pagFase');
    elem.style.backgroundImage = "url('img/fada/fase2.0.png')";
    setTimeout(function() {
        setTimeout(function() {
            fadacombate2a()
        }, 1500)


    }, 1500)
}

function fadacombate2a() {
    elem = document.querySelector('#pagFase');
    elem.style.backgroundImage = "url('img/fada/fase2.0.png')";
    setTimeout(function() {
        setTimeout(function() {
            while (luta < 3) {
                alert("Continue jogando sua magia até o lobo morrer.");
                luta = luta + 1;
                alert(luta);
            }
            fadagameover2a()
        }, 1500)
    }, 1500)
}

function fadagameover2a() {
    elem = document.querySelector('#pagFase');
    elem.style.backgroundImage = "url('img/fada/fase2.1.png')";
    setTimeout(function() {
        escolha1 = alert("Você matou o lobo, ele te ajudaria a salvar o mundo. Aperte ok para tentar novamente.");
        location.reload();
    }, 1500)
}
// Final gamer over. / fase 2 - pronto