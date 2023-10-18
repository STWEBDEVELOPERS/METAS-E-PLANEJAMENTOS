var totalsaldo;
var valorsaldo;

document.addEventListener('DOMContentLoaded', function() {
    var saldo = document.getElementById('salvarsaldo');
    var valor = document.getElementById('okvalor');
    saldo.addEventListener('click', function() {
        var valorsaldo = document.getElementById('valorsaldo').value;
        localStorage.setItem('savedinput', valorsaldo);    
    });
    valor.addEventListener('click', function() {
        var valorr = document.getElementById('valorinput').value;
        localStorage.setItem('savedvalue', valorr)
    })
});

window.addEventListener('load', function() {
    var vsaldo = localStorage.getItem('savedinput');
    var vvalor = this.localStorage.getItem('savedvalue');
    if (vsaldo) {
        totalsaldo = vsaldo;
    }
    if (vvalor) {
        valorsaldo = vvalor;
    }
})

setInterval(verificarAtualizacoes, 500);

function verificarAtualizacoes() {
    var vsaldo = localStorage.getItem('savedinput');
    var vvalor = localStorage.getItem('savedvalue');
    if (vsaldo && vvalor) {
        totalsaldo = vsaldo;
        valorsaldo = vvalor;
        barradeprogresso(); 
    }
}

function atualizarSaldo() {
    var vsaldo = localStorage.getItem('savedinput');
    var vvalor = localStorage.getItem('savedvalue');
    if (vsaldo && vvalor) {
        totalsaldo = vsaldo;
        valorsaldo = vvalor;
        barradeprogresso();
    }
}


function teste() {
    var divmetas = document.getElementById('metas');
    var vinput = document.getElementById('meta').value;
    var novadiv = document.createElement('div');
    novadiv.id = 'novadiv';
    if (vinput.trim() == '') {
    } else {
        var novameta = document.createElement('p');
        var novametabutton = document.createElement('input');
        novametabutton.type = 'checkbox';
        novameta.textContent = vinput;
        novadiv.appendChild(novameta);
        divmetas.appendChild(novadiv);
        novameta.classList.add('textmetas');
        salvarDivMetas();
    }
}

function salvarDivMetas() {
    var divmetas = document.getElementById('metas');
    localStorage.setItem('divmetas', divmetas.innerHTML);
}

window.addEventListener('load', function() {
    var divmetasContainer = localStorage.getItem('divmetas');
    if (divmetasContainer) {
        document.getElementById('metas').innerHTML = divmetasContainer;
    }
});

function limpar() {
    barradeprogresso()
    var msgconcluido = document.getElementById('concluido')
    msgconcluido.style.opacity = '1'
    function alteraropacidade() {
        msgconcluido.style.opacity = '0';
    }
    setTimeout(alteraropacidade, 1000)
    var div = document.getElementById('metas');
    div.innerHTML = ''
    localStorage.clear()
}

function barradeprogresso() {
    var largura = (totalsaldo / valorsaldo) * 100;
    var progressodiv = document.getElementById('progresso');
    if (totalsaldo <= valorsaldo) {
        progressodiv.style.width = largura + '%';
    }
}

function mostrarvalores() {
    if (totalsaldo && valorsaldo != undefined) {
        window.alert('Saldo: R$' + totalsaldo + ' Valor da Meta: R$' + valorsaldo)
    }
    else {
        window.alert('Nenhum valor adicionado!')
    }
}