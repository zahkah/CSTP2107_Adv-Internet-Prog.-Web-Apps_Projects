// Javascript is weakly typed language

// Few data types
// Primitive Data Types
    // String, boolean, Number
// Special Types
    // Object, Array, Tuple, Unknown, Never, any

// String

const firstName = 'Prabh';

let age: number = 20;

let isEasy: boolean = true;

let date: Date = new Date();

let collegeAddress: number | string = 'Vancouver';

// Types With Functions
function findSum(num1: number, num2: number): number {
    return num1 + num2;
}

let sum = findSum(1, 2);

function printMyName(fullName: string): void {
    console.log(fullName);
}

// Optional Parameters

function greetMe( greeting: string, firstName: string, lastName?: string): string {
    const fullName = lastName ? `${firstName} ${lastName}` : firstName;
    return `${greeting} ${fullName}`;
}

greetMe('Welcome', 'Prabh'); // Welcome Prabh

greetMe('Welcome', 'Mike', 'Tyson') // Welcome Mike Tyson

// Arrays
let fruitsBasket: string[] = ['Apple', 'Banana', 'Orange'];

let studentNames: Array<string> = ['Mike', 'Stacy'];

let averageMarks: number[] = [1,2,3];

// Array with multiple Types
let addresslist: (string | number )[] = ["Vancouver", 1205, "Burnaby"]

let address2: Array<string | number> = ["Vancouver", 1205, "Burnaby"]

// Any type

let address: any = ["vancouver", "burnaby", 1075];

// Tuples
let studentDetailsList: [string, string, boolean, number] = ['Mike', 'Comox', true, 20]

// Objects
let employee = {
    id: 1000,
    name: 'Mike',
    email: 'mike@vcc.ca',
    department: 'CST'
}

// Object.keys(employee) ['id', 'name', 'email', 'department']

// Object.values(employee) [1000, 'Mike', 'mike@vcc.ca', 'CST']

// Object.entries(employee) [[id, 1000], ['name', 'Mike'], ['email', 'mike@vcc.ca'], ['department', 'CST']]
// Object.freeze
// Object.assign
// Object.create

const employeeArray = Object.entries(employee).map(([key, value]: [string, string| number]) => {
    return [key, value]
})

// ENUMS

enum numberOfDays {
    Monday = 'Monday',
    Tuesday = 'Tuesday',
    Wednesday = 'Wednesday',
    Thursday = 'Thursday',
    Friday = 'Friday',
    Saturday = 'Saturday',
    Sunday = 'Sunday'
}

enum Day {
    Monday,
    Tuesday,
    Wednesday,
    Thursday,
    Friday,
    Saturday,
    Sunday
}

console.log(Day.Friday); // Friday

function getDay(day: number): Day {
    switch(day) {
        case 0:
            return Day.Monday;
        case 1:
            return Day.Tuesday;
        case 2:
            return Day.Wednesday;
        case 3:
            return Day.Thursday;
        case 4:
            return Day.Friday;
        case 5:
            return Day.Saturday;
        default:
            return Day.Sunday
    }
}

// Unions
let myAge: string | number = 'Twenty Eight';

let prabhAge: string | number = 28;

prabhAge = 30 as number;


function calculateAverageMarks(marksList: (number | string) []): number {
    const totalSum = marksList.reduce((acc, cV) => acc as number +  Number(cV), 0);
    return (totalSum as number) / marksList.length;
}


// Any type
let collegeName: any = 29;
collegeName = {};
collegeName = true;


// Never
function loopMeForEver(): never {
    while(true) {
        console.log('...');
    }
}


// void
function printSum(): void {
    console.log(1 + 2);
}

// Objects
let person1: Person = {
    name: 'Mike',
    age: 20,
    isEmployed: true,
    department: 'CST'
}

let person2 = {
    name: 'Mike',
    // age: 23,
    isEmployed: false,
    department: 'NA'
}

type Person = {
    name: string;
    age: number;
    isEmployed: boolean;
    department: string;
}

type PartialPerson = Partial<Person>;

type PersonWithAgeAndIsEmployed = Pick<Person, 'age' | 'department'>

// Interfaces

interface Product {
    title: string;
    price: number;
    createdAt: Date;
    calculateRating: () => number;
    category: Category[];
}

interface Category {
    id: number;
    name: string;
}

let product1: Product = {
    title: 'Tshirt 1',
    price: 10,
    createdAt: new Date(),
    calculateRating: () => 5,
    category: [
        {
            id: 1,
            name: 'Clothing'
        },
        {
            id: 2,
            name: 'Fashion'
        }
    ]
}

// 1 Difference in Type and Interfaces (Merging)

interface Student {
    name: string;
}

interface Student {
    id: 1
}

// Automatically merges it into 1

let student: Student = {
    id: 1,
    name: 'Prabh'
}

// Extending Interface

interface Animal {
    legs: number;
}

interface Dog extends Animal {
    barks: boolean;
}

let germanShepherd: Dog = {
    legs: 4,
    barks: true
}

// useLogger
type Level = 'Debug' | 'Info' | 'Log' | 'Warn' | 'Error';

// type Logger = Record<Level, string>;

// let newLogger: Logger = {
//     Debug: 'This is debug',
//     Info: 'This is info',
//     Log: 'This is Log',
//     Warn: 'This is Warn',
//     Error: 'This is Error'
// }

type Logger = Pick<Record<Level, string>, 'Debug' | 'Info'>;

// Generic Types
 
function getValue<ValueType>(value: ValueType): ValueType {
    return value;
}

const number = getValue<number>(10);

const string = getValue('Hello world!');


// function getValues<T, B>(val: T, val1: B): T {

// }

interface Box<T> {
    value: T
}

const numberBox: Box<number> = { value: 100}
const stringBox: Box<string> = { value: '20'};