Array.prototype.filter = function (fn) {
    let newArray = [];
    for (var i = 0; i < this.length; i++){
        if (fn(this[i])){
            
            newArray.push(this[i]);
        }
            
    }
    return newArray;
}

const cities = [
    {name: 'Moscow', population: 12506468},
    {name: 'Saint Petersburg', population: 5351935},
    {name: 'Novosibirsk', population: 1612833},
    {name: 'Kaliningrad', population: 482443},
    {name: 'Kaluga', population: 336726}
];

console.log(cities.filter(function(e) { return e.population > 1000000}));