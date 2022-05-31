// Declare a variable named challenge and assign it to an initial value '30 Days Of JavaScript'.
console.log('*************** Here starts day two ***************')
let text = '30 Days Of JavaScript'
console.log(text)
console.log(text.length)
console.log(text.toLocaleUpperCase())
console.log(text.toLowerCase())
console.log(text.slice(3, 21))
console.log(text.slice(0, 3))
console.log(text.includes('Script'))
console.log(text.split())
console.log(text.split(' '))
console.log(text.replace('JavaScript', 'Python'))
console.log(text.charAt(15))
console.log(text.charCodeAt('J'))
console.log(text.indexOf('a'))
console.log(text.lastIndexOf('a'))

let seventeen = 'You cannot end a sentence with because because because is a conjunction'
console.log(seventeen.indexOf('because'))
console.log(seventeen.lastIndexOf('because'))
console.log(seventeen.search('because'))

let trim = ' 30 Days Of JavaScript'
console.log(trim.trim())
console.log(text.startsWith('30'))
console.log(text.endsWith('pt'))

let patternA = /a/gi
console.log(text.match(patternA))

let concat = '30 Days of'
console.log(concat.concat(' JavaScript'))
console.log(text.repeat(2))

// level 2
console.log('*************** Here starts day two level 2 ***************')
let firstQuote = 'There is no exercise better for the heart than reaching down and lifting people up.'
console.log(firstQuote)
let secondQuote = "Love is not patronizing and charity isn't about pity, it is about love.\
                    \nCharity and love are the same -- with charity you give love, so don't\
                    \njust give money but reach out your hand instead."
console.log(secondQuote)

console.log(typeof ('10'))
console.log(parseInt('9.89'))

let python = 'Python'
console.log(python.search('on'))

console.log(Math.floor(Math.random() * 100))
console.log(Math.floor(Math.random() * 50) + 50)
console.log(Math.floor(Math.random() * 255))

let js = 'JavaScript'
let random = Math.floor(Math.random()*10)

console.log(js[random])

let pattern =   '1 1 1 1 1\
                \n2 1 2 4 8\
                \n3 1 3 9 27\
                \n4 1 4 16 64\
                \n5 1 5 25 125'
console.log(pattern)

// level 3
let loveQuote = 'Love is the best thing in this world. Some found their love and some are still looking for their love.'
let patternLove = /love/gi
console.log(loveQuote.match(patternLove))

const sentence = '%I $am@% a %tea@cher%, &and& I lo%#ve %te@a@ching%;. The@re $is no@th@ing; &as& mo@re rewarding as educa@ting &and& @emp%o@weri@ng peo@ple. ;I found tea@ching m%o@re interesting tha@n any ot#her %jo@bs. %Do@es thi%s mo@tiv#ate yo@u to be a tea@cher!? %Th#is 30#Days&OfJavaScript &is al@so $the $resu@lt of &love& of tea&ching'
let regEx = /[$%@#&!?;]/g
let cleanSentence = sentence.replace(regEx, '')
console.log(cleanSentence)


const income = 'He earns 5000 euro from salary per month, 10000 euro annual bonus, 15000 euro online courses per month.'
let numRegEx = /\d+/g
console.log(income.match(numRegEx))