Table person {
  id int [pk]
  name varchar
}
Table category {
  id int [pk]
  name varchar
}
Table Status {
  id int [pk]
  name varchar
}
Table todo {
  id int [pk]
  person_id int
  category_id int
  Status_id int
  task varchar
  deadline int
}
Ref: person.id > todo.person_id 
Ref: category.id > todo.category_id 
Ref: Status.id > todo.Status_id