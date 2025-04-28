enum AccessTypes {
  ADMIN,
  MODERATOR,
  USER,
}

type Student = {
  name: string;
  age: number;
  gender?: string;
  interests?: string[];
  access: [number, string];
  sampleEnum: AccessTypes;
};

const student: Student = {
  name: "Juan",
  age: 19,
  gender: "M",
  interests: ["Driving"],
  access: [1, "test"],
  sampleEnum: AccessTypes.ADMIN,
};

if (student.sampleEnum == AccessTypes.ADMIN) {
  console.log("Student is admin.");
}

console.table(student.interests);
