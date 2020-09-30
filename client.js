const employees = [
  {
    name: 'Atticus',
    employeeNumber: '2405',
    annualSalary: '47000',
    reviewRating: 3
  },
  {
    name: 'Jem',
    employeeNumber: '62347',
    annualSalary: '63500',
    reviewRating: 4
  },
  {
    name: 'Scout',
    employeeNumber: '6243',
    annualSalary: '74750',
    reviewRating: 5
  },
  {
    name: 'Robert',
    employeeNumber: '26835',
    annualSalary: '66000',
    reviewRating: 1
  },
  {
    name: 'Mayella',
    employeeNumber: '89068',
    annualSalary: '35000',
    reviewRating: 1
  }
];

// YOU SHOULD NOT NEED TO CHANGE ANYTHING ABOVE THIS POINT

// Take small steps! Don't write a for loop and two functions that do all of the calculations right away.
// This problem is massive! Break the problem down. Use the debugger.
// What is the fewest lines of code I can write and test to get just a little closer?

// This is not a race. Everyone on your team should understand what is happening.
// Ask questions when you don't.

function newEmployeeObject (employeeObject){
 let bonus;
 let bonusPercentage = 0;

  for(let i = 0; i< employees.length; i++){
   
  if (employeeObject[i].annualSalary > 65000){
    bonus = 0.01 * employeeObject[i].annualSalary; 
    bonusPercentage = .01;
  }
  else if (employeeObject[i].reviewRating == 3 && employeeObject[i].employeeNumber.length == 4) {
    bonus = 0.09 * employeeObject[i].annualSalary;
    bonusPercentage = .09;
  }
  else if (employeeObject[i].reviewRating == 4 && employeeObject[i].employeeNumber.length == 4) {
    bonus = 0.11 * employeeObject[i].annualSalary;
    bonusPercentage = .11;
  }
  else if (employeeObject[i].reviewRating == 5 && employeeObject[i].employeeNumber.length == 4) {
    bonus = 0.13 * employeeObject[i].annualSalary;
    bonusPercentage = .13;
  }
  else if (employeeObject[i].reviewRating <= 2){
    bonus = 0;
    bonusPercentage = 0; 
  }
  else if (employeeObject[i].reviewRating == 3) {
    bonus = 0.04 * employeeObject[i].annualSalary;
    bonusPercentage = .04; 
  }
  else if (employeeObject[i].reviewRating == 4) {
    bonus = 0.06 * employeeObject[i].annualSalary;
    bonusPercentage = .06;
  }
  else if (employeeObject[i].reviewRating == 5) {
    bonus = 0.1 * employeeObject[i].annualSalary;
    bonusPercentage = .1;
  }
  else {
    console.log('Error!');
  }
  
  let newEmployee = {
    name: employeeObject[i].name,
    bonusPercentage: bonusPercentage,
    totalCompensation: Number(employeeObject[i].annualSalary)+Math.round(Number(bonus)),
    totalBonus: Math.round(bonus),
  }
  console.log(newEmployee)

  }

};

console.log(employees[1].employeeNumber.length);
console.log( employees );
newEmployeeObject(employees);
