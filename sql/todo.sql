-- craeating table
create table person (
id int ,
name varchar (10),
primary key(id)
)

create table category (
id int ,
name varchar (20),
primary key(id)
)

create table status (
id int ,
name varchar (20),
primary key(id)
)

create table todo (
  id int,
  person_id int,
  category_id int,
  Status_id int,
  task varchar(100),
  due_date date,
  primary key (id)
  )

  --setting foreign key
  ALTER TABLE todo
ADD CONSTRAINT FK_person
FOREIGN KEY (person_id) REFERENCES person(id);

ALTER TABLE todo
ADD CONSTRAINT FK_category
FOREIGN KEY (category_id) REFERENCES category(id);

ALTER TABLE todo
ADD CONSTRAINT FK_status
FOREIGN KEY (status_id) REFERENCES status(id);

-- inserting values
insert into category(id,name)
values(1,'operations')

insert into category(id,name)
values(2,'IT')

insert into person(id,name)
values(1,'Vasanth')

insert into person(id,name)
values(2,'Jay')

insert into person(id,name)
values(3,'Satish')

insert into status(id,name)
values(1,'completed')

insert into status(id,name)
values(2,'in-progress')

insert into todo (id,person_id,category_id,Status_id,task,due_date)
values(1,1,1,2,'Need to achieve 800 orders','05/29/2021')

insert into todo (id,person_id,category_id,Status_id,task,due_date)
values(2,2,2,2,'Train 5 interns','05/29/2021')

insert into todo (id,person_id,category_id,Status_id,task,due_date)
values(3,3,2,2,'Get trained in devops','05/29/2021')

insert into todo (id,person_id,category_id,Status_id,task,due_date)
values(4,3,2,2,'Get trained in hasura','05/29/2021')

insert into todo (id,person_id,category_id,Status_id,task,due_date)
values(5,3,2,2,'Get trained in hardware','05/29/2021')

--select table and get data
select todo.id,person.name as name,todo.task,category.name as Category,status.name as Status,due_date
from todo
inner join person on todo.person_id=person.id
inner join category on todo.category_id=category.id
inner join status on todo.status_id=status.id

--name count
select person.name,count(*)
from person
left join todo on person.id = todo.person_id
group by person.name

