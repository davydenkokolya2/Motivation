Array.prototype.reduce = function (fn) {
    let summary = 0;
    for (var i = 0; i < this.length; i++) {


        summary = fn(summary, this[i]);


    }
    return summary;
}

/*const cities = [
    { name: 'Moscow', population: 12506468 },
    { name: 'Saint Petersburg', population: 5351935 },
    { name: 'Novosibirsk', population: 1612833 },
    { name: 'Kaliningrad', population: 482443 },
    { name: 'Kaluga', population: 336726 }
];*/

console.log(cities.reduce(function (summary, elem) { return summary + +elem.population }));