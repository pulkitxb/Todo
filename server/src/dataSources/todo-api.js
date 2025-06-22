const { RESTDataSource } = require("@apollo/datasource-rest");

const data = [
    {
        id: 1,
        title: "Task 1"
    },
    {
        id: 2,
        title: "Task 2"
    },
    {
        id: 3,
        title: "Task 3"
    }
]

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