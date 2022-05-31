function fullName() {
    console.log('Omar A Pinilla Ossa')
}
fullName()

function paramFullName(firstName = 'Omar', lastName = 'Pinilla Ossa') {
    console.log(`${firstName} ${lastName}`)
}
paramFullName('Lu', 'Cano')

const a = prompt('Enter first number')
const b = prompt('Enter second number')
function addNumbers(a, b) {
    console.log(`Sum of numbers is ${a + b}`)
}
addNumbers(parseInt(a), parseInt(b))


const length = prompt('Enter rectangle length')
const width = prompt('Enter rectangle width')
const height = prompt('Enter rectangular prism heigth')
function areaOfRectangle(length, width) {
    areaOfRectangle = length * width
    return areaOfRectangle
}
console.log(`Area of rectangle is ${areaOfRectangle(length, width)}`)

function perimeterOfRectangle(length, width) {
    perimeterOfRectangle = 2 * (length * width)
    return perimeterOfRectangle
}
console.log(`Perimeter of rectangle is ${perimeterOfRectangle(length, width)}`)

function volumeOfRectPrism(length, width, height) {
    volumeOfRectPrism = length * width * height
    return volumeOfRectPrism
}
console.log(`Volumen of rectangular prism is ${volumeOfRectPrism(length, width, height)}`)

const radius = prompt('Enter circle radius')
function areaOfCircle(radius) {
    areaOfCircle = Math.PI * radius * radius
    return areaOfCircle
}
console.log(`Area of circle is ${areaOfCircle(radius)}`)

function circumOfCircle(radius) {
    circumOfCircle = 2 * Math.PI * radius
    return circumOfCircle
}
console.log(`Cirfumference of circle is ${circumOfCircle(radius)}`)

const mass = 10
const volume = 50
function density(mass, volume) {
    density = mass / volume
    return density
}
console.log(`Density of the substance with mass: ${mass} and volume: ${volume} is ${density(mass, volume)}`)

const distance = 100
const time = 0.5
function speed(distance, time) {
    speed = distance / time
    return speed
} console.log(`Speed of an object that moved ${100} Km in ${time} hours is ${speed(distance, time)} Km/h`)

const objectMass = 1
function weigth(mass) {
    weigth = mass * 9.81
    return weigth
} console.log(`Weigth for an object with ${objectMass} Kg of mass is ${weigth(mass)} N`)

const celsius = 28
function convertCelsiusToFahrenheit(celsius) {
    let farenheit = (celsius * (9 / 5)) + 32
    return farenheit
} console.log(`${celsius}oC is ${convertCelsiusToFahrenheit(celsius)}oF`)

const adultWeigth = 100
const adultHeigth = 1.80
console.log(adultWeigth / (adultHeigth ** 2))
function bodyMassIndex(adultHeigth, adultWeigth) {
    let bmi = adultWeigth / (adultHeigth ** 2)
    switch (true) {
        case bmi < 18.5:
            console.log('Underweight')
            break
        case bmi >= 18.5 && bmi < 24.9:
            console.log('Normal weight')
            break
        case bmi >= 24.9 && bmi < 29.9:
            console.log(`Overweight of ${adultWeigth - (24.9 * (adultHeigth ** 2))} Kg`)
            break
        case bmi >= 29.9:
            console.log(`Obese of ${adultWeigth - (24.9 * (adultHeigth ** 2))} Kg`)
            break
    }
} bodyMassIndex(1.80, 83)



function checkSeason(month) {

    switch (month) {
        case 'june':
        case 'july':
        case 'august':
            console.log(`${month} is Summer`)
            break
        case 'september':
        case 'october':
        case 'november':
            console.log(`${month} is Autumn`)
            break
        case 'december':
        case 'january':
        case 'february':
            console.log(`${month} is Winter`)
            break
        case 'march':
        case 'april':
        case 'may':
            console.log(`${month} is Spring`)
            break
        default:
            console.log('Enter a valid month')
    }
} checkSeason('january')

//Math.max returns its largest argument. Write a function findMax that takes three arguments and returns their maximum with out using Math.max method.

function findMax(a, b, c, d) {
    var numbers = []
    numbers.push(a, b, c, d)
    console.log(numbers)
    let max = -Infinity
    let numbersLength = numbers.length
    for (i = 0; i < numbersLength; i++) {
        if (numbers[i] > max) {
            max = numbers[i]
        }
    } return max
} console.log(findMax(-10, -1, -110, -20))

function solveLinEquation() {
    let a = 1
    let b = 20
    let c = 30
    let y = 5

    let x = (-b * y - c) / a
    return x
} console.log(solveLinEquation())

