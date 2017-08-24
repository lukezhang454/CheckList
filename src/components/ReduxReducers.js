import {combineReducers} from 'redux';

export const todo = (state, action) => {
    switch(action.type){
        case 'ADD_TODO':
            return {
                id: action.id ,
                text: action.text,
                completed: false
            };
        case 'TOGGLE_TODO':
            if(state.id !== action.id){
                return state;
            }
            return {
                ...state,
                completed: !state.completed
            };
        default:
            return state;
    }
};

export const todoList = (state = [], action) => {
    switch(action.type){
        case 'ADD_TODO':
            return [
                ...state,
                todo(undefined, action)
            ];
        case 'REMOVE_TODO':
            for(let i = 0; i < state.length; i++){
                if(state[i].id === action.id){
                    state.splice(i, 1);
                }
            }
            return state;
        case 'TOGGLE_TODO':
            return state.map(t => todo(t, action));
        default:
            return state;
    }
};

export const visibilityFilter = (state = 'SHOW_ALL', action) => {
    switch(action.type){
        case 'SET_VISIBILITY_FILTER':
            return action.filter;
        default:
            return state;
    }
};

export const todoApp = combineReducers({
    todoList: todoList,
    visibilityFilter: visibilityFilter
});