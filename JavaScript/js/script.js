// console.log("Hi this is sagor ");
// console.log("This is testing");
// document.write("Js file is connected");

// var x;
// x = prompt("Enter value");
// console.log(x);
// document.write(x);

// var Myvar , myvar;
// Myvar = "asadfdf"
// myvar = "qwerrt"

// document.write(Myvar);
// document.write(myvar);

// const a = 2;

// Operator + - * / %

// var a = 2;
// var b = 3;
// // var c = a + b;
// // var c = a - b;
// var c = a ** b;
// // var c = a / b;
// document.write(c)

// increment
// var a = 8;
// a++;
// // a--;
// document.write(a);


// var a = 5;
// var b = 6;
// var c,d ;
// c = a++;
// d = ++b;
//  document.write(c);
//  document.write(d);


// var line1 = "Hello "
// var line2 = "36"
// document.write(line1+line2)


// var C = prompt("Enter value");
// var F = (9/5)*C+32;
// alert("Fahrenhite: " +F+ " Degree");
// console.log("Task Complete");



// ES6 feature
// Template literals 
// console.log(`First line
// Second Line`)

// `` = backtik
// var name = "Rahim"
// var age = 25;
// var DOB = 1990
// console.log(`His name is ${name}
// His age is ${age}
// His date of Birth ${DOB}`);

// let a = 35;
// let b = 28;
// console.log(`${a} + ${b} = ${a+b}`);



// ********control flow ************
// if statement ?

// var a;
// a = prompt("Enter value of a");
// var b;
// b = prompt("Enter value of b");

// if(a>b){
//     console.log(`a = ${a} is Big`);
//     document.write(`a = ${a} is Big`);
// }
// else if (a<b){
//     console.log(`b = ${b} is Big`);
//     document.write(`b = ${b} is Big`);
// }
// else{
//     console.log(`a = ${a} and b = ${b} is equal `);
//     document.write(`a = ${a} and b = ${b} is equal `);
// }


// Switch 

// console.log(`Select a option :
//  a. op-1 
//  b. op-2 
//  c. op-3`);
// choice = prompt();
// var text;
// switch (choice) {
//     case "a":
//         text = "Option 1 selected";
//         break;
//     case "b":
//         text = "Option 2 selected";
//         break;
//     case "c":
//         text = "Option 3 selected";
//         break;
//     default:
//         text = "no Option is selected";
//         break;
// }
// document.write(text);


// Get Result
// var marks = prompt("Enter Marks : ");

// if (marks >= 80 && marks <=100){
//     console.log("You Get A+");
//     document.write("You Get A+");
// }
// else if (marks <= 79 && marks >=70){
//     console.log("You Get A");
//     document.write("You Get A");
// }
// else if (marks <= 69 && marks >=60){
//     console.log("You Get B");
//     document.write("You Get B");
// }
// else if (marks <= 59 && marks >=50){
//     console.log("You Get c");
//     document.write("You Get c");
// }
// else if (marks <= 49 && marks >=33){
//     console.log("You Get d");
//     document.write("You Get d");
// }
// else if (marks <= 33 && marks >=0){
//     console.log("You Get f");
//     document.write("You Get f");
// }
// else{
//     console.log("Invalid Input");
//     document.write("Invalid Input");
// }


// String 
// let name = "Sagor Hossain"
// let food = ["cake","biscuit","Icecream"]
// let len = food.length;
//  for (var i = 0; i<len; i++){
//      console.log(food[i]);
//  }

// **********************************************
// for in 
// for of 

// let name = "Sagor Hossain"
// let food = ["cake","biscuit","Icecream"]

// object doesnt have index 
// let person = {
//     name : "Sagor Hossain",
//     age  : 25,
//     blood : "B+ve",
// }

// use in for index 
// for (var x in food ){
//     console.log(x);

// }

// use of for get value 
//  for (var x of food){
//      console.log(x);
//  }



// *************************** 
// var n = parseInt(prompt("Enter the number : "));
// var sum = 0;
// var series = "";

// for (var i = 1 ; i<=n;i++){
//     sum += i*i;
//     series += (i*i).toString();
//     if (i==n){
//         continue;
//     }
//     series +=" + ";

// }
// console.log(`${series} = ${sum}`);


