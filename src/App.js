import React from 'react';
import logo from './logo.svg';
import './App.css';
import TodoForm from "./containers/todoForm"
import TodoListComponent from "./containers/todoList"
import DoneTodoListContainer from './containers/doneTodoList'
import { HashRouter, Link, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <div className="App-header">
          <TodoForm/>
          <HashRouter>
            <div>
             <Link to='/'>go to todoList page</Link><br/>
             <Link to='/done'>go to done todoList page</Link>
            </div>
            <Switch>
              <Route exact path='/' component={TodoListComponent}/>
              <Route exact path='/done' component={DoneTodoListContainer}/>
            </Switch>
          </HashRouter>
      </div>
    </div>
  );
}

export default App;
