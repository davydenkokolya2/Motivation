function plus() {
    document.getElementById('calculator').value += "+";
}
function minus() {
    document.getElementById('calculator').value += "-";
}
function multiply() {
    document.getElementById('calculator').value += "*";
}
function split() {
    document.getElementById('calculator').value += "/";
}
function equally() {
    try {
        if (eval(document.getElementById('calculator').value) != 'Infinity') {
            document.getElementById('cache').value += document.getElementById('calculator').value + '\n';
            document.getElementById('calculator').value = eval(document.getElementById('calculator').value);
        }
    } catch {

    }
}