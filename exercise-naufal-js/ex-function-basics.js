// 1
let add7 = n => n+7;

console.log(add7(5));

function add7_(n) {
    sum = n+7
    return console.log(sum);
}

add7_(8)

// 2
let multiply = (a,b) => a*b;
console.log (multiply(5,6));

function multiply_(a, b) {
    return console.log(a*b)
}

multiply_(7,8)

// 3
let capitalize = (text) => text.charAt(0).toUpperCase() + text.slice(1);
console.log (capitalize("monyet"))

function capitalize_(text) {
    return text.charAt(0).toUpperCase() + text.slice(1);
}

console.log(capitalize("kocak lu"))

// 4
let lastLetter = (text) => text.slice(0, text.length-1) + text.charAt(text.length-1).toUpperCase()
console.log(lastLetter("edan"))

function lastLetter_(text) {
    return text.slice(0, text.length-1) + text.charAt(text.length-1).toUpperCase();
}

console.log(lastLetter("anjay mabar"))