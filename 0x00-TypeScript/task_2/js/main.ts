// 5. Advanced types Part 1
interface DirectorInterface {
  workFromHome(): string;
  getCoffeeBreak(): string;
  workDirectorTasks(): string;
}

interface TeacherInterface {
  workFromHome(): string;
  getCoffeeBreak(): string;
  workTeacherTasks(): string;
}

export class Director implements DirectorInterface {
  workFromHome = () => 'Working from home';
  getCoffeeBreak = () => 'Getting a coffee break';
  workDirectorTasks = () => 'Getting to director tasks';
}

export class Teacher implements TeacherInterface {
  workFromHome = () => 'Cannot work from home';
  getCoffeeBreak = () => 'Cannot have a break';
  workTeacherTasks = () => 'Getting to work';
}

export const createEmployee = (salary: number | string): Teacher | Director => Number(salary) < 500 ? new Teacher() : new Director()

console.log(`createEmployee(200) => `, createEmployee(200));

console.log(`createEmployee(1000) => `, createEmployee(1000));

console.log(`createEmployee('$500') => `, createEmployee('$500'));


// 6. Creating functions specific to employees
export function isDirector(employee: TeacherInterface | DirectorInterface): employee is Director {
  return (employee as Director).workDirectorTasks !== undefined;
}

export function executeWork(employee: DirectorInterface | TeacherInterface): string {
  let res = undefined;
  (isDirector(employee)) ? res = employee.workDirectorTasks() : res = employee.workTeacherTasks();
  return res;
}


console.log(`executeWork(createEmployee(200)) => `, executeWork(createEmployee(200)));
//Getting to work

console.log(`executeWork(createEmployee(1000)) => `, executeWork(createEmployee(1000)));
//Getting to director tasks


// 7. String literal types
type Subjects = "Math" | "History";

export function teachClass(todayClass: Subjects): string {
  if (todayClass === "Math") {
    return "Teaching Math";
  } else if (todayClass === "History") {
    return "Teaching History";
  }
}

console.log(`teachClass('Math') => `, teachClass('Math'));
//Teaching Math
console.log(`teachClass('History') => `, teachClass('History'));
//Teaching History
