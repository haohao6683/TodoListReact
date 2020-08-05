export function addTodo(text){
    return{
        type: "ADD_TODO",
        text: text
    }
}

export function deleteTodo(id){
    return{
        type: "DELETE_TODO",
        id: id
    }
}

export function changeStatus(id){
    return{
        type: "CHANGE_STATUS",
        id: id
    }
}

export function getTodoList(todoList){
    return{
        type: "GET_ALL_TODO_LIST",
        todoList: todoList
    }
}