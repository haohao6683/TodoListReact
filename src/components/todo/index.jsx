import React from 'react';
import './index.css';
import { Button, Popconfirm} from 'antd';
import { Card } from 'antd';
import {updateTodo} from '../../API'


class Todo extends React.Component{
    constructor(props){
        super(props);
        this.state = {
        }
    }

    deleteTodo = () => {
        this.props.deleteTodo(this.props.id)
    }

    changeStatus = () => {
        let todo = {
            id: this.props.id,
            text: this.props.text,
            status: !this.props.status
        }
        updateTodo(todo.id, todo).then((res)=>{
            let todo = res.data;
            this.changeStatus(todo.id, todo)
        })
    }

    render(){
        return(
            <div className={this.props.status ? "done" : ""}> 
                <Card style={{ width: 300 }}>
                    <span onClick={this.changeStatus}>{this.props.text}</span>
                    <Popconfirm title="Are you sure delete this todo?" okText="Yes" cancelText="No" onConfirm={this.deleteTodo}>
                        <Button type="primary" danger>x</Button>
                    </Popconfirm>
                </Card>
            </div>
        )
    }

}
export default Todo