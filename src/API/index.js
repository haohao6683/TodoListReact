import axios from 'axios'


const URL = 'https://5e9ec500fb467500166c4658.mockapi.io/todos'

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