function solveQuadEquation(a, b, c) {

    let solution = []
    let x = (-b + Math.sqrt((b ** 2) - (4 * a * c))) / (2 * a)
    let y = (-b - Math.sqrt((b ** 2) - (4 * a * c))) / (2 * a)

    solution.push(x, y)

    return solution
} console.log(solveQuadEquation(1, 4, 4))
console.log(solveQuadEquation(1, -1, -2))
console.log(solveQuadEquation(1, 7, 12))
console.log(solveQuadEquation(1, 0, -4))
console.log(solveQuadEquation(1, -1, 0))

console.log("******************")

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

function printArray(array) {
    for (i = 0; i < array.length; i++) {
        console.log(array[i])
    }
}
printArray(countries)

function showDateTime() {
    const now = new Date()
    let year = now.getFullYear()
    let month = now.getMonth()
    let day = now.getDate()
    let hour = now.getHours()
    let min = now.getMinutes()
    console.log(`${day}/${month}/${year} ${hour}:${min}`)
}
showDateTime()

function swapValues(a, b) {
    let array = []
    array.push(b, a)
    return array
} console.log(swapValues(3, 1))

function reverseArray(array) {
    let revArray = []
    for (i = array.length - 1; i >= 0; i--) {
        revArray.push(array[i])
    } console.log(revArray)
} reverseArray(countries)


const names = ['omar', 'andres', 'pinilla', 'ossa']
function capitalizedArray() {
    let capitalizedNames = []
    for (i = 0; i < names.length; i++) {

        capitalizedNames.push(names[i].slice(0, 1).toLocaleUpperCase() + names[i].slice(1, 30))
    }
    console.log(capitalizedNames)
} capitalizedArray()

function addItem(a) {
    let array = []
    array.push(a)
    console.log(array)
} addItem(33)

function removeItem(a) {
    let index = names.indexOf(a)
    names.splice(index, 1)
    console.log(names)
} removeItem('pinilla')


function sumOfNumbers(a) {
    let sum = 0
    for (i = 0; i <= a; i++) {
        sum = sum + i
    } console.log(sum)
} sumOfNumbers(100)




function sumOfOdds(a) {
    let oddNumbers = []
    for (i = 0; i <= a; i++) {
        if (i % 2 != 0) {
            oddNumbers.push(i)
        }
    }
    let sumOdd = 0
    for (const num of oddNumbers) {
        sumOdd += num
    } console.log(`Sum of all odd numbers from 0 to ${a} is ${sumOdd}`)
} sumOfOdds(11)


function sumOfEven(a) {
    let evenNumbers = []
    for (i = 0; i <= a; i++) {
        if (i % 2 == 0) {
            evenNumbers.push(i)
        }
    }
    let sumEven = 0
    for (const num of evenNumbers) {
        sumEven += num
    } console.log(`Sum of all even numbers from 0 to ${a} is ${sumEven}`)
} sumOfEven(10)


function evensAndOdds(a) {
    let evenNumbers = []
    for (i = 0; i <= a; i++) {
        if (i % 2 == 0) {
            evenNumbers.push(i)
        }
    }
    let oddNumbers = []
    for (i = 0; i <= a; i++) {
        if (i % 2 != 0) {
            oddNumbers.push(i)
        }
    }
    console.log(`The number of odds are ${oddNumbers.length}`)
    console.log(`The number of evens are ${evenNumbers.length}`)
} evensAndOdds(100)


function sumOfArguments() {
    var args = Array.from(arguments)
    var sum = 0
    console.log(args.length)
    for (i = 0; i < args.length; i++) {
        sum = sum + args[i]
    } console.log(sum)
} sumOfArguments(1, 2, 3, 4, 1)

function randomIp() {
    let randomIp = []
    for (i = 0; i < 4; i++) {
        let rndm = Math.floor(Math.random() * 255)
        randomIp[i] = rndm
    } console.log(randomIp)
} randomIp()

function randomMacAddress() {
    let randomMacAddress = []
    for (i = 0; i < 12; i++) {
        let rndm = Math.floor(Math.random() * 100).toString(16)
        randomMacAddress[i] = rndm
    } console.log(randomMacAddress.join().replace(',', '-'))
} randomMacAddress()

function randomHexa() {
    let rndm = Math.floor(Math.random() * 10000).toString(16)
    console.log(rndm)
} randomHexa()

// Exercises: Level 3

function userIdGenerator() {
    let userId = Math.random().toString(36).substring(2, 7)
    return userId.toLocaleUpperCase()
} console.log(userIdGenerator())

let numberOfChar = prompt('Enter number of char')
let numberOUsers = prompt('Enter number of users')
let usersArray = []
function userIdGeneratedByUser() {
    for (i = 0; i < numberOUsers; i++) {
        let length = parseInt(numberOfChar) + 2
        usersArray.push(Math.random().toString(36).substring(2, length))
    } return usersArray
} console.log(userIdGeneratedByUser())






