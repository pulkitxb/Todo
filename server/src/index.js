'use strict'
const { ApolloServer } = require("@apollo/server");
const { startStandaloneServer } = require("@apollo/server/standalone");
const { addMocksToSchema } = require("@graphql-tools/mock");
const { makeExecutableSchema } = require("@graphql-tools/schema");
const typeDefs = require("./schema.ts");


async function startApolloServer() {
    const server = new ApolloServer({
        schema: addMocksToSchema({
            schema: makeExecutableSchema({ typeDefs }),
        }),
    });
    const { url } = await startStandaloneServer(server);
    console.log(`Server is running at port ${url}`);
}

startApolloServer();