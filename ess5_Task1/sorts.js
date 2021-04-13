function getArray() {
    return document.getElementById('array').value.split(' ');
}
function printArray(array) {
    document.getElementById('answer').value = array;
}
function bubbleSort() {
    let array = getArray();

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
    printArray(array);
}

function selectSort() {
    let array = getArray();

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
    printArray(array);

}

function quickSort() {
    let array = getArray();

    array.sort(compareNumbers);
    function compareNumbers(a, b) {
        return a - b;
    }
    printArray(array);
}