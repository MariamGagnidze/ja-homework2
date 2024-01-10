//1)
//დაწერეთ პატარა ბიოგრაფია თქვენს შესახებ და მაქსიმალურად ჩაშალეთ ცვლადებად და console-ში უნდა მივიღო სრული ტექსტი
//მაგალითად უნდა შეიცავდეს ინფორმაციას(firstName, lastName, age, job, skills,address) გამოიყენეთ template literal მიდგომა

//answer:


let firstname = 'Mariam'
let lastname  = 'Gagnidze'
let age = 21
let job = 'Energy Project Manager'
let skills = 'untalented'
let adress = 'Tbilisi'
let User = `Hello, my name is ${firstname} 
My lastname is ${lastname} 
I am ${age} years old
 I work as a ${job} 
 I am really ${skills} person but I am trying hard 
  i live in ${adress}`


console.log(User)

//2)
//დაწერეთ პროგრამა, რომელიც იყენებს ლოგიკურ ოპერატორებს (&&, ||, ! ===)
//იმის დასადგენად, არის თუ არა მოცემული წელი 2023 ან უკვე 2024; რამენაირად გამოთვალეთ და დაწერეთ ლოგიკა
// ყველა ინფივიდულაურად დაწერეს წესით!!

//answer:

let lastYear = 2023
let thisYear = 2024
let result = lastYear > thisYear  || lastYear < thisYear

let result2 = lastYear > thisYear  && lastYear < thisYear

console.log(result)
console.log(result2)


let currentAge= 22  
// ჯერ 21ის ვარ მაგრამ ეგრე 2023 გამოდის ისევ))
let birthYear = 2002
let currentYear = currentAge + birthYear

console.log(currentYear)



//3)ააწყვეთ პატარა counter ლოგიკა სადაც გამოიყენებთ მაგალითად let x = 10; x++, x-- რომლის მიხედვითაც increment ერთ
// console-ში მეორე console-ში კი decrement!!

let x = 10
let a = x++
console.log(a)
let b = x--
console.log(b)



//4)
// let a = 10;
// let b = 12;
//
// let andOperator = a < 9 && b >= 11; //result --> false: 
// let orOperator = a > 11 0 || b < 10; //result --> false:
// let notOperator = !(a > 10); //result --> true :

