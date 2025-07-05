// ex01
const numbers = [1, 2, 3, 4, 5];
const doubled = numbers.map(num => num * 2);
console.log(doubled);

// ex02
const numberss = [1, 2, 3, 4, 5];
const evenNumbers = numberss.filter(num => num % 2 === 0);
console.log(evenNumbers);

// ex03
const fruits = ['apple', 'banana', 'orange', 'kiwi'];
fruits.forEach(fruit => console.log(fruit));

// ex04
const students = [
    { name: 'John', age: 20 },
    { name: 'Jane', age: 25 },
    { name: 'Mark', age: 22 }
];

students.forEach(student => {
    console.log(`${student.name} - ${student.age} anos`);
});

// ex05
const studentss = [
    { name: 'John', age: 20 },
    { name: 'Jane', age: 25 },
    { name: 'Mark', age: 22 }
];

const names = studentss.map(student => student.name);
console.log(names);
