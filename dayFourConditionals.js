// *********Conditionals*********
let num = -3
if (num > 0) {
    console.log(`${num} is a positive number`)
}

let isRaining = true
if (isRaining) {
    console.log('Remember to take your rain coat.')
}

let num2 = -3
if (num2 > 0) {
    console.log(`${num2} is a positive number`)
} else {
    console.log(`${num2} is a negative number`)
}

let isRaining2 = false
if (isRaining2) {
    console.log('Remember to take your rain coat.')
} else {
    console.log('No raincoat needed')
}

let a = '1'
if (a > 0) {
    console.log(`${a} is a positive number`)
} else if (a == 0) {
    console.log(`${a} is zero`)
} else if (a < 0) {
    console.log(`${a} is a negative number`)
} else {
    console.log(`${a} is not a number`)
}

// Switch
let weather = 'cloudy'
switch (weather) {
    case 'rainy':
        console.log('Remember to take your rain coat.')
        break
    case 'cloudy':
        console.log('It might be cold, you need a jacket.')
        break
    case 'sunny':
        console.log('Don forget your hat.')
        break
    default:
        console.log('No raincoat needed')
}
let number = prompt('Enter number')
switch (true) {
    case number > 0:
        console.log(`${number} is positive`)
        break
    case number == 0:
        console.log(`${number} is zero`)
        break
    case number < 0:
        console.log(`${number} is negative`)
        break
    default:
        console.log(`${number} is not a number`)
}

// Exercises: Level 1
let age = prompt('Enter your age')
switch (true) {
    case age >= 18:
        console.log('You are old enough to drive.')
        break
    case age < 18:
        console.log(`You are left with ${18 - age} years to drive.`)
}

let myAge = 4
let yourAge = 30
if (myAge > yourAge) {
    console.log(`I'm ${myAge - yourAge} years older than you`)
} else {
    console.log(`You're ${yourAge - myAge} years older than me`)
}

// ternary operators
let aa = 4
let b = 3
aa > b
    ? console.log(`${aa} is greater than ${b}`)
    : console.log(`${b} is greater than ${aa}`)

let evenNumber = prompt('Enter a Number')
if (evenNumber % 2 == 0) {
    console.log(`${evenNumber} is an even number`)
} else {
    console.log(`${evenNumber} is an odd number`)
}

// Exercises: Level 2
let score = prompt('Enter student score')
switch (true) {
    case score >= 90 && score <= 100:
        console.log('A')
        break
    case score >= 70 && score <= 89:
        console.log('B')
        break
    case score >= 60 && score <= 69:
        console.log('C')
        break
    case score >= 50 && score <= 59:
        console.log('D')
        break
    case score >= 0 && score <= 49:
        console.log('E')
        break
    default:
        console.log('Enter a valid score')
}

let month = prompt('Enter a month')
let lowerCaseMonth = month.toLowerCase()

switch (lowerCaseMonth) {
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

let day = prompt('Enter a day')
let lowerCaseDay = day.toLowerCase()

switch (lowerCaseDay) {
    case 'saturday':
    case 'sunday':
        console.log(`${day} is a weekend`)
        break
    case 'monday':
    case 'tuesday':
    case 'wednesday':
    case 'thursday':
    case 'friday':
        console.log(`${day} is a working day :(`)
        break
    default:
        console.log(`${day} is not a valid day`)
}

// Exercises: Level 3

let monthDays = prompt('Enter a month')
let lowerCaseMonthDays = monthDays.toLowerCase()

switch (lowerCaseMonthDays) {
    case 'january':
    case 'march':
    case 'may':
    case 'july':
    case 'august':
    case 'october':
    case 'december':
        console.log(`${monthDays} has 31 days`)
        break
    case 'april':
    case 'june':
    case 'september':
    case 'november':
        console.log(`${monthDays} has 30 days`)
        break
    case 'february':
        console.log(`${monthDays} has 28 days and 29 every 4 years`)
        break
    default:
        console.log(`${monthDays} is not a valid month`)
}