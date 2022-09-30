let a  = +prompt("Введіть перше число");
let b  = +prompt("Введіть друге число");
let count = 0;
console.log("перше число");
console.log("друге число");
for (let i = a; i <= b; i++) {
    if ( ((i**3 % 10) == 4) || ((i**3 % 10) == 9)) {
        count++;
    }
}
console.log("Count" + count);