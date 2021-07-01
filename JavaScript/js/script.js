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


// **********Static Function*****************
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

// console.log(person1.greeting());


// let val;
// val = this;
// val = window;
// val = window.document;
// val = document.all;

// console.log(val);


//adding element to dom

// let olItem = document.createElement('li');

// //add id and class

// olItem.className = "a";
// olItem.id = "New-element";

// //add attributes
// olItem.setAttribute('title','A title for new element');
// olItem.appendChild(document.createTextNode('Javascript'));
// document.querySelector('ol').appendChild(olItem);


// let ulItem = document.createElement('li');
// let link = document.createElement('a');
// link.appendChild(document.createTextNode('Instagram'));
// link.setAttribute('href','https://www.instagram.com');
// ulItem.appendChild(link);
// document.querySelector('ul').appendChild(ulItem);


// console.log(ulItem);
// console.log(link);


// replesing Element**************************************

// let newHeading = document.createElement('h1');
// newHeading.appendChild(document.createTextNode('H1 new element'));

// newHeading.className = "sample-class";

// let oldHeading = document.querySelector('h3');

// let parent = document.querySelector('.container');
// // parent = oldHeading.parentElement;
// parent.replaceChild(newHeading,oldHeading);

// console.log(newHeading);
// console.log(oldHeading);


// remove elements *****************************************

// let listItem = document.querySelectorAll('li');
// let list = document.querySelector('ul');

// listItem[0].remove();
// // listItem[1].remove();



// console.log(listItem);
// console.log(list);


// Events of javascript*************************************
// function message (){
//     document.write("Message works")
// }

// event listner by javaScript******************************
// let btn = document.getElementById('sample-button').addEventListener('click', message);
// let btn = document.querySelector('.container').addEventListener('mousemove', message);
// document.querySelector('.container').style.padding='10px';
// document.querySelector('.container').style.background='red';
// function message (e){
//     let val =e;
//     val = e.target;
//     val = e.timeStamp;
//     val = e.type;
//     val = e.clientY;
//     val = e.clientX;
//     val = e.offsetY;
//     val = e.offsetX;
//     val = this;
//     this.style.background = `#${e.offsetX}`;   //Color changing using javaScript*******************************************
//     // document.write("Message works");
//     console.log(val);
//     console.log(e.offsetY);
//     console.log(e.offsetX);
// }


// document.querySelector('#name').addEventListener('focus', test);
// document.querySelector('#name').addEventListener('keyup', test2);

// function test(e){

//     this.style.background = 'yellow'
//     console.log("Focused !")
// }

// function test2(e){
//     console.log(this.value);
//     document.getElementById('para').innerText =this.value;
// }

// error Handling ************************************************

// console.log("Before Error !");
//  try{
//     test ();
//  }
// catch(err){
//     // console.log(err);
//     console.log(err.message);
//     console.log(err.name);
// }
// finally{
//     console.log("I am sagor")
// }

// console.log("After Error !")


// let a = 12;
// try{
//     if(a>15) throw "Too Big";
//     else if (a<24) throw "Too small";
// } catch(err){
//     console.log(err);
// }

// regular expression *******************************************

// let re;
// re = /hello/i;
// console.log(re);
// console.log(re.source);

// str = "Hello World! ";

// //exec() - returns result in an array or null
// let result = re.exec(str);
// console.log(result);


// let re;
// let str;

// re = /hello/i ;

// // meta character ****
// // ^ means must start with
// re = /^hello/i ;

// //$ means must end with
// re = /world$/i ;
// re = /^hello$/i ; // Must start and end with
// re = /^he.lo/i ; // .(dot) means match any character
// re = /h*llo/i ; // *(star) means zero or more times
// re = /he?llo/i; // ? means optional
// re = /hello\?/i; // escaping

// str = "Hello? World"
// console.log(re.exec(str));
// reTest(re,str);

// function reTest(re,str){
//     if(re.test(str)){
//         console.log(`'${str}' matches '${re.source}'`);
//     }
//     else{
//         console.log(`'${str}' Doesn't matches '${re.source}'`);
//     }
// }



// character set using brackets [] *******************************
// re = /h[ea]llo/i; //Must be one of them inside brackets

// //Shorthand Character **************

// re = /\w/;  // word character - alpha numeric or _
// re = /\w+/; //One or more
// re = /\W/; // Non word character
// re = /\W+/; // One or more
// re = /\d/; // Digits
// re = /\d+/; //One or more
// re = /\D/; // Non Digits
// re = /\s/; // match white space
// re = /\S/; // Match non white space
// re = /Hello\b/; // word boundary

// // Assertions
// re = /x(?=yz)/ ; //mathches x only if x is before y
// re = /x(?!yz)/ ;



// str = "hello";
// str = "+880145584554!@";
// str = "dugfdui i 1"
// str = "Hello World"
// str = "fdsugduxyz "


// console.log(re.exec(str));
// reTest(re,str);
// function reTest(re,str){
//         if(re.test(str)){
//             console.log(`'${str}' matches '${re.source}'`);
//         }
//         else{
//             console.log(`'${str}' Doesn't matches '${re.source}'`);
//         }
//     }

