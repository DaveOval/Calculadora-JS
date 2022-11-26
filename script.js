function boton(valor) {
    let pantalla = document.getElementById('input').value += valor; print;
    return pantalla;
}
function total() {
    let operacion = document.getElementById('input').value;
    document.getElementById('input').value = eval(operacion);
    if (operacion === '') {
        document.getElementById('input').value = '';
    }
}
function reset() {
    document.getElementById('input').value = '';
}