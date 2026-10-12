// // ARRAY
// const cars = ["Volvo", "Benz", "Lambogini", {
//     name: 'Bugatti',
//     year: 2026,
//     cost: 2000000,
//     colour: "Black"
// }, "Cybertruck"
// ];


// // console.log(cars);
// // console.log(cars[2]);
// // console.log(cars[3].year);

// // STRING METHODS
// const fullName = "   Oludare Dennis   " //the string have white space
// console.log(fullName.trimStart())
// console.log(fullName.trimEnd())
// console.log(fullName.trim())
// console.log(fullName.toUpperCase())
// console.log(fullName.toLowerCase())
// console.log(fullName.slice(3,6)) // take the argument of starting point and ending point.
// console.log(fullName.split())
// console.log(fullName.split(""))
// console.log(fullName.split(" "))
// console.log(fullName.startsWith('A')) //return boolean (true or false)
// console.log(fullName.endsWith('s')) //return boolean (true or false)
// console.log(fullName.startsWith(' ')) //return boolean (true or false)
// console.log(fullName.endsWith(' ')) //return boolean (true or false)

// const money = "1000"
// console.log(money.padEnd(7,0));
// console.log(money.padStart(7,0))

const names = ['naomi', 'dennis', 'john', 'john', 'naomi', 'ayo', 'brigth', 'martins', "dennis", 'dennis', 'david']
// const result = names.filter((el) => el === "dennis" || el === 'naomi')
// console.log(`Result: \n${result}`)

const arrow = (el) => {
    return el === 'dennis' || el === 'naomi'
}
const result = names.filter(arrow);
console.log('Result:', result)

const transform = (data)=>{
    return data.startsWith('d')
}
const result1 = names.filter(transform)
console.log('Result1', result1)

const check = (el)=>{
    return el.includes('o')
}
console.log('Result2:', names.filter(check))

const titleCase = (el) => {
    const trimmed = el.trim()
return `${trimmed.slice(0,1).toUpperCase()}${trimmed.slice(1).toLowerCase()}`
}

const result3 = names.map(titleCase);
console.log('Result3:', result3)

// Promise
let run = true;

const promise = new Promise((resolve, reject )=>{
    setTimeout(() => {

    if (run === true){
        resolve(result1) // The resolve can take any result from the above
    }else{ 
        reject('Could not perform operation')
    }
    }, 5000);
})

promise.then((data)=> console.log(data)).catch((err)=> console.log(err)).finally(()=> console.log('Promise Run Successfully!'))


const fs = require('fs')

fs.writeFile('./text.txt', `${result3}`, (err, data)=>{
    if (err){
        console.log('Error writing file!')
    }else{
        console.log('File created successfully!')
    }
})

const read = (path) => {
    fs.readFile(path, 'utf8', (err, data) => {
        if (err){
            console.log('Error reading file')
        }else{
            console.log(data)
        }
    })
}

// const writeToFile = (path) => {

// return new Promise((reject, resolve) => {
//     fs.writeFile(path, 'utf8', (err, data))=>{
//         if (err){
//             reject("Fail to read file")
//         }else{
//             resolve(data)
//         }
//     })
// }
// readFile('./text.txt').then