// Examples **********************************************

// let re;
// let str ;

// // postal code
// re = /^[0-9]{4}/ ; //  4 means the number of digits

// str = "6000";

// // Phone Number

// re = /^01[0-9]{9}$/;
// re = /^(\+)?(88)?01[0-9]{9}$/;

// str = "8801745556745";

// // Email Address

// re = /^([a-zA-Z0-9]\.?)+[^\.]@([a-zA-Z0-9]\.?)+[^\.]$/;

// str = "moh.sagor@gmail.com";

// console.log(re.test(str));



// AJAX ************ Asynchronous Programming *********************
// Get data without loading the page

// document.getElementById('get_data').addEventListener('click', loadData);

// function loadData() {
//     //Create XHR Object (XML http request)
//     let xhr = new XMLHttpRequest();
//     // console.log(xhr);

//     //Open Function
//     xhr.open('GET', 'data.txt', true);

//     xhr.onprogress = function(){
//         console.log(xhr.readyState);
//     }

//     xhr.onload = function () {
//         if (this.status == 200) {
//             document.getElementById('output').innerHTML = `<h4> ${this.responseText}</h4>`;
//             // console.log(this.responseText);

//         }
//     }
//     xhr.send();
//     console.log(xhr);
// }


// gat data from different websites *************************
// https://www.icndb.com/api/

// document.getElementById('get_data').addEventListener('click', loadJokes);

// function loadJokes(e) {
//     let number = document.getElementById('numberJokes').value;
//     // console.log(number);
//     let xhr = new XMLHttpRequest();

//     xhr.open('GET', `http://api.icndb.com/jokes/random/${number}`, true);

//     xhr.onprogress = function(){
//         document.getElementById('output').innerHTML = "<h3>Loading...........</h3>";
//     }

//     xhr.onload = function () {
//         if (this.status == 200) {
//             let data = JSON.parse(this.response);
//             // console.log(data);
//             let jokes = data.value;
//             let output = "<ol>";
//             jokes.forEach(function(item){
//                 // console.log(item.joke);
//                 output += `<li>${item.joke}</li>`;
//             });


//             output += "</ol>";

//             document.getElementById('output').innerHTML = output;
//             // console.log(jokes);
//             console.log(data);
//         }
//     }
//     xhr.send();
// }


// CallBack Function*************************************************
// setTimeout(function(){
//     console.log("Hello World");
// },2000);
// Synchronus Function **********************************************
// let person = [
//     {firstName : "Sagor", lastName : "Hossain"},
//     {firstName : "Shohag", lastName : "Hossain"}
// ]

// function createPerson(person){
//     setTimeout(function(){
//         person.push(person);
// },5000);
// }

// function getPerson(){
//     setTimeout(function(){
//         let output = '';
//         person.forEach(function(person){
//             output +=`<li>${person.firstName} ${person.lastName} </li>`
//         });
//         document.getElementById('output').innerHTML = output;
//     },1000);
// }


// Asynchronus Function ********************************************
// Promises

// let persons = [
//     {firstName : "Sagor", lastName : "Hossain"},
//     {firstName : "Shohag", lastName : "Hossain"}
// ]

// function createPerson(person){
//     let prom = new Promise(function(resolve, reject){
//         persons.push(person);
//         let error = false; // True means error
//         if(!error){
//             resolve();
//         }
//         else{
//             reject('Error! : Something wrong');
//         }
//         resolve();
//     });
//     return prom;
// }

// function getPerson(){
//     setTimeout(function(){
//         let output = '';
//         persons.forEach(function(person){
//             output +=`<li>${person.firstName} ${person.lastName} </li>`
//         });
//         document.getElementById('output').innerHTML = output;
//     },500);
// }

// createPerson({firstName : "Ruzzahan", lastName : "Islam"}).then(getPerson);
// createPerson({firstName : "Wha am ", lastName : "i"}).then(getPerson).catch(function(err){
//     console.log(err);
// });

// Fetch API ********************************************************
//fetch uses JavaScript Promise

// document.getElementById("get_data").addEventListener('click',getData);

// // Arrow Function *****************

// function getData(){
//     fetch('http://api.icndb.com/jokes/random').then(res => res.json() )
//     .then(data => {console.log(data);})
//     .catch(err => {console.log(err);});
// }


// JavaScript Project ***********************************************


// Define Element

let form = document.querySelector('#task_form');
let taskList = document.querySelector('ul');
let clearBtn = document.querySelector('#clear_task_btn');
let filter = document.querySelector('#task_filter');
let taskInput = document.querySelector('#new_task');

// Define Event listner

form.addEventListener('submit', addTask);



//Define Function

//Add Task
function addTask(e){
    if(taskInput.value === ''){
        alert("Add a Task");
    }
    else{
        // create li element
        let li = document.createElement('li');
        li.appendChild(document.createTextNode(taskInput.value + " "));
        taskList.appendChild(li);
    }
}
