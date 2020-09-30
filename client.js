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
  if (employeeObject.employeeNumber.length == 4) {
    bonusPercentage += 0.05;
  }
    if (employeeObject.reviewRating == 3) {
      bonus = (bonusPercentage + 0.04) * employeeObject.annualSalary;
    }
    else if (employeeObject.reviewRating == 4) {
      bonus = (bonusPercentage + 0.06) * employeeObject.annualSalary;
    }
    else if (employeeObject.reviewRating == 5) {
      bonus = 0.13 * employeeObject.annualSalary;
  }
  else if (employeeObject.reviewRating == 3) {
    bonus = 0.04 * employeeObject.annualSalary;
  }
  else if (employeeObject.reviewRating == 4) {
    bonus = 0.06 * employeeObject.annualSalary;
  }
  else if (employeeObject.reviewRating == 5) {
    bonus = 0.1 * employeeObject.annualSalary;
  }
  else if (employeeObject.annualSalary > 65000){
    bonus = 0.01 * employeeObject.annualSalary;
  }
  else {
    console.log('Error!')
  }
  console.log(bonus);
  // let newEmployee = {
  //   name = employeeObject.name,
  //   bonusPercentage = '',
  //   totalCompensation = '',
  //   totalBonus = '',
  };

console.log(employees[1].employeeNumber.length);
console.log( employees );
newEmployeeObject(employees[2]);
newEmployeeObject(employees[0]);