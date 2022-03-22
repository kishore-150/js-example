const data = {
  branchStudent: [
    { id: 1, branchId: 1, studentId: 1 },
    { id: 2, branchId: 2, studentId: 2 },
    { id: 3, branchId: 2, studentId: 1 },
    { id: 4, branchId: 1, studentId: 3 },
  ],
  branch: [
    { id: 1, name: "CSE" },
    { id: 2, name: "IT" },
  ],
  student: [
    { id: 1, name: "Jay" },
    { id: 2, name: "Sanjay" },
    { id: 3, name: "Rajesh" },
  ],
};

const output = [];

const { branchStudent, branch, student } = data;

branchStudent.map((items) => {
  var branchName, studentName;
  branch.map((item) => {
    if (item.id === items.branchId) {
      branchName = item.name;
    }
  });
  student.map((item) => {
    if (item.id === items.studentId) {
      studentName = item.name;
    }
  });
  output.push({
    id: items.id,
    branchId: items.branchId,
    branchName: branchName,
    studentId: items.studentId,
    studentName: studentName,
  });
});

console.log(output);
