const todoList = (state = [], action) => {
    switch(action.type){
        case "ADD_TODO" : 
            return [action.todo, ...state];
        case "DELETE_TODO" : 
            return state.filter((item) => item.id !== action.id);   
        case "CHANGE_STATUS":
            return state.map(item => {
                if(item.id === action.id){
                    return {
                        id: action.id,
                        text: action.todo.text,
                        status: action.todo.status    
                    }
                }
                else{
                    return item;
                }
            });
        case "GET_ALL_TODO_LIST":
            return action.todoList.map((item) => {return {id:item.id,status:item.status,text:item.text}});
        default :
            return state;
    }
}

export default todoList;