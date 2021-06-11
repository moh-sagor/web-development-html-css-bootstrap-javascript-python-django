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



// ********************************************************** 
// var food = ["cake","Ice-cream","chocolate"]; 
// var numbers = [1,3,5,7];

// food.forEach(function(item,i){ // item => index => array 
//     console.log(`Index : ${i} and Item : ${item}`);
// });


// array iteration using maping 

// var food = ["cake","Ice-cream","chocolate"]; 
// var numbers = [1,3,5,7];

// function addSomething(item){
//     return `${item} is a food`
// }
// let store=food.map(addSomething);
// console.log(store);

// *******************************************************
// Object methods 

// let person = {
//     firstname : "sagor",
//     lastname : "hossain",
//     age : 25,
//     dob : 1998,

// fullname: function(){
//     return `${this.firstname} ${this.lastname}`;
//     }
// }

// console.log(person.fullname());
// console.log(person.firstname);

// let str = "Bangladesh";
// console.log(str.length);
// console.log(str.split());


// let val;
// let today = new Date();
// val = today.getMonth();
// console.log(val);

// class person {
//     constructor(fname,lname,birth){
//         this.firstname = fname;
//         this.lastname = lname;
//         this.dob = birth;
//     }

//     calculateAge(){
//         let birth = new Date(this.dob);
//         let diff = Date.now() - this.dob.getTime();
//         let ageDate = new Date(diff);
//         return Math.abs(ageDate.getUTCFullYear()-1970);
//     }
// }

// let person1 = new person("Sagor", "Hossain", "01-10-1999");
// let person2 = new person("sohag", "Hossain", "12-10-1999");
// let person3 = new person("Sanzida", "Mohuya", "20-10-1999");
// // console.log(person1);
// // console.log(person2);
// // console.log(person3);

// console.log(person1.calculateAge());
// console.log(person2.calculateAge());
// console.log(person3.calculateAge());



// class person {
//     constructor(fname,lname){
//         this.firstname = fname;
//         this.lastname = lname;
//     }
//     greeting(){
//         return `Hello ${this.firstname} ${this.lastname}`;

//     }


// static test(){
//     console.log("I am static.");
//     }
// }

// let person1 = new person ("Sagor", "Hossain");

// console.log(person.greeting);
// console.log(person.test());

