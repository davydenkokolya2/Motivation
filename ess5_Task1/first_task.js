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