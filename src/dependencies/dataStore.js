function dataStore(localStorage) {

    const todoKey = 'todoList';

    function getTodoList() {
        let storedList = localStorage.get(todoKey);

        return !Boolean(storedList) ? [] : storedList;
    }

    function buildResolvedPromiseUsing(value) {
        return new Promise(function (resolve) {
            resolve(value);
        });
    }

    function readTodoList() {
        return Promise(function (resolve) {
            const todoList = getTodoList();

            resolve(todoList);
        });
    }

    function createTodoItem(todoItem) {
        let todoList = getTodoList();

        todoList.push(todoItem);

        localStorage.set(todoKey, todoList);

        return buildResolvedPromiseUsing(todoList.length);
    }

    function updateTodoItem(index, todoItem) {
        let todoList = getTodoList();

        todoList[index] = todoItem;

        localStorage.set(todoKey, todoList);

        return buildResolvedPromiseUsing(index);
    }

    function deleteTodoItem(index) {
        let todoList = getTodoList();

        todoList.splice(index, 1);

        localStorage.set(todoKey, todoList);

        return buildResolvedPromiseUsing(true);
    }

    function deleteAllTodoItems() {
        localStorage.set(todoKey, []);

        return buildResolvedPromiseUsing(true);
    }

    return {
        createTodoItem: createTodoItem,
        deleteTodoItem: deleteTodoItem,
        deleteAllTodoItems: deleteAllTodoItems,
        readTodoList: readTodoList,
        updateTodoItem: updateTodoItem
    };
}

export default {
    moduleValue: dataStore,
    moduleName: 'dataStore'
};