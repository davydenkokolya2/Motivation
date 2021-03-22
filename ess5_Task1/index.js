
Array.prototype.findMax = function () {
    let max = 0;
    for (let i = 0; i < this.length; i++) {
        if (+this[i] > max)
            max = +this[i];
    }
    return max;
}

Array.prototype.findMin = function () {
    let min = 100000000000;
    for (let i = 0; i < this.length; i++) {
        if (+this[i] < min)
            min = +this[i];
    }
    return min;
}

Array.prototype.calculateAverage = function () {
    let average = 0;
    for (let i = 0; i < this.length; i++) {
        average += +this[i];
    }
    return average / this.length;
}


function findMax() {
    let array = document.getElementById('array').value.split(' ');

    document.getElementById('answer').value = array.findMax();
}
function findMin() {
    let array = document.getElementById('array').value.split(' ');

    document.getElementById('answer').value = array.findMin();
}
function calculateAverage() {
    let array = document.getElementById('array').value.split(' ');

    document.getElementById('answer').value = array.calculateAverage();
}

function bubbleSort() {
    let array = document.getElementById('array').value.split(' ');

    let f = 1;
    while (f == '1') {
        f = 0;
        for (let i = 1; i < array.length; i++)
            if (array[i - 1] > array[i]) {
                let buff = array[i - 1];
                array[i - 1] = array[i];
                array[i] = buff;
                f = 1;
            }
    }
    document.getElementById('answer').value = array;
}

function bubbleSort() {
    let array = document.getElementById('array').value.split(' ');

    let f = 1;
    while (f == '1') {
        f = 0;
        for (let i = 1; i < array.length; i++)
            if (+array[i - 1] > +array[i]) {
                let buff = array[i - 1];
                array[i - 1] = array[i];
                array[i] = buff;
                f = 1;
            }
    }
    document.getElementById('answer').value = array;
}

function selectSort() {
    let array = document.getElementById('array').value.split(' ');

    for (let i = 0; i < array.length - 1; i++) {
        let min = +array[i];
        let index;
        for (let j = i + 1; j < array.length; j++) {
            if (+array[j] < min) {
                min = array[j];
                index = j;
            }
        }
        array[index] = array[i];
        array[i] = min;
    }
    document.getElementById('answer').value = array;

}

function quickSort() {
    let array = document.getElementById('array').value.split(' ');

    array.sort(compareNumbers);
    function compareNumbers(a, b) {
        return a - b;
    }
    document.getElementById('answer').value = array;
}

function convert() {
    let array = document.getElementById('array2').value.split(' ');

    switch (firstselect.value) {
        case '2':
            array = parseInt(+array, 2);
            break;
        case '8':
            array = parseInt(+array, 8);
            break;
        case '10':
            array = parseInt(+array, 10);
            break;
        case '16':
            array = parseInt(+array, 16);
            break;

        default:
            alert("Нет таких значений");
    }

    switch (secondselect.value) {
        case '2':
            array = array.toString(2);
            break;
        case '8':
            array = array.toString(8);
            break;
        case '10':
            array = array.toString(10);
            break;
        case '16':
            array = array.toString(16);
            break;

        default:
            alert("Нет таких значений");
    }



    document.getElementById('answer2').value = array;
}

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
function selectdate() {
    let date = new Date();
    
    switch (formatselect.value) {
        case '1':
            document.getElementById('date').value = date.getDate() + "." + (+date.getMonth() + +1) + "." + date.getFullYear();
            break;
        case '2':
            document.getElementById('date').value = date.getDate() + "." + date.toLocaleString('en', {month:'long'}) + "." + date.getFullYear();
            break;
        case '3':
            document.getElementById('date').value = (+date.getMonth() + +1) + "." + date.getDate()   + "." + date.getFullYear();
            break;
    
        default:
            alert("Нет таких значений");
    }
    /
}