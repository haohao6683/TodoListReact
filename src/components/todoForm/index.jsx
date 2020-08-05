import React from 'react';
import './index.css';

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
                    <input value={this.state.text} onChange={this.updateText}/> &nbsp; 
                    <button onClick={this.submit}>add</button>
                </p>
            </div>
        )
    }
}

export default TodoForm