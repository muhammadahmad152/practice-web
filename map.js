// map
let array = [29, 44, 2, 10, 4];

let mapData = array.map((currentValue) => {
    return currentValue + 10;
});

console.log(mapData);

// filter
let data = [20, 21, 19, 18, 12, 22, 25];

let dataFilter = data.filter((value) => {
    return value >= 21;
});

dataFilter.forEach((myData) => {
    document.write(myData, '<br>');
});

let obj = [
    { id: 1, name: "ali", age: 24, city: "karachi" },
    { id: 2, name: "zain", age: 17, city: "islamabad" },
    { id: 3, name: "talha", age: 19, city: "peshawar" },
    { id: 4, name: "farhan", age: 21, city: "karachi" }
];

let filterCity = obj.filter((currentData) => {
    return currentData.city === 'karachi';
});

// console.log(filterCity);

filterCity.forEach(value => {
    for (let myData1 in value) {
        document.write(myData1, ":", value[myData1], '<br>')
    }
})
