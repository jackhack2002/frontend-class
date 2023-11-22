/* task 1 

print

1
2
1
2
1
2
*/

// for (let i = 1; i <= 5; i++) {
//     for (let j = 1; j <= 2; j++) {
//         console.log(j);
//     }
// }


/*
task 2 
print
1
1
1
1
1
x
x
x
x
x
*/


// for (let i = 1; i <= 5; i++) {
//     console.log(1);
// }

// for (let j = 1; j <= 5; j++) {
//     console.log("x");
// }



/* task 3  
print

y
y
y
y
y
1
2
3
4
5
*/

// for (let i = 1; i <= 5; i++) {
//     console.log("y");
// }

// for (let j = 1; j <= 5; j++) {
//     console.log(j);
// }




/* task 01/09/2023 

shape L*B 
shape.length = 12
shape.breadth = 5
1. negotiate negative value
2. areaOfRectangle(l,b){l*b}
3. isSquare()  true/false
*/


// class Rectangle{
//     constructor(length,breadth){
//         this._length= length ;
//         this._breadth = breadth;
//     }
//     get length(){
//         return this._length
//     }
//     get breadth(){
//         return this._breadth
//     }
//     set length (value) {
//         if (value<=0) {
//             value = 0;
//           }
//         }
//     set breadth (value) {
//         if (value<=0) {
//             value = 0;
//           }
//         }
   
// }
// function calculateArea(l,b){
//     if (this._length === this._breadth) {
//         console.log(isSquare(l,b));
//         // return this._length * this._length; // Area of a square
//     } else {
//         console.log(areaOfRectangle(l,b));
//         // return this._length * this._breadth; // Area of a rectangle
//     }
// }

// function isSquare(l,b){
//     result =l*b;
//     return result;
// }

// function areaOfRectangle(l,b){
//     result =l*b;
//     return result;
// }

// l=window.prompt("Enter the length :");
// b=window.prompt("Enter the breadth :");

// const rectangle = new Rectangle(l,b);
// const area = calculateArea();

// // console.log(rectangle.result);











document.getElementById("buttonSubmit").onclick = function(){
    l=document.getElementById("rectanglelength").value;b=document.getElementById("rectangleBreadth").value;
    class Rectangle {
        constructor(_length, _breadth) {
            this._length =_length;
            this._breadth = _breadth;
        }
        get length() {
            return this._length;
        }  
        set length(value) {
            if (value>0) {
                this._length =value;
            }
            else if(value <=0){
                this._length = 0;
            }
            
        }
        get breadth() {
            return this._breadth;
        }
        set breadth(value) {
            if (value>0) {
                this._breadth = value;
            }
            else if(value<=0){
                this._breadth = 0;
            }
            
        }
    
        calculateArea() {
            // if (this._length <= 0 || this._breadth <= 0) {
            //     return negativeValue();
            // } else
             if (this._length === this._breadth){
                return isSquare(l,b);
            }else {
                return areaOfRectangle(l,b);
            }
        }
    }

    function isSquare(l,b){
        result =l * b;
        document.getElementById("resultDisplay").innerHTML= `The area of square is ${result}cm2`;
    }
    
    function areaOfRectangle(l,b){
        result =l * b;
        document.getElementById("resultDisplay").innerHTML= `The area of rectangle is : ${result} cm2`;    }

    // function negativeValue(){
    //     document.getElementById("resultDisplay").innerHTML= `The field is Empty,Zero or Negative`; 
    // }

    const myRectangle = new Rectangle(l, b); 

    const area = myRectangle.calculateArea();
    
}


















