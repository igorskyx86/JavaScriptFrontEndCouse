// Створення масиву householdItems:
// Створіть масив householdItems, який буде містити об'єкти домашнього господарства.

let householdItems = []

// Створення об'єктів для домашнього господарства:
// Кожен об'єкт повинен мати наступні властивості:
// name: назва предмета (наприклад, "пральна машина").
// category: категорія (наприклад, "побутова техніка").
// price: вартість в гривні.
// inUse: булеве значення, що вказує, чи використовується предмет в даний момент.

const addHouseholdItem = function (name, category, price, inUse) {
    householdItems.push({
        name: name,
        category: category,
        price: price,
        inUse: inUse
    });
}

const DescribeObject = function (_object) {
    let returnArray = [];
    for (const property in _object)
        returnArray.push(`${property}: ${_object[property]}`);
    return returnArray.join(", ");
}
// Додавання об'єктів до масиву:
// Додайте не менше 5 різних об'єктів до масиву householdItems, які представляють різні елементи домашнього господарства.

addHouseholdItem("Kettle", "Kitchenware", 25, true);
addHouseholdItem("Dishwasher", "Appliances", 800, false);
addHouseholdItem("Washing machine", "Appliances", 750, true);
addHouseholdItem("Hairdryer", "Health and beauty", 300, true);
addHouseholdItem("Dehumidifier", "Ventilation", 120, false);

// Виведення інформації:
// Виведіть в консоль інформацію про всі предмети в масиві, 
console.log("-".repeat(20));
console.log("All household items:");
householdItems.forEach((householdItem) => {
    console.log(DescribeObject(householdItem))
});

// а також окремо про ті, які використовуються в даний момент (inUse дорівнює true).
console.log("-".repeat(20));
console.log("Household items in use:");
for (let i = 0, arrayLength = householdItems.length; i < arrayLength; i++) {
    if (householdItems[i].inUse)
        console.log(DescribeObject(householdItems[i]));
}