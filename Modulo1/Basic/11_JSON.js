const data = require('./data.json');

// console.log(data);

var modifiedData = data.map((person) => {

    person.first_name = person.first_name.toLocaleUpperCase()
    person.last_name = person.last_name.toLocaleUpperCase()

    return person
})

// console.log(modifiedData)

var filterResult = modifiedData.filter((person) => person.id === person.id)

console.log(filterResult)