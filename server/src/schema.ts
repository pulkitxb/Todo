const gql = require("graphql-tag");

const typeDefs = gql`
    type Query {
        getTodos: [Todo!]
    }
    
    type Mutation {
        addTodo(todo: String): AddTodoResponse!
    }

    type AddTodoResponse {
        code: Int!
        success: Boolean!
        message: String!
        todo: Todo
    }

    type Todo {
        id: ID!
        title: String!
    }
`

module.exports = typeDefs;