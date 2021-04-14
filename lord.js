// tela do personagem.

function lordNey() {
    elem = document.querySelector('#pagFase');
    elem.style.backgroundImage = "url('img/lord/lord.png')";
    setTimeout(function() {
        escolha1 = alert("Clique em ok para avançar.");
        lordFaseincial()
    }, 1500)
}
// Começo do jogo.
function lordFaseincial() {
    elem = document.querySelector('#pagFase');
    elem.style.backgroundImage = "url('img/lord/fase1.png')";
    setTimeout(function() {
        escolha1 = prompt("Escolha o seu caminho.");
        if (escolha1 == 1) {
            setTimeout(function() {
                lordFase0b()
            }, 1500)
        } else if (escolha1 == 2) {
            setTimeout(function() {
                lordFase2()
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
function lordFase0b() {
    elem = document.querySelector('#pagFase');
    elem.style.backgroundImage = "url('img/lord/fase1predios.png')";
    setTimeout(function() {
        escolha1 = prompt("Escolha uma das opções.");
        if (escolha1 == 2) {
            setTimeout(function() {
                lordgameover1()
            }, 1500)
        } else if (escolha1 == 1) {
            setTimeout(function() {
                lordfase1b()
            }, 1500)
        }

    }, 1500)
}
// Caminho vitoria / fase 1
function lordfase1b() {
    elem = document.querySelector('#pagFase');
    elem.style.backgroundImage = "url('img/lord/fase4.png')";
    setTimeout(function() {
        setTimeout(function() {
            escolha1 = alert("Avançar");
            fadafase1c()
        }, 1500)


    }, 1500)
}

function lordfase1c() {
    elem = document.querySelector('#pagFase');
    elem.style.backgroundImage = "url('img/lord/fase4.0.png')";
    setTimeout(function() {
        setTimeout(function() {
            escolha1 = alert("Você precisa derrotar os Reptilianos para poder desativar a bomba, Clique em Ok 20 vezes para derrotá-los.");
            magofase1d()
        }, 1500)


    }, 1500)
}

function lordfase1d() {
    elem = document.querySelector('#pagFase');
    elem.style.backgroundImage = "url('img/lord/fase4.0.png')";
    setTimeout(function() {
        setTimeout(function() {
            combatemagia()
        }, 1500)


    }, 1500)
}

function combatemagia() {
    elem = document.querySelector('#pagFase');
    elem.style.backgroundImage = "url('img/lord/fase4.1.png')";
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

function lordfase1vitoria() {
    elem = document.querySelector('#pagFase');
    elem.style.backgroundImage = "url('img/lord/vitoriafase4.png')";
    setTimeout(function() {
        setTimeout(function() {
            escolha1 = alert("Parabéns, você conseguiu salvar o mundo!!");
            location.reload();
        }, 1500)


    }, 1500)
}
// Final vitoria / fase 1

// Caminho gamer over. / fase 1
function lordgameover1() {
    elem = document.querySelector('#pagFase');
    elem.style.backgroundImage = "url('img/lord/gameover1.png')";
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
function lordFase2() {
    elem = document.querySelector('#pagFase');
    elem.style.backgroundImage = "url('img/lord/fase2.png')";
    setTimeout(function() {
        escolha1 = prompt("Escolha uma das opções.");
        if (escolha1 == 1) {
            setTimeout(function() {
                lordfase2b()
            }, 1500)
        } else if (escolha1 == 2) {
            setTimeout(function() {
                lordfase2a()
            }, 1500)
        }

    }, 1500)
}
// Caminho vitoria / fase 2
function lordfase2b() {
    elem = document.querySelector('#pagFase');
    elem.style.backgroundImage = "url('img/lord/fase4.png')";
    setTimeout(function() {
        setTimeout(function() {
            escolha1 = alert("Avançar");
            lordfase2c()
        }, 1500)


    }, 1500)
}

function lordfase2c() {
    elem = document.querySelector('#pagFase');
    elem.style.backgroundImage = "url('img/lord/fase4.0.png')";
    setTimeout(function() {
        setTimeout(function() {
            escolha1 = alert("Você precisa educar o Reptilianos para poder desativar a bomba, Clique em Ok 20 vezes para educar eles.");
            lordfase2d()
        }, 1500)


    }, 1500)
}

function lordfase2d() {
    elem = document.querySelector('#pagFase');
    elem.style.backgroundImage = "url('img/lord/fase4.1.png')";
    setTimeout(function() {
        setTimeout(function() {
            lordCombate2()
        }, 1500)


    }, 1500)
}

function lordCombate2() {
    elem = document.querySelector('#pagFase');
    elem.style.backgroundImage = "url('img/lord/fase4.1.png')";
    setTimeout(function() {
        setTimeout(function() {
            while (luta < 20) {
                alert("Continue atacando!");
                luta = luta + 1;
                alert(luta);
            }
            alert("Você conseguiu vencer!");
            lordfase2vitoria()
        }, 1500)
    }, 1500)
}

function lordfase2vitoria() {
    elem = document.querySelector('#pagFase');
    elem.style.backgroundImage = "url('img/lord/vitoriafase4.png')";
    setTimeout(function() {
        setTimeout(function() {
            alert("Você salvou o mundo.");
            location.reload();
        }, 1500)
    }, 1500)
}

// Final vitoria / fase 2

// Caminho gamer over. / fase 2
function lordfase2a() {
    elem = document.querySelector('#pagFase');
    elem.style.backgroundImage = "url('img/lord/fase3.0.png')";
    setTimeout(function() {
        setTimeout(function() {
            lordCombate2a()
        }, 1500)


    }, 1500)
}

function lordCombate2a() {
    elem = document.querySelector('#pagFase');
    elem.style.backgroundImage = "url('img/lord/fase2.0.png')";
    setTimeout(function() {
        setTimeout(function() {
            while (luta < 20) {
                alert("Continue nadando.");
                luta = luta + 1;
                alert(luta);
            }
            lordgameover2a()
        }, 1500)
    }, 1500)
}

function lordgameover2a() {
    elem = document.querySelector('#pagFase');
    elem.style.backgroundImage = "url('img/lord/gameover2.png')";
    setTimeout(function() {
        escolha1 = alert("Você morreu, aperte ok para tentar novamente.");
        location.reload();
    }, 1500)
}
// Final gamer over. / fase 2