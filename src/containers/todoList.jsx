import TodoListComponent from "../components/todoList/index"
import { connect } from 'react-redux'
import {deleteTodo,changeStatus,getTodoList} from "../action"

const mapStateToProps = state => {
    return {
        todoList: state.todoList
    }
}

const mapDispatchToProps = dispatch => ({
    deleteTodo: (id) => dispatch(deleteTodo(id)),
    changeStatus: (id) => dispatch(changeStatus(id)),
    getTodoList: (todoList) => dispatch(getTodoList(todoList))    
})

const todoListContainer = connect(mapStateToProps,mapDispatchToProps)(TodoListComponent)

export default todoListContainer;