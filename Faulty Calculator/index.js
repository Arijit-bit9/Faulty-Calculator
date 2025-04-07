let random = Math.random()
console.log (random)
let a = prompt ("Enter first number")
let op = prompt ("Enter operator")
let b = prompt ("Enter second number")  

let obj = {
    '+': '-',
    '*': '+',
    '-': '/',
    '/': '**',

}

if (random > 0.1){
    //perform correct operation
    console.log (`The result is ${a} ${op} ${b}`)
    alert (`The result is ${eval (`${a} ${op} ${b}`)}`)
}
else{
    //perform wrong operation
   op = obj[op]
   alert (`The result is ${eval (`${a} ${op} ${b}`)}`)
}
