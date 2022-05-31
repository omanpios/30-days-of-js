for (i = 0; i <= 5; i++) {
    // //console.log(i)
}

for (i = 5; i >= 0; i--) {
    // //console.log(i)
}

const countries = ['Finland', 'Sweden', 'Denmark', 'Norway', 'Iceland']
let upperCaseCountries = []
for (let i = 0; i < countries.length; i++) {
    upperCaseCountries.push(countries[i].toUpperCase())
}
//console.log(upperCaseCountries)

// sum all elements from array
const numbers = [10, 20, 30, 40, 50, 60]
let sum = 0
for (let i = 0; i < numbers.length; i++) {
    sum = sum + numbers[i]
}
//console.log(sum)


const powerNumbers = []
for (let i = 0; i < numbers.length; i++) {
    powerNumbers.push(numbers[i] ** 2)
}
//console.log(powerNumbers)

// While loop
let j = 0
while (j <= 3) {
    //console.log(j)
    j++
}

// Do while loop
let k = 0
do {
    //console.log(k)
    k++
} while (k <= 4)

// For loop
for (const num of numbers) {
    //console.log(num)
}

//sum numbers from array
let sum2 = 0
for (const num of numbers) {
    sum2 = sum2 + num
}
//console.log(sum2)

//print all elements from array

for (const country of countries) {
    //console.log(country) //print all countries
    //console.log(country[0]) // print first letter of each element
}

for (i = 0; i < 5; i++) {
    if (i === 3) {
        break // 0, 1, 2
    }
    //console.log(i)
}

for (i = 0; i < 5; i++) {
    if (i === 3) {
        continue // 0, 1, 2, 4, 5
    }
    //console.log(i)
}


// Exercises: Level 1
const countries2 = [
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
    'Kenya',
    'Iceland'
]
const webTechs = [
    'HTML',
    'CSS',
    'JavaScript',
    'React',
    'Redux',
    'Node',
    'MongoDB'
]

const mernStack = ['MongoDB', 'Express', 'React', 'Node']

let numberOne = []
for (i = 0; i < 11; i++) {
    numberOne.push(i)
} console.log(numberOne)

let l = -1
while (l < 10) {
    l++
    numberOne.push(l)
} console.log(numberOne)

let m = -1
do {
    m++
    numberOne.push(m)
} while (m < 10)
console.log(numberOne)

let numberTwo = []
for (i = 10; i >= 0; i--) {
    numberTwo.push(i)
} console.log(numberTwo)

let l2 = 11
while (l2 > 0) {
    l2--
    numberTwo.push(l2)
} console.log(numberTwo)

let m2 = 11
do {
    m2--
    numberTwo.push(m2)
} while (m2 > 0)
console.log(numberTwo)

let n = prompt('Enter a number')
let nArray = []
for (i = 0; i <= n; i++) {
    nArray.push(i)
} console.log(nArray)

for (i = 0; i <= n; i++) {
    console.log("#".repeat(i))
}

for (i = 0; i <= 10; i++) {
    console.log(`${i} x ${i} = ${i * i}`)
}

for (i = 0; i <= 10; i++) {
    console.log(`${i}   ${i ** 2}    ${i ** 3}`)
}

let evenNumbers = []
for (i = 0; i <= 100; i++) {
    if (i % 2 == 0) {
        evenNumbers.push(i)
    }
}
let sumEven = 0
for (const num of evenNumbers) {
    sumEven += num
} console.log(`Sum of all even numbers from 0 to 100 is ${sumEven}`)


let oddNumbers = []
for (i = 0; i <= 100; i++) {
    if (i % 2 != 0) {
        oddNumbers.push(i)
    }
}
let sumOdd = 0
for (const num of oddNumbers) {
    sumOdd += num
} console.log(`Sum of all odd numbers from 0 to 100 is ${sumOdd}`)

let total = []
for (i = 0; i <= 100; i++) {
    total.push(i)
}
let sum3 = 0
for (const num of total) {
    sum3 += num
} console.log(`Sum of numbers from 0 to 100 is ${sum3}`)

let totalSum = []
totalSum.push(sumEven, sumOdd)
console.log(totalSum)

let array = []
let items = 10
for (i = 0; i <= items; i++) {
    array.push(i)
}
let randomNumber = Math.floor(Math.random() * array.length)
console.log(`Random between ${array[0]} and ${array[array.length - 1]} is ${randomNumber}`)


let randomArray = []
for (i = 0; randomArray.length < 5; i++) {
    let randomNumber = Math.floor(Math.random() * array.length)
    if (randomArray.sort().indexOf(randomNumber) != -1) {
        continue
    } else {
        randomArray.push(randomNumber)
    }
}
console.log(randomArray)

