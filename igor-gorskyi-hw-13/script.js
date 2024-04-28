function promptNumber(promptText) {
    const promptNumber = prompt(promptText);
    const number = +promptNumber;
    if (isNaN(number))
        console.log(`ERROR: ${promptNumber} is not a number`);
    return number;
}

function main() {
    let operations = {};
    operations["+"] = (number1, number2) => {return number1 + number2};
    operations["-"] = (number1, number2) => {return number1 - number2};
    operations["*"] = (number1, number2) => {return number1 * number2};
    operations["/"] = (number1, number2) => {return number1 / number2};
    let validators = {};
    validators["/"] = (number1, number2) => {return (number2 == 0) ? false : true};
    const number1 = promptNumber("Enter the first operand:");
    if (isNaN(number1)) {return}
    const number2 = promptNumber("Enter the second operand:");
    if (isNaN(number2)) {return}
    const oper = prompt("Enter operator:");
    if (!(oper in operations)) {
        console.log(`'${oper}' is not a supported operation. You can only use one of those: ${Object.keys(operations).join(", ")}`);
        return;
    }
    if ((oper in validators) && (!validators[oper](number1, number2))) {
        console.log(`${number1} and ${number2} is not a valid combination of arguments for operation ${oper}`);
        return;
    }
    console.log(`${number1} ${oper} ${number2} = ${operations[oper](number1, number2)}`);
}

main();