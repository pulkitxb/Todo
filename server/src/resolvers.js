const resolvers = {
    Query: {
        getTodos: (_, __, { dataSources }) => {
            return dataSources.todoAPI.getTodosForHome();
        }
    }
}

module.exports = resolvers;