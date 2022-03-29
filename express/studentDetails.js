const express = require('express');
const a = express();
const bodyParser = require('body-parser');

a.use(bodyParser.json());
a.post('/student',(req,res) => {
      let b=req.body;
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
          res.status(200).json(branchStudentMap);
});
a.listen(3000);