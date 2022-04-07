Table branchstudents as B  {
  id int [pk, increment]   // auto increment
  branchId int
  studentId int
}
Table branch {
  id int [pk]
  branch varchar
}
Table student {
  id int [pk]
  name varchar
}
Ref: B.branchId > branch.id
Ref: B.studentId > student.id
