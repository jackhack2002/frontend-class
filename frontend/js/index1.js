// import {PI,getArea,getCircumference,myName} from "./math_util.js"


// import * as MathUtil from "./math_util.js"

// console.log(PI);
// let Circumference = getCircumference(10)
// console.log(Circumference);
// let area = getArea(10);
// console.log(area);

// console.log(PI);
// console.log(getCircumference(10));
// console.log(getArea(10));

// let pi=MathUtil.PI
// console.log(pi);
// let Circumference=MathUtil.getCircumference(10);
// console.log(Circumference);
// let area=MathUtil.getArea(10);
// console.log(area);

// console.log(MathUtil.PI);
// console.log(MathUtil.getCircumference(10));
// console.log(MathUtil.getArea(10));

// let name = window.prompt("Enter your Name");
// MathUtil.myName(name);

// let name = window.prompt("Enter your Name");

// myName(name);














// let myNum = 19;
// myNum = myNum.toLocaleString("en-US"); //en US
// myNum = myNum.toLocaleString("hi-IN"); //hindi
// myNum = myNum.toLocaleString("de-DE"); // german
// myNum = myNum.toLocaleString("en-US",{style: "currency", currency: "USD"}); 
// myNum = myNum.toLocaleString("hi-IN",{style: "currency", currency: "INR"}); 
// myNum = myNum.toLocaleString("de-DE",{style: "currency", currency: "EUR"}); 
// myNum = myNum.toLocaleString(undefined,{style: "percent"}); 
// myNum = myNum.toLocaleString(undefined,{style: "unit", unit:"celsius"}); 
// console.log(myNum);



// Number guess game

// const answer = Math.floor(Math.random()*10+1);

// let guesses = 0;

// document.getElementById("submitButton").onclick = function() {
//     let guess=document.getElementById("guessId").value;
//     guesses++;

//     if (guess==answer) {
//         // alert(`${answer} is the number, it took you ${guesses} guesses`);
//         console.log("Your guess is right")
//     }else if(guess<answer){
//         alert("Too small");
//     }else{
//         alert("Too Large");
//     }
// }

// temperature conversion

// document.getElementById("submitButton").onclick = function(){
//   let temp = document.getElementById("textBox").value;
//   temp=Number(temp);

//   celsius = document.getElementById("cButton");
//   fahrenheit = document.getElementById("fButton");

//   if (celsius.checked) {
//     temp = toCelsius(temp);
//     document.getElementById("tempLabel").innerHTML = temp+"°C";
    
//   }else if (fahrenheit.checked){
//     temp = toFahrenheit(temp);
//     document.getElementById("tempLabel").innerHTML = temp+"°F";

    
//   }else{
//     document.getElementById("tempLabel").innerHTML = "Select the unit"
//   }
// function toCelsius(temp){
//     return (temp - 32 * (5/9));
// }
// function toFahrenheit(temp){
//     return (temp *9/5+32);
// }  
// }

// let fruits = ["apple","orange","banana"];
// fruits[1]= "coconut";
// push --> it will add an element
// fruits.push("lemon");
// unshift --> this will add the elements at the beginning
// fruits.unshift("Mango");
// shift --> this will remove the element at the beginning
// fruits.shift();
// let length= fruits.length;
// let index = fruits.indexOf("banana");
// console.log(index);

// let prices =[5,10,15,20];
// console.log(prices);
// for (let i = prices.length-1; i >=0; i-=1) {
//   console.log(prices[i]);
// }
// for (let price of prices){
//   console.log(price);
// }
// let fruits = ["banana","apple","mango","orange"];
// // fruits=fruits.sort();
// fruits=fruits.sort().reverse();

// for(let fruit of fruits){
//   console.log(fruit);
// }

// let fruits=["apple","banana","orange"];

// let vegetables = ["carrots","onions","potatos"];

// let meats = ["eggs","chicken","fish"];

// let groceryList = [fruits,vegetables,meats];

// groceryList[1][3]="mangoes"

// // console.log(groceryList);


// for(let list of groceryList){
//   // console.log(list);
//   for(let food of list){
//     console.log(food);
//   }

// }
// let userName = "jacob"
// let numbers = [1,2,3,4,5,6,7,8,9];
// console.log(...numbers);
// console.log(...userName);
// let maximum = Math.max(...numbers);
// console.log(maximum);

