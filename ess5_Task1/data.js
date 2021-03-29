








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
    
}