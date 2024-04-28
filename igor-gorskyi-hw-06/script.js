console.log("While. всі числа кратні 3 в діапазоні від 33 до 23 включно");

let i = 33;

while (i >= 23) {
    if (i % 3 == 0) {
        console.log(i);
    }
    i--;
}
console.log('-'.repeat(20));

console.log("Do-While. випадкові числа від 1 до 10, поки не згенерується число 8");

let randomNumber = 0;
let iterations = 0;

do {
    randomNumber = 1 + Math.floor(Math.random() * 10);
    console.log(randomNumber);
    iterations++;
} while (randomNumber != 8);
console.log(`it took ${iterations} iterations to generate 8`);
console.log('-'.repeat(20));

console.log("For. цикл for для піднесення числа 2 до степеня від 2 до 10 включно");

for (let i = 2; i <= 10; i++) {
    let result = Math.pow(2, i);
    console.log(`2 в степені ${i} дорівнює ${result}`)
}