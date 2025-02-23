// 1. Create an array called employees to store employee's information.
let employees = {};

// 2. Add 10 employees (objects) with the specified properties to the array.
employees.push({
  name: "cristiao ronaldo",
  age: 30,
  department: "IT",
  position: "senior staff",
  bloodGroup: "A+",
  permanentStaff: true,
});
employees.push({
  name: "Jane Doe",
  age: 25,
  department: "HR",
  position: "junior staff",
  bloodGroup: "O-",
  permanentStaff: false,
});
employees.push({
  name: "lionel messi",
  age: 40,
  department: "Finance",
  position: "senior staff",
  bloodGroup: "B+",
  permanentStaff: true,
});
employees.push({
  name: "Esther odunayo",
  age: 28,
  department: "Marketing",
  position: "junior staff",
  bloodGroup: "AB+",
  permanentStaff: false,
});
employees.push({
  name: "Success Liberty",
  age: 35,
  department: "Sales",
  position: "senior staff",
  bloodGroup: "A-",
  permanentStaff: true,
});
employees.push({
  name: "Emma Davis",
  age: 22,
  department: "IT",
  position: "junior staff",
  bloodGroup: "O+",
  permanentStaff: false,
});
employees.push({
  name: "David Lee",
  age: 38,
  department: "Finance",
  position: "senior staff",
  bloodGroup: "B-",
  permanentStaff: true,
});
employees.push({
  name: "Sophia Patel",
  age: 26,
  department: "HR",
  position: "junior staff",
  bloodGroup: "AB-",
  permanentStaff: false,
});
employees.push({
  name: "Oliva igwe",
  age: 32,
  department: "Marketing",
  position: "senior staff",
  bloodGroup: "A+",
  permanentStaff: true,
});
employees.push({
  name: "Solomon success",
  age: 24,
  department: "Sales",
  position: "junior staff",
  bloodGroup: "O-",
  permanentStaff: false,
});

console.log(employees);
console.log("Length of employees array: ", employees.length);

// 4. Show only the first and last employee in your console.
console.log("First Employee: ", employees[0]);
console.log("Last Employee: ", employees[employees.length - 1]);

// 5. Create a new object called newEmployee with same properties as what you have in question 2.
let newEmployee = {
  name: "Peter Parker",
  age: 29,
  department: "IT",
  position: "junior staff",
  bloodGroup: "B+",
  permanentStaff: false,
};

// 6. Add the newEmployee object to the employees array using the push() method.
employees.push(newEmployee);
console.log("Updated employees array: ", employees);
