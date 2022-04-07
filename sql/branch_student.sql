
--create table branch_student
create table branch_student(
id int,
branchId int,
studentId int,
primary key(id)
)
-- insert values into branch_student
insert into branch_student(
id,
branchId,
studentId
)
values(
1,
1,
1)
insert into branch_student(
id,
branchId,
studentId
)
values(
2,
2,
2)
insert into branch_student(
id,
branchId,
studentId
)
values(
3,
2,
1)
insert into branch_student(
id,
branchId,
studentId
)
values(
4,
1,
3)
-- create table branch
create table branch(
id int,
name varchar(30)
)
-- insert values into branch
insert into branch(
id,
name
)
values(
1,
'CSE'
)
insert into branch(
id,
name
)
values(
2,
'IT'
)
-- create table student
create table student(
id int,
name varchar(30)
)
-- insert values into student
insert into student(
id,
name
)
values(
1,
'Jay'
)
insert into student(
id,
name
)
values(
2,
'Sanjay'
)
insert into student(
id,
name
)
values(
3,
'Rajesh'
)

-- select and JOIN
select branch_student.id,branch_student.branchId,branch.name as branch_name,branch_student.studentId,student.name as student_name
from branch_student
inner join branch on branch_student.branchId=branch.id
inner join student on branch_student.studentId=student.id
order by branch_student.id ASC