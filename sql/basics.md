1). Explain the following in database/basics method.

a). Database is information that is set up  for easy access,managing and updating.Computer databases typically stores aggregation of data records and files contain information such as financial transactions,student data and product information.

b). What is ACID property?
    
    ACID property refers to four key properties of a transactions: Atomicity,Consistency,Isolation and Durability.

    Atomicity  : All changes to data are performed as if they are single operations.
    Consistency: Data is in a consistent state when transaction starts and when it ends.
    Isolation  : An intermediate state of transaction is invisible to the other transactions.As a
                 result, transactions that run concurrently appears to be serialized.
    Durability : After a transaction successfully completes,changes to data persist and and are  not undone,even in the event of system failure.

c). Normalisation :-

              Normalisation is a database designing technique that reduces data redudancy and eliminates undesirable characteristics like  Insertion,Updation and Deletion anomalies.Normalisation divides the larger tables into small tables and links them using relationships.

d). DDL,DML :-

      (i) Data Definition Language : 

            1). DDL changes the structure of the table like creating a table,deleting a table and altering the table.

            2). All the commands in the DDL are auto commited and it permanantly saves all the changes in the table.    

    a) Create  :  It is used to create a table in a database.
       Syntax  :  CREATE TABLE TABLE_NAME(COLUMN_NAME,DATATYPES[,...]);

    b) Drop    :  It is used to both the structure and record stored in the table.
       Syntax:  DROP TABLE table_name;

    c) Alter   :  It is used to alter the structure of the database.It is used to modify the
                characteristics of an existing attribute and or to probably add new attribute.
       Syntax  :  ADD    : ALTER_TABLE table_name ADD column_name COLUMN-definition;
                  MODIFY : ALTER_TABLE column_name MODIFY(column-definitions...);

    d) Truncate:   It is used to delete all the rows from the table and free the space containing the
                table.      

       Syntax  :   TRUNCATE TABLE table_name;                     

      (ii) Data Manipulation Language :- 

             1). DML commands used to modify the database.It is responsible for all forms of changes
             in the database.

             2). The command in the DML is not auto commited and it can not permanently save all the changes in the table. They can be rollback.

    a) Insert  : It is  used to insert data into the row of the table.
       Syntax  : INSERT INTO TABLE_NAME (col1, col2, col3,.... col N)
                 VALUES (value1, value2, value3, .... valueN);  

    b) Update  : It is used to modify or  update the column in the table.
       Syntax  : UPDATE table_name SET [column_name1= value1,...column_nameN = valueN] [WHERE 
                 CONDITION]               

    c) Delete  : It is used to remove or delete one or more row from the table.
       Syntax  : DELETE FROM table_name [WHERE condition]

e) Joins : left,right,inner,outer .

       Inner  :  Returns records that having matching values in both the tables.
       Left   :  Returns all the records from the left table  and matched records from the right table
       Right  :  Returns all the records from the right table and matched records from the left table.
       Outer  :  Returns all the records from both the tables.
