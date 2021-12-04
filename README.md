# Building Scalable APIs with GraphQL (Pluralsight Course)

Code from a Pluralsight course on building scalable GraphQL APIs. Topics covered include:

- How to create GraphQL schema and use via any interface, including HTTP-based one
- Different feature of GraphQL language and how to build them in GraphQL server
- Use multiple databases with GraphQL, how to model relationships between different entities and collections, and how to use caching and batching via Dataloader
- How to work with promises, mutations, union types, and use database views with GraphQL

## Prerequisites
- Node
- PostgreSQL
- MongoDB

## PostgreSQL

If you are prompted with a password when running any of the below CLI commands and authentication fails,
add the `-U postgres` option after the command. This will prompt for the password used during installation.
For example, instead of `createdb contests`, use `createdb -U postgres contests`.

For this project, the name of database used is `contests`.

To create a database use `createdb name_of_db`.

To view a database use `psql name_of_db`.

To create the database from the appropriate file use `psql name_of_db < database/test-pg-data.sql`

To view tables once you are inside a database (see command above to view database), run
`contests=# \dt`. You can run SQL queries in the database to view the data in the tables, e.g.
`contests=# select * from users;`.

To view GUI of database, open pgAdmin 4.

## MongoDB

To create the database from the appropriate file, use `node database/loadTestMongoData.js`.

Use `mongo` to start up the mongo shell and run `use contests` to select the created database.

## TODO

Was not able to get GraphQL playground to query the databases. Codebase to check against: https://github.com/jscomplete/name-contests
