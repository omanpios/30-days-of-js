// Callback function:
const callback = (n) => {
    return n ** 2
}
function cube(callback, n) {
    return callback(n) * n
}
console.log(cube(callback, 2))

// Returning a function as a value:
const higherOrder = n => {
    const doSomething = m => {
        const doWhatEver = t => {
            return 2 * n + 3 * m + t
        }
        return doWhatEver
    }
    return doSomething
}
console.log(higherOrder(10)(10)(10))


const numbers = [9.81, 3.14, 100, 37]
const sumArray = arr => {
    let sum = 0
    const callback = function (element) {
        sum += element
    }
    arr.forEach(callback)
    return sum

}
console.log(sumArray(numbers))

function square(n) {
    return n * n
}

console.log(square(2))



const names = [
    {
        name: 'Omar',
        lastname: 'Pinilla'
    },
    {
        name: 'Lu'
    }
]


const validateUser = (user, lastName) => {
    let users = names.find(o => o.name === user)
    if (users === undefined) {
        console.log('user not found')
        names.push({
            name: user,
            lastname: lastName
        })
    }
    /*     const updateLastname = lastName => {
            if (o => o.lastname === '') {
                users.lastname = lastName
            }
            return updateLastname
        } */
    return names
}
console.log(validateUser('Lui', 'Cano'))

//Setting time
let sayHello = n => {
    console.log('Hello')
}
//setInterval(sayHello, 1000) ---- every 1000 ms 
setTimeout(sayHello, 2000)

// forEach: use it only with arrays
// map: to iterate 
/* 

const modifiedArray = arr.map(function (element, index, arr) {
    return element
}) 

*/
let sum = 0
numbers.forEach(num => console.log(num))
numbers.forEach(num => sum += num)
console.log(sum)

const countries = ['Finland', 'Denmark', 'Sweden', 'Norway', 'Iceland', 'Bolivia', 'Albania']
countries.forEach((element) => console.log(element.toLocaleUpperCase()))
countries.map((country) => console.log(country.slice(0, 3)))

const numbersSquare = numbers.map((num) => num * num)
console.log(numbersSquare)

// filter
const countriesContainingLand = countries.filter((country) => country.includes('land'))
console.log(countriesContainingLand)

const countriesEndsByIa = countries.filter((country) => country.endsWith('ia'))
console.log(countriesEndsByIa)

const countriesHaveSixLetters = countries.filter((country) => country.length === 6)
console.log(countriesHaveSixLetters)


const scores = [
    { name: 'Asabeneh', score: 95 },
    { name: 'Lidiya', score: 98 },
    { name: 'Mathias', score: 80 },
    { name: 'Elias', score: 50 },
    { name: 'Martha', score: 85 },
    { name: 'John', score: 100 },
]

const scoresGreaterEighty = scores.filter((score) => score.score > 80)
console.log(scoresGreaterEighty)

const sumWithReduce = numbers.reduce((accumulator, current) => accumulator + current, 0)
console.log(sumWithReduce)

// Every to verify if all the elements are similar in one aspect
const areAllNamesString = scores.every((name) => typeof name.name === 'string')
console.log(areAllNamesString)

// find: return the first element which satisfies the condition
const ages = [24, 22, 25, 32, 35, 18]
const age = ages.find((age) => age < 25)
console.log('Find function: ' + age)

const nameWithSevenLetters = scores.find((name) => name.name.length === 7)
console.log(nameWithSevenLetters)

// findIndex return thr first element which satisfies the condition
const mathiasScore = scores.findIndex((score) => score.name === 'Mathias')
console.log(mathiasScore)

// some Check if some of the elements are similar in one aspect. It returns boolean
const areSomeTrue = scores.some((score) => typeof score.name === 'string')
console.log(areSomeTrue)

// sort
console.log(numbers.sort())
numbers.sort(function (a, b) {
    return a - b
    //return b-a for descending order
})
console.log(numbers)

// sort array elements
scores.sort((a, b) => {
    if (a.score < b.score) return -1
    if (a.score > b.score) return 1
    return 0
})
console.log(scores)

// Exercises
// https://github.com/Asabeneh/30-Days-Of-JavaScript/blob/master/09_Day_Higher_order_functions/09_day_higher_order_functions.md

const countries2 = ['Finland', 'Sweden', 'Denmark', 'Norway', 'IceLand', 'Colombia', 'England', 'Fnland']
const names2 = ['Asabeneh', 'Mathias', 'Elias', 'Brook']
const numbers2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const products = [
    {
        product: 'banana',
        price: 3
    },
    { product: 'mango', price: 6 },
    { product: 'potato', price: ' ' },
    { product: 'avocado', price: 8 },
    { product: 'coffee', price: 10 },
    { product: 'tea', price: '' },
]

countries2.forEach((country) => console.log(country))
names2.forEach((name) => console.log(name))
numbers2.forEach((numbers) => console.log(numbers))
products.forEach((product) => console.log(product.product))

countries2.map((country) => console.log(country.toLocaleUpperCase()))
countries2.map((country) => console.log(country.length))
numbers2.map((number) => console.log(number ** 2))
names2.map((name) => console.log(name.toLocaleUpperCase()))
products.map((product) => console.log(product))
const countries2ContainingLand = countries2.filter((country) => country.includes('land'))
console.log(countries2ContainingLand)
const countries2HaveSixChar = countries2.filter((country) => country.length === 6)
console.log(countries2HaveSixChar)
const countriesStartsWithE = countries2.filter((country) => country.startsWith('E'))
console.log(countriesStartsWithE)
const productPrices = products.filter((product) => product.price > 0)
console.log(productPrices)
const sumOfNumbers2 = numbers2.reduce((accumulator, current) => accumulator + current, 0)
console.log(sumOfNumbers2)
const concatenatedCountries = countries2.reduce((prevVal, currVal) => prevVal + ', ' + currVal)
console.log(concatenatedCountries + ' are north European countries.')
const checkNamesLength = names2.some((names) => names.length > 6)
console.log(checkNamesLength)
const checkLandInCountries = countries2.every(countr => countr.includes('land'))
console.log(checkLandInCountries)
const sixLetterCountry = countries2.find(country => country.length === 6)
console.log(sixLetterCountry)
const sixLetterCountryPosition = countries2.findIndex(country => country.length === 6)
console.log(sixLetterCountryPosition)
const norwayPosition = countries2.findIndex(country => country == 'Norway')
console.log(norwayPosition)
const russiaPosition = countries2.findIndex(country => country == 'Russia')
console.log(russiaPosition)

// Exercises: Level 2
// Find the total price of products by chaining two or more array iterators(eg. arr.map(callback).filter(callback).reduce(callback))
const totalPrice = products.map(products => products.price).filter(price => price > 0).reduce((prevVal, currVal) => prevVal += currVal)
console.log('Total price of products is $' + totalPrice)
