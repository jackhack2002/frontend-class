//console.log("welcome to JavaScript");

//single line commenting

/**
 * multi line commenting
 */
/*
let age = 20; //numbers

let firstName = "jacob"; //strings

let student = true; //true

age += 1;

console.log(firstName);

console.log("your are",age,"old");
console.log(student);

document.getElementById("p1").innerHTML="Hello" + " "+firstName;

document.getElementById("p2").innerHTML="your are" +" "+ age+" "+"old";

document.getElementById("p3").innerHTML="Enrolled :" + " "+student;
*/

// let student =20;
 
//student = student+=1; --> augumented assignment operator

//console.log(student);

//student = student-=1;

//console.log(student);

//student = student*=2;

//console.log(student);

//student = student/=2;

//console.log(student);

//student = student%=2;

//console.log(student);
/*
let username;
let age;
let fathername;
document.getElementById("myButton").onclick = 

function(){
    username = document.getElementById("userName").value;
    console.log(username);

    age = document.getElementById("myAge").value;
    console.log(age);

    fathername = document.getElementById("fatherName").value;
    console.log(fathername);

    //document.getElementById("myLabel").innerHTML = "Hello" +" "+username;
};

//console.log(username);



let age = window.prompt("How old are you :");

console.log(typeof age);

age = Number(age); //type conversion to string to numbers (strings can not be converted into numbers)

console.log(typeof age);
age += 1;

console.log("Happy birhtday you are",age,"years old");



let x;
let y;
let z;

x = Number("3.14");

console.log(x,typeof x);

y = String(3.14); //type conversion to string

console.log(y,typeof y);

z = Boolean("food"); // type conversion to boolean

console.log(z,typeof z);


//circumference of circle = 2*pi*r

const PI = 3.14159;

let radius;

let circumference;

radius = window.prompt("Enter the radius of the circle :");

radius = Number(radius);

//PI=40.456;

circumference = 2*PI*radius;

console.log(circumference);





let username;
let age;
let fathername;
document.getElementById("myButton").onclick = 

function(){
    username = document.getElementById("userName").value;
    console.log(username);

    age = document.getElementById("myAge").value;
    console.log(age);

    fathername = document.getElementById("fatherName").value;
    console.log(fathername);

    //document.getElementById("myLabel").innerHTML = "Hello" +" "+username;
};


//Math

let x=3.14,y=2.25,z=5.5;

x = Math.round(x);
x = Math.floor(x);
x = Math.ceil(x);
x = Math.pow(x,3);
x = Math.sqrt(x);
x = Math.abs(x);
maximum = Math.max(x,y,z);
minimum = Math.min(x,y,z);


console.log(x);
console.log(maximum);


let a,b,c;

a =window.prompt("Enter side A :");
a=Number(a);

b=window.prompt("Enter side B :");
b=Number(b);

c=Math.sqrt(Math.pow(a,2)+Math.pow(b,2)+2*a*b);

console.log(c);



document.getElementById("sumbitButton").onclick = function(){
    a=document.getElementById("aLabel").value;
    a=Number(a);
    b=document.getElementById("bLabel").value;
    b=Number(b);
    c=Math.sqrt(Math.pow(a,2)+Math.pow(b,2)+2*a*b);
    document.getElementById("cLabel").innerHTML="Side C is:"+ c;
};



let count=0;

document.getElementById("countDecrease").onclick= function(){
    count -=1;
    document.getElementById("countLabel").innerHTML= count;
}
document.getElementById("countReset").onclick= function(){
    count =0;
    document.getElementById("countLabel").innerHTML= count;
}

document.getElementById("countIncrease").onclick= function(){
    count +=1;
    document.getElementById("countLabel").innerHTML= count;
}

*/
//let userName = "Javascript Students";
/*
let un = userName.length;

console.log(un);

let firstLetter = userName.charAt(12);

console.log(firstLetter);

console.log(userName.indexOf("i"));
console.log(userName.lastIndexOf("t"));

//un = userName.trim();

//un = userName.toUpperCase();
//un = userName.toLowerCase();

let phoneNumber = "123-456-7890";

phoneNumber = phoneNumber.replaceAll("-","/");

console.log(phoneNumber);
*/

// let fullName = "Js Student";

// let fisrtName,lastName;

// lastName = fullName.slice(3);

// console.log(lastName);

// fisrtName = fullName.slice(0,3);

// console.log(fisrtName);

// console.log(fullName.slice(fullName.indexOf(" ")+1));

// console.log(fullName.slice(0,fullName.indexOf(" ")));

// let userName = "javascript";

// let letter = ;



// console.log(userName.charAt(0).toUpperCase().trim());

// let age=25;
// if(age>=10){
//     console.log("you are an adult!");
// }else{
//     console.log("You are a child!");
// }

// let age;

// age=window.prompt("enter your age: ");

// if (age>=10) {
//     console.log("you are an adult");
// } else if(age<=0){
//     console.log("you haven't born yet")
// }else{
//     console.log("you are a child");
// }

// document.getElementById("myButton").onclick = function(){