// let class1 = ["sunil","harish","suresh"];

// let class2 = ["ameen","anbu","ashik"];
// class1.push(...class2);
// console.log(class1);
// let a=1;
// let b=2;
// let c=3;
// let d=4;
// let e=5;
// console.log(sum(a,b,c,d));
// function sum(a,b,c,d) {
//   return a+b+c+d;
// }

// function sum(...numbers) {
//   let total = 0;
//   for(let number of numbers){
//     total = total+number;
//   }
//   return total;
// }

// sum(2,3, displayConsole);
// sum(2,3, displayDOM);


// function sum(x,y, callBack){
//   let result = x+y;
//   callBack(result);
// }
// function displayConsole(output){
//   console.log(output);
// }

// function displayDOM(output){
//   document.getElementById("myLabel").innerHTML = output;
// }

// let students =["JACOB","AMEEN","SUNIL","ASHIK"];
// let students = ["jacob","ameen"];
// students.forEach(capitalized);
// students.forEach(print);
// function capitalized(element,index,array){
//   array[index] = element[0].toUpperCase()+element.substring(1);
// }
// function print(element){
//   console.log(element)
// }
// function lowerCase(element,index,array){
//   array[index] = element.toLowerCase()
// }
// function print(element){
//   console.log(element)
// }
// console.log(students);
// students.forEach(lowerCase);
// console.log(students);


// let userName= "Ameen";
// let userInbox=4;

// function login(){
//   displayUsername();
//   displayInbox();
// }

// function displayUsername(){
//   console.log(`Welcome ${userName}`)
// }

// function displayInbox(){
//   console.log(`you have ${userInbox} messages`)
// }
//  login();

// const store =new Map([
//   ["t-shirt",20], ["jeans",30], ["socks",10], ["hoodie",40]
// ])


// const greeting = (userName)=> console.log("hello",userName);

// greeting("Ameen")

// const percent = function(x,y){
//   return x/y*100;
// }

// const percent =(x,y) => x/y*100;

// console.log(`${percent(75,100)} %`)

// let shoppingCart = 0;

// shoppingCart += store.get("t-shirt");

// store.set("cap",50);
// store.delete("socks");
// console.log(store.has("hoodie"));
// console.log(store.size);
// console.log(shoppingCart);

// store.forEach((value,key)=>console.log(`${key} ${value}`))


// const car = {

//   model: "Mustang", color: "red", year: 2023,
   
//   drive : function(){
//     console.log(`you drive the ${this.model}`)
//   },
//   brake : function(){
//     console.log("you step on the brake")
//   }
// }
// const car2 = {

//   model: "BMW", color: "white", year: 2024,
   
//   drive : function(){
//     console.log(`you drive the ${this.model}`)
//   },
//   brake : function(){
//     console.log("you step on the brake")
//   }
// }

// console.log(car.model);
// console.log(car.color);
// console.log(car.year);
// car.drive();
// car.brake();

// console.log(car2.model);
// console.log(car2.color);
// console.log(car2.year);
// car2.drive();
// car2.brake();


// class Player {
//   score = 0;
//   pause(){
//     console.log("You paused the game");
//   }

//   exit(){
//     console.log("You Exited the Game");
//   }
// }

// const player1 = new Player();
// const player2 = new Player();

// player1.score++;
// player2.score+=2
// console.log(player1.score);
// console.log(player2.score);

// player1.pause();
// player2.exit();

// class Student {
//   constructor(name,age, cgpa){
//     this.name = name;
//     this.age = age;
//     this.cgpa = cgpa;
//   }

//   study(){
//     console.log(`${this.name} is studing`);
//   }

// }

// const student1 = new Student("jacob",21,8.8);
// console.log(student1.name);
// console.log(student1.age);
// console.log(student1.cgpa);
// student1.study();

// const student2 = new Student("ameen",24,8.6);

// console.log(student2.name);
// console.log(student2.age);
// console.log(student2.cgpa);
// student2.study();

// const student3 = new Student("ashik",22,9.0);

// console.log(student3.name);
// console.log(student3.age);
// console.log(student3.cgpa);
// student3.study();

