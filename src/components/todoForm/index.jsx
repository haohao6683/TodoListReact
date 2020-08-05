import React from 'react';
import { Button , Popconfirm , Input, Space} from 'antd';
import { EditOutlined } from '@ant-design/icons';

class TodoForm extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            text : ""
        }
    }

    submit = () => {
        this.props.addTodo(this.state.text)
    }

    updateText = (e) => {
        this.setState({text:e.target.value})
    }

    render(){
        return(
            <div>
                <p>
                   <Space>
                    <Input value={this.state.text} onChange={this.updateText } size="large" placeholder="To do item" prefix={<EditOutlined />}/>
                    <Popconfirm title="Are you sure add this todo?" okText="Yes" cancelText="No" onConfirm={this.submit}>
                            <Button type="primary" >add</Button>
                    </Popconfirm>
                   </Space>
                </p>
            </div>
        )
    }
}

export default TodoForm