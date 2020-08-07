import React from 'react';
import { Button , Popconfirm , Input, Space} from 'antd';
import { EditOutlined } from '@ant-design/icons';
import {addTodo} from '../../API';

class TodoForm extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            text : ""
        }
    }

    submit = () => {
        let todo = {
            id: "",
            text: this.state.text,
            status: false
        }
        addTodo(todo).then((res)=>{
            let todo = res.data;
            this.props.addTodo(todo)
        })
    }

    updateText = (e) => {
        this.setState({text:e.target.value})
    }

    render(){
        return(
            <Space>
                <Input onChange={this.updateText} size="large" placeholder="To do item" prefix={<EditOutlined />}/>
                <Popconfirm title="Are you sure add this todo?" okText="Yes" cancelText="No" onConfirm={this.submit}>
                        <Button type="primary" >add</Button>
                </Popconfirm>
            </Space>
        )
    }
}

export default TodoForm