// class Car {
//   static numberOfCars = 0;
//   constructor(model){
//     this.model = model;
//     Car.numberOfCars++;
//   }

//   static startRace(){
//     console.log("3...2...1...GO!")
//   }
// }

// const car1 = new Car("nexon");
// const car2 = new Car("nCrets");
// const car3 = new Car("Thar");

// console.log(Car.numberOfCars);

// Car.startRace();

// class Animals{
//   alive = true;
//   eat(){
//     console.log(`this ${this.name} is eating`);
//   }
//   sleep(){
//     console.log(`this ${this.name} is sleeping`);
//   }
// }


// class Chicken extends Animals{
//   name = "chicken"
//   run(){
//     console.log(`this ${this.name} is running`)
//   }
// }

// class Fish extends Animals{
//   name = "fish"
//   swim(){
//     console.log(`this ${this.name} is swimming`);
//   }
// }

// class Hawk extends Animals{
//     name = "hawk"
//   fly(){
//     console.log(`this ${this.name} is flying`);
//   }
// }

// const chicken = new Chicken();
// const fish = new Fish();
// const hawk = new Hawk();

// console.log(chicken.alive);
// chicken.eat();
// chicken.sleep();
// chicken.run();

// console.log(fish.alive);
// fish.eat();
// fish.sleep();
// fish.swim();

// console.log(hawk.alive);
// hawk.eat();
// hawk.sleep();
// hawk.fly();



// class Animals{
//  constructor(name,age){
//   this.name = name;
//   this.age = age;
//  }
// }


// class Chicken extends Animals{
//   constructor(name,age,runSpeed){
//     super(name,age);
//     this.runSpeed = runSpeed;
//   }
// }

// class Fish extends Animals{
//   constructor(name,age,swimSpeed){
//     super(name,age);
//     this.swimSpeed = swimSpeed;
//   }
// }

// class Hawk extends Animals{
//   constructor(name,age,flySpeed){
//     super(name,age);
//     this.flySpeed = flySpeed;
//   }
// }


// const chicken = new Chicken("chicken","1","40");

// const fish = new Fish("fish","2","60");

// const hawk = new Hawk("hawk","3","150");

// console.log(chicken);
// console.log(fish);
// console.log(hawk);

// class Car{
//   constructor(power){
//     this._petrol = 50;
//     this._power = power
//   }
//   get power() {
//     return `${this._power} hp`;
//   }

//   get petrol(){
//     return `${this._petrol} L (${this._petrol /50*100})%`;
//   }
//   set petrol (value) {
//     if (value>50) {
//       value = 50;
//     }else if (value<0) {
//       value = 0;
//     }
//     this._petrol = value;
//   }
// }

// let car = new Car(400);

// car.petrol = -60;

// console.log(car.power,car.petrol);





// class Car {
//    constructor(model, year, color, variant) {
//       this.model = model;
//       this.year = year;
//       this.color = color;
//       this.variant = variant;
//    }
//    drive() {
//       console.log(`You are driving the ${this.model}.`);
//    }
//    brake() {
//       console.log(`You have Applied the Brake.`);
//    }
// }
// const car1 = new Car("innova",2023,"red", "Top");
// const car2 = new Car("nissan",2022,"blue", "Mid");
// const car3 = new Car("skoda",2023,"white", "Base");
// const cars = [car1, car2, car3];
// console.log(cars[1].model);
// console.log(cars[1].year);
// console.log(cars[1].color);
// cars[0].drive();
// cars[0].brake();
// cars[1].drive();
// cars[1].brake();
// cars[2].drive();
// cars[2].brake();
// startRace(cars);
// function startRace(cars) {
//    for(const car of cars) {
//       car.drive();
//       // car.brake();
//       // console.log(car.color);
//    }
// }


// class Car {
//    constructor(model, year, color, variant) {
//       this.model = model;
//       this.year = year;
//       this.color = color;
//       this.variant = variant;
//    }
//    drive() {
//       console.log(`You are driving the ${this.model}.`);
//    }
//    brake() {
//       console.log(`You have Applied the Brake.`);
//    }
// }
// const car1 = new Car("Creta", 2023, "Red", "Top");
// const car2 = new Car("i20", 2022, "Black", "Mid");
// const car3 = new Car("Verna", 2023, "White", "Base");
// const cars = [car1, car2, car3];
// // console.log(cars[1].model);
// // console.log(cars[1].year);
// // console.log(cars[1].color);
// // cars[0].drive();
// // cars[0].brake();
// // cars[1].drive();
// // cars[1].brake();
// // cars[2].drive();
// // cars[2].brake();
// startRace(cars);
// function startRace(cars) {
//    for(const car of cars) {
//       car.drive();
//    }
// }


