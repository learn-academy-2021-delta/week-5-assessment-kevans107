# ASSESSMENT 5: Interview Practice Questions
Answer the following questions.

First, without external resources. Challenge yourself to answer from memory.

Then, research the question to expand on your answer. Even if you feel you have answered the question completely on your own, there is always something more to learn. Write your researched answer in your OWN WORDS.

1. Are (most) Ruby methods accessors or mutators?

  Your answer: Most Ruby methods are accessors, rather than mutators, meaning they access information but do not permanently change the data. In cases where a developer wants to permanently alter the information a bang operator can be added to the accessor after the dot method is used. For example .reverse mutates the information where as .reverse! makes the reverse permanent. 

  Researched answer: Most Ruby methods are accessors, meaning they do not alter the object they are called on. In cases where a developer wants to permanently alter the object, a bang operator can be added to the accessor after the dot method to alter the object. For example .reverse mutates the information where as .reverse! makes the reverse permanent. 



2. What is a block in Ruby?

  Your answer: A block is an anonymous function that is specific to a class. A block starts with 'do' to invoke the block and an 'end' to represent the end of the block of code. 

  Researched answer: A block is an anonymous function that is passed to a method. A block is created with the keyword 'do' to execute the block and an 'end' to tell the program the function has ended. Blocks can pass information by taking and passing parameters into the block. Blocks can have more than one parameter, such as value and index. Parameters are represented with the pipes syntax, such as |value, index| with a 'do' and 'end' if writing multiple lines of code, or if only writing one line of code curly brackets can be used with the pipes syntax. For example nums.each { |value| puts value }



3. What is a gem?

  Your answer: A gem is a code package used in Ruby programming language to add functionality to developer projects. One example is the Rspec gem, which adds additional dependencies and functionality when testing Ruby code.

  Researched answer: A gem is an open source library that contains Ruby code and are packaged to add functionality for developers. Gems allow developers to use code snippets to improve functionality without having to take the time to write all the lines of code to do the same processes. Gems help to improve efficiency and reduce redundant code by using pre-existing gems. One example of a gem is the Rspec gem, which is a testing framework that helps developers test Ruby code.



4. What is a relational database? Are there other kinds of databases?

  Your answer: A relational database is a database with rows and tables of related content. In a relational database each instance in the database is assigned a primary key to identify each row as a unique object within the database. Each object is related to each other within the database. There are other kinds of databases that I would have to do more research on to give a more thorough answer. 

  Researched answer: A relational database is a database used to store information in tables that have rows and columns. The layout is very similar to Excel spreadsheets. A relational database can have several tables that are associated with one another. One common relational database is PostgresSQL There are non-relational databases which are more dependent on the type of information being stored which isn't dependent on relationships between the items stored. Common types of data stored in a noSQL database are document, key-value, and graph. Some popular NoSQL databases are MongoDB, Apach Cassandra, among others. 



5. What are primary keys? Why are they important?

  Your answer: Primary keys are a unique id given to every unique instance in a relational database. A primary key is especially important in databases where there may be more than one entry with the same information. In these cases a primary key will be able to tell that each row is a unique instance. For example, in a database that has inputs for people there may be a father and son who have the same name and live at the same address. A primary key will be able to identify each row of information as a unique instance and potentially avoid confusion that they are duplicates. 

  Researched answer: In a relational database, each row of information has a primary key to identify it as a unique instance. A primary key can be viewed in its designated column in each table with a unique value for each row of information. A primary key is especially important is when a row has data that matches another row within the database. This can be common in large databases, but with a primary key each row can be identified as a unique input. For example, in a database that has inputs for people there may be a father and son who have the same name and live at the same address. A primary key will be able to identify each row of information as a unique instance and potentially avoid confusion that they are duplicates. 



## Looking Ahead: Terms for Next Week
Research and define the following terms to the best of your ability.

1. RESTful routes: RESTful stands for REpresentational State Transfer is a standardized way to structure URLs and HTTP. Following RESTful routes standards helps to avoid confusion for developers and users in understanding the structure of how information is routed and communicated between the URL and HTTP.

2. JSON: JSON stands for JavaScript Object Notation and is a subset of the Javascript programming language. While similar to Javascript it is independent from it and is often used to store, transmit and recreate certain data structures.

3. ERB: ERB is used as a way to organize Ruby code in a document format to provide additional organization of Ruby code. 

4. Params: In Rails, params provide security and help to control the information within a database. Params help to avoid hacking and control the in-flow of information that is added to the database.

5. API: API stands for Application Programming Interface is the flow of information between computers. APIs take in user requests and returns the appropriate response between computers or software programs.
