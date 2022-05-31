const arr = Array(8).fill(' :) ')
console.log(arr)

const webTechs = [
    'HTML',
    'CSS',
    'JavaScript',
    'React',
    'Redux',
    'Node',
    'Saas',
    'MongoDB'
]
console.log(webTechs)
console.log(webTechs.length)

const concatenatedArrays = arr.concat(webTechs)
console.log(concatenatedArrays)
console.log(concatenatedArrays.indexOf('Redux'))

// Check items in a list
let fruit = prompt('Enter a fruit')
const fruits = ['banana', 'orange', 'mango', 'lemon']
fruits.push('blueberry')
let fruitIndex = fruits.indexOf(fruit)
console.log(fruits.sort().join(', '))
if (fruitIndex != -1) {
    console.log(`${fruit} is in the list: ${fruits}`)
} else {
    console.log(`${fruit} is not in the list: ${fruits}`)
}

// Exercise: Level 1
const emptyArray = Array()
console.log(emptyArray)

const vehicles = ['motorcycle', 'car', 'boat', 'bike', 'airplane']
console.log(vehicles.length)
console.log(`First item is ` + vehicles[0])
console.log(`Middle item is ` + vehicles[Math.floor(vehicles.length / 2)])
console.log(`Last item is ` + vehicles[vehicles.length - 1])

const mixedDataTypes = Array()
mixedDataTypes.push(vehicles)
mixedDataTypes.push(2)
mixedDataTypes.push("vehicles")
mixedDataTypes.push(false)
mixedDataTypes.push(null)
mixedDataTypes.push(webTechs)
console.log(mixedDataTypes)

const itCompanies = [
    'Facebook',
    'Google',
    'Microsoft',
    'Apple',
    'IBM',
    'Oracle',
    'Amazon']
console.log(itCompanies)
console.log(`There are ${itCompanies} IT Companies`)
console.log(`First Company is ` + itCompanies[0])
console.log(`Middle Company is ` + itCompanies[Math.floor(itCompanies.length / 2)])
console.log(`Last Company is ` + itCompanies[itCompanies.length - 1])


for (let i = 0; i < itCompanies.length; i++) {
    itCompanies[i] = itCompanies[i].toUpperCase()
    console.log(itCompanies[i])
}

console.log(`${itCompanies.join(', ')} are big IT companies.`)

let companyName = 'PSL'
let companyIndex = itCompanies.indexOf(companyName.toUpperCase())
if (companyIndex != -1) {
    console.log(companyName)
} else {
    console.log(`${companyName} not found`)
}

// Filter out companies which have more than one 'o' without the filter method
/* for (let i = 0; i < itCompanies.length; i++) {
    if(itCompanies[i].match(/O/gi).length>1){
        console.log(itCompanies[i])
    }
} */

console.log(itCompanies.sort())
console.log(itCompanies.reverse())
console.log(itCompanies.slice(0, 3))
console.log(itCompanies.slice(4, 7))
console.log(itCompanies.slice(3, 4))
console.log(itCompanies.splice(1, 7))
console.log(itCompanies.splice())

// Exercise: Level 2

let text =
    'I love teaching and empowering people. I teach HTML, CSS, JS, React, Python.'
let pattern = /[,.]+/gi
let words = text.replace(pattern, '')
console.log(words)
let wordsArray = words.match(/\w+/g)
console.log(wordsArray.length)


const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey']

shoppingCart.unshift('Sugar')
shoppingCart.unshift('Meat')
shoppingCart.pop()
let teaIndex = shoppingCart.indexOf('Tea')
shoppingCart[teaIndex] = 'Green Tea'

console.log(shoppingCart)

const countries = [
    'Albania',
    'Bolivia',
    'Canada',
    'Denmark',
    'Ethiopia',
    'Finland',
    'Germany',
    'Hungary',
    'Ireland',
    'Japan',
    'Kenya'
]
let country = 'Albania'
let newCountry = countries.indexOf(country)
if (newCountry > -1) {
    console.log(country.toUpperCase())
} else {
    countries.push(country)
    console.log(countries)
}


let newWebTech = 'Saas'
let webTechIndex = webTechs.indexOf(newWebTech)
if (webTechIndex > -1) {
    console.log(`${newWebTech} is a CSS preproccess`)
} else {
    countries.push(newWebTech)
    console.log(webTechs)
}


const frontEnd = ['HTML', 'CSS', 'JS', 'React', 'Redux']
const backEnd = ['Node', 'Express', 'MongoDB']

let fullStack = frontEnd.concat(backEnd)
console.log(fullStack)

//Exercise: Level 3
const ages = [8, 10, 12, 20, 18, 48, 56, 100, 24, 300]
console.log(ages.sort(function (a, b) { return a - b }))
// Find the median age(one middle item or two middle items divided by two)
let agesLenght = ages.length

if (agesLenght % 2 != 0) {
    let medianIndex = (agesLenght + 1) / 2
    console.log(ages[medianIndex - 1])
} else {
    let middleIndex1 = Math.floor(agesLenght / 2)
    let middleIndex2 = Math.floor(agesLenght / 2) + 1
    let median = (ages[middleIndex1 - 1] + ages[middleIndex2 - 1]) / 2
    console.log(median)
}

let sum = Math.sum(ages)
