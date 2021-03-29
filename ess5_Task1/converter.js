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