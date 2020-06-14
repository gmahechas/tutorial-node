/*
let getName = () => {
    return 'TavoGus';
};

let greet = async () => {
  let name = await getName();
  return `Hello ${name}`;
}

greet()
  .then(response => console.log(response))
  .catch(error => console.log(error))
  
*/

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


let getEmployeeById = async (id) => {

  let employeeDb = employees.find(employee => employee.id === id);
  if (!employeeDb) {
    throw new Error(`Doesn't exist employee with id ${id}`);
  } else {
    return employeeDb;
  }

}

let getSalary = async (employee) => {

  let employeeSalary = salaries.find(salary => salary.id === employee.id);
  if (!employeeSalary) {
    throw new Error(`Doesn't exist salary for the employee with id ${employee.id}`);
  } else {
    return { ...employee, salary: employeeSalary.salary };
  }

}

let getInfo = async (id) => {

  let employee = await getEmployeeById(id);
  let salary = await getSalary(employee);

  return salary;

};

getInfo(4)
  .then(response => console.log(response))
  .catch(error => console.log(error));