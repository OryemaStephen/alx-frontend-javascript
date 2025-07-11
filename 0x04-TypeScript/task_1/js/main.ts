interface Teacher {
  readonly firstName: string;
  readonly lastName: string;
  fullTimeEmployee: boolean;
  yearsOfExperience?: number;
  location: string;
  [key: string]: any;
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
