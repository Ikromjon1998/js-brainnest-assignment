// A) JavaScript program to find the diagonal of a square where the length of each side is 9

function diagonalOfSquare(a){
    return Math.sqrt(a*a + a*a);
}

let d = diagonalOfSquare(9);

console.log(`The diagonal of a square, the length of each side of which is 9, will be equal to ${d}`);

// B) JavaScript program to find the area of a triangle where lengths of the three of its sides are 5, 6 and 7.
// Area of Triangle Using Heron's Formula
function areaOfTriangle(arr){
    let s = arr.reduce( ( previousValue, currentValue ) => previousValue + currentValue, 0) / 2;
    let newArr = [0, ...arr];
    let a = 1;
    // ?????????????????? Reducer
    // console.log(newArr);
    // return Math.sqrt(newArr.forEach(element => { 
    //     s - element;
    // }).reduce(( previousValue, currentValue ) => previousValue * currentValue, 1));

    for(let i = 0; i < newArr.length; i++){
        a *= s - newArr[i];
    }
    return Math.sqrt(a);
    
} 

let tSides = [5,6, 7];
console.log(`The area of a triangle is ${areaOfTriangle(tSides)}`);

// C) JavaScript program to find the circumference and surface area of a circle whose radius is 4. We use PI.
const PI = Math.PI;

function circumference (r){
    return 2 * PI * r;
}

function circeArea (r){ 
    return PI * r * r;
}

console.log(`circumference and surface area of a circle with radius '4' are ${circumference(4)} and ${circeArea(4)} respectively.`);
