import {addTodo} from "../action"
import {connect} from "react-redux"
import TodoForm from "../components/todoForm/index"

const mapDispatchToProps = dispatch => {
    return {
        addTodo: (todo) => dispatch(addTodo(todo)) 
    }
}

const todoFormContainer = connect(null, mapDispatchToProps) (TodoForm)

export default todoFormContainer;