const { RESTDataSource } = require("@apollo/datasource-rest");

const data = []

class TrackAPI extends RESTDataSource {
    getTodosForHome() {
        return data;
    }

    addTodoForHome(todo) {
        data.push({ id: data.length + 1, title: todo });
        return data.at(-1);
    }
}
module.exports = TrackAPI;