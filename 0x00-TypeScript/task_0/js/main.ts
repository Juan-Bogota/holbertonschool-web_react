
// 0. Creating an interface for a student
interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

const firstStudent: Student = {
  firstName: 'Juan',
  lastName: 'López',
  age: 31,
  location: 'Bogotá',
}

const secondStudent: Student = {
  firstName: 'Marcela',
  lastName: 'Sánchez',
  age: 26,
  location: 'Cali',
}
const d = document;
const studentsList: Array<Student> = [firstStudent, secondStudent];

const body: HTMLBodyElement = d.getElementsByTagName("body")[0];
const table: HTMLTableElement = d.createElement("table");
const thead: HTMLTableSectionElement = d.createElement("thead");
const tbody: HTMLTableSectionElement = d.createElement("tbody");
const rowHead: HTMLTableRowElement = thead.insertRow(0);
const cellHead1: HTMLTableCellElement = rowHead.insertCell(0);
const cellHead2: HTMLTableCellElement = rowHead.insertCell(1);

cellHead1.innerHTML = "firstName";
cellHead2.innerHTML = "location";
table.append(thead);

studentsList.forEach((student) => {
  const row: HTMLTableRowElement = tbody.insertRow(0);
  const cell1: HTMLTableCellElement = row.insertCell(0);
  const cell2: HTMLTableCellElement = row.insertCell(1);

  cell1.innerHTML = student.firstName;
  cell2.innerHTML = student.location;
});

table.append(tbody);
body.append(table);