let randomKey = []
let alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j"]
let aphaNumeric = array.concat(alphabet)
for (i = 0; randomKey.length < 6; i++) {
    let randomNumber = Math.floor(Math.random() * aphaNumeric.length)
    if (randomArray.sort().indexOf(randomNumber) != -1) {
        continue
    } else {
        randomKey.push(aphaNumeric[randomNumber])
    }
} console.log(randomKey.join('').toUpperCase())


// Exercises: Level 2

letAnyNumberCharRandomId = []
for (i = 0; letAnyNumberCharRandomId.length < (Math.floor(Math.random() * 20)); i++) {
    let randomNumber = Math.floor(Math.random() * aphaNumeric.length)
    letAnyNumberCharRandomId.push(aphaNumeric[randomNumber])
} console.log(letAnyNumberCharRandomId.join('').toUpperCase())


randomHex = (Math.floor(Math.random() * 100)).toString(16)
console.log(`${randomHex} is hexa of ${parseInt(randomHex, 16)}`)


let rgbRange = []
for (i = 0; i < 3; i++) {
    rgbRange[i] = Math.floor(Math.random() * 255)
}
console.log(`RGB(${rgbRange})`)

let newCountries = []
for (i = 0; i < countries2.length; i++) {
    newCountries.push(countries2[i].toUpperCase())
} console.log(newCountries)

let countriesLenght = []
for (i = 0; i < countries2.length; i++) {
    countriesLenght.push(countries2[i].length)
} console.log(countriesLenght)


let countriesInfo = []
for (i = 0; i < countries2.length; i++) {
    let country = []
    country.push(newCountries[i], newCountries[i].slice(0, 3), countriesLenght[i])
    countriesInfo.push(country)
} console.log(countriesInfo)

for (i = 0; i < countriesInfo.length; i++) {
    if (countriesInfo[i][0].search('LAND') === -1) {
        continue
    } else {
        console.log(countriesInfo[i][0])
    }
}

for (i = 0; i < countriesInfo.length; i++) {
    if (countriesInfo[i][0].search('IA') === -1) {
        continue
    } else {
        console.log(countriesInfo[i][0])
    }
}

let lgnth = 0
let longest = ''
for (i = 0; i < countries2.length; i++) {
    if (countries2[i].length > lgnth) {
        lgnth = countries2[i].length
        longest = countries2[i]
    }
} console.log(longest)

for (i = 0; i < countries2.length; i++) {
    if (countries2[i].length === 5) {
        console.log(`Countries with 5 char ${countries2[i]}`)
    }
}

for (i = 0; i < webTechs.length; i++) {
    if (webTechs[i].length > lgnth) {
        lgnth = webTechs[i].length
        longest = webTechs[i]
    }
} console.log(longest)

let webTechsLenght = []
for (i = 0; i < webTechs.length; i++) {
    let length = []
    length.push(webTechs[i], webTechs[i].length)
    webTechsLenght.push(length)
} console.log(webTechsLenght)

let mernAcro = []
for (i = 0; i < mernStack.length; i++) {
    let initialLetter = mernStack[i].slice(0, 1)
    mernAcro.push(initialLetter)
} console.log(mernAcro.join(''))


for (i = 0; i < webTechs.length; i++) {
    console.log(webTechs[i])
}

let fruit = ['banana', 'orange', 'mango', 'lemon', 'pinneaple']
let reversedFruit = []
for (i = fruit.length - 1; i >= 0; i--) {
    reversedFruit.push(fruit[i])
} console.log(reversedFruit)

const fullStack = [
    ['HTML', 'CSS', 'JS', 'React'],
    ['Node', 'Express', 'MongoDB']
]

for (const tech of webTechs) {
    console.log(tech)
}

