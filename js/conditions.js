// 3. Conditional Statements & Loops

// A) JavaScript program that accepts two integers and displays the larger of the two.
function max(a, b){
    console.log( a>b? a:b);
}
max(3, 6);
// B) JavaScript program that checks whether an integer is an even or an odd number.
function evenOdd (num){
    return num % 2 == 0 ? 'Even': 'Odd';
}

let x = evenOdd(5);
console.log(x);