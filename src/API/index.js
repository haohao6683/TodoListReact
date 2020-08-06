import axios from 'axios'


const URL = 'http://localhost:8080/todos'

export const getTodoList = ()=>{
    return axios.get(URL)
}

export const updateTodo = (id, todo)=>{
    return axios.put(URL+'/'+id, todo)
} 

export const addTodo = (todo)=>{
    return axios.post(URL, todo)
}

export const deleteTodo = (id)=>{
    return axios.delete(URL+'/'+id)
}
