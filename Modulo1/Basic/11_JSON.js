const data = require('./data.json');

// console.log(data);

var modifiedData = data.map((person) => {

    person.first_name = person.first_name.toLocaleUpperCase()
    return person
})
// console.log(modifiedData)

var filterResult = modifiedData.filter((person) => person.id === 3)
console.log(filterResult)