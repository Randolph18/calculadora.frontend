$(document).ready( function () {
    pantalla = $("#textoPantalla");
    $(document).keydown(teclado);
});
var x = "0";
var xi = 1;
var ni = 0;
var op = "no";

function numero(xx) {
    if (x === "0" || xi === 1) {
        pantalla.html(xx);
        x = xx;
    }
}

function operar(s) {
    igualar();
    ni = x;
    op = s;
    xi = 1;
}

function igualar() {
    if (op === "no") {
        pantalla.html(x);
    } else {
        var sl = ni + op + x;
        var sol = eval(sl);
        pantalla.html(sol);
        x = sol;
        op = "no";
        xi = 1;
    }
}

function borradoTotal() {
    pantalla.html("0");
    x = "0";
    coma = 0;
    ni = 0;
    op = "no";
}

function teclado(elEvento) {
    var evento = elEvento || window.event;
    var k = evento.keyCode;
    if (k > 47 && k < 58) {
        var p = k - 48;
        p = String(p);
        numero(p);
    }
    if (k == 107) {
        operar("+");
    }
    if (k == 32 || k == 13) {
        igualar();
    }
    if (k == 46) {
        borradoTotal();
    }
}