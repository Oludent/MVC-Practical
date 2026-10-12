const name = "    denNis   ";
const trim = name.trim()
const firstLetter = trim.slice(0, 1).toUpperCase();
const remainingLetter = trim.slice(1).toLowerCase();
const fullName = `${firstLetter}${remainingLetter}`
console.log(fullName)

// const titleCase = (el)=>{
//     const trim = el.trim();
// return `${trim.slice(0,1).toUpperCase()}${trim.slice(1).toLowerCase()}`
// }

// console.log(titleCase('dennis'))