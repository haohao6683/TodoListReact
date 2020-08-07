import React from 'react';
import Todo from "../todo/index"
import {getTodoList} from '../../API'

class TodoListComponent extends React.Component{

    componentDidMount(){
        //get data from api
       getTodoList().then((res)=>{
            let todoList = res.data;
            this.props.getTodoList(todoList)
        })
        //send action ,update redux
    }

    render(){
           return (
           <div>
                {this.props.todoList.map((todo, index) => {
                        return <Todo key={index} 
                                    text={todo.text} 
                                    changeStatus={this.props.changeStatus}
                                    deleteTodo={this.props.deleteTodo} 
                                    id={todo.id}
                                    status={todo.status}
                                />
                    })
                }
            </div>
            )
    }
}

export default TodoListComponent