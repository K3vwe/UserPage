// A schema is a collection of type definitions (hence "typeDefs")
// that together define the "shape" of queries that are executed against
// your data.

const typeDefs = `#graphql

  # The "User" type defines queryable fields for every user in our database.
  type User {
    id: ID!
    username: String!
    firstname: String!
    lastname: String!
    email: String!
    avatar: String
}

  # The "Query" type is special: it lists all of the available queries that
  # clients can execute, along with the return type for each. In this
  # case, the "users" query returns an array of zero or more users.
  type Query {
    user(id: String!): User
    users: [User!]!
  }

  type Mutation {
    userSignUp(email: String!, username: String!, firstname: String!, lastname: String!, password: String!): String!
    userSignIn(email: String, username: String, password: String!): String!
}
`;

export default typeDefs;