// class Card {
//    constructor(value, suit) {
//       this.value = value;
//       this.suit = suit;
//    }
// }
// let cards = [new Card("A", "Hearts"), 
//             new Card("A", "Spades"), 
//             new Card("A", "Diamonds"), 
//             new Card("A", "Clubs"), 
//             new Card("2", "Hearts"), 
//             new Card("2", "Spades"), 
//             new Card("2", "Diamonds"), 
//             new Card("2", "Clubs")];
// // console.log(cards[0].value + " " + cards[0].suit);
// cards.forEach(card => console.log(`${card.value} ${card.suit}`));


// try {
//   console.lag("hello");
// } catch (error) {
//   console.log("error handled");
// }

// let x =window.prompt("Enter the number");
//   x=Number(x);
//   console.log(`${x} is a number`)

// try{
//   let x =window.prompt("Enter the number");
//   x=Number(x);
//   if(isNaN(x) )throw "that wasn't a number";
//   // if(x==" ") throw "it is empty"
//   console.log(`${x} is a number`)
// }catch(error){
//   console.log(error);
// }finally{
//   console.log("this always executes")
// }

// let timer1=setTimeout(firstMessage,3000);
// let timer2=setTimeout(secondMessage,6000);
// let timer3=setTimeout(thirdMessage,9000);

// function firstMessage(){
//   alert("Buy this course for 2000");
// }
// function secondMessage(){
//   alert("This is not a scam");
// }
// function thirdMessage(){
//   alert("DO IT !!!!");
// }


// document.getElementById("submitButton").onclick= function () {
//   clearTimeout(timer1);
//   clearTimeout(timer2);
//   clearTimeout(timer3);

//   alert("Thanks for buying");
// }


// let count =0;
// let max = window.prompt("Count up to what number");

// max = Number(max);

// const myTimer=setInterval(countUp,1000)

// function countUp() {
//   count++;
//   console.log(count);

//   if (count>=max) {
//     clearInterval(myTimer);
//   }
// }


// let date =new Date();
// console.log(date);
// date = date.toLocaleString();
// document.getElementById("myLabel").innerHTML = date;

// console.log("start");
// console.log("this is sychnronous");
// console.log("end");

// console.log("start");
// setTimeout(() => console.log("This is Asychnronous"),5000);
// console.log("end");

// const promise = new Promise((resolve,reject)=>{

//     let fileLoaded = true;

//     if (fileLoaded==true) {
//         resolve("file loaded");
//     } else {
//         reject("file not loaded");
//     }
// });

// promise.then(value =>console.log(value));

// console.dir(document);

// console.log(document.title);
// console.log(document.URL);
// document.title="DOM class";
// console.log(document.title);
// // document.location = "";

// let element=document.getElementById("myTitle");

// // element.style.backgroundColor="lightgreen";

// let fruits=document.getElementsByName("fruits");
// console.log(fruits[2]);

// let element=document.getElementById("myButton").onclick = doSomethings();

// const element =document.body;

// element.onload = doSomethings()



// const element = document.getElementById("myDiv");


// element.onchange=doSomethings;

// element.onmouseover = doSomethings;

// element.onmouseout = doSomethings;

// function doSomethings() {
//     // alert("did something");
//     element.style.backgroundColor= "green";
// }

const div = document.getElementById("myDiv");
const div2= document.getElementById("myDiv2")

div.addEventListener("mouseover", changeRed);
div.addEventListener("mouseout", changeGreen);

div2.addEventListener("click",changeBlue);
div2.addEventListener("mouseout", changePurple);


function changeRed(){
    div.style.backgroundColor = "lightgreen";
}

function changeGreen(){
    div.style.backgroundColor = "red";
    div2.style.backgroundColor = "red";

}

function changeBlue(){
    div2.style.backgroundColor = "blue"
}
