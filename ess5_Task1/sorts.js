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