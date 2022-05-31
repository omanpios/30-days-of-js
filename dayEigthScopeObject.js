
const rectangle = {
    length: 20,
    width: 10
}
console.log(rectangle)

const person = {
    firstName: 'Omar',
    lastName: 'Pinilla',
    age: 34,
    country: 'Colombia',
    city: 'Cali',
    'phone number': '+573058184856',
    skills: [
        'Selenium',
        'Rest Assured',
        'JavaScript',
        'Cypress.io',
        'Java'
    ],
    getFullName: function () {
        return `My name is ${this.firstName} ${this.lastName}. \nI live in ${this.city}. \nI'm ${this.age} years old`
    }
}
person.nationality = 'Ethiopian'
person.skills.push('JAVA')
console.log(person.getFullName())
console.log(person['phone number'])
console.log(person)

// copy an object
const copyPerson = Object.assign({}, person)
console.log(copyPerson)

// get just the keys of the object
const keys = Object.keys(copyPerson)
console.log(keys)

// get keys and values in an array
const entries = Object.entries(copyPerson)
console.log(entries)

// check if a specific key exists in an object
console.log(person.hasOwnProperty('name'))
console.log(person.hasOwnProperty('lastName'))

// Exercises: Level 1
// 1
const cat = {
    catName: 'Michin',
    legs: 4,
    color: 'Black and white',
    meow: function () {
        return 'meow... meoowwwww'
    }
}
console.log(cat)
console.log(cat.meow())

cat.breed = 'mix'
cat.getCatInfo = function () { return `My cat is ${cat.catName}` }

console.log(cat.getCatInfo())
console.log(cat)

// Exercises: Level 2
const users = {
    Alex: {
        email: 'alex@alex.com',
        skills: ['HTML', 'CSS', 'JavaScript'],
        age: 20,
        isLoggedIn: false,
        points: 30
    },
    Asab: {
        email: 'asab@asab.com',
        skills: ['HTML', 'CSS', 'JavaScript', 'Redux', 'MongoDB', 'Express', 'React', 'Node'],
        age: 25,
        isLoggedIn: false,
        points: 50
    },
    Brook: {
        email: 'daniel@daniel.com',
        skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux'],
        age: 30,
        isLoggedIn: true,
        points: 50
    },
    Daniel: {
        email: 'daniel@alex.com',
        skills: ['HTML', 'CSS', 'JavaScript', 'Python'],
        age: 20,
        isLoggedIn: false,
        points: 40
    },
    John: {
        email: 'john@john.com',
        skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux', 'Node.js'],
        age: 20,
        isLoggedIn: true,
        points: 50
    },
    Thomas: {
        email: 'thomas@thomas.com',
        skills: ['HTML', 'CSS', 'JavaScript', 'React'],
        age: 20,
        isLoggedIn: false,
        points: 40
    },
    Paul: {
        email: 'paul@paul.com',
        skills: ['HTML', 'CSS', 'JavaScript', 'MongoDB', 'Express', 'React', 'Node'],
        age: 20,
        isLoggedIn: false,
        points: 40
    }
}


const obj = Object.entries(users)
let objName = 'skills'

let iterable = new Map([["a", 1], ["b", 2], ["c", 3]]);

for (let entry of obj) {
    for (let down of entry) {
        console.log(down.skills)
    }
}


const countries = {
    countryName: 'Colombia',
    capitalCity: 'Bogota',
    populations: 50000000,
    languages: 'spanish'
}
console.log(`${countries.countryName}'s capital city is ${countries.capitalCity}. Population is around ${countries.populations} and is main language is ${countries.languages}`)


const personAccount = {
    firstName: 'Omar',
    lastName: 'Pinilla',
    incomes: {
        salary: 5000000,
        rent: 100000
    },
    expenses: {
        loan: 30000,
        education: 3000000
    },
    addIncome: function (a = 555) {
        personAccount.incomes.apartment = a
    },
    addExpense: function (a = 999) {
        personAccount.expenses.apartment = a
    },
    totalIncome: function () {
        this.addIncome()
        let incomes = Object.values(personAccount.incomes)
        let sum = 0
        for (i = 0; i < incomes.length; i++) {
            sum += incomes[i]
        }
        return sum
    },
    totalExpense: function () {
        this.addExpense()
        let expenses = Object.values(personAccount.expenses)
        let sum = 0
        for (i = 0; i < expenses.length; i++) {
            sum += expenses[i]
        }
        return sum
    },
    accountBalance: function () {
        let balance = this.totalIncome() - this.totalExpense()
        return balance
    }

}
console.log(personAccount.accountBalance())


// ****************** //
const users2 = [
    {
        _id: 'ab12ex',
        username: 'Alex',
        email: 'alex@alex.com',
        password: '123123',
        createdAt: '08/01/2020 9:00 AM',
        isLoggedIn: false
    },
    {
        _id: 'fg12cy',
        username: 'Asab',
        email: 'asab@asab.com',
        password: '123456',
        createdAt: '08/01/2020 9:30 AM',
        isLoggedIn: true
    },
    {
        _id: 'zwf8md',
        username: 'Brook',
        email: 'brook@brook.com',
        password: '123111',
        createdAt: '08/01/2020 9:45 AM',
        isLoggedIn: true
    },
    {
        _id: 'eefamr',
        username: 'Martha',
        email: 'martha@martha.com',
        password: '123222',
        createdAt: '08/01/2020 9:50 AM',
        isLoggedIn: false
    },
    {
        _id: 'ghderc',
        username: 'Thomas',
        email: 'thomas@thomas.com',
        password: '123333',
        createdAt: '08/01/2020 10:00 AM',
        isLoggedIn: false
    }
];

const products = [
    {
        _id: 'eedfcf',
        name: 'mobile phone',
        description: 'Huawei Honor',
        price: 200,
        ratings: [
            { userId: 'fg12cy', rate: 5 },
            { userId: 'zwf8md', rate: 4.5 }
        ],
        likes: []
    },
    {
        _id: 'aegfal',
        name: 'Laptop',
        description: 'MacPro: System Darwin',
        price: 2500,
        ratings: [],
        likes: ['fg12cy']
    },
    {
        _id: 'hedfcg',
        name: 'TV',
        description: 'Smart TV:Procaster',
        price: 400,
        ratings: [{ userId: 'fg12cy', rate: 5 }],
        likes: ['fg12cy']
    }
]




var coleccionDeDiscos = {
    7853: {
        tituloDelAlbum: 'Bee Gees Greatest',
        artista: 'Bee Gees',
        canciones: ['Staying Alive']
    },
    5439: {
        tituloDelAlbum: 'ABBA Gold'
    }
}
function actualizarDiscos(discos, id, propiedad, valor) {
    if (valor === "") {
        delete discos[id][propiedad];
    } else if (propiedad === 'canciones') {
        discos[id][propiedad] = discos[id][propiedad] || [];
        discos[id][propiedad].push(valor);
    } else {
        discos[id][propiedad] = valor;
    }
}
console.log(coleccionDeDiscos[7853].tituloDelAlbum)
actualizarDiscos(coleccionDeDiscos, 7853, 'tituloDelAlbum', "Greatest");
console.log(coleccionDeDiscos[7853])


console.log('****************')

/*         _id: 'ab12ex',
        username: 'Alex',
        email: 'alex@alex.com',
        password: '123123',
        createdAt:'08/01/2020 9:00 AM',
        isLoggedIn: false
         */
const signUp = username => {
    let user = users2.find(o => o.username === username)
    const createUser = newUser =>{
        users2.push
    }
}
console.log(signUp('Alex'))