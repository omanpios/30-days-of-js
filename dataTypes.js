console.log(typeof "omar")
console.log(typeof false)
console.log(typeof 33.1)
console.log(typeof 1)
console.log(typeof undefined)
console.log(typeof null)

// Declare four variables without assigning values

let middleName
let ages
let address
let phoneNumber

// Declare four variables with assigned values

let petName = "Michin"

// Declare variables to store your first name, last name, marital status, country and age in multiple lines

let firstName = "Omar",
    lastName = "Pinilla",
    isMarried = true,
    country = "Colombia",
    age = 34

let myAge = 34,
    yourAge = 33

console.log("I am " + myAge + " years old")
console.log("You are " + yourAge + " years old")


// Day two
// Primitive data types
let word = 'JavaScript'

let numOne = 3
let numTwo = 3
console.log(numOne == numTwo)   // true

let js = 'JavaScritp'
let py = 'Python'
console.log(js == py) // false

let lightOn = true
let lightOff = false
console.log(lightOn == lightOff) // false

// non-primitive data types
let nums = [1, 2, 3]
let numbers = [1, 2, 3]
console.log(nums == numbers)    // false

let userOne = {
    name: 'Asabeneh',
    role: 'teaching',
    country: 'Finland'
}
let userTwo = {
    name: 'Asabeneh',
    role: 'teaching',
    country: 'Finland'
}
console.log(userOne == userTwo) // false

const PI = Math.PI
console.log(PI)
console.log(Math.round(PI))
console.log(Math.floor(PI))
console.log(Math.ceil(PI))
console.log(Math.min(-5, 3, 20, 4, 5, 10)) // -5, returns the minimum value
console.log(Math.max(-5, 3, 20, 4, 5, 10)) // 20, returns the maximum value

const num = Math.floor(Math.random() * 110)
console.log(num)

// String concatenation
let space = ' '           // an empty space string
let frstName = 'Asabeneh'
let lstName = 'Yetayeh'
let cntry = 'Finland'
let city = 'Helsinki'
let language = 'JavaScript'
let job = 'teacher'
let quote = "The saying,'Seeing is Believing' is not correct in 2020."
let quotWithBackTick = `The saying,'Seeing is Believing' is not correct in 2020.`

let fullName = frstName + space + lstName
console.log(fullName)

const paragraph = "My name is Asabeneh Yetayeh. I live in Finland, Helsinki.\
\nI am a teacher and I love teaching. I teach HTML, CSS, JavaScript, React, Redux, \
\nNode.js, Python, \tData Analysis and D3.js for anyone who is interested to learn. \
\nIn the end of 2019, I was thinking to expand my teaching and to reach \
\nto global audience and I started a Python challenge from November 20 - December 19.\
\nIt was one of the most rewarding and inspiring experience.\
\nNow, we are in 2020. I am enjoying preparing the 30DaysOfJavaScript challenge and \
\nI hope you are enjoying too."

console.log(paragraph)

// template literals
let a = 2
let b = 3
console.log(`The sum of ${a} and ${b} is ${a + b}`)
console.log(`${a} is greater than ${b}: ${a > b}`)

let personInfoTwo = `I am ${fullName}. I am ${age}. I live in ${cntry}` //ES6 - String interpolation method
console.log(personInfoTwo)
console.log(personInfoTwo.length)
let lastIndex = personInfoTwo.length - 1
console.log(personInfoTwo[lastIndex])
console.log(personInfoTwo.toUpperCase())
console.log(personInfoTwo.toLowerCase())

let string = ' JavaScript'
console.log(string.substring(4, 10))
console.log(string.split(''))

let countries = '   Finland, Sweden, Norway, Denmark, and Iceland  '
console.log(countries.split(','))
console.log(countries.trim(' '))
console.log(countries.charCodeAt(5))

let love = 'I love JavaScript. If you do not love JavaScript what else can you love.'
console.log(love.search('love'))

// Changing Data Type(Casting)
// String to int
let nmbr = '10'
let nmbrInt = parseInt(nmbr)
console.log(nmbrInt)

let nmbrPlus = +nmbr
console.log(nmbrPlus)

let nmbrNumber = Number(nmbr)
console.log(nmbrNumber)

// String to float
let gravity = 9.81
let gravityFloat = parseFloat(gravity)
console.log(gravityFloat)

let gravityNumber = Number(gravity)
console.log(gravityNumber)

let gravityPlus = +gravity
console.log(gravityPlus)

// Float to int
let gravityInt = parseInt(gravity)
console.log(gravityInt)



