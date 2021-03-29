function convert() {
    let array = document.getElementById('array2').value.split(' ');

    array = parseInt(+array, firstselect.value);
    array = array.toString(secondselect.value);

    document.getElementById('answer2').value = array;
}