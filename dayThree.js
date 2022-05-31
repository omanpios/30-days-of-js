let isLightOn = true
let isHungry = false
let truValue = 4 > 3    // true
let falseValue = 4 < 3  // false

let count = 0
console.log(count--)        // 0
console.log(count)          // 1

let isRaining = true
isRaining
    ? console.log('You need a rain coat.')
    : console.log('No need for a rain coat.')

isRaining = false
    ? console.log('You need a rain coat.')
    : console.log('No need for a rain coat.')

/* let number = prompt('Enter number', 'number goes here')
number > 0
    ? alert(`${number} is a positive number`)
    : alert(`${number} is a negative number`) */

const agree = confirm('Are you sure you want to continue?')

const now = new Date()
console.log(now)

// exercises
let firstName = 'Omar',
    lastName = 'Pinilla',
    country = 'Colombia',
    city = 'Cali',
    age = 34,
    isMarried = true

console.log(typeof (firstName))
console.log(typeof (lastName))
console.log(typeof (country))
console.log(typeof (city))
console.log(typeof (age))
console.log(typeof (isMarried))

console.log('****************')
console.log(4 > 3) //true
console.log(4 >= 3) //true
console.log(4 < 3)//false
console.log(4 <= 3)//false
console.log(4 == 4)//true
console.log(4 === 4) //true
console.log(4 != 4)//false
console.log(4 !== 4) //false
console.log(4 != '4') //false
console.log(4 == '4')//true
console.log(4 === '4') //false
let python = 'Python'
let pythonLenght = python.length
let jargon = 'Jargon'
let jargonLenght = jargon.length

//Find the length of python and jargon and make a falsy comparison statement.
console.log(pythonLenght > jargonLenght)

console.log('***7***')
console.log(4 > 3 && 10 < 12) // true
console.log(4 > 3 && 10 > 12)// false
console.log(4 > 3 || 10 < 12)// true
console.log(4 > 3 || 10 > 12)// true
console.log(!(4 > 3))// false
console.log(!(4 < 3))// true
console.log(!(false)) // true
console.log(!(4 > 3 && 10 < 12)) // false
console.log(!(4 > 3 && 10 > 12))// true
console.log(!(4 === '4'))// true

console.log('***8***')

const date = new Date()
// What is the year today?
console.log(date.getFullYear())
// What is the month today as a number?
console.log(date.getMonth())
// What is the date today?
console.log(date)
// What is the day today as a number?
console.log(parseInt(date.getDate()))
// What is the hours now?
console.log(date.getHours())
// What is the minutes now?
console.log(date.getMinutes())
// Find out the numbers of seconds elapsed from January 1, 1970 to now. */
console.log(date.getTime())

console.log('\nExercises: Level 2\n')
let height = prompt('Enter height of the triangle', 'Here goes triangle\'s height')
let base = prompt('Enter base of the triangle', 'Here goes triangle\'s base')
let area = 0.5 * height * base
console.log(`The area of the triangle is ${area}`)


let sideA = prompt('Enter side A of the triangle')
let sideB = prompt('Enter side B of the triangle')
let sideC = prompt('Enter side C of the triangle')
let perimeter = (parseInt(sideA) + parseInt(sideB) + parseInt(sideC))
console.log(`The perimeter of the triangle is ${perimeter}`)

let rectangleSideA = prompt('Enter side A')
let rectangleSideB = prompt('Enter side B')
let rectangleArea = rectangleSideA * rectangleSideB
console.log(`The area of the rectangle is ${rectangleArea}`)

let radius = prompt('Enter radius of the circle')
let circlesArea = Math.PI * radius * radius
let circlesCircumference = 2 * Math.PI * radius
console.log(`The area of the circle is ${circlesArea}`)
console.log(`The circumference of the circle is ${circlesCircumference}`)

let x = prompt('Enter X')
let y = prompt('Enter Y')
console.log(`Slope of X and Y is ${(2 * x) - 2}`)

const x1 = 2
const x2 = 6
const y1 = 2
const y2 = 10
let slope = (y2 - y1) / (x2 - x1)
console.log(`Slope of (${x1},${y1}) and (${x2},${y2}) is ${slope}`)

let x3 = -3
console.log(`${(x3 ** 2) + (6 * x3) + 9}`)
console.log(`${(x3 ** 2) + (6 * x3) + 9}`)

let hours = prompt('Enter hours:')
let rate = prompt('Enter rate per hours:')
console.log(`Pay of the person is: ${hours * rate}`)

let nameLenght = prompt('Enter your name')
nameLenght.length > 7
    ? console.log('your name is long else say your name is short.')
    : console.log(`${nameLenght}`)

firstName.length > lastName.length
    ? console.log(`Your first name, ${firstName} is longer than your family name, ${lastName}`)
    : console.log(`Your first name, ${firstName} is shorter than your family name, ${lastName}`)

let myAge = 34
let yourAge = 32
console.log(`I am ${myAge - yourAge} years older than you`)

let birthYear = prompt('Enter your birth year')

let ageToday = date.getFullYear() - birthYear
ageToday > 18
    ? console.log(`You are ${ageToday}. You are old enough to drive`)
    : console.log(`You are ${ageToday}. You will be allowed to drive after ${18 - ageToday} years.`)

let numberOfYears = prompt(`Enter number of years to calculate seconds you've lived`)
let secondsLived = 60 * 60 * 24 * 365 * numberOfYears
console.log(secondsLived)

let getFullYear = date.getFullYear()
let getMonth = date.getMonth()
let getDate = date.getDate()
let getHours = ('0' + date.getHours()).slice(-2)
let getMinutes = ('0' + date.getMinutes()).slice(-2)

console.log(`${getFullYear}/${getMonth}/${getDate} ${getHours}:${getMinutes}`)
console.log(`${getDate}-${getMonth}-${getFullYear} ${getHours}:${getMinutes}`)
console.log(`${getDate}/${getMonth}/${getFullYear} ${getHours}:${getMinutes}`)