//     const myCheckBox=document.getElementById("myCheckBox"); 

//     const visaBtn=document.getElementById("visaBtn"); 
//     const masterBtn=document.getElementById("masterBtn"); 
//     const rupayBtn=document.getElementById("rupayBtn"); 

    // if (myCheckBox.checked/*==true*/) {
    //     console.log("You are Subscribed");        
    // } else {
    //     console.log("You are not Subscribed");
    // }

    // if (visaBtn.checked) {
    //     console.log("You are a Visa card holder");
    // } else if (masterBtn.checked) {
    //     console.log("You are a Master Card holder");
    // } else if(rupayBtn.checked){
    //     console.log("You are a Rupay Card holder");
    // }else{
    //     console.log("Please Select One of the Card option");
    // }



// let grade = window.prompt("Enter your Grade :");

// switch (true) {
//     case grade>=90: 
//         console.log("You did great");
//         break;
//     case grade>=80:
//         console.log("You did Good");
//         break;
//     case grade>=70:
//         console.log("You did Okay");
//         break;
//     case grade>=60:
//         console.log("You Passed ........ Barely");
//         break;
//     default:
//         console.log("You Obtained Low Grades");
// };

// let temp = window.prompt("Enter the temperature");

// temp = Number(temp);

// AND && operator

// if (temp>0 && temp< 30) {
//     console.log("weather is good");
// } else {
//     console.log("weather is bad");
// }

//OR || operator

// if (temp <=0 || temp>=30) {
//     console.log("Weather is bad");
// } else {
//     console.log ("Weather is good");
// }

//NOT ! operator

// if (!(temp >0)) {
//     console.log("It's cold outside");
// } else {
//     console.log("It's warm outside");
// }

// if (!sunny) {
//     console.log("It's Cloud Outside");
// } else {
//     console.log ("It's Sunny Outside");
// }

// let userName = "";

// while (userName == "") {
//     userName = window.prompt("Enter your UserName :");
// }

// console.log("Hello", userName);
//  let i=1;

// while (i<=10) {
//     console.log(i);
//     i++;
// }

// let j=10;

// while (j>=1) {
//     console.log(j);
//     j--;
// }
// let i=1;
// do {
//     console.log(i);
//     i++;
// } while (i<=10);

// let j=10;

// do {
//     console.log(j);
//     j--;
// } while (j>=1);

// for (let counter = 1; counter <=100; counter+=1) {
//     console.log(counter);
// }

// for (let counter = 100; counter >=1; counter-=1) {
//     console.log(counter);
// }

// task 1 - 12121212
// task 2 - 11111xxxxx
// task 3 - yyyyy12345


// break and continue
//  break --> breaks out or terminate the loop entrirely
// continue --> skip an particular iteration

// for (let i = 1; i <=20; i++) {
    
//     // if (i=13) {
//     //     // continue;
//     // }
//     console.log(i);
// }

// nested for loop 

// for (let i = 1; i <=4; i++) {
//     // console.log(i);
//     for (let j=1; j<=2;j+=1){
//         console.log(j);
//     }   
// }

// let rows =window.prompt("Enter the no of rows :");

// let column =window.prompt("Enter the no of column :");

// for(i=1; i<=rows; i++){
//     for(j=1; j<=column; j++){
//         document.getElementById("myRectangle").innerHTML +=j; 
//     }
//     document.getElementById("myRectangle").innerHTML +="<br>";
// }

// for (let i = 1; i <=3; i++) {
//    for (let j = 1; j <=4; j++) {
//     console.log(j);
//    }
// }

// startProgram();
// function startProgram() {
//     let userName= "Jacob";
//     let age = 21;

//     happyBirthday(userName,age);
// }

// function happyBirthday(userName,age) {
//     console.log("Happy Birth day to you");
//     console.log("Happy Birth day to you");
//     console.log("Happy Birth day to",userName);
//     console.log("Happy Birth day to your age is", age);
// }

// let area;

// let width;

// let height;

// width = window.prompt("Enter Width :");
// height =window.prompt("Enter the height :");

// area = getArea(width,height);

//     console.log("The area is ", area);
// function getArea(width,height){
//     let result = width*height;
//     return result;
// }

// let adult = checkAge(window.prompt("Enter your age :"));
// console.log(adult);
// function checkAge(age){
//     // if (age>=18) {
//     //     return true;
//     // } else {
//     //     return false;
//     // }
//     return age>=18 ? true:false;
// }

// checkWinner(false)

// function checkWinner(win){
//     win ? console.log("You win"):console.log("You lose")
// }

// let name= "jacob";
// doSomething();
// function doSomething(){
//     for (var i = 1; i <=10; i++) {
//     console.log(i);    
// }
// console.log("__________________")
// console.log(i);
// }

let userName = "Jacob",items = 3,total = 75;

// console.log(`hello ${userName} You have ${items} items in your cart. Your total is ${total}`);

let text = `hello ${userName} <br>You have ${items} items in your cart. <br>Your total is ${total}`;

document.getElementById("myLabel").innerHTML = text;