interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

const student1: Student = {
  firstName: "Stephen",
  lastName: "Oryema",
  age: 27,
  location: "Kampala"
};

const student2: Student = {
  firstName: "Peter",
  lastName: "Paul",
  age: 24,
  location: "Hoima"
};

const studentsList: Student[] = [student1, student2];

const table = document.createElement('table');
const tbody = document.createElement('tbody');

table.append(tbody);

for (const student of studentsList) {
  const tr = document.createElement('tr');

  const firstNameCell = document.createElement('td');
  const locationCell = document.createElement('td');

  firstNameCell.textContent = student.firstName;
  locationCell.textContent = student.location;

  tr.append(firstNameCell);
  tr.append(locationCell);

  tbody.append(tr);
}

document.body.append(table);