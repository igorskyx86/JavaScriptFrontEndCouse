console.log("Створення об'єкту Автомобіль");
const car = {
    make: 'Toyota',
    model: 'Corolla',
    year: 2013,
    colour: 'Grey',
    showInfo: function () {
        console.log(`Make: ${this.make}, Model: ${this.model}, Year: ${this.year}, Colour: ${this.colour}`);
    }
}
car.showInfo();
console.log('-'.repeat(20));
//-------------------------------------------

console.log("Створення об'єкту Книга. Option 1");
const book1 = {
    title: 'A Brief History of Time',
    author: 'Stephen Hawking',
    numberOfPages: 212,
    describeBook: function () {
        console.log(`Title: ${this.title}, Author: ${this.author}, Number of pages: ${this.numberOfPages}`);
    }
};

book1.describeBook();

console.log('-'.repeat(20));
//-------------------------------------------

console.log("Створення об'єкту Книга. Option 2");
const book2 = {
    title: 'A Brief History of Time',
    author: 'Stephen Hawking',
    numberOfPages: 212
};

const injectDescribeObject = function () {
    let returnArray = [];
    for (const property in this) {
        if (typeof (this[property]) == 'function') {
            continue;
        }
        returnArray.push(`${property}: ${this[property]}`);
    }
    console.log(returnArray.join(", "));
}
book2["describeBook"] = injectDescribeObject;
book2.describeBook();

console.log('-'.repeat(20));
//-------------------------------------------

console.log("Створення об'єкту Студент");
const student = {
    name: "Igor",
    surname: "Gorskyi",
    year: 3,
    selfPresentation: function () {
        console.log(`Hi, my name is: ${this.name} ${this.surname}. I'm a ${this.year} year student`);
    }
};
student.selfPresentation();