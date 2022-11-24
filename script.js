var vazio = "transp.png";
var controle = true;
var playerX = "X";
var playerO = "O";
var player = playerX;
var controleiniciar = true;
var jogadas = 0;

function checkjogo(id) {
    if(iniciar()){
        return false;
    }
    var opt = checksrc(id);
    var pc = document.getElementById('choose').checked;

    if(opt == vazio && controle){
        document.getElementById(id).src = "img/" + player + ".png";
    }

    if(wincheck() && controle){
        document.getElementById("resultado").innerHTML =
        "<div align='center'>VITÓRIA: " + player + "</div>";
        controle = false;
    } else if (jogadas >= 9 && controle) {
        document.getElementById("resultado").innerHTML =
        "<div align='center'>EMPATE</div>";
        controle = false;
    }

    if(player == playerX && controle){
        player = playerO;
        if(pc){
            checkjogo(random_choose());
        }
    } else {
        player = playerX;
    }
}

function iniciar(){
    if (controleiniciar){
        controleiniciar = false;
        playerX = document.getElementById("escolha1").value;
        playerO = document.getElementById("escolha2").value;
        player = playerX;
        if(playerX != playerO){
            return false;
        } else {
            alert("TIMES IGUAIS");
            controleiniciar = true;
            return true;
        }
    } else {
        return false;
    }
}

function checksrc(id) {
    var file = document.getElementById(id).src;
    return file.substring(file.length - 10, file.length);
}

function  wincheck() {
    casa1 = checksrc(1);
    casa2 = checksrc(2);
    casa3 = checksrc(3);
    casa4 = checksrc(4);
    casa5 = checksrc(5);
    casa6 = checksrc(6);
    casa7 = checksrc(7);
    casa8 = checksrc(8);
    casa9 = checksrc(9);

    if (casa1 == casa2 && casa2 == casa3 && casa2 != vazio){
        return true;
    } else if (casa4 == casa5 && casa5 == casa6 && casa5 != vazio){
        return true;
    } else if (casa7 == casa8 && casa8 == casa9 && casa8 != vazio){
        return true;
    } else if (casa1 == casa4 && casa4 == casa7 && casa4 != vazio){
        return true;
    } else if (casa2 == casa5 && casa5 == casa8 && casa5 != vazio){
        return true;
    } else if (casa3 == casa6 && casa6 == casa9 && casa6 != vazio){
        return true;
    } else if (casa1 == casa5 && casa5 == casa9 && casa5 != vazio){
        return true;
    } else if (casa3 == casa5 && casa5 == casa7 && casa5 != vazio){
        return true;
    } else {
        jogadas += 1;
        return false;
    }
}

function random_choose(){
    while (true) {
        numero = Math.floor((Math.random()*9)+1);
        if(checksrc(numero) == vazio){
            return numero;
        }
    }
}