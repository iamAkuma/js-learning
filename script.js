// // // // // // // let a = "HELLO"
// // // // // // // let b = "BROTHER"

// // // // // // // console.log(a + " " + b)

// // // // // // let a = true
// // // // // // let b = false
// // // // // // console.log(b && a)

// // // // // // let a = 1;
// // // // // // let b = 2;

// // // // // // console.log(a != b)


// // // // // function sayHello() {
// // // // //     console.log('Hello')

// // // // // }
// // // // // sayHello();


// // // // // function sum(a, b) {

// // // // //     console.log(a + b)
// // // // // }

// // // // // sum(40, 29)


// // // // // function sayName(name) {
// // // // //     console.log(name)
// // // // // }

// // // // // sayName('Tero Dai')


// // // // function sum1(a, b) {
// // // //     return a + b
// // // // }

// // // // let s = sum1(40, 29)
// // // // console.log(s)

// // // function sayName(name) {
// // //     return "Hello  " + name
// // // }

// // // let n = sayName('Saral')
// // // console.log(n)

// // //Arrow Functions

// // // let sumArrow = (a, b) => {
// // //     return a + b
// // // }

// // // console.log(sumArrow(1, 2))

// // // let printName = (name, age) => {
// // //     console.log(name)
// // //     console.log(age)
// // // }
// // // printName("Saral", 22)

// // // let sumArrow = (a, b) => a + b
// // // console.log(sumArrow(40, 29))

// // // let printName = (name) => "Hi " + name
// // // console.log(printName('Saral'))

// // // let hi = () => 'HI'
// // // console.log(hi())

// // //Stack Tracing and Call Stack

// // function doStuff(a, b, name) {
// //     print(sum(a, b))
// //     print(sayHi(name))
// // }

// // function print(variable) {
// //     console.log(variable)
// // }

// // function sum(a, b) {
// //     asdasd
// //     return a + b
// // }

// // function sayHi(name) {
// //     return "Hi " + name
// // }

// // doStuff(1, 2, "Saral")

// //Hoisting
// //Takes functions to the top
// //even if defined in the bottom
// //which is called hoisting
// // doesnot work in arrow functions

// console.log(sumArrow(1, 2))

// // function sum(a, b) {
// //     return a + b
// // }

// let sumArrow = (a, b) => {
//     a + b
// }


function sayHi(name) {
    let result = "Hi " + name
    console.log(result)
}

// () = > {
// esbhitra vako chai chuttai scope huncha
// so same variable huda pani it is different from the other result
// }
let result = 'Saral!'

sayHi(result)