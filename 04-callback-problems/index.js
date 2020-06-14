let employees = [
  {
    id: 1,
    name: 'Jesus'
  },
  {
    id: 2,
    name: 'Alexandra'
  },
  {
    id: 3,
    name: 'Isabella'
  }
];

let salaries = [
  {
    id: 1,
    salary: 1000
  },
  {
    id: 2,
    salary: 2000
  }
];

let getEmployeeById = (id, callback) => {

  let employeeDb = employees.find(employee => employee.id === id);

  if (!employeeDb) {
    callback(`Doesn't exist employee with id ${id}`);
  } else {
    callback(null, employeeDb);
  }
}

let getSalary = (employee, callback) => {
  let employeeSalary = salaries.find(salary => salary.id === employee.id);
  if (!employeeSalary) {
    callback(`Doesn't exist salary for the employee with id ${employee.id}`);
  } else {
    callback(null, {...employee, salary: employeeSalary.salary });
  }
}

/* ************************* */

getEmployeeById(3, (error, employee) => {
  if (error) {
    console.log(error);
  } else {
    getSalary(employee, (error, salary) => {
      if (error) {
        console.log(error);
      } else {
        console.log(salary);
      }
    });
  }
});





