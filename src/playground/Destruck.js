import React from 'react'

// OBJECT DESTRUCK
// const person = {
//     name:'Andrew',
//     age: 26,
//     location: {
//         city:'Tehran',
//         temp:18
//     }
// };

// // const name = person.name
// // const age = person.age

// const {name, age} = person;
// const {city , temp: temperature} = person.location

// console.log(`${name} is ${age}.`)
// console.log(`It's ${temperature} in ${city}`)



///////////////////////////////////////////////////////////////

//ARRAY DESTRUCK

const item = ['Coffee (hot)', '$2.00', '$2.50', '$2.75'];
const [name , ,mcost] = item;
console.log(`A medium ${name} costs ${mcost}`)


const Destruck = () => {
    return(
        <h1>JOOJ</h1>
    )
}

export default Destruck