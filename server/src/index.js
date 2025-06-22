'use strict'
const { ApolloServer } = require("@apollo/server");
const { startStandaloneServer } = require("@apollo/server/standalone");
const { addMocksToSchema } = require("@graphql-tools/mock");
const { makeExecutableSchema } = require("@graphql-tools/schema");
const typeDefs = require("./schema.ts");
const resolvers = require("./resolvers");
const TodoAPI = require("./datasources/todo-api");


async function startApolloServer() {
    const server = new ApolloServer({ typeDefs, resolvers });
    const { url } = await startStandaloneServer(server, {
        context: async () => {
            const { cache } = server;
            return {
                dataSources: {
                    todoAPI: new TodoAPI({ cache })
                }
            }
        }
    });
    console.log(`Server is running at port ${url}`);
}

startApolloServer();