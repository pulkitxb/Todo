const resolvers = {
    Query: {
        getTodos: (_, __, { dataSources }) => {
            return dataSources.todoAPI.getTodosForHome();
        }
    },

    Mutation: {
        addTodo: (_, { todo }, { dataSources }) => {
            try {
                const response = dataSources.todoAPI.addTodoForHome(todo);
                return {
                    code: 200,
                    success: true,
                    message: `Successfully added todo ${todo}, response`,
                    todo: response
                }
            } catch (error) {
                return {
                    code: error.extensions.response.status,
                    success: false,
                    message: err.extensions.response.body,
                    track: null
                }
            }

        }
    }
}

module.exports = resolvers;