console.log("If-Else. чи є число записане в початкову змінну парним")

const myNumber = 10;
console.log(myNumber);
let result1 = "";
if (myNumber % 2 == 0) {
    result1 = "парне";
} else {
    result1 = "непарне";
}
console.log(`Число ${result1}`);

console.log('-'.repeat(20)); // -------------------

console.log("Switch. для чисел від 0 до 6  виводить назву дня тижня")

const dayOfWeek = 0;
console.log(dayOfWeek);
let result2 = "";
switch (dayOfWeek) {
    case 0:
        result2 = "Понеділок";
        break;
    case 1:
        result2 = "Вівторок";
        break;
    case 2:
        result2 = "Середа";
        break;
    case 3:
        result2 = "Четвер";
        break;
    case 4:
        result2 = "П'ятниця";
        break;
    case 5:
        result2 = "Субота";
        break;
    case 6:
        result2 = "Неділя";
        break;
    default:
        result2 = "Неправильне число";
}
console.log(result2);

console.log('-'.repeat(20)); // -------------------

console.log("Тернарний оператор(*). визначення більшого з двох чисел ")

const number1 = 10;
const number2 = 11;
console.log(`${number1} ${number2}`);
let result3 = (number1 > number2) ? "Перше число більше" : ((number1 < number2) ? "Друге число більше" : "Числа рівні");
console.log(result3);