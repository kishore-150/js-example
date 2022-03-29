const express = require('express');
const a = express();
const bodyParser = require('body-parser');

a.use(bodyParser.json());
a.get('/student',(req,res) => {
  var b = {

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

      let branchStudentMap=[];
      b.branchStudent.map((branchStudent)=>{
        let branch =  b.branch.find((branch)=> {return branchStudent.branchId==branch.id });
        let student =b.student.find((student)=> {return student.id == branchStudent.studentId });
        branchStudentMap.push({
            id:branchStudent.id,
            branchId:branch.id,
            branchName:branch.name,
            studentId:student.id,
            studentName:student.name
        });
      });
          res.json(branchStudentMap);
});
a.listen(3000);