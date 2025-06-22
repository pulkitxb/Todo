const gql = require("graphql-tag");

const typeDefs = gql`
    type Query {
        getTodos: [Todo!]
    }

    type Todo {
        id: ID!
        title: String!
    }
`

module.exports = typeDefs;