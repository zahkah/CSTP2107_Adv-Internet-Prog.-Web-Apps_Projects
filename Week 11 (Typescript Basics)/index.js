// Javascript is weakly typed language
// Few data types
// Primitive Data Types
// String, boolean, Number
// Special Types
// Object, Array, Tuple, Unknown, Never, any
// String
var firstName = 'Prabh';
var age = 20;
var isEasy = true;
var date = new Date();
var collegeAddress = 'Vancouver';
// Types With Functions
function findSum(num1, num2) {
    return num1 + num2;
}
var sum = findSum(1, 2);
function printMyName(fullName) {
    console.log(fullName);
}
// Optional Parameters
function greetMe(greeting, firstName, lastName) {
    var fullName = lastName ? "".concat(firstName, " ").concat(lastName) : firstName;
    return "".concat(greeting, " ").concat(fullName);
}
greetMe('Welcome', 'Prabh'); // Welcome Prabh
greetMe('Welcome', 'Mike', 'Tyson'); // Welcome Mike Tyson
// Arrays
var fruitsBasket = ['Apple', 'Banana', 'Orange'];
var studentNames = ['Mike', 'Stacy'];
var averageMarks = [1, 2, 3];
// Array with multiple Types
var addresslist = ["Vancouver", 1205, "Burnaby"];
var address2 = ["Vancouver", 1205, "Burnaby"];
// Any type
var address = ["vancouver", "burnaby", 1075];
// Tuples
var studentDetailsList = ['Mike', 'Comox', true, 20];
// Objects
var employee = {
    id: 1000,
    name: 'Mike',
    email: 'mike@vcc.ca',
    department: 'CST'
};
// Object.keys(employee) ['id', 'name', 'email', 'department']
// Object.values(employee) [1000, 'Mike', 'mike@vcc.ca', 'CST']
// Object.entries(employee) [[id, 1000], ['name', 'Mike'], ['email', 'mike@vcc.ca'], ['department', 'CST']]
// Object.freeze
// Object.assign
// Object.create
// const employeeArray = Object.entries(employee).map(([key, value]: [string, string| number]) => {
//     return [key, value]
// })
// ENUMS
var numberOfDays;
(function (numberOfDays) {
    numberOfDays["Monday"] = "Monday";
    numberOfDays["Tuesday"] = "Tuesday";
    numberOfDays["Wednesday"] = "Wednesday";
    numberOfDays["Thursday"] = "Thursday";
    numberOfDays["Friday"] = "Friday";
    numberOfDays["Saturday"] = "Saturday";
    numberOfDays["Sunday"] = "Sunday";
})(numberOfDays || (numberOfDays = {}));
var Day;
(function (Day) {
    Day[Day["Monday"] = 0] = "Monday";
    Day[Day["Tuesday"] = 1] = "Tuesday";
    Day[Day["Wednesday"] = 2] = "Wednesday";
    Day[Day["Thursday"] = 3] = "Thursday";
    Day[Day["Friday"] = 4] = "Friday";
    Day[Day["Saturday"] = 5] = "Saturday";
    Day[Day["Sunday"] = 6] = "Sunday";
})(Day || (Day = {}));
console.log(Day.Friday); // Friday
function getDay(day) {
    switch (day) {
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
            return Day.Sunday;
    }
}
