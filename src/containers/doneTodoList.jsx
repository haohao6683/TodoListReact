import DoneTodoList from "../components/doneTodo"
import { connect } from 'react-redux'
import {deleteTodo,changeStatus} from "../action"

const mapStateToProps = state => {
    return {
        todoList: state.todoList.filter((item) => (item.status))
    }
}

const mapDispatchToProps = dispatch => ({
    deleteTodo: (id) => dispatch(deleteTodo(id)),
    changeStatus: (id) => dispatch(changeStatus(id))
})

const DoneTodoListContainer = connect(mapStateToProps,mapDispatchToProps)(DoneTodoList)

export default DoneTodoListContainer;