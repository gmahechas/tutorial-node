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

let getEmployeeById = (id) => {

  return new Promise((resolve, reject) => {

    let employeeDb = employees.find(employee => employee.id === id);

    if (!employeeDb) {
      reject(`Doesn't exist employee with id ${id}`);
    } else {
      resolve(employeeDb);
    }
  });

}

let getSalary = (employee) => {

  return new Promise((resolve, reject) => {

    let employeeSalary = salaries.find(salary => salary.id === employee.id);
    if (!employeeSalary) {
      reject(`Doesn't exist salary for the employee with id ${employee.id}`);
    } else {
      resolve({ ...employee, salary: employeeSalary.salary });
    }
  });

}

/* ************************* */


getEmployeeById(3).then((employee) => {
  return getSalary(employee);
})
.then( response => console.log(response))
.catch(error => console.log(error));