const countriesArray = [
    'Afghanistan',
    'Albania',
    'Algeria',
    'Andorra',
    'Angola',
    'Antigua and Barbuda',
    'Argentina',
    'Armenia',
    'Australia',
    'Austria',
    'Azerbaijan',
    'Bahamas',
    'Bahrain',
    'Bangladesh',
    'Barbados',
    'Belarus',
    'Belgium',
    'Belize',
    'Benin',
    'Bhutan',
    'Bolivia',
    'Bosnia and Herzegovina',
    'Botswana',
    'Brazil',
    'Brunei',
    'Bulgaria',
    'Burkina Faso',
    'Burundi',
    'Cambodia',
    'Cameroon',
    'Canada',
    'Cape Verde',
    'Central African Republic',
    'Chad',
    'Chile',
    'China',
    'Colombi',
    'Comoros',
    'Congo (Brazzaville)',
    'Congo',
    'Costa Rica',
    "Cote d'Ivoire",
    'Croatia',
    'Cuba',
    'Cyprus',
    'Czech Republic',
    'Denmark',
    'Djibouti',
    'Dominica',
    'Dominican Republic',
    'East Timor (Timor Timur)',
    'Ecuador',
    'Egypt',
    'El Salvador',
    'Equatorial Guinea',
    'Eritrea',
    'Estonia',
    'Ethiopia',
    'Fiji',
    'Finland',
    'France',
    'Gabon',
    'Gambia, The',
    'Georgia',
    'Germany',
    'Ghana',
    'Greece',
    'Grenada',
    'Guatemala',
    'Guinea',
    'Guinea-Bissau',
    'Guyana',
    'Haiti',
    'Honduras',
    'Hungary',
    'Iceland',
    'India',
    'Indonesia',
    'Iran',
    'Iraq',
    'Ireland',
    'Israel',
    'Italy',
    'Jamaica',
    'Japan',
    'Jordan',
    'Kazakhstan',
    'Kenya',
    'Kiribati',
    'Korea, North',
    'Korea, South',
    'Kuwait',
    'Kyrgyzstan',
    'Laos',
    'Latvia',
    'Lebanon',
    'Lesotho',
    'Liberia',
    'Libya',
    'Liechtenstein',
    'Lithuania',
    'Luxembourg',
    'Macedonia',
    'Madagascar',
    'Malawi',
    'Malaysia',
    'Maldives',
    'Mali',
    'Malta',
    'Marshall Islands',
    'Mauritania',
    'Mauritius',
    'Mexico',
    'Micronesia',
    'Moldova',
    'Monaco',
    'Mongolia',
    'Morocco',
    'Mozambique',
    'Myanmar',
    'Namibia',
    'Nauru',
    'Nepal',
    'Netherlands',
    'New Zealand',
    'Nicaragua',
    'Niger',
    'Nigeria',
    'Norway',
    'Oman',
    'Pakistan',
    'Palau',
    'Panama',
    'Papua New Guinea',
    'Paraguay',
    'Peru',
    'Philippines',
    'Poland',
    'Portugal',
    'Qatar',
    'Romania',
    'Russia',
    'Rwanda',
    'Saint Kitts and Nevis',
    'Saint Lucia',
    'Saint Vincent',
    'Samoa',
    'San Marino',
    'Sao Tome and Principe',
    'Saudi Arabia',
    'Senegal',
    'Serbia and Montenegro',
    'Seychelles',
    'Sierra Leone',
    'Singapore',
    'Slovakia',
    'Slovenia',
    'Solomon Islands',
    'Somalia',
    'South Africa',
    'Spain',
    'Sri Lanka',
    'Sudan',
    'Suriname',
    'Swaziland',
    'Sweden',
    'Switzerland',
    'Syria',
    'Taiwan',
    'Tajikistan',
    'Tanzania',
    'Thailand',
    'Togo',
    'Tonga',
    'Trinidad and Tobago',
    'Tunisia',
    'Turkey',
    'Turkmenistan',
    'Tuvalu',
    'Uganda',
    'Ukraine',
    'United Arab Emirates',
    'United Kingdom',
    'United States',
    'Uruguay',
    'Uzbekistan',
    'Vanuatu',
    'Vatican City',
    'Venezuela',
    'Vietnam',
    'Yemen',
    'Zambia',
    'Zimbabwe'
]

let sortedCountries = []
sortedCountries.push(countriesArray.sort())
console.log(sortedCountries)

let countriesLand = []
for (i = 0; i < countriesArray.length; i++) {
    if (countriesArray[i].search('land') === -1) {
        continue
    } else {
        countriesLand.push(countriesArray[i])
    }
} console.log(countriesLand)


let controlLgnth = 0
let longestCountryName = ''
for (i = 0; i < countriesArray.length; i++) {
    if (countriesArray[i].length > controlLgnth) {
        controlLgnth = countriesArray[i].length
        longestCountryName = countriesArray[i]
    }
} console.log(longestCountryName)


let fourLetterCountries = []
for (i = 0; i < countriesArray.length; i++) {
    if (countriesArray[i].length != 4) {
        continue
    } else {
        fourLetterCountries
    .push(countriesArray[i])
    }
} console.log(fourLetterCountries)

let countriesWithSpaces = []
for (i = 0; i < countriesArray.length; i++) {
    if (countriesArray[i].search(' ') === -1) {
        continue
    } else {
        countriesWithSpaces.push(countriesArray[i])
    }
} console.log(countriesWithSpaces)

let reversedCountries = []
for (i = countriesArray.length - 1; i >= 0; i--) {
    reversedCountries.push(countriesArray[i].toLocaleUpperCase())
} console.log(reversedCountries)