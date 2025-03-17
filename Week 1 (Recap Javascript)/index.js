// Function when it is taken as a parameter (Callbacks)

function greeting() {
    return 'Hey';
}

function greet(cb, name) {
    const prefix = cb();
    console.log(prefix + ' ' + name);
}

greet(greeting, 'Prabh');


// Functions return another functions

function sum(a) {
    return function (b) {
        return a + b;
    }
}

// const output1 = sum(4);
// console.log(output1(5));

console.log(sum(4)(5))


// HOF 

// Map
const employeesList = ['Mike', 'Stacy', 'Greg', 'Tory'];
const employeeEmailsList = employeesList.map((employee) => {
    return `${employee}@outlook.com`
})

console.log(employeeEmailsList, 'employees');

// Filter
const students = [
    {
        name: 'Prabh',
        course: 'CST'
    },
    {
        name: 'Stacy',
        course: 'IT'
    },
    {
        name: 'Mark',
        course: 'CST'
    }
]

const cstStudents = students.filter((student) => {
    if (student.course == 'CST') {
        return true;
    }

    return false;
})

console.log(cstStudents, 'cst');

// Reduce

const array = [1, 2, 3, 4, 5];

const sumofNumbers = array.reduce((accumulator, currentValue) => {
    return accumulator + currentValue;
}, 0)

console.log(sumofNumbers, 'sum')

// MAP BASED EXAMPLE
const studentsList = [
    { name: 'Alice', rollNo: 101, subjects: [{ name: 'Math', marks: 80 }, { name: 'Physics', marks: 90 }, { name: 'Chemistry', marks: 85 }] },
    { name: 'Bob', rollNo: 102, subjects: [{ name: 'Math', marks: 70 }, { name: 'Physics', marks: 75 }, { name: 'Chemistry', marks: 80 }] },
    { name: 'Charlie', rollNo: 103, subjects: [{ name: 'Math', marks: 95 }, { name: 'Physics', marks: 100 }, { name: 'Chemistry', marks: 90 }] }
];

function rankStudentsByTotalMarks(list) {
    return list.map((student) => {
        const totalMarks = student.subjects.reduce((total, subject) => total + subject.marks, 0)
        return { ...student, totalMarks }
    }).sort((student1, student2) => student2.totalMarks - student1.totalMarks)
}

console.log(rankStudentsByTotalMarks(studentsList));


const users = [
    { userId: 1, subscriptionType: 'premium', posts: [{ views: 500 }, { views: 300 }, { views: 400 }] },
    { userId: 2, subscriptionType: 'free', posts: [{ views: 100 }, { views: 50 }] },
    { userId: 3, subscriptionType: 'premium', posts: [{ views: 800 }, { views: 900 }] },
    { userId: 4, subscriptionType: 'free', posts: [{ views: 200 }, { views: 150 }] },
];

function filterPremiumByViews(users) {
    // Filter

    const filterdPremiumUsers =  users.filter((user) => user.subscriptionType === 'premium');
    // Calculate total views
    // Solve it by yourself
}

console.log(filterPremiumByViews(users), 'filter')



// REST OPERATOR

function multiply(...b) {
    return b.reduce((acc, cV)  => acc * cV , 1)
}

multiply(1,2, 4, 5, 7)
multiply(1,2)
multiply(1)