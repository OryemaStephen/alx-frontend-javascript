interface Teacher {
  readonly firstName: string;
  readonly lastName: string;
  fullTimeEmployee: boolean;
  yearsOfExperience?: number;
  location: string;
  [key: string]: any;
}

interface Directors extends Teacher{
  numberOfReports:number
}

interface printTeacherFunction {
    (firstName: string, lastName: string): string;
}

// Examples
const teacher1: Teacher={
   firstName: "Stephen",
  lastName: "Okello",
  fullTimeEmployee: true,
  yearsOfExperience: 27,
  location: "Kampala"
}

const teacher2: Teacher={
   firstName: "Peter",
  lastName: "Oyello",
  fullTimeEmployee: true,
  location: "Kampala",
}

const teacher3: Teacher={
   firstName: "Paul",
  lastName: "Okeda",
  fullTimeEmployee: true,
  yearsOfExperience: 27,
  location: "Kampala",
  contract: false,
}

const director1: Directors = {
  firstName: 'John',
  lastName: 'Doe',
  location: 'London',
  fullTimeEmployee: true,
  numberOfReports: 17,
};

const printTeacher: printTeacherFunction = (firstName:string, lastName:string): string =>{
  const firstLetter = firstName[0];
  return `${firstLetter}. ${lastName}`;
}
