To run:

- open two terminals
- in the first terminal, run `cd frontend && npm run dev`
- in the second terminal, run `cd backend && npm run start:dev`

Technologies used:

- Frontend: React, TailwindCSS
- Backend: Node.js, Express, Drizzle-ORM
- Database: Postgresql

-- Frontend --
Q1. what is Drizzle-orm?
ans: drizzle orm vaneko lightweight orm(Object-relational mapping) ho which helps to maintain the database schema and maintain structure of the code. it helps to secure the database from sql injection and other security threats. it make query easy and simple to write and understand.

Q2. what is tailwindcss?
ans: tailwindcss vaneko utility-first CSS framework ho. it is a highly customizable. a very popular and easy to work with. it makes development easy and fast.

Q3. what is react?
ans: react is a javascript library for building user interfaces. react is developed by facebook. it is used to build single page application. it is very popular and easy to work with.

Q4. what is node.js?
ans: node.js is a javascript runtime environment. it is used to build server side application. it is very popular and easy to work with.

Q5. what is express?
ans: express is a web application framework for node.js. it is used to build web application and api. it is very popular and easy to work with.

Q6. what is postgresql?
ans: postgresql is a open source object-relational database system. it is used to store data in the database. it is very popular and easy to work with.

Q7. why drizzle-orm is used?
ans: drizzle-orm is easy to implement to use and it make the code structure clean and easy to understand. it is used to secure the database from sql injection and other security threats. it make query easy and simple to write and understand. if we use sql query directly then it is very hard to maintain the code and it is not secure.

Q8. why tailwindcss is used?
ans: tailwindcss is used to make the development easy and fast.

Q9. what is a hook in react?
ans: hooks are special function that allows you to use state and other React features in functional components.

this project uses multiple hooks to make the development easy and fast. for example useState, useEffect, etc. also used custom hooks to make it more easy and fast.
custom hooks used:
useGreetings: it is used to get the greetings based on time.
useOnClickOutside: it is used to close the dropdown when clicked outside the input field to display the `press enter` text while the input is active.

-- Backend --
what does the below code does? (backend/src/db/schema/todo.ts) < = file ko path

```
    id: text("id")
    .default(sql`gen_random_uuid()`)
    .primaryKey()
```

it is a drizzle-orm schema code which will generate a random uuid and set it as a primary key for the table.

```
    const result = await db.query.todo.findMany({
      orderBy: desc(todo.created_at),
    });
```

it is a drizzle-orm query code which will find all the data from the todo table and order it by created_at in descending order.
here `db` is the database instance and `query` is to query the data from the table and `todo` is the table name. `findMany` is used to find all the data from the table in which it sorts the data descending to created_at(database ko column name) .

```
    const result = await db.insert(todo).values({
      title: value,
      completed: false,
    });
```

it is a drizzle-orm query code which will insert the data into the todo table with the given values.
here `db` is the database instance and `insert(todo)` is to insert the data to the table "todo".

```
    const result = await db.delete(todo).where(eq(todo.id, req.body.id));
```

it is a drizzle-orm query code which will delete the data from the todo table with the given id.
here `db` is the database instance and `query` is to query the data from the table and `todo` is the table name. `findMany` is used to find all the data from the table in which it sorts the data descending to created_at(database ko column name) .

```
    const result = await db
      .update(todo)
      .set(values)
      .where(eq(todo.id, req.body.id));
```

it is a drizzle-orm query code which will update the data from the todo table with the given id and set the given values.here `db` is the database instance and `update(todo)` is to update the data from the table "todo". `where(eq(todo.id, req.body.id))` is used to search the data with the given id and `set(values)` is used to set the given values to the data. `eq` vaneko chi drizzle orm ko function ho jasle chai database ko column lai compare garxa.

Q1. list out api methods used in the backend?
ans:

- GET
- POST
- Patch (update)
- Delete
