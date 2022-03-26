var Input = {

    branchStudent: [
        { id: 1, branchId: 1, studentId: 1 },
        { id: 2, branchId: 2, studentId: 2 },
        { id: 3, branchId: 2, studentId: 1 },
        { id: 4, branchId: 1, studentId: 3 }
    ],
    branch: [
        { id: 1, name: "CSE" },
        { id: 2, name: "IT" }
    ],
    student: [
        { id: 1, name: "Jay" },
        { id: 2, name: "Sanjay" },
        { id: 3, name: "Rajesh" }
    ]
}
var branchStudentMap=[];
Input.branchStudent.map((branchStudent)=>{
  var branch =  Input.branch.find((branch)=> {return branchStudent.branchId==branch.id });
  var student =Input.student.find((student)=> {return student.id == branchStudent.studentId });
  branchStudentMap.push({
      id:branchStudent.id,
      branchId:branch.id,
      branchName:branch.name,
      studentId:student.id,
      studentName:student.name
  });
})
console.log(branchStudentMap);