
Array.prototype.findMax = function () {
    let max = 0;
    for (let i = 0; i < this.length; i++) {
        if (+this[i] > max)
            max = +this[i];
    }
    alert(max);
}


function find() {
    let array = document.getElementById('array').value.split(' ');
    
    document.getElementById('answer').value = array.findMax();
}
function findMin() {
    let array = document.getElementById('array').value.split(' ');
    let min = 100000000000;
    for (let i = 0; i < array.length; i++) {
        if (+array[i] < min)
            min = +array[i];
    }
    document.getElementById('answer').value = min;
}
function calculateAverage() {
    let array = document.getElementById('array').value.split(' ');
    let average = 0;
    for (let i = 0; i < array.length; i++) {
        average += +array[i];
    }
    document.getElementById('answer').value = average / array.